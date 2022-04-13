import { INodeProperties } from "n8n-workflow";

export const accountDescription = [
  // ----------------------------------
  //         Accounts - Operations
  // ----------------------------------
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    displayOptions: {
      show: {
        resource: ["account"],
      },
    },
    options: [
      //   {
      //     name: "Create",
      //     value: "create",
      //     description: "Create an account",
      //   },
      //   {
      //     name: "Update",
      //     value: "update",
      //     description: "Update an account",
      //   },
      {
        name: "Terminate",
        value: "delete",
        description: "Terminate an account",
      },
      {
        name: "Get",
        value: "get",
        description: "Get data of an account",
      },
      {
        name: "Get All",
        value: "getAll",
        description: "Get data of all accounts",
      },
      {
        name: "Add Alias",
        value: "addAlias",
        description: "Add an alias to an account",
      },
    ],
    default: "create",
    description: "The operation to perform.",
  },
  // ----------------------------------
  //         Accounts - Get
  // ----------------------------------
  {
    displayName: "Account ID",
    name: "i_account",
    type: "number",
    default: "",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["get"],
      },
    },
    description:
      "The unique ID of the account. Note: please use either account ID or ID (PIN) or login to look for an account (only one of the fields is applicable).",
  },
  {
    displayName: "ID (PIN)",
    name: "id",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["get"],
      },
    },
    description:
      "The ID (PIN) of the account, unique in an environment. Note: please use either account ID or ID (PIN) or login to look for an account (only one of the fields is applicable).",
  },
  {
    displayName: "Login",
    name: "login",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["get"],
      },
    },
    description:
      "The account login for the account web self-care interface, unique in an environment. Note: please use either account ID or ID (PIN) or login to look for an account (only one of the fields is applicable).",
  },
  // ----------------------------------
  //         Accounts - Delete
  // ----------------------------------
  {
    displayName: "Account ID",
    name: "i_account",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["delete"],
      },
    },
    default: 0,
    description: "The unique ID of the account.",
  },
  {
    displayName: "Force?",
    name: "force",
    type: "boolean",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["delete"],
      },
    },
    default: false,
    description: "The flag specifies whether associated non-disconnectable active sessions should be ignored.",
  },
  {
    displayName: "Release assigned did?",
    name: "release_assigned_did",
    type: "boolean",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["delete"],
      },
    },
    default: true,
    description: "The flag specifies whether the previously assigned DID number should be released to the pool (true by default).",
  },
  // ----------------------------------
  //         Accounts - Add Alias
  // ----------------------------------
  {
    displayName: "Master Account ID",
    name: "i_master_account",
    type: "number",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["addAlias"],
      },
    },
    default: 0,
    description:
      "The ID of the parent account. Note: this field cannot be changed once the alias is added.",
  },
  {
    displayName: "Alias ID",
    name: "id",
    type: "number",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["addAlias"],
      },
    },
    default: 0,
    description: "The unique ID for the alias.",
  },
  {
    displayName: "Additional Fields",
    name: "additionalFields",
    type: "collection",
    displayOptions: {
      show: {
        resource: ["account"],
        operation: ["addAlias"],
      },
    },
    default: {},
    description: "Additional optional fields of the customer.",
    placeholder: "Add Field",
    options: [
      {
        displayName: "Blocked?",
        name: "blocked",
        type: "options",
        options: [
          { name: "Yes", value: "Y" },
          { name: "No", value: "N" },
        ],
        default: "No",
        description:
          "The flag indicates whether the account's calls are enabled. Shows whether SIP auth is enabled for the alias. Possible values: N - SIP auth is enabled for the alias and calls are allowed; Y - SIP auth is disabled for the alias and calls are disabled.",
      },
      {
        displayName: "Account role ID",
        name: "i_account_role",
        type: "number",
        default: 1,
        description:
          "The ID of the account role. Used to define what a specific account is designated for (e.g. whether the account represents a phone line or a top-up voucher) and executes account ID validation. Possible values: 1 - Universal; 2 - Phone line; 3 - Auto attendant; 4 - Prepaid card; 5 - PINless; 6 - IPv4 address; 7 - User@domain; 8 - Mobile.",
      },
      {
        displayName: "Realm",
        name: "realm",
        type: "string",
        default: "",
        description:
          "A custom string. Realm is used to impose a scope of uniqueness for account IDs.",
      },
    ],
  },
  // --------------------------
  //         Account - Create
  // --------------------------
  // {
  // 	displayName: 'Email',
  // 	name: 'email',
  // 	type: 'string',
  // 	default: '',
  // 	required: true,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['account'],
  // 			operation: ['create'],
  // 		},
  // 	},
  // 	description: 'The email of the account.',
  // },
  // {
  // 	displayName: 'ID',
  // 	name: 'id',
  // 	type: 'number',
  // 	default: 0,
  // 	required: true,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['account'],
  // 			operation: ['update', 'get', 'delete'],
  // 		},
  // 	},
  // 	description: 'The ID of the account.',
  // },
  // {
  // 	displayName: 'Simplify Response',
  // 	name: 'simplify',
  // 	type: 'boolean',
  // 	default: false,
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['account'],
  // 			operation: ['create', 'update', 'get', 'getAll'],
  // 		},
  // 	},
  // 	description: 'Return simplified response. Only returns the account data.',
  // },
  // {
  // 	displayName: 'Additional Fields',
  // 	name: 'optionalFields',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['account'],
  // 			operation: ['create'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Additional optional fields of the account.',
  // 	placeholder: 'Add Field',
  // 	options: [
  // 		{
  // 			displayName: 'Brand ID',
  // 			name: 'brand_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description:
  // 				'The brand the account is being registered to, will use the default brand if not entered.',
  // 		},
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the account.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the account.',
  // 		},
  // 		{
  // 			displayName: 'Password',
  // 			name: 'password',
  // 			type: 'string',
  // 			typeOptions: {
  // 				password: true,
  // 			},
  // 			default: '',
  // 			description: 'The password of the account.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'Phone number of the account.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the account, as a two letter string like "GB".',
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
  // 				'The timezone of the account, like "Europe/London", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description:
  // 				'If the account has confirmed ownership of their email or not, this is usually done by email when a account registers themselves but can also be set manually. Requires a password to be set to true.',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the account account is active or not. Inactive accounts cannot log in to the frontend.',
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
  // 				'The access level in the organisation, either Manager (false) or Account (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Notifications?',
  // 			name: 'organisation_notifications',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If account is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation accounts.',
  // 		},
  // 		{
  // 			displayName: 'Groups',
  // 			name: 'groups',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'An array of group IDs that the account belongs to.',
  // 		},
  // 	],
  // },
  // {
  // 	displayName: 'Additional Fields',
  // 	name: 'optionalFields',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['account'],
  // 			operation: ['update'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Additional optional fields of the account.',
  // 	placeholder: 'Add Field',
  // 	options: [
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the account.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the account.',
  // 		},
  // 		{
  // 			displayName: 'Email',
  // 			name: 'email',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The email address of the account.',
  // 		},
  // 		{
  // 			displayName: 'Password',
  // 			name: 'password',
  // 			type: 'string',
  // 			typeOptions: {
  // 				password: true,
  // 			},
  // 			default: '',
  // 			description: 'The password of the account.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'Phone number of the account.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the account, as a two letter string like "GB".',
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
  // 				'The timezone of the account, like "Europe/London", will default to system default if not entered.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description:
  // 				'If the account has confirmed ownership of their email or not, this is usually done by email when a account registers themselves but can also be set manually. Requires a password to be set to true.',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the account account is active or not. Inactive accounts cannot log in to the frontend.',
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
  // 				'The access level in the organisation, either Manager (false) or Account (true). Defaults to 0 for new organisation, 1 for existing organisation. Only needed with the "organisation_id" field.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Notifications?',
  // 			name: 'organisation_notifications',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If account is an organisation manager or owner, should they receive emails on updates for tickets opened by other organisation accounts.',
  // 		},
  // 		{
  // 			displayName: 'Groups',
  // 			name: 'groups',
  // 			type: 'json',
  // 			default: '',
  // 			description: 'An array of group IDs that the account belongs to.',
  // 		},
  // 	],
  // },
  // {
  // 	displayName: 'Query Parameters',
  // 	name: 'queryParameters',
  // 	type: 'collection',
  // 	displayOptions: {
  // 		show: {
  // 			resource: ['account'],
  // 			operation: ['getAll'],
  // 		},
  // 	},
  // 	default: {},
  // 	description: 'Query Parameters for filtering the accounts.',
  // 	placeholder: 'Add Parameter',
  // 	options: [
  // 		{
  // 			displayName: 'Brand ID',
  // 			name: 'brand_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'The brand the account is registered to.',
  // 		},
  // 		{
  // 			displayName: 'First Name',
  // 			name: 'firstname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The first name of the account.',
  // 		},
  // 		{
  // 			displayName: 'Last Name',
  // 			name: 'lastname',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The last name of the account.',
  // 		},
  // 		{
  // 			displayName: 'Email',
  // 			name: 'email',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'The email of the account.',
  // 		},
  // 		{
  // 			displayName: 'Confirmed?',
  // 			name: 'confirmed',
  // 			type: 'boolean',
  // 			default: false,
  // 			description: 'If the account has confirmed ownership of their email or not',
  // 		},
  // 		{
  // 			displayName: 'Active?',
  // 			name: 'active',
  // 			type: 'boolean',
  // 			default: true,
  // 			description:
  // 				'If the account account is active or not. Inactive accounts cannot log in to the frontend.',
  // 		},
  // 		{
  // 			displayName: 'Organisation ID',
  // 			name: 'organisation_id',
  // 			type: 'number',
  // 			default: 0,
  // 			description: 'Search for accounts by their organisation ID.',
  // 		},
  // 		{
  // 			displayName: 'Organisation Name',
  // 			name: 'organisation_name',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Search for accounts by their organisation name.',
  // 		},
  // 		{
  // 			displayName: 'Phone',
  // 			name: 'phone',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Phone number of the account.',
  // 		},
  // 		{
  // 			displayName: 'Country',
  // 			name: 'country',
  // 			type: 'string',
  // 			default: '',
  // 			description: 'Country of the account, as a two letter string like "GB".',
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
  // 			resource: ['account'],
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
  // 						loadOptionsMethod: 'getAccountCustomFields',
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
