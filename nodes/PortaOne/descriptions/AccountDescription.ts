import { INodeProperties } from 'n8n-workflow';

export const accountDescription = [
	// ----------------------------------
	//         Accounts - Operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of an account',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all accounts',
			},
			{
				name: 'Terminate',
				value: 'delete',
				description: 'Terminate an account',
			},
			{
				name: 'Add Alias',
				value: 'addAlias',
				description: 'Add an alias to an account',
			},
			{
				name: 'Get Custom Fields Values',
				value: 'getCustomFieldsValues',
				description: 'Get the list of account\'s custom fields',
			},
			{
				name: 'Update Custom Fields Values',
				value: 'updateCustomFieldsValues',
				description: 'Modify the account\'s custom fields',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
	// ----------------------------------
	//         Accounts - Get
	// ----------------------------------
	{
		displayName: 'Account ID',
		name: 'i_account',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get'],
			},
		},
		description:
			'The unique ID of the account. Note: please use either account ID or ID (PIN) or login to look for an account (only one of the fields is applicable).',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get'],
			},
		},
		default: {},
		description: 'Additional optional fields of the account.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'ID (PIN)',
				name: 'id',
				type: 'string',
				default: '',
				description:
					'The ID (PIN) of the account, unique in an environment. Note: please use either account ID or ID (PIN) or login to look for an account (only one of the fields is applicable).',
			},
			{
				displayName: 'Login',
				name: 'login',
				type: 'string',
				default: '',
				description:
					'The account login for the account web self-care interface, unique in an environment. Note: please use either account ID or ID (PIN) or login to look for an account (only one of the fields is applicable).',
			},
		],
	},

	// --------------------------
	//         Account - GetAll
	// --------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getAll'],
			},
		},
		default: {},
		description: 'Additional optional fields of the account.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Company name',
				name: 'companyname',
				type: 'string',
				default: '',
				description: 'Customer\'s company name',
			},
			{
				displayName: 'DID number',
				name: 'did_number',
				type: 'string',
				default: '',
				description:
					'The search pattern for the account\'s DID number. Use the following wildcard symbols: the percent ( % ) wildcard allows you to match any string of characters; the underscore ( _ ) wildcard allows you to match any single character',
			},
			{
				displayName: 'Extension ID',
				name: 'extension_id',
				type: 'string',
				default: '',
				description:
					'The search pattern for the account\'s extension number. Use the following wildcard symbols: the percent ( % ) wildcard allows you to match any string of characters; the underscore ( _ ) wildcard allows you to match any single character',
			},
			{
				displayName: 'Extension name',
				name: 'extension_name',
				type: 'string',
				default: '',
				description:
					'The search pattern for the account\'s extension name. Use the following wildcard symbols: the percent ( % ) wildcard allows you to match any string of characters; the underscore ( _ ) wildcard allows you to match any single character',
			},
			{
				displayName: 'Get not closed accounts?',
				name: 'get_not_closed_accounts',
				type: 'boolean',
				default: false,
				description:
					'Indicates whether to fetch only accounts with statuses different from \'closed\'',
			},
			{
				displayName: 'Get only real accounts?',
				name: 'get_only_real_accounts',
				type: 'boolean',
				default: false,
				description: 'Indicates whether to fetch only debit, credit and beneficiary accounts',
			},
			{
				displayName: 'Get statuses?',
				name: 'get_statuses',
				type: 'boolean',
				default: false,
				description: 'Indicates whether to fetch the statuses of the accounts',
			},
			{
				displayName: 'Customer ID',
				name: 'i_customer',
				type: 'number',
				default: 0,
				description:
					'Filters accounts by the ID of the customer record to which the account belongs',
			},
			{
				displayName: 'Customer site ID',
				name: 'i_customer_site',
				type: 'number',
				default: 0,
				description: 'Filters accounts by the ID of the customer site',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description: 'The number of rows to retrieve',
			},
			{
				displayName: 'Sip status?',
				name: 'sip_status',
				type: 'boolean',
				default: false,
				description:
					'Indicates whether to fetch accounts which are used by a SIP phone to register with a PortaSIP server',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description:
					'Filters accounts by the province or state of the account owner\'s address (the province or state where the account owner resides)',
			},
		],
	},
	// ----------------------------------
	//         Accounts - Delete
	// ----------------------------------
	{
		displayName: 'Account ID',
		name: 'i_account',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'The unique ID of the account.',
	},
	{
		displayName: 'Force?',
		name: 'force',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['delete'],
			},
		},
		default: false,
		description:
			'The flag specifies whether associated non-disconnectable active sessions should be ignored.',
	},
	{
		displayName: 'Release assigned did?',
		name: 'release_assigned_did',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['delete'],
			},
		},
		default: true,
		description:
			'The flag specifies whether the previously assigned DID number should be released to the pool (true by default).',
	},
	// ----------------------------------
	//         Accounts - Add Alias
	// ----------------------------------
	{
		displayName: 'Master Account ID',
		name: 'i_master_account',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['addAlias'],
			},
		},
		default: 0,
		description:
			'The ID of the parent account. Note: this field cannot be changed once the alias is added.',
	},
	{
		displayName: 'Alias ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['addAlias'],
			},
		},
		default: 0,
		description: 'The unique ID for the alias.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['addAlias'],
			},
		},
		default: {},
		description: 'Additional optional fields of the customer.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Blocked?',
				name: 'blocked',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'N',
				description:
					'The flag indicates whether the account\'s calls are enabled. Shows whether SIP auth is enabled for the alias. Possible values: N - SIP auth is enabled for the alias and calls are allowed; Y - SIP auth is disabled for the alias and calls are disabled.',
			},
			{
				displayName: 'Account role ID',
				name: 'i_account_role',
				type: 'number',
				default: 1,
				description:
					'The ID of the account role. Used to define what a specific account is designated for (e.g. whether the account represents a phone line or a top-up voucher) and executes account ID validation. Possible values: 1 - Universal; 2 - Phone line; 3 - Auto attendant; 4 - Prepaid card; 5 - PINless; 6 - IPv4 address; 7 - User@domain; 8 - Mobile.',
			},
			{
				displayName: 'Realm',
				name: 'realm',
				type: 'string',
				default: '',
				description:
					'A custom string. Realm is used to impose a scope of uniqueness for account IDs.',
			},
		],
	},

	// ----------------------------------
	//         Accounts - Get Custom Fields Values
	// ----------------------------------
	{
		displayName: 'Account ID',
		name: 'i_account',
		required: true,
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getCustomFieldsValues'],
			},
		},
		description: 'The unique ID of the account record',
	},

	// ----------------------------------
	//         Accounts - Update Custom Fields Values
	// ----------------------------------
	{
		displayName: 'Custom Fields Values',
		name: 'custom_fields_values',
		required: true,
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateCustomFieldsValues'],
			},
		},
		default: '',
		description: 'The list of Custom Fields values for the given account',
		options: [
			{
				displayName: 'Field',
				name: 'fields',
				values: [
					{
						displayName: 'DB Value',
						name: 'db_value',
						type: 'string',
						default: '',
						description: 'Database value of the custom field',
					},
					{
						displayName: 'Custom Field ID',
						name: 'i_custom_field',
						type: 'string',
						default: '',
						description: 'The unique ID of the custom field. Either the \'i_custom_field\' or the \'name\' is required for the \'update_custom_fields_values\' method.',
					},
					{
						displayName: 'Custom Field Value ID',
						name: 'i_custom_field_value',
						type: 'string',
						default: '',
						description: 'The unique ID of the custom field value. The field is ignored in the \'update_custom_fields_values\' method request.',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: ' The unique ID of the custom field value. The field is ignored in the \'update_custom_fields_values\' method request.',
					},
				],
			},
		],
	},

	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateCustomFieldsValues'],
			},
		},
		default: {},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Account ID',
				name: 'i_account',
				type: 'number',
				default: '',
				description: 'The unique ID of the account record',
			},
		],
	},

] as INodeProperties[];
