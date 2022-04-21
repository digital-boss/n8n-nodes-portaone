import { IExecuteFunctions } from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { accountDescription } from './descriptions/AccountDescription';
import { customerDescription } from './descriptions/CustomerDescription';
import { invoiceDescription } from './descriptions/InvoiceDescription';
import { customerExtensionDescription } from './descriptions/CustomerExtensionDescription';
import { customerXdrsDescription } from './descriptions/CustomerXdrsDescription';
import { didNumbersDescription } from './descriptions/DidNumbersDescription';

import { portaOneApiRequest } from './GenericFunctions';

import axios from 'axios';

export class PortaOne implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PortaOne',
		name: 'portaone',
		icon: 'file:portaone.png',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume PortaOne REST API',
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
			{
				displayName: 'Simplify Response',
				name: 'simplify',
				type: 'boolean',
				displayOptions: {
					show: {
						operation: ['get', 'getAll'],
					},
				},
				default: false,
				description: 'Simplify the response object.',
			},
			// // ----------------------------------
			// //         fields - Contacts
			// // ----------------------------------
			// {
			//   displayName: "Email Address",
			//   name: "emailAddress",
			//   type: "string",
			//   default: "",
			//   required: true,
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["contact"],
			//     },
			//   },
			//   description: "The email address of the contact.",
			// },
			// {
			//   displayName: "ID",
			//   name: "id",
			//   type: "string",
			//   default: "",
			//   required: true,
			//   displayOptions: {
			//     show: {
			//       operation: ["update", "get", "delete"],
			//       resource: ["contact"],
			//     },
			//   },
			//   description: "The ID of the contact.",
			// },
			// {
			//   displayName: "Additional Fields",
			//   name: "optionalFields",
			//   type: "collection",
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["contact"],
			//     },
			//   },
			//   default: {},
			//   description: "Additional optional Fields of the contact",
			//   placeholder: "Add Field",
			//   options: [
			//     {
			//       displayName: "Current Status",
			//       name: "currentStatus",
			//       type: "string",
			//       default: "",
			//       description: "The contact's current status.",
			//     },
			//     {
			//       displayName: "Name",
			//       name: "name",
			//       type: "string",
			//       default: "",
			//       description:
			//         "The name of the contact. Name is ignored by the API and overwritten with the Email Address value.",
			//     },
			//     {
			//       displayName: "Description",
			//       name: "description",
			//       type: "string",
			//       default: "",
			//       description: "The description of the contact.",
			//     },
			//     {
			//       displayName: "First Name",
			//       name: "firstName",
			//       type: "string",
			//       default: "",
			//       description: "The contact's first name.",
			//     },
			//     {
			//       displayName: "Last Name",
			//       name: "lastName",
			//       type: "string",
			//       default: "",
			//       description: "The contact's last name.",
			//     },
			//     {
			//       displayName: "Email Format Preference",
			//       name: "emailFormatPreference",
			//       type: "string",
			//       default: "",
			//       description: "The contact's email format preference.",
			//     },
			//     {
			//       displayName: "Is subscribed?",
			//       name: "isSubscribed",
			//       type: "string",
			//       default: "",
			//       description: "Whether or not the contact is subscribed.",
			//     },
			//     {
			//       displayName: "Has bouncebacks?",
			//       name: "isBounceback",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Whether or not the contact has any associated bouncebacks.",
			//     },
			//     {
			//       displayName: "Account Name",
			//       name: "accountName",
			//       type: "string",
			//       default: "",
			//       description: "The account name in which the contact belongs.",
			//     },
			//     {
			//       displayName: "Title",
			//       name: "title",
			//       type: "string",
			//       default: "",
			//       description: "The contact's title.",
			//     },
			//     {
			//       displayName: "Subscription Date",
			//       name: "subscriptionDate",
			//       type: "string",
			//       default: "",
			//       description: "The contact's subscription date.",
			//     },
			//     {
			//       displayName: "Unsubscription Date",
			//       name: "unsubscriptionDate",
			//       type: "string",
			//       default: "",
			//       description: "The contact's unsubscription date.",
			//     },
			//     {
			//       displayName: "Bounceback Date",
			//       name: "bouncebackDate",
			//       type: "string",
			//       default: "",
			//       description: "The contact's bounceback date.",
			//     },
			//     {
			//       displayName: "Address 1",
			//       name: "address1",
			//       type: "string",
			//       default: "",
			//       description: "The contact's first address.",
			//     },
			//     {
			//       displayName: "Address 2",
			//       name: "address2",
			//       type: "string",
			//       default: "",
			//       description: "The contact's second address.",
			//     },
			//     {
			//       displayName: "Address 3",
			//       name: "address3",
			//       type: "string",
			//       default: "",
			//       description: "The contact's third address.",
			//     },
			//     {
			//       displayName: "City",
			//       name: "city",
			//       type: "string",
			//       default: "",
			//       description: "The contact's city.",
			//     },
			//     {
			//       displayName: "Province",
			//       name: "province",
			//       type: "string",
			//       default: "",
			//       description: "The contact's province.",
			//     },
			//     {
			//       displayName: "Postal Code",
			//       name: "postalCode",
			//       type: "string",
			//       default: "",
			//       description: "The contact's postal code.",
			//     },
			//     {
			//       displayName: "Country",
			//       name: "country",
			//       type: "string",
			//       default: "",
			//       description: "The contact's country.",
			//     },
			//     {
			//       displayName: "Business Phone",
			//       name: "businessPhone",
			//       type: "string",
			//       default: "",
			//       description: "The contact's business phone number.",
			//     },
			//     {
			//       displayName: "Mobile Phone",
			//       name: "mobilePhone",
			//       type: "string",
			//       default: "",
			//       description: "The contact's mobile phone number.",
			//     },
			//     {
			//       displayName: "Fax",
			//       name: "fax",
			//       type: "string",
			//       default: "",
			//       description: "The contact's fax number.",
			//     },
			//     {
			//       displayName: "Sales Person",
			//       name: "salesPerson",
			//       type: "string",
			//       default: "",
			//       description: "The contact's account representative.",
			//     },
			//   ],
			// },
			// {
			//   displayName: "Custom Contact Fields",
			//   name: "customFields",
			//   placeholder: "Add Custom Field",
			//   description: "Adds a custom field to set the value of.",
			//   type: "fixedCollection",
			//   typeOptions: {
			//     multipleValues: true,
			//   },
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["contact"],
			//     },
			//   },
			//   default: {},
			//   options: [
			//     {
			//       name: "property",
			//       displayName: "Field",
			//       values: [
			//         {
			//           displayName: "Field ID",
			//           name: "id",
			//           type: "options",
			//           typeOptions: {
			//             loadOptionsMethod: "getContactFields",
			//           },
			//           default: "",
			//           description: "ID of the field to set.",
			//         },
			//         {
			//           displayName: "Field Value",
			//           name: "value",
			//           type: "string",
			//           default: "",
			//           description: "Value of the field to set.",
			//         },
			//       ],
			//     },
			//   ],
			// },
			// // ----------------------------------
			// //         QueryParameters - contacts - getAll
			// // ----------------------------------
			// {
			//   displayName: "Query Parameters",
			//   name: "queryParameters",
			//   type: "collection",
			//   displayOptions: {
			//     show: {
			//       operation: ["getAll"],
			//       resource: ["contact"],
			//     },
			//   },
			//   default: {},
			//   description: "Query parameters to filter the results by",
			//   placeholder: "Add Parameter",
			//   options: [
			//     {
			//       displayName: "Count",
			//       name: "count",
			//       type: "number",
			//       default: 100,
			//       description:
			//         "Maximum number of entities to return. Must be less than or equal to 1000 and greater than or equal to 1.",
			//     },
			//     {
			//       displayName: "Depth",
			//       name: "depth",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Level of detail returned by the request. PortaOne APIs can retrieve entities at three different levels of depth: minimal, partial, and complete. Any other values passed are reset to minimal by default.",
			//     },
			//     {
			//       displayName: "lastUpdatedAt",
			//       name: "lastUpdatedAt",
			//       type: "number",
			//       default: 0,
			//       description:
			//         "Unix timestamp for the date and time the custom object was last updated.",
			//     },
			//     {
			//       displayName: "Order By",
			//       name: "orderBy",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Specifies the field by which list results are ordered.",
			//     },
			//     {
			//       displayName: "Page",
			//       name: "page",
			//       type: "number",
			//       default: 1,
			//       description:
			//         "Specifies which page of entities to return (the count parameter defines the number of entities per page). If the page parameter is not supplied, 1 will be used by default.",
			//     },
			//     {
			//       displayName: "Search",
			//       name: "search",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Specifies the search criteria used to retrieve entities. See the tutorial for information about using this parameter.",
			//     },
			//     {
			//       displayName: "View ID",
			//       name: "viewId",
			//       type: "number",
			//       default: "",
			//       description:
			//         "Id of the contact view to filter results. Must be a valid contact view id. Example: ?viewId=100006.",
			//     },
			//   ],
			// },
			// // ----------------------------------
			// //         fields - Custom Object
			// // ----------------------------------
			// {
			//   displayName: "Name",
			//   name: "name",
			//   type: "string",
			//   default: "",
			//   required: true,
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["customObject"],
			//     },
			//   },
			//   description: "The name of the custom object.",
			// },
			// {
			//   displayName: "ID",
			//   name: "id",
			//   type: "string",
			//   default: "",
			//   required: true,
			//   displayOptions: {
			//     show: {
			//       operation: ["update", "get", "delete"],
			//       resource: ["customObject"],
			//     },
			//   },
			//   description: "The ID of the custom object.",
			// },
			// {
			//   displayName: "Additional Fields",
			//   name: "optionalFields",
			//   type: "collection",
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["customObject"],
			//     },
			//   },
			//   default: {},
			//   description: "Additional optional Fields of the custom Object",
			//   placeholder: "Add Field",
			//   options: [
			//     {
			//       displayName: "Description",
			//       name: "description",
			//       type: "string",
			//       default: "",
			//       description: "The description of the custom object.",
			//     },
			//     {
			//       displayName: "Email Address Field ID",
			//       name: "emailAddressFieldId",
			//       type: "string",
			//       default: "",
			//       description:
			//         "For your custom object record to have an email address field, you must create a custom object field which will act as an email address. You can then use the desired custom object field's id as the value for this parameter.",
			//     },
			//     {
			//       displayName: "Display Name Field Id",
			//       name: "displayNameFieldId",
			//       type: "string",
			//       default: "",
			//       description:
			//         "For your custom object record to have a meaningful name field, you must create a custom object field which will act as a name. You can then use the desired custom object field's id as the value for this parameter.",
			//     },
			//     {
			//       displayName: "Unique Code Field ID",
			//       name: "uniqueCodeFieldId",
			//       type: "string",
			//       default: "",
			//       description:
			//         "For your custom object record to have a unique identifier, you must create a <a href='http://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAB/index.html#Developers/RESTAPI/2.0%20Endpoints/Custom%20objects/Custom-object-fields.htm'>custom object field</a> which will act as a GUID. You can then use the desired custom object field's id as the value for this parameter.",
			//     },
			//     {
			//       displayName: "Delete Linked Custom Object Data",
			//       name: "deleteLinkedCustomObjectData",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Whether or not custom object records are deleted when linked contact records are deleted. Does not apply to records that are unmapped or account deletion. Deleting records is irreversible and data cannot be recovered. The default value is <code>false</code>. This feature is released under our Controlled Availability program. You can request access to this feature by submitting a request to <a href='https://support.oracle.com/epmos/faces/MosIndex.jspx'>My Oracle Support</a>.",
			//     },
			//   ],
			// },
			// {
			//   displayName: "Custom custom Object Fields",
			//   name: "customFields",
			//   placeholder: "Add Custom Field",
			//   description: "Adds a custom field to set the value of.",
			//   type: "fixedCollection",
			//   typeOptions: {
			//     multipleValues: true,
			//   },
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["customObject"],
			//     },
			//   },
			//   default: {},
			//   options: [
			//     {
			//       displayName: "Field",
			//       name: "fields",
			//       values: [
			//         {
			//           displayName: "Name",
			//           name: "name",
			//           default: "",
			//           required: true,
			//           type: "string",
			//           description: "Name of the Custom Object Field",
			//         },
			//         {
			//           displayName: "Data Type",
			//           name: "dataType",
			//           default: "text",
			//           required: true,
			//           type: "options",
			//           options: [
			//             {
			//               name: "Text",
			//               value: "text",
			//             },
			//             {
			//               name: "Large Text",
			//               value: "largeText",
			//             },
			//             {
			//               name: "Number",
			//               value: "number",
			//             },
			//             {
			//               name: "numeric",
			//               value: "numeric",
			//             },
			//             {
			//               name: "Date",
			//               value: "date",
			//             },
			//           ],
			//           description: "Data Type of the Custom Object Field",
			//         },
			//         {
			//           displayName: "Display Type",
			//           name: "displayType",
			//           default: "text",
			//           required: true,
			//           type: "options",
			//           options: [
			//             {
			//               name: "Text",
			//               value: "text",
			//             },
			//             {
			//               name: "Text Area",
			//               value: "textArea",
			//             },
			//             {
			//               name: "Single Select",
			//               value: "singleSelect",
			//             },
			//             {
			//               name: "Multi Select",
			//               value: "multiSelect",
			//             },
			//             {
			//               name: "Radio Button",
			//               value: "radio",
			//             },
			//             {
			//               name: "Checkbox",
			//               value: "checkbox",
			//             },
			//             {
			//               name: "Hidden",
			//               value: "hidden",
			//             },
			//             {
			//               name: "Submit",
			//               value: "submit",
			//             },
			//           ],
			//           description: "Display Type of the Custom Object Field",
			//         },
			//         {
			//           displayName: "Field Key",
			//           name: "key",
			//           type: "string",
			//           required: true,
			//           default: "",
			//           description: "Key of the field to set.",
			//         },
			//         {
			//           displayName: "Field Value",
			//           name: "value",
			//           type: "string",
			//           required: true,
			//           default: "",
			//           description: "Value of the field to set.",
			//         },
			//       ],
			//     },
			//   ],
			// },
			// // ----------------------------------
			// //         QueryParameters - Custom Object - getAll
			// // ----------------------------------
			// {
			//   displayName: "Query Parameters",
			//   name: "queryParameters",
			//   type: "collection",
			//   displayOptions: {
			//     show: {
			//       operation: ["getAll"],
			//       resource: ["customObject"],
			//     },
			//   },
			//   default: {},
			//   description: "Query parameters to filter the results by",
			//   placeholder: "Add Parameter",
			//   options: [
			//     {
			//       displayName: "Count",
			//       name: "count",
			//       type: "number",
			//       default: 100,
			//       description:
			//         "Maximum number of entities to return. Must be less than or equal to 1000 and greater than or equal to 1.",
			//     },
			//     {
			//       displayName: "Depth",
			//       name: "depth",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Level of detail returned by the request. PortaOne APIs can retrieve entities at three different levels of depth: minimal, partial, and complete. Any other values passed are reset to minimal by default.",
			//     },
			//     {
			//       displayName: "lastUpdatedAt",
			//       name: "lastUpdatedAt",
			//       type: "number",
			//       default: 0,
			//       description:
			//         "Unix timestamp for the date and time the custom object was last updated.",
			//     },
			//     {
			//       displayName: "Order By",
			//       name: "orderBy",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Specifies the field by which list results are ordered.",
			//     },
			//     {
			//       displayName: "Page",
			//       name: "page",
			//       type: "number",
			//       default: 1,
			//       description:
			//         "Specifies which page of entities to return (the count parameter defines the number of entities per page). If the page parameter is not supplied, 1 will be used by default.",
			//     },
			//     {
			//       displayName: "Search",
			//       name: "search",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Specifies the search criteria used to retrieve entities. See the tutorial for information about using this parameter.",
			//     },
			//   ],
			// },
			// // ----------------------------------
			// //         fields - Custom Object Data
			// // ----------------------------------
			// {
			//   displayName: "Parent ID",
			//   name: "parentId",
			//   type: "string",
			//   default: "",
			//   required: true,
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update", "delete", "get", "getAll"],
			//       resource: ["customObjectData"],
			//     },
			//   },
			//   description: "The Id of the custom object data parent.",
			// },
			// {
			//   displayName: "ID",
			//   name: "id",
			//   type: "string",
			//   default: "",
			//   required: true,
			//   displayOptions: {
			//     show: {
			//       operation: ["update", "get", "delete"],
			//       resource: ["customObjectData"],
			//     },
			//   },
			//   description: "The ID of the custom object data entry.",
			// },
			// {
			//   displayName: "Additional Fields",
			//   name: "optionalFields",
			//   type: "collection",
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["customObjectData"],
			//     },
			//   },
			//   default: {},
			//   description: "Additional optional Fields of the custom Object",
			//   placeholder: "Add Field",
			//   options: [
			//     {
			//       displayName: "Current Status",
			//       name: "currentStatus",
			//       type: "string",
			//       default: "",
			//       description: "The description of the custom object.",
			//     },
			//     {
			//       displayName: "Name",
			//       name: "name",
			//       type: "string",
			//       default: "",
			//       description: "The name of the custom object data.",
			//     },
			//     {
			//       displayName: "Description",
			//       name: "description",
			//       type: "string",
			//       default: "",
			//       description: "The description of the custom object.",
			//     },
			//     {
			//       displayName: "Source Template ID",
			//       name: "sourceTemplateId",
			//       type: "string",
			//       default: "",
			//       description: "Id of the template used to create the asset.",
			//     },
			//     {
			//       displayName: "Contact ID",
			//       name: "contactId",
			//       type: "string",
			//       default: "",
			//       description:
			//         "The contact record Id associated to this custom object data.",
			//     },
			//     {
			//       displayName: "Unique Code",
			//       name: "uniqueCode",
			//       type: "string",
			//       default: "",
			//       description:
			//         "The unique code associated to the custom object data.",
			//     },
			//     {
			//       displayName: "Custom Object Record Status",
			//       name: "customObjectRecordStatus",
			//       type: "string",
			//       default: "",
			//       description: "The record status of the custom object data.",
			//     },
			//     {
			//       displayName: "Is Mapped?",
			//       name: "isMapped",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Whether or not the custom object data is mapped to a custom object.",
			//     },
			//   ],
			// },
			// {
			//   displayName: "Custom custom Object Fields",
			//   name: "customObjectDataCustomFields",
			//   placeholder: "Add Custom Field",
			//   description: "Adds a custom field to set the value of.",
			//   type: "fixedCollection",
			//   typeOptions: {
			//     multipleValues: true,
			//   },
			//   displayOptions: {
			//     show: {
			//       operation: ["create", "update"],
			//       resource: ["customObjectData"],
			//     },
			//   },
			//   default: {},
			//   options: [
			//     {
			//       displayName: "Field",
			//       name: "fields",
			//       values: [
			//         {
			//           displayName: "Field ID",
			//           name: "id",
			//           type: "string",
			//           required: true,
			//           default: "",
			//           description: "ID of the field to set.",
			//         },
			//         {
			//           displayName: "Field Value",
			//           name: "value",
			//           type: "string",
			//           required: true,
			//           default: "",
			//           description: "Value of the field to set.",
			//         },
			//       ],
			//     },
			//   ],
			// },
			// // ----------------------------------
			// //         QueryParameters - Custom Object Data - getAll
			// // ----------------------------------
			// {
			//   displayName: "Query Parameters",
			//   name: "queryParameters",
			//   type: "collection",
			//   displayOptions: {
			//     show: {
			//       operation: ["getAll"],
			//       resource: ["customObjectData"],
			//     },
			//   },
			//   default: {},
			//   description: "Query parameters to filter the results by",
			//   placeholder: "Add Parameter",
			//   options: [
			//     {
			//       displayName: "Count",
			//       name: "count",
			//       type: "number",
			//       default: 100,
			//       description:
			//         "Maximum number of entities to return. Must be less than or equal to 1000 and greater than or equal to 1.",
			//     },
			//     {
			//       displayName: "Depth",
			//       name: "depth",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Level of detail returned by the request. PortaOne APIs can retrieve entities at three different levels of depth: minimal, partial, and complete. Any other values passed are reset to minimal by default.",
			//     },
			//     {
			//       displayName: "Order By",
			//       name: "orderBy",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Specifies the field by which list results are ordered.",
			//     },
			//     {
			//       displayName: "Page",
			//       name: "page",
			//       type: "number",
			//       default: 1,
			//       description:
			//         "Specifies which page of entities to return (the count parameter defines the number of entities per page). If the page parameter is not supplied, 1 will be used by default.",
			//     },
			//     {
			//       displayName: "Search",
			//       name: "search",
			//       type: "string",
			//       default: "",
			//       description:
			//         "Specifies the search criteria used to retrieve entities. See the tutorial for information about using this parameter.",
			//     },
			//   ],
			// },
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

		let body: any = {};
		let qs: IDataObject = {};
		let responseData;

		for (let i = 0; i < items.length; i++) {
			if (resource === 'customer') {
				// ----------------------------------
				//         customer:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/rest/Customer/add_customer';
					body.customer_info = this.getNodeParameter(
						'additionalFields',
						i,
					) as IDataObject;
					body.customer_info.name = this.getNodeParameter('name', i) as string;
					body.customer_info.iso_4217 = this.getNodeParameter(
						'iso_4217',
						i,
					) as string;
				}
				// ----------------------------------
				//         customer:update
				// ----------------------------------
				else if (operation === 'update') {
					endpoint = '/rest/Customer/update_customer';
					body.customer_info = this.getNodeParameter(
						'additionalFields',
						i,
					) as IDataObject;
					body.customer_info.i_customer = this.getNodeParameter('i_customer', i) as number;
				}
				// ----------------------------------
				//         customer:delete
				// ----------------------------------
				else if (operation === 'delete') {
					const customerId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/1.0/data/customer/${customerId}`;
					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         customer:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = `/rest/Customer/get_customer_info`;
					body.i_customer = this.getNodeParameter('i_customer', i) as number;
					body.login = this.getNodeParameter('login', i) as string;
					body.name = this.getNodeParameter('name', i) as string;
					body.refnum = this.getNodeParameter('refnum', i) as string;

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
				//         account:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/api/REST/2.0/assets/account';

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         account:update
				// ----------------------------------
				else if (operation === 'update') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/account/${objectId}`;

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.id = objectId;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         account:delete
				// ----------------------------------
				else if (operation === 'delete') {
					endpoint = `/rest/Account/terminate_account`;
					body.i_account = this.getNodeParameter('i_account', i) as number;
					body.force = this.getNodeParameter('force', i) as boolean;
					body.release_assigned_did = this.getNodeParameter(
						'release_assigned_did',
						i,
					) as boolean;
				}
				// ----------------------------------
				//         account:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = '/rest/Account/get_account_info';
					body.i_account = this.getNodeParameter('i_account', i) as number;
					body.id = this.getNodeParameter('id', i) as string;
					body.login = this.getNodeParameter('login', i) as string;

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
					body.alias_info = this.getNodeParameter(
						'additionalFields',
						i,
					) as IDataObject;
					body.alias_info.i_master_account = this.getNodeParameter(
						'i_master_account',
						i,
					) as number;
					body.alias_info.id = this.getNodeParameter('id', i) as number;
				}
			} else if (resource === 'invoice') {
				// ----------------------------------
				//         invoice:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/api/REST/2.0/assets/invoice';

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         invoice:update
				// ----------------------------------
				else if (operation === 'update') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/invoice/${objectId}`;

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.id = objectId;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         invoice:delete
				// ----------------------------------
				else if (operation === 'delete') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/invoice/${objectId}`;
					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         invoice:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = '/rest/Invoice/get_invoice_info';
					body.i_invoice = this.getNodeParameter('i_invoice', i) as number;
					body.i_customer = this.getNodeParameter('i_customer', i) as string;
					body.invoice_number = this.getNodeParameter(
						'invoice_number',
						i,
					) as string;
					body.get_pdf = 1;

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
					body.amount = this.getNodeParameter('amount', i) as number;
					body.i_invoice = this.getNodeParameter('i_invoice', i) as number;
					body.internal_comment = this.getNodeParameter(
						'internal_comment',
						i,
					) as string;
					body.refund_to_cc = this.getNodeParameter(
						'refund_to_cc',
						i,
					) as boolean;
					body.visible_comment = this.getNodeParameter(
						'visible_comment',
						i,
					) as string;
				}
			} else if (resource === 'customerExtension') {
				// ----------------------------------
				//         customerExtension:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/rest/Customer/add_customer_extension';

					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_account = this.getNodeParameter('i_account', i) as number;
					body.i_customer = this.getNodeParameter('i_customer', i) as number;
					body.i_product = this.getNodeParameter('i_product', i) as number;
					body.id = this.getNodeParameter('id', i) as string;
				}
				// ----------------------------------
				//         customerExtension:update
				// ----------------------------------
				else if (operation === 'update') {
					endpoint = '/rest/Customer/update_customer_extension';

					body = this.getNodeParameter('additionalFields', i) as IDataObject;
					body.i_c_ext = this.getNodeParameter('i_c_ext', i) as number;
					// body.i_account = this.getNodeParameter("i_account", i) as number;
					body.i_customer = this.getNodeParameter('i_customer', i) as number;
					// body.i_product = this.getNodeParameter("i_product", i) as number;
					// body.id = this.getNodeParameter("id", i) as string;
				}
				// ----------------------------------
				//         customerExtension:delete
				// ----------------------------------
				else if (operation === 'delete') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/extension/${objectId}`;
					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         customerExtension:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = '/rest/Customer/get_extensions_info';
					body.i_extension = this.getNodeParameter('i_extension', i) as number;
					body.i_customer = this.getNodeParameter('i_customer', i) as string;
					body.extension_number = this.getNodeParameter(
						'extension_number',
						i,
					) as string;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'extensions_info';
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
				//         customerXdrs:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/api/REST/2.0/assets/extension';

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         customerXdrs:update
				// ----------------------------------
				else if (operation === 'update') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/extension/${objectId}`;

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.id = objectId;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         customerXdrs:delete
				// ----------------------------------
				else if (operation === 'delete') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/extension/${objectId}`;
					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         customerXdrs:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = '/rest/Customer/get_extensions_info';
					body.i_extension = this.getNodeParameter('i_extension', i) as number;
					body.i_customer = this.getNodeParameter('i_customer', i) as string;
					body.extension_number = this.getNodeParameter(
						'extension_number',
						i,
					) as string;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'extensions_info';
				}
				// ----------------------------------
				//         customerXdrs:getALL
				// ----------------------------------
				else if (operation === 'getAll') {
					endpoint = '/rest/Customer/get_customer_xdrs';
					body.i_customer = this.getNodeParameter('i_customer', i) as string;
					body.to_date = this.getNodeParameter('to_date', i) as string;
					body.from_date = this.getNodeParameter('from_date', i) as string;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'xdr_list';
				}
			} else if (resource === 'didNumbers') {
				// ----------------------------------
				//         didNumbers:create
				// ----------------------------------
				if (operation === 'create') {
					endpoint = '/api/REST/2.0/assets/extension';

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         didNumbers:update
				// ----------------------------------
				else if (operation === 'update') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/extension/${objectId}`;

					body = this.getNodeParameter('optionalFields', i) as IDataObject;
					body.id = objectId;
					body.name = this.getNodeParameter('name', i) as string;
					const { fields } = this.getNodeParameter('customFields', i) as any;
					body.fields = fields;

					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         didNumbers:delete
				// ----------------------------------
				else if (operation === 'delete') {
					const objectId = this.getNodeParameter('id', i) as string;
					endpoint = `/api/REST/2.0/assets/extension/${objectId}`;
					qs = {} as IDataObject;
				}
				// ----------------------------------
				//         didNumbers:get
				// ----------------------------------
				else if (operation === 'get') {
					endpoint = '/rest/Customer/get_extensions_info';
					body.i_extension = this.getNodeParameter('i_extension', i) as number;
					body.i_customer = this.getNodeParameter('i_customer', i) as string;
					body.extension_number = this.getNodeParameter(
						'extension_number',
						i,
					) as string;

					simplify = this.getNodeParameter('simplify', i) as boolean;
					dataKey = 'extensions_info';
				}
				// ----------------------------------
				//         didNumbers:getALL
				// ----------------------------------
				else if (operation === 'getAll') {
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
					body.i_did_number = this.getNodeParameter(
						'i_did_number',
						i,
					) as number;
				}
			}

			try {
				responseData = await portaOneApiRequest.call(this, endpoint, body);
			} catch (error: any) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}

			if (simplify) {
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
