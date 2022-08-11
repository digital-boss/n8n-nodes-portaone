import { INodeProperties } from 'n8n-workflow';

export const customerXdrsDescription = [
	// ----------------------------------
	//         Customer Xdrs - Operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['customerXdrs'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all xdrs',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
	// ----------------------------------
	//         Customer Xdrs - Get
	// ----------------------------------
	{
		displayName: 'Customer ID',
		name: 'i_customer',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['customerXdrs'],
				operation: ['getAll'],
			},
		},
		description:
			'The unique ID of the customer record. Not mandatory when the method that requires this structure is executed from the retail customer realm',
	},
	{
		displayName: 'From Date',
		name: 'from_date',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customerXdrs'],
				operation: ['getAll'],
			},
		},
		description: 'Get xDRs with bill_time starting from this date.',
	},
	{
		displayName: 'To Date',
		name: 'to_date',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customerXdrs'],
				operation: ['getAll'],
			},
		},
		description: 'Get xDRs with bill_time before this date.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customerXdrs'],
				operation: ['getAll'],
			},
		},
		default: {},
		description: 'Additional optional fields of the customer XDRS.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Billing model',
				name: 'billing_model',
				type: 'number',
				default: 0,
				description:
					'Indicates whether the data should be retrieved for the credit entries or for the debit ones. Possible values: 1 - Credit accounts; -1 - Debit accounts; Empty - Return both.',
			},
			{
				displayName: 'Call ID',
				name: 'call_id',
				type: 'string',
				default: '',
				description: 'The unique identifier of the call.',
			},
			{
				displayName: 'Call recording?',
				name: 'call_recording',
				type: 'boolean',
				default: false,
				description:
					'Set this flag to filter xDRs by their call recording status. When it\'s not provided, all xDRs are obtained.',
			},
			{
				displayName: 'CRD entity',
				name: 'on_net',
				type: 'options',
				options: [
					{ name: 'Account xDRs', value: 'A' },
					{ name: 'Customer xDRs', value: 'C' },
				],
				default: 'C',
				description:
					'Flag indicates from where CDRs should be returned. Possible values: A - account xDRs; C - customer xDRs; Do not send - Return account and customer xDRs.',
			},
			{
				displayName: 'Called line phone number',
				name: 'cld',
				type: 'string',
				default: '',
				description: 'The called line phone number.',
			},
			{
				displayName: 'Calling line phone number',
				name: 'cli',
				type: 'string',
				default: '',
				description: 'The calling line phone number.',
			},
			{
				displayName: 'Connect time after',
				name: 'connect_time_after',
				type: 'dateTime',
				default: '',
				description: 'Get xDRs with connect_time after this date.',
			},
			{
				displayName: 'Connect time before',
				name: 'connect_time_before',
				type: 'dateTime',
				default: '',
				description: 'Get xDRs with connect_time before this date.',
			},
			{
				displayName: 'Enable safe mode?',
				name: 'enable_safe_mode',
				type: 'boolean',
				default: false,
				description: 'The flag shows whether to check the amount of data before processing.',
			},
			{
				displayName: 'For current period?',
				name: 'for_current_period',
				type: 'boolean',
				default: false,
				description: 'Specifies whether to show xDRs for the current billing period.',
			},
			{
				displayName: 'Format',
				name: 'format',
				type: 'string',
				default: '',
				description:
					'This parameter allows API user to get xDRs in other formats via SOAP attachment. Currently only the .csv format is supported.',
			},
			{
				displayName: 'Get split xDRs?',
				name: 'get_split_xdrs',
				type: 'boolean',
				default: false,
				description: 'If set, split xDRs will be present in the response.',
			},
			{
				displayName: 'Get total?',
				name: 'get_total',
				type: 'boolean',
				default: false,
				description: 'Get the total number of the retrieved xDRs.',
			},
			{
				displayName: 'H323 conf ID',
				name: 'h323_conf_id',
				type: 'string',
				default: '',
				description: 'The h323-conf-id of the session.',
			},
			{
				displayName: 'History pattern',
				name: 'history_pattern',
				type: 'string',
				default: '',
				description: 'Specifies whether to show xDRs with history that matches the pattern.',
			},
			{
				displayName: 'Customer type ID',
				name: 'i_customer_type',
				type: 'number',
				default: 0,
				description: 'The unique ID of the xDR owner customer type.',
			},
			{
				displayName: 'Destination group ID',
				name: 'i_dest_group',
				type: 'number',
				default: 0,
				description: 'The unique ID of the destination group.',
			},
			{
				displayName: 'Invoice ID',
				name: 'i_invoice',
				type: 'number',
				default: 0,
				description:
					'Indicates what xDRs will be shown: nill - Midterm xDRs and out-of-turn xDRs; 0 - Out-of-turn xDRs; Not set - xDRs of all types.',
			},
			{
				displayName: 'Service ID',
				name: 'i_service',
				type: 'number',
				default: 0,
				description: 'ID of the Service, refers to the Services table.',
			},
			{
				displayName: 'Service Type ID',
				name: 'i_service_type',
				type: 'number',
				default: 0,
				description: 'The unique ID of the related service type.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description:
					'The number of rows to retrieve. Mandatory for an API request with the offset property specified.',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 100,
				description:
					'The number of rows to skip at the beginning of the list. Requires the limit property to be specified in the API request.',
			},
			{
				displayName: 'Quality',
				name: 'quality',
				type: 'string',
				default: '',
				description: 'The call quality.',
			},
			{
				displayName: 'Roaming?',
				name: 'roaming',
				type: 'boolean',
				default: false,
				description: 'Set this flag to filter xDRs by their roaming status. When it is not provided, all xDRs are obtained.',
			},
			{
				displayName: 'Show hidden?',
				name: 'show_hidden',
				type: 'boolean',
				default: false,
				description: 'If the method is called by the administrator and is set to 1, the list of hidden xDRs will be provided in the response.',
			},
			{
				displayName: 'Show unsuccessful?',
				name: 'show_unsuccessful',
				type: 'boolean',
				default: false,
				description: 'Show xDRs of unsuccessful attempts.',
			},
			{
				displayName: 'With CR download IDs?',
				name: 'with_cr_download_ids',
				type: 'boolean',
				default: false,
				description: 'If set, then each xDR will contain download ids to the recorded files if any.',
			},
			{
				displayName: 'With netaccess usage?',
				name: 'with_netaccess_usage',
				type: 'boolean',
				default: false,
				description: 'If set, then each netaccess xDR will contain the \'bytes_downloaded\' and \'bytes_uploaded\' fields in the response.',
			},
		],
	},
] as INodeProperties[];
