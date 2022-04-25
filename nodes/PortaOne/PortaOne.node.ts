import { IExecuteFunctions } from 'n8n-core';

import { IDataObject, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

import { version } from '../version';

import { accountDescription } from './descriptions/AccountDescription';
import { customerDescription } from './descriptions/CustomerDescription';
import { invoiceDescription } from './descriptions/InvoiceDescription';
import { customerExtensionDescription } from './descriptions/CustomerExtensionDescription';
import { customerXdrsDescription } from './descriptions/CustomerXdrsDescription';
import { didNumbersDescription } from './descriptions/DidNumbersDescription';
import { billingSessionDescription } from './descriptions/BillingSessionDescription';

import { portaOneApiRequest } from './GenericFunctions';

export class PortaOne implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PortaOne',
		name: 'portaone',
		icon: 'file:portaone.png',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: `Consume PortaOne REST API (v.${version})`,
		defaults: {
			name: 'PortaOne',
			color: '#FC636B',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'portaOneTokenApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['tokenAuth'],
					},
				},
			},
			{
				name: 'portaOneBasicApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['basicAuth'],
					},
				},
			},
		],
		properties: [
			// ----------------------------------
			//         Authentication
			// ----------------------------------
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'Token Authentication',
						value: 'tokenAuth',
					},
					{
						name: 'Basic Authentication',
						value: 'basicAuth',
					},
				],
				default: 'tokenAuth',
				description: 'The authentication method to use.',
			},
			// ----------------------------------
			//         resources
			// ----------------------------------
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Invoice',
						value: 'invoice',
					},
					{
						name: 'Customer Extension',
						value: 'customerExtension',
					},
					{
						name: 'Customer XDRS',
						value: 'customerXdrs',
					},
					{
						name: 'DID Numbers',
						value: 'didNumbers',
					},
					{
						name: 'Billing Sessions',
						value: 'billingSessions',
					},
				],
				default: 'customer',
				description: 'The resource to operate on.',
			},
			...customerDescription,
			...accountDescription,
			...invoiceDescription,
			...customerExtensionDescription,
			...customerXdrsDescription,
			...didNumbersDescription,
			...billingSessionDescription,
			{
				displayName: 'Simplify Response',
				name: 'simplify',
				type: 'boolean',
				displayOptions: {
					show: {
						operation: ['get', 'getAll', 'getAllActiveSessions'],
					},
				},
				default: false,
				description: 'Simplify the response object.',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		let endpoint = '';
		let dataKey = '';
		let simplify = false;

		// tslint:disable-next-line:no-any
		let body: any = {};
		const qs: IDataObject = {};
		let responseData;

		for (let i = 0; i < items.length; i++) {
			if (resource === 'customer') {
				// ----------------------------------
				//         customer:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/rest/Customer/add_customer';
					body.customer_info = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.customer_info.name = this.getNodeParameter('name', i) as string;
					body.customer_info.iso_4217 = this.getNodeParameter('iso_4217', i) as string;
				}
				// ----------------------------------
				//         customer:update
				// ----------------------------------
				else if (operation === 'update') {
					endpoint = '/rest/Customer/update_customer';
					body.customer_info = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.customer_info.i_customer = this.getNodeParameter('i_customer', i) as number;
				}
				// ----------------------------------
				//         customer:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = `/rest/Customer/get_customer_info`;
					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_customer = this.getNodeParameter('i_customer', i) as number;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'customer_info';
				}
				// ----------------------------------
				//         customer:getAll
				// ----------------------------------
				else if (operation === 'getAll') {
					endpoint = '/rest/Customer/get_customer_list';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'customer_list';
				}
			} else if (resource === 'account') {
				// ----------------------------------
				//         account:delete
				// ----------------------------------
				if (operation === 'delete') {
					endpoint = `/rest/Account/terminate_account`;
					body.i_account = this.getNodeParameter('i_account', i) as number;
					body.force = this.getNodeParameter('force', i) as boolean;
					body.release_assigned_did = this.getNodeParameter('release_assigned_did', i) as boolean;
				}
				// ----------------------------------
				//         account:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = '/rest/Account/get_account_info';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_account = this.getNodeParameter('i_account', i) as number;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'account_info';
				}
				// ----------------------------------
				//         account:getALL
				// ----------------------------------
				else if (operation === 'getAll') {
					endpoint = '/rest/Account/get_account_list';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'account_list';
				}
				// ----------------------------------
				//         account:addAlias
				// ----------------------------------
				else if (operation === 'addAlias') {
					endpoint = '/rest/Account/add_alias';
					body.alias_info = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.alias_info.i_master_account = this.getNodeParameter('i_master_account', i) as number;
					body.alias_info.id = this.getNodeParameter('id', i) as number;
				}
			} else if (resource === 'invoice') {
				// ----------------------------------
				//         invoice:get
				// ----------------------------------
				if (operation === 'get') {
					endpoint = '/rest/Invoice/get_invoice_info';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_invoice = this.getNodeParameter('i_invoice', i) as number;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'invoice_info';
				}
				// ----------------------------------
				//         invoice:getALL
				// ----------------------------------
				else if (operation === 'getAll') {
					endpoint = '/rest/Invoice/get_invoice_list';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'invoice_list';
					// ----------------------------------
					//         invoice:applyAdjustment
					// ----------------------------------
				} else if (operation === 'applyAdjustment') {
					endpoint = '/rest/Invoice/apply_invoice_adjustment';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_invoice = this.getNodeParameter('i_invoice', i) as number;
					body.amount = this.getNodeParameter('amount', i) as number;
					body.refund_to_cc = this.getNodeParameter('refund_to_cc', i) as boolean;
				}
			} else if (resource === 'customerExtension') {
				// ----------------------------------
				//         customerExtension:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/rest/Customer/add_customer_extension';

					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_customer = this.getNodeParameter('i_customer', i) as number;
					body.id = this.getNodeParameter('id', i) as string;
					body.i_account = this.getNodeParameter('i_account', i) as number;
					body.i_product = this.getNodeParameter('i_product', i) as number;
				}
				// ----------------------------------
				//         customerExtension:update
				// ----------------------------------
				else if (operation === 'update') {
					endpoint = '/rest/Customer/update_customer_extension';

					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_c_ext = this.getNodeParameter('i_c_ext', i) as number;
					body.i_customer = this.getNodeParameter('i_customer', i) as number;
				}
				// ----------------------------------
				//         customerExtension:getALL
				// ----------------------------------
				else if (operation === 'getAll') {
					endpoint = '/rest/Customer/get_extensions_list';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_customer = this.getNodeParameter('i_customer', i) as string;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'extensions_list';
				}
			} else if (resource === 'customerXdrs') {
				// ----------------------------------
				//         customerXdrs:getALL
				// ----------------------------------
				if (operation === 'getAll') {
					endpoint = '/rest/Customer/get_customer_xdrs';
					body.i_customer = this.getNodeParameter('i_customer', i) as string;
					body.to_date = this.getNodeParameter('to_date', i) as string;
					body.from_date = this.getNodeParameter('from_date', i) as string;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'xdr_list';
				}
			} else if (resource === 'didNumbers') {
				// ----------------------------------
				//         didNumbers:getALL
				// ----------------------------------
				if (operation === 'getAll') {
					endpoint = '/rest/DID/get_number_list';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'number_list';
				}
				// ----------------------------------
				//         didNumbers:assignToCustomer
				// ----------------------------------
				else if (operation === 'assignToCustomer') {
					endpoint = '/rest/DID/assign_did_to_customer';
					body.i_customer = this.getNodeParameter('i_customer', i) as number;
					body.i_did_number = this.getNodeParameter('i_did_number', i) as number;
				}
				// ----------------------------------
				//         didNumbers:assignToAccount
				// ----------------------------------
				else if (operation === 'assignToAccount') {
					endpoint = '/rest/DID/assign_did_to_account';
					body.i_master_account = this.getNodeParameter('i_master_account', i) as number;
					body.i_did_number = this.getNodeParameter('i_did_number', i) as number;
				}
			} else if (resource === 'billingSessions') {
				// ----------------------------------
				//         Billing Sessions : getAllActiveSessions
				// ----------------------------------
				if (operation === 'getAllActiveSessions') {
					endpoint = '/rest/BillingSession/get_active_sessions_list';
					body = this.getNodeParameter('additionalFields', i) as IDataObject;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'active_session_list';
				}
			}
			try {
				responseData = await portaOneApiRequest.call(this, endpoint, body);
				// tslint:disable-next-line:no-any
			} catch (error: any) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}

			if (simplify && responseData[dataKey] !== undefined) {
				responseData = responseData[dataKey];
			}

			if (Array.isArray(responseData)) {
				returnData.push.apply(returnData, responseData as IDataObject[]);
			} else {
				returnData.push(responseData);
			}
		}
		return [this.helpers.returnJsonArray(returnData)];
	}
}
