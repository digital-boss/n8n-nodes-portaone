import { INodeProperties } from "n8n-workflow";

export const didNumbers = [
  // ----------------------------------
  //         DID Numbers - Operations
  // ----------------------------------
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: {
      show: {
        resource: ["didNumbers"],
      },
    },
    options: [
      //   {
      //     name: "Create",
      //     value: "create",
      //     description: "Create an extension",
      //   },
      //   {
      //     name: "Update",
      //     value: "update",
      //     description: "Update an extension",
      //   },
      //   {
      //     name: "Delete",
      //     value: "delete",
      //     description: "Delete an extension",
      //   },
      //   {
      //     name: "Get",
      //     value: "get",
      //     description: "Get data of an extension",
      //   },
      {
        name: "Get All",
        value: "getAll",
        description: "Get data of all xdrs",
      },
    ],
    default: "create",
    description: "The operation to perform.",
  },
  // ----------------------------------
  //         DID Numbers - Get
  // ----------------------------------

  
  // --------------------------
  //         Extension - Create
  // --------------------------
  // {
  // 	displayName: 'Email',
  // 	name: 'email',
  // 	type: 'string',
  // 	default: '',
  // 	required: true,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['extension'],
  // 			operation: ['create'],
  // 		},
  // 	},
  // 	description: 'The email of the extension.',
  // },
  // {
  // 	displayName: 'ID',
  // 	name: 'id',
  // 	type: 'number',
  // 	default: 0,
  // 	required: true,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['extension'],
  // 			operation: ['update', 'get', 'delete'],
  // 		},
  // 	},
  // 	description: 'The ID of the extension.',
  // },
  // {
  // 	displayName: 'Simplify Response',
  // 	name: 'simplify',
  // 	type: 'boolean',
  // 	default: false,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['extension'],
  // 			operation: ['create', 'update', 'get', 'getAll'],
  // 		},
  // 	},
  // 	description: 'Return simplified response. Only returns the extension data.',
  // },
  // {
  // 	displayName: 'Additional Fields',
  // 	name: 'optionalFields',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['extension'],
  // 			operation: ['create'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Additional optional fields of the extension.',
  // 	placeholder: 'Add Field',
  // 	options: [
  // 		{
  // 			displayName: 'Brand ID',
  // 			name: 'brand_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description:
  // 				'The brand the extension is being registered to, will use the default brand if not entered.',
  // 		},
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Password',
  // 			name: 'password',
  // 			type: 'string',
  // 			typeOptions: {
  // 				password: true,
  // 			},
  // 			default: '',
  // 			description: 'The password of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'Phone number of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the extension, as a two letter string like "GB".',
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
  // 				'The timezone of the extension, like "Europe/London", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description:
  // 				'If the extension has confirmed ownership of their email or not, this is usually done by email when a extension registers themselves but can also be set manually. Requires a password to be set to true.',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the extension account is active or not. Inactive xdrs cannot log in to the frontend.',
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
  // 				'The access level in the organisation, either Manager (false) or Extension (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Notifications?',
  // 			name: 'organisation_notifications',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If extension is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation xdrs.',
  // 		},
  // 		{
  // 			displayName: 'Groups',
  // 			name: 'groups',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'An array of group IDs that the extension belongs to.',
  // 		},
  // 	],
  // },
  // {
  // 	displayName: 'Additional Fields',
  // 	name: 'optionalFields',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['extension'],
  // 			operation: ['update'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Additional optional fields of the extension.',
  // 	placeholder: 'Add Field',
  // 	options: [
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Email',
  // 			name: 'email',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The email address of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Password',
  // 			name: 'password',
  // 			type: 'string',
  // 			typeOptions: {
  // 				password: true,
  // 			},
  // 			default: '',
  // 			description: 'The password of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'Phone number of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the extension, as a two letter string like "GB".',
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
  // 				'The timezone of the extension, like "Europe/London", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description:
  // 				'If the extension has confirmed ownership of their email or not, this is usually done by email when a extension registers themselves but can also be set manually. Requires a password to be set to true.',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the extension account is active or not. Inactive xdrs cannot log in to the frontend.',
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
  // 				'The access level in the organisation, either Manager (false) or Extension (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Notifications?',
  // 			name: 'organisation_notifications',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If extension is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation xdrs.',
  // 		},
  // 		{
  // 			displayName: 'Groups',
  // 			name: 'groups',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'An array of group IDs that the extension belongs to.',
  // 		},
  // 	],
  // },
  // {
  // 	displayName: 'Query Parameters',
  // 	name: 'queryParameters',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['extension'],
  // 			operation: ['getAll'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Query Parameters for filtering the xdrs.',
  // 	placeholder: 'Add Parameter',
  // 	options: [
  // 		{
  // 			displayName: 'Brand ID',
  // 			name: 'brand_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'The brand the extension is registered to.',
  // 		},
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Email',
  // 			name: 'email',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The email of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description: 'If the extension has confirmed ownership of their email or not',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the extension account is active or not. Inactive xdrs cannot log in to the frontend.',
  // 		},
  // 		{
  // 			displayName: 'Organisation ID',
  // 			name: 'organisation_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'Search for xdrs by their organisation ID.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Name',
  // 			name: 'organisation_name',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Search for xdrs by their organisation name.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Phone number of the extension.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the extension, as a two letter string like "GB".',
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
  // 			resource: ['extension'],
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
  // 						loadOptionsMethod: 'getExtensionCustomFields',
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
