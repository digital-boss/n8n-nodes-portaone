import { IExecuteFunctions, IHookFunctions } from 'n8n-core';

import {
	IDataObject,
	JsonObject,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

import { OptionsWithUri } from 'request';

const axios = require('axios');

export interface IProduct {
	fields: {
		item?: object[];
	};
}

function prepareBody(body: IDataObject): IDataObject {
	// tslint:disable-next-line:forin
	for (const key in body) {
		if (body[key] === '') {
			delete body[key];
		}
		if (body[key] === true) {
			body[key] = 1;
		}
		if (body[key] === false) {
			body[key] = 0;
		}
		if (
			typeof body[key] === 'string' &&
			// @ts-ignore
			new Date(body[key]).toString() !== 'Invalid Date'
		) {
			body[key] = (body[key] as string)
				.replace('T', ' ')
				.replace('Z', '')
				.replace('.000', '');
		}
		if (typeof body[key] === 'object' && !!(body[key] as IDataObject).fields) {
			body[key] = (body[key] as IDataObject).fields;
		}
		if (typeof body[key] === 'object') {
			body[key] = prepareBody(body[key] as IDataObject);
		}
		if (Array.isArray(body[key])) {
			// @ts-ignore
			body[key] = body[key].map((el) => {
				return prepareBody(el);
			});
		}
		if (key === 'search_by') {
			body[key] = (body[key] as string).split(',');
		}
	}
	return body;
}

/**
 * Login and return session_id
 *
 * @param {IHookFunctions} this
 * @returns {string}
 */
export async function login(this: IHookFunctions | IExecuteFunctions) {
	const method = 'POST';
	const authMethod = this.getNodeParameter('authentication', 0) as string;

	let credentials;
	if (authMethod === 'tokenAuth') {
		credentials = await this.getCredentials('portaOneTokenApi');
	} else {
		credentials = await this.getCredentials('portaOneBasicAuth');
	}

	if (credentials === undefined) {
		throw new NodeOperationError(
			this.getNode(),
			'No credentials got returned!',
		);
	}

	let params = {};

	if (authMethod === 'tokenAuth') {
		params = {
			login: credentials.userName,
			token: credentials.token,
		};
	} else {
		params = {
			login: credentials.userName,
			password: credentials.password,
		};
	}

	const options: OptionsWithUri = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method,
		form: {
			params: JSON.stringify(params),
		},
		uri: `${credentials.baseUrl}/rest/Session/login/`,
	};

	try {
		const responseData = await this.helpers.request!(options);
		return JSON.parse(responseData).session_id;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

/**
 * Make an API request to PortaOne
 *
 * @param {IHookFunctions} this
 * @param {string} endpoint
 * @param {object} body
 * @param {boolean} resetSessionId
 * @returns {Promise<any>}
 */
export async function portaOneApiRequest(
	this: IHookFunctions | IExecuteFunctions,
	endpoint: string,
	body: IDataObject = {},
	resetSessionId = false,
	// tslint:disable-next-line:no-any
): Promise<any> {
	const method = 'POST';
	const staticData = this.getWorkflowStaticData('node') as IDataObject;
	const authMethod = this.getNodeParameter('authentication', 0) as string;

	let credentials;
	if (authMethod === 'tokenAuth') {
		credentials = await this.getCredentials('portaOneTokenApi');
	} else {
		credentials = await this.getCredentials('portaOneBasicAuth');
	}

	if (credentials === undefined) {
		if (staticData.session_id) {
			delete staticData.session_id;
		}
		throw new NodeOperationError(
			this.getNode(),
			'No credentials got returned!',
		);
	}

	if (!staticData.session_id || resetSessionId) {
		staticData.session_id = await login.call(this);
	}

	const authInfo = { session_id: staticData.session_id };
	body = prepareBody(body);
	const options: OptionsWithUri = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method,
		form: {
			auth_info: JSON.stringify(authInfo),
			params: JSON.stringify(body),
		},
		uri: `${credentials.baseUrl}${endpoint}`,
	};

	try {
		const responseData = await this.helpers.request!(options);
		try {
			return JSON.parse(responseData);
		} catch (err) {
			return responseData;
		}
	} catch (error) {
		// Assumes one time, that the request failed because of an exired session ID
		if (!resetSessionId) {
			portaOneApiRequest.call(this, endpoint, body, true);
		}
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
