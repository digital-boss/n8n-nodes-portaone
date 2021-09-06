"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eloquaApiRequest = void 0;
const n8n_workflow_1 = require("n8n-workflow");
async function getBaseUrl(authMethod, base64Creds) {
    const options = {
        headers: {},
        method: 'GET',
        uri: 'https://login.eloqua.com/id',
        json: true
    };
    if (authMethod === 'httpBasicAuth') {
        options.headers['Authorization'] = `Basic ${base64Creds}`;
        try {
            const responseData = await this.helpers.request.call(this, options);
            return responseData.urls.base;
        }
        catch (error) {
            throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
        }
    }
    else {
        try {
            const responseData = await this.helpers.requestOAuth2.call(this, 'eloquaOAuth2Api', options);
            return responseData.urls.base;
        }
        catch (error) {
            throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
        }
    }
}
async function eloquaApiRequest(method, endpoint, body, staticData = {}, query = {}) {
    const authenticationMethod = this.getNodeParameter('authentication', 0);
    if (authenticationMethod === 'httpBasicAuth') {
        const credentials = await this.getCredentials('eloquaApi');
        if (credentials === undefined) {
            throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No credentials got returned!');
        }
        const base64Creds = Buffer.from(`${credentials.companyName}\\${credentials.userName}:${credentials.password}`).toString('base64');
        if (!staticData.baseUrl) {
            staticData.baseUrl = await getBaseUrl.call(this, authenticationMethod, base64Creds);
        }
        const options = {
            headers: { Authorization: `Basic ${base64Creds}` },
            method,
            qs: query,
            uri: `${staticData.baseUrl}${endpoint}`,
            json: true
        };
        if (Object.keys(body).length !== 0) {
            options.body = body;
        }
        try {
            const responseData = await this.helpers.request(options);
            if (responseData && responseData.success === false) {
                throw new n8n_workflow_1.NodeApiError(this.getNode(), responseData);
            }
            return responseData;
        }
        catch (error) {
            const newBaseUrl = await getBaseUrl.call(this, authenticationMethod, base64Creds);
            if (newBaseUrl && newBaseUrl !== staticData.baseUrl) {
                staticData.baseUrl = newBaseUrl;
                return await eloquaApiRequest.call(this, method, endpoint, body, staticData, query);
            }
            throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
        }
    }
    else {
        if (!staticData.baseUrl) {
            staticData.baseUrl = await getBaseUrl.call(this, authenticationMethod);
        }
        const options = {
            method,
            qs: query,
            uri: `${staticData.baseUrl}${endpoint}`,
            json: true
        };
        if (Object.keys(body).length !== 0) {
            options.body = body;
        }
        try {
            const responseData = await this.helpers.requestOAuth2.call(this, 'eloquaOAuth2Api', options);
            if (responseData && responseData.success === false) {
                throw new n8n_workflow_1.NodeApiError(this.getNode(), responseData);
            }
            return responseData;
        }
        catch (error) {
            const newBaseUrl = await getBaseUrl.call(this, authenticationMethod);
            if (newBaseUrl && newBaseUrl !== staticData.baseUrl) {
                staticData.baseUrl = newBaseUrl;
                return await eloquaApiRequest.call(this, method, endpoint, body, staticData, query);
            }
            throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
        }
    }
}
exports.eloquaApiRequest = eloquaApiRequest;
//# sourceMappingURL=GenericFunctions.js.map