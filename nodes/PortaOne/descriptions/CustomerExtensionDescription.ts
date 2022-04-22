import { INodeProperties } from 'n8n-workflow';

export const customerExtensionDescription = [
	// ----------------------------------
	//         Customer Extensions - Operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['customerExtension'],
			},
		},
		options: [
			{
				name: 'Add',
				value: 'create',
				description: 'Add an extension',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an extension',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all extensions',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
	// ----------------------------------
	//         Customer Extensions - create
	// ----------------------------------
	{
		displayName: 'Customer ID',
		name: 'i_customer',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['getAll', 'create', 'update'],
			},
		},
		description:
			'The unique ID of the customer record. Not mandatory when the method that requires this structure is executed from the retail customer realm',
	},
	{
		displayName: 'Extension Number',
		name: 'id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['create'],
			},
		},
		description: 'Extension number',
	},
	{
		displayName: 'Account ID',
		name: 'i_account',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['create'],
			},
		},
		description:
			'The unique ID of the account. Note: either i_account or i_product has to be specified',
	},
	{
		displayName: 'Product ID',
		name: 'i_product',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['create'],
			},
		},
		description:
			'The unique ID of the product. Note: either i_account or i_product has to be specified',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['create'],
			},
		},
		default: {},
		description: 'Additional optional fields of the extension.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'CPE ID',
				name: 'i_cpe',
				type: 'number',
				default: 0,
				description: 'The identifier of the CPE device.',
			},
			{
				displayName: 'Extension name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Extension name.',
			},
			{
				displayName: 'Port',
				name: 'port',
				type: 'number',
				default: 0,
				description:
					'The CPE device port that will be used by the defined or created account.',
			},
			{
				displayName: 'Promt Action',
				name: 'prompt_action',
				type: 'options',
				options: [
					{ name: 'Set', value: 'set' },
					{ name: 'Unset', value: 'unset' },
				],
				default: 'unset',
				description: 'Extension name.',
			},
			{
				displayName: 'Published?',
				name: 'published',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'N',
				description:
					'When creating an extension you can mark it as \'published\' so that it is included in the dial-by-name directory. One of the following: Y - Makes an extensions accessible via dial-by-name; N - Excludes a certain extension from being accessible via dial-by- name (e.g. you do not want telemarketers to directly reach your CEO or CFO because their names are publicly accessible)',
			},
		],
	},
	// --------------------------
	//         Customer Extension - GetAll
	// --------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['getAll'],
			},
		},
		default: {},
		description: 'Additional optional fields of the customer extension.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Account ID',
				name: 'account_id',
				type: 'number',
				default: 0,
				description: 'Search pattern for account IDs',
			},
			{
				displayName: 'Extension',
				name: 'extension',
				type: 'string',
				default: '',
				description:
					'Search pattern for extension numbers. Use the following wildcard symbols: The percentage ( % ) wildcard allows you to match any string of zero or more characters; The underscore ( _ ) wildcard allows you to match any single characters',
			},
			{
				displayName: 'Get main office extensions?',
				name: 'get_main_office_extensions',
				type: 'boolean',
				default: false,
				description:
					'If set to \'1\', then additionally a list of main office extensions will be provided for its branch office',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description: 'The number of rows to retrieve',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description:
					'Search pattern for extension names. Use the following wildcard symbols: the percent ( % ) wildcard allows you to match any string of characters; the underscore ( _ ) wildcard allows you to match any single character',
			},
		],
	},
	// ----------------------------------
	//         Customer Extensions - Update
	// ----------------------------------
	{
		displayName: 'Extension ID',
		name: 'i_c_ext',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['update'],
			},
		},
		description: 'Extension number',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customerExtension'],
				operation: ['update'],
			},
		},
		default: {},
		description: 'Additional optional fields of the extension.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Account ID',
				name: 'i_account',
				type: 'number',
				default: 0,
				description: 'The unique ID of the account.',
			},
			{
				displayName: 'CPE ID',
				name: 'i_cpe',
				type: 'number',
				default: 0,
				description: 'The identifier of the CPE device.',
			},
			{
				displayName: 'Extension name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Extension name.',
			},
			{
				displayName: 'Port',
				name: 'port',
				type: 'number',
				default: 0,
				description:
					'The CPE device port that will be used by the defined or created account.',
			},
			{
				displayName: 'Huntgroup ID',
				name: 'primary_i_c_group',
				type: 'number',
				default: 0,
				description:
					'The unique ID of a huntgroup to be assigned as the primary group for an extension (0 to unset).',
			},
			{
				displayName: 'Promt Action',
				name: 'prompt_action',
				type: 'options',
				options: [
					{ name: 'Set', value: 'set' },
					{ name: 'Unset', value: 'unset' },
				],
				default: 'unset',
				description: 'Extension name.',
			},
			{
				displayName: 'Published?',
				name: 'published',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'N',
				description:
					'When creating an extension you can mark it as \'published\' so that it is included in the dial-by-name directory. One of the following: Y - Makes an extensions accessible via dial-by-name; N - Excludes a certain extension from being accessible via dial-by- name (e.g. you do not want telemarketers to directly reach your CEO or CFO because their names are publicly accessible)',
			},
		],
	},
] as INodeProperties[];
