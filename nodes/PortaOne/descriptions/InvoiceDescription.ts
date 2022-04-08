import { INodeProperties } from "n8n-workflow";

export const invoiceDescription = [
  // ----------------------------------
  //         Invoices - Operations
  // ----------------------------------
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: {
      show: {
        resource: ["invoice"],
      },
    },
    options: [
      //   {
      //     name: "Create",
      //     value: "create",
      //     description: "Create an invoice",
      //   },
      //   {
      //     name: "Update",
      //     value: "update",
      //     description: "Update an invoice",
      //   },
      //   {
      //     name: "Delete",
      //     value: "delete",
      //     description: "Delete an invoice",
      //   },
      {
        name: "Get",
        value: "get",
        description: "Get data of an invoice",
      },
      {
        name: "Get All",
        value: "getAll",
        description: "Get data of all invoices",
      },
    ],
    default: "create",
    description: "The operation to perform.",
  },
  // ----------------------------------
  //         Invoice - Get
  // ----------------------------------
  {
    displayName: "Invoice ID",
    name: "i_invoice",
    type: "number",
    default: "",
    displayOptions: {
      show: {
        resource: ["invoice"],
        operation: ["get"],
      },
    },
    description: "Filters invoices by invoice ID.",
  },
  {
    displayName: "Customer ID",
    name: "i_customer",
    type: "number",
    default: "",
    displayOptions: {
      show: {
        resource: ["invoice"],
        operation: ["get"],
      },
    },
    description:
      "The unique ID of the customer record. Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.",
  },
  {
    displayName: "Invoice Number",
    name: "invoice_number",
    type: "number",
    default: "",
    displayOptions: {
      show: {
        resource: ["invoice"],
        operation: ["get"],
      },
    },
    description:
      "Filters invoices by the invoice number. Note: the invoice number can be unique in the scope of the customer, reseller, environment; uniqueness depends on the invoice generation settings for the customer/reseller/environment. The UI equivalent of this field is the 'Invoice number' input field on the Invoice search page.",
  },
  // --------------------------
  //         Invoice - Create
  // --------------------------
  // {
  // 	displayName: 'Email',
  // 	name: 'email',
  // 	type: 'string',
  // 	default: '',
  // 	required: true,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['invoice'],
  // 			operation: ['create'],
  // 		},
  // 	},
  // 	description: 'The email of the invoice.',
  // },
  // {
  // 	displayName: 'ID',
  // 	name: 'id',
  // 	type: 'number',
  // 	default: 0,
  // 	required: true,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['invoice'],
  // 			operation: ['update', 'get', 'delete'],
  // 		},
  // 	},
  // 	description: 'The ID of the invoice.',
  // },
  // {
  // 	displayName: 'Simplify Response',
  // 	name: 'simplify',
  // 	type: 'boolean',
  // 	default: false,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['invoice'],
  // 			operation: ['create', 'update', 'get', 'getAll'],
  // 		},
  // 	},
  // 	description: 'Return simplified response. Only returns the invoice data.',
  // },
  // {
  // 	displayName: 'Additional Fields',
  // 	name: 'optionalFields',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['invoice'],
  // 			operation: ['create'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Additional optional fields of the invoice.',
  // 	placeholder: 'Add Field',
  // 	options: [
  // 		{
  // 			displayName: 'Brand ID',
  // 			name: 'brand_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description:
  // 				'The brand the invoice is being registered to, will use the default brand if not entered.',
  // 		},
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Password',
  // 			name: 'password',
  // 			type: 'string',
  // 			typeOptions: {
  // 				password: true,
  // 			},
  // 			default: '',
  // 			description: 'The password of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'Phone number of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the invoice, as a two letter string like "GB".',
  // 		},
  // 		{
  // 			displayName: 'Language Code',
  // 			name: 'language_code',
  // 			type: 'string',
  // 			default: '',
  // 			description:
  // 				'The two letter language code, like "en", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Time Zone',
  // 			name: 'timezone',
  // 			type: 'string',
  // 			default: '',
  // 			description:
  // 				'The timezone of the invoice, like "Europe/London", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description:
  // 				'If the invoice has confirmed ownership of their email or not, this is usually done by email when a invoice registers themselves but can also be set manually. Requires a password to be set to true.',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the invoice account is active or not. Inactive invoices cannot log in to the frontend.',
  // 		},
  // 		{
  // 			displayName: 'Organisation',
  // 			name: 'organisation',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'If creating a new organisation, use this field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation ID',
  // 			name: 'organisation_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'If adding to an existing organisation, enter the organisation ID.',
  // 		},
  // 		{
  // 			displayName: 'Organizsation Access?',
  // 			name: 'organisation_access_level',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'The access level in the organisation, either Manager (false) or Invoice (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Notifications?',
  // 			name: 'organisation_notifications',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If invoice is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation invoices.',
  // 		},
  // 		{
  // 			displayName: 'Groups',
  // 			name: 'groups',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'An array of group IDs that the invoice belongs to.',
  // 		},
  // 	],
  // },
  // {
  // 	displayName: 'Additional Fields',
  // 	name: 'optionalFields',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['invoice'],
  // 			operation: ['update'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Additional optional fields of the invoice.',
  // 	placeholder: 'Add Field',
  // 	options: [
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Email',
  // 			name: 'email',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The email address of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Password',
  // 			name: 'password',
  // 			type: 'string',
  // 			typeOptions: {
  // 				password: true,
  // 			},
  // 			default: '',
  // 			description: 'The password of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'Phone number of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the invoice, as a two letter string like "GB".',
  // 		},
  // 		{
  // 			displayName: 'Language Code',
  // 			name: 'language_code',
  // 			type: 'string',
  // 			default: '',
  // 			description:
  // 				'The two letter language code, like "en", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Time Zone',
  // 			name: 'timezone',
  // 			type: 'string',
  // 			default: '',
  // 			description:
  // 				'The timezone of the invoice, like "Europe/London", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description:
  // 				'If the invoice has confirmed ownership of their email or not, this is usually done by email when a invoice registers themselves but can also be set manually. Requires a password to be set to true.',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the invoice account is active or not. Inactive invoices cannot log in to the frontend.',
  // 		},
  // 		{
  // 			displayName: 'Organisation',
  // 			name: 'organisation',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'If creating a new organisation, use this field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation ID',
  // 			name: 'organisation_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'If adding to an existing organisation, enter the organisation ID.',
  // 		},
  // 		{
  // 			displayName: 'Organizsation Access?',
  // 			name: 'organisation_access_level',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'The access level in the organisation, either Manager (false) or Invoice (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Notifications?',
  // 			name: 'organisation_notifications',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If invoice is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation invoices.',
  // 		},
  // 		{
  // 			displayName: 'Groups',
  // 			name: 'groups',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'An array of group IDs that the invoice belongs to.',
  // 		},
  // 	],
  // },
  // {
  // 	displayName: 'Query Parameters',
  // 	name: 'queryParameters',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['invoice'],
  // 			operation: ['getAll'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Query Parameters for filtering the invoices.',
  // 	placeholder: 'Add Parameter',
  // 	options: [
  // 		{
  // 			displayName: 'Brand ID',
  // 			name: 'brand_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'The brand the invoice is registered to.',
  // 		},
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Email',
  // 			name: 'email',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The email of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description: 'If the invoice has confirmed ownership of their email or not',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the invoice account is active or not. Inactive invoices cannot log in to the frontend.',
  // 		},
  // 		{
  // 			displayName: 'Organisation ID',
  // 			name: 'organisation_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'Search for invoices by their organisation ID.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Name',
  // 			name: 'organisation_name',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Search for invoices by their organisation name.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Phone number of the invoice.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the invoice, as a two letter string like "GB".',
  // 		},
  // 		{
  // 			displayName: 'Language Code',
  // 			name: 'language_code',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The two letter language code, like "en".',
  // 		},
  // 		{
  // 			displayName: 'Start',
  // 			name: 'start',
  // 			type: 'number',
  // 			default: 1,
  // 			description: 'The first result to start from.',
  // 		},
  // 		{
  // 			displayName: 'Limit',
  // 			name: 'limit',
  // 			type: 'number',
  // 			default: 50,
  // 			description: 'The amount of results to fetch.',
  // 		},
  // 		{
  // 			displayName: 'Order Column',
  // 			name: 'order_column',
  // 			type: 'string',
  // 			default: 'id',
  // 			description: 'The column to sort by.',
  // 		},
  // 		{
  // 			displayName: 'Order Direction',
  // 			name: 'order_direction',
  // 			type: 'options',
  // 			options: [
  // 				{ name: 'Ascending', value: 'asc' },
  // 				{ name: 'Descending', value: 'desc' },
  // 			],
  // 			default: 'asc',
  // 			description: 'The ordering of the results.',
  // 		},
  // 	],
  // },
  // {
  // 	displayName: 'Custom Fields',
  // 	name: 'customFields',
  // 	placeholder: 'Add Custom Field',
  // 	description: 'Adds a custom field to set the value of.',
  // 	type: 'fixedCollection',
  // 	typeOptions: {
  // 		multipleValues: true,
  // 	},
  // 	displayOptions: {
  // 		show: {
  // 			operation: ['create', 'update', 'getAll'],
  // 			resource: ['invoice'],
  // 		},
  // 	},
  // 	default: {},
  // 	options: [
  // 		{
  // 			name: 'fields',
  // 			displayName: 'Field',
  // 			values: [
  // 				{
  // 					displayName: 'Field ID',
  // 					name: 'id',
  // 					typeOptions: {
  // 						loadOptionsMethod: 'getInvoiceCustomFields',
  // 					},
  // 					type: 'options',
  // 					default: '',
  // 					description: 'ID of the field to set.',
  // 				},
  // 				{
  // 					displayName: 'Field Value',
  // 					name: 'value',
  // 					type: 'string',
  // 					default: '',
  // 					description: 'Value of the field to set.',
  // 				},
  // 			],
  // 		},
  // 	],
  // },
] as INodeProperties[];
