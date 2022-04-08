import { INodeProperties } from 'n8n-workflow';

export const customerDescription = [
    // ----------------------------------
    //         Customers - Operations
    // ----------------------------------
    {
        displayName: "Operation",
        name: "operation",
        type: "options",
        displayOptions: {
          show: {
            resource: ["customer"]
          },
        },
        options: [
        //   {
        //     name: "Create",
        //     value: "create",
        //     description: "Create an customer",
        //   },
        //   {
        //     name: "Update",
        //     value: "update",
        //     description: "Update an customer",
        //   },
        //   {
        //     name: "Delete",
        //     value: "delete",
        //     description: "Delete an customer",
        //   },
          {
            name: "Get",
            value: "get",
            description: "Get data of an customer",
          },
          {
            name: "Get All",
            value: "getAll",
            description: "Get data of all customers",
          },
        ],
        default: "create",
        description: "The operation to perform.",
      },
    // ----------------------------------
    //         Customers - Get
    // ----------------------------------
    {
		displayName: 'Customer ID',
		name: 'i_customer',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		description: 'The unique ID of the customer record. Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
	},
    {
		displayName: 'Login',
		name: 'login',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		description: 'The customers login for self-care web interface. Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
	},
    {
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		description: 'The customer name. Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
	},
    {
		displayName: 'Reference Number',
		name: 'refnum',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		description: 'The reference number (custom field). Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
	},
	// --------------------------
	//         Customer - Create
	// --------------------------
	// {
	// 	displayName: 'Email',
	// 	name: 'email',
	// 	type: 'string',
	// 	default: '',
	// 	required: true,
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['customer'],
	// 			operation: ['create'],
	// 		},
	// 	},
	// 	description: 'The email of the customer.',
	// },
	// {
	// 	displayName: 'ID',
	// 	name: 'id',
	// 	type: 'number',
	// 	default: 0,
	// 	required: true,
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['customer'],
	// 			operation: ['update', 'get', 'delete'],
	// 		},
	// 	},
	// 	description: 'The ID of the customer.',
	// },
	// {
	// 	displayName: 'Simplify Response',
	// 	name: 'simplify',
	// 	type: 'boolean',
	// 	default: false,
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['customer'],
	// 			operation: ['create', 'update', 'get', 'getAll'],
	// 		},
	// 	},
	// 	description: 'Return simplified response. Only returns the customer data.',
	// },
	// {
	// 	displayName: 'Additional Fields',
	// 	name: 'optionalFields',
	// 	type: 'collection',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['customer'],
	// 			operation: ['create'],
	// 		},
	// 	},
	// 	default: {},
	// 	description: 'Additional optional fields of the customer.',
	// 	placeholder: 'Add Field',
	// 	options: [
	// 		{
	// 			displayName: 'Brand ID',
	// 			name: 'brand_id',
	// 			type: 'number',
	// 			default: 0,
	// 			description:
	// 				'The brand the customer is being registered to, will use the default brand if not entered.',
	// 		},
	// 		{
	// 			displayName: 'First Name',
	// 			name: 'firstname',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The first name of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Last Name',
	// 			name: 'lastname',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The last name of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Password',
	// 			name: 'password',
	// 			type: 'string',
	// 			typeOptions: {
	// 				password: true,
	// 			},
	// 			default: '',
	// 			description: 'The password of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Phone',
	// 			name: 'phone',
	// 			type: 'json',
	// 			default: '',
	// 			description: 'Phone number of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Country',
	// 			name: 'country',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'Country of the customer, as a two letter string like "GB".',
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
	// 				'The timezone of the customer, like "Europe/London", will default to system default if not entered.',
	// 		},
	// 		{
	// 			displayName: 'Confirmed?',
	// 			name: 'confirmed',
	// 			type: 'boolean',
	// 			default: false,
	// 			description:
	// 				'If the customer has confirmed ownership of their email or not, this is usually done by email when a customer registers themselves but can also be set manually. Requires a password to be set to true.',
	// 		},
	// 		{
	// 			displayName: 'Active?',
	// 			name: 'active',
	// 			type: 'boolean',
	// 			default: true,
	// 			description:
	// 				'If the customer account is active or not. Inactive customers cannot log in to the frontend.',
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
	// 				'The access level in the organisation, either Manager (false) or Customer (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
	// 		},
	// 		{
	// 			displayName: 'Organisation Notifications?',
	// 			name: 'organisation_notifications',
	// 			type: 'boolean',
	// 			default: true,
	// 			description:
	// 				'If customer is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation customers.',
	// 		},
	// 		{
	// 			displayName: 'Groups',
	// 			name: 'groups',
	// 			type: 'json',
	// 			default: '',
	// 			description: 'An array of group IDs that the customer belongs to.',
	// 		},
	// 	],
	// },
	// {
	// 	displayName: 'Additional Fields',
	// 	name: 'optionalFields',
	// 	type: 'collection',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['customer'],
	// 			operation: ['update'],
	// 		},
	// 	},
	// 	default: {},
	// 	description: 'Additional optional fields of the customer.',
	// 	placeholder: 'Add Field',
	// 	options: [
	// 		{
	// 			displayName: 'First Name',
	// 			name: 'firstname',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The first name of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Last Name',
	// 			name: 'lastname',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The last name of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Email',
	// 			name: 'email',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The email address of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Password',
	// 			name: 'password',
	// 			type: 'string',
	// 			typeOptions: {
	// 				password: true,
	// 			},
	// 			default: '',
	// 			description: 'The password of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Phone',
	// 			name: 'phone',
	// 			type: 'json',
	// 			default: '',
	// 			description: 'Phone number of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Country',
	// 			name: 'country',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'Country of the customer, as a two letter string like "GB".',
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
	// 				'The timezone of the customer, like "Europe/London", will default to system default if not entered.',
	// 		},
	// 		{
	// 			displayName: 'Confirmed?',
	// 			name: 'confirmed',
	// 			type: 'boolean',
	// 			default: false,
	// 			description:
	// 				'If the customer has confirmed ownership of their email or not, this is usually done by email when a customer registers themselves but can also be set manually. Requires a password to be set to true.',
	// 		},
	// 		{
	// 			displayName: 'Active?',
	// 			name: 'active',
	// 			type: 'boolean',
	// 			default: true,
	// 			description:
	// 				'If the customer account is active or not. Inactive customers cannot log in to the frontend.',
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
	// 				'The access level in the organisation, either Manager (false) or Customer (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
	// 		},
	// 		{
	// 			displayName: 'Organisation Notifications?',
	// 			name: 'organisation_notifications',
	// 			type: 'boolean',
	// 			default: true,
	// 			description:
	// 				'If customer is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation customers.',
	// 		},
	// 		{
	// 			displayName: 'Groups',
	// 			name: 'groups',
	// 			type: 'json',
	// 			default: '',
	// 			description: 'An array of group IDs that the customer belongs to.',
	// 		},
	// 	],
	// },
	// {
	// 	displayName: 'Query Parameters',
	// 	name: 'queryParameters',
	// 	type: 'collection',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['customer'],
	// 			operation: ['getAll'],
	// 		},
	// 	},
	// 	default: {},
	// 	description: 'Query Parameters for filtering the customers.',
	// 	placeholder: 'Add Parameter',
	// 	options: [
	// 		{
	// 			displayName: 'Brand ID',
	// 			name: 'brand_id',
	// 			type: 'number',
	// 			default: 0,
	// 			description: 'The brand the customer is registered to.',
	// 		},
	// 		{
	// 			displayName: 'First Name',
	// 			name: 'firstname',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The first name of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Last Name',
	// 			name: 'lastname',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The last name of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Email',
	// 			name: 'email',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'The email of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Confirmed?',
	// 			name: 'confirmed',
	// 			type: 'boolean',
	// 			default: false,
	// 			description: 'If the customer has confirmed ownership of their email or not',
	// 		},
	// 		{
	// 			displayName: 'Active?',
	// 			name: 'active',
	// 			type: 'boolean',
	// 			default: true,
	// 			description:
	// 				'If the customer account is active or not. Inactive customers cannot log in to the frontend.',
	// 		},
	// 		{
	// 			displayName: 'Organisation ID',
	// 			name: 'organisation_id',
	// 			type: 'number',
	// 			default: 0,
	// 			description: 'Search for customers by their organisation ID.',
	// 		},
	// 		{
	// 			displayName: 'Organisation Name',
	// 			name: 'organisation_name',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'Search for customers by their organisation name.',
	// 		},
	// 		{
	// 			displayName: 'Phone',
	// 			name: 'phone',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'Phone number of the customer.',
	// 		},
	// 		{
	// 			displayName: 'Country',
	// 			name: 'country',
	// 			type: 'string',
	// 			default: '',
	// 			description: 'Country of the customer, as a two letter string like "GB".',
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
	// 			resource: ['customer'],
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
	// 						loadOptionsMethod: 'getCustomerCustomFields',
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
