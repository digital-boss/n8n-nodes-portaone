import { INodeProperties } from 'n8n-workflow';

export const didNumbersDescription = [
	// ----------------------------------
	//         DID Numbers - Operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['didNumbers'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all did numbers',
			},
			{
				name: 'Assign to customer',
				value: 'assignToCustomer',
				description: 'Assign DID number to customer',
			},
			{
				name: 'Assign to account',
				value: 'assignToAccount',
				description: 'Assign DID number to account',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
	// --------------------------
	//         Did Numbers - GetAll
	// --------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['didNumbers'],
				operation: ['getAll'],
			},
		},
		default: {},
		description: 'Additional optional fields of the DID numbers.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Available to customer',
				name: 'available_to_customer',
				type: 'number',
				default: '',
				description:
					'Filters DID numbers by the customer IDr. Note: use i_customer value from customer_info.i_customer field',
			},
			{
				displayName: 'Customer ID',
				name: 'i_customer',
				type: 'number',
				default: 0,
				description:
					'Filters DID numbers by the ID of the customer who owns the DID number.',
			},
			{
				displayName: 'DV batch ID',
				name: 'i_dv_batch',
				type: 'number',
				default: 0,
				description: 'Filters DID numbers by the vendor batch they belong to.',
			},
			{
				displayName: 'Group ID',
				name: 'i_group',
				type: 'number',
				default: 0,
				description: 'Filters DID numbers by the DID group they belong to.',
			},
			{
				displayName: 'Vendor ID',
				name: 'i_vendor',
				type: 'number',
				default: 0,
				description: 'Filter DID numbers by the vendor they belong to.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description: 'The number of rows to retrieve',
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'string',
				default: '',
				description:
					'Filters DID numbers using a number search pattern. Used to find a specific DID number(s). You can find all the DID numbers that match a specific pattern; for example, enter 1800 to find all 1-800 numbers. Note: use % as a wildcard: %value - ends with value; value% - starts with value; %value% - contains value',
			},
			{
				displayName: 'Number List',
				name: 'number_list',
				placeholder: 'Add Number Field',
				description: 'Adds a DID number ID field',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						name: 'fields',
						displayName: 'Field',
						values: [
							{
								displayName: 'DID number ID',
								name: 'i_did_number',
								type: 'number',
								default: 0,
								description: 'The ID of the DID number record',
							},
						],
					},
				],
			},
			{
				displayName: 'Usage',
				name: 'usage',
				type: 'options',
				options: [
					{ name: 'All', value: 'A' },
					{ name: 'Idle', value: 'I' },
					{ name: 'Used', value: 'U' },
					{ name: 'Free', value: 'F' },
					{ name: 'Frozen', value: 'Z' },
				],
				default: 'A',
				description:
					'Filter DID number list by usage. Possible values: I - idle (assigned to neither an account nor a customer); U - used (assigned to an account); F - not used (idle and/or assigned to a customer, but not to an account); A - all (the default value); Z - frozen (displayed on the administrator\'s DID inventory page only).',
			},
		],
	},
	// ----------------------------------
	//         DID Numbers - AssignToCustomer
	// ----------------------------------
	{
		displayName: 'Customer ID',
		name: 'i_customer',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				operation: ['assignToCustomer'],
				resource: ['didNumbers'],
			},
		},
		description: 'The ID of the customer record to which the DID will belong.',
	},
	{
		displayName: 'DID number ID',
		name: 'i_did_number',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				operation: ['assignToCustomer'],
				resource: ['didNumbers'],
			},
		},
		description: 'The DID Number ID.',
	},
	// ----------------------------------
	//         DID Numbers - AssignToAccount
	// ----------------------------------
	{
		displayName: 'Master Account ID',
		name: 'i_master_account',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				operation: ['assignToAccount'],
				resource: ['didNumbers'],
			},
		},
		description: 'The unique ID of the account this DID number is assigned to.',
	},
	{
		displayName: 'DID number ID',
		name: 'i_did_number',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				operation: ['assignToAccount'],
				resource: ['didNumbers'],
			},
		},
		description: 'The DID Number ID.',
	},
] as INodeProperties[];
