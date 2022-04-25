import { INodeProperties } from 'n8n-workflow';

export const billingSessionDescription = [
	// ----------------------------------
	//         Invoices - Operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['billingSessions'],
			},
		},
		options: [
			{
				name: 'Get All Active Sessions',
				value: 'getAllActiveSessions',
				description: 'Get data of all active sessions',
			},
		],
		default: 'getAllActiveSessions',
		description: 'The operation to perform.',
	},
	// --------------------------
	//         Billing Sessions - getAllActiveSessions
	// --------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['billingSessions'],
				operation: ['getAllActiveSessions'],
			},
		},
		default: {},
		description: 'Additional optional fields of the active billing sessions.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Account ID',
				name: 'account_id',
				type: 'string',
				default: '',
				description:
					'The ID (PIN) of the account on the PortaBilling interface, unique in the environment',
			},
			{
				displayName: 'Call ID',
				name: 'call_id',
				type: 'string',
				default: '',
				description: 'The call-id of the session',
			},
			{
				displayName: 'Called line phone number',
				name: 'cld',
				type: 'string',
				default: '',
				description: 'The called line phone number',
			},
			{
				displayName: 'Calling line phone number',
				name: 'cli',
				type: 'string',
				default: '',
				description: 'The calling line phone number',
			},
			{
				displayName: 'Get total?',
				name: 'get_total',
				type: 'boolean',
				default: false,
				description: 'Get the total number of the retrieved active session records',
			},
			{
				displayName: 'H323 conf ID',
				name: 'h323_conf_id',
				type: 'string',
				default: '',
				description: 'The h323-conf-id of the session',
			},
			{
				displayName: 'Hotlined?',
				name: 'hotlined',
				type: 'boolean',
				default: false,
				description: 'The flag that shows whether the session is hotlined (Internet sessions only)',
			},
			{
				displayName: 'Connection ID',
				name: 'i_connection',
				type: 'number',
				default: 0,
				description: 'The unique ID of the connection',
			},
			{
				displayName: 'Customer ID',
				name: 'i_customer',
				type: 'number',
				default: 0,
				description: 'The unique ID of the customer record',
			},
			{
				displayName: 'Node ID',
				name: 'i_node',
				type: 'number',
				default: 0,
				description: 'The unique ID of the node',
			},
			{
				displayName: 'Parent ID',
				name: 'i_parent',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the reseller (to get invoices for all subcustomers of this reseller)',
			},
			{
				displayName: 'Service Type ID',
				name: 'i_service_type',
				type: 'number',
				default: 0,
				description: 'The unique ID of the service type',
			},
			{
				displayName: 'Vendor ID',
				name: 'i_vendor',
				type: 'number',
				default: 0,
				description: 'The unique ID of the vendor record',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description:
					'The number of rows to retrieve. Mandatory for an API request with the offset property specified',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 100,
				description:
					'The number of rows to skip at the beginning of the list. Requires the limit property to be specified in the API request',
			},
			{
				displayName: 'On Net',
				name: 'on_net',
				type: 'options',
				options: [
					{ name: 'On net only', value: 'on-net_only' },
					{ name: 'Exclude', value: 'exclude' },
					{ name: 'Exclude incoming', value: 'exclude_incoming' },
				],
				default: 'on-net_only',
				description:
					'Filter the session list by the on-net status. Possible values: \'on-net_only\' - Include only on-net sessions; \'exclude\' - Do not include on-net sessions; \'exclude_incoming\' - Do not include incoming on-net sessions',
			},
			{
				displayName: 'Parent session ID',
				name: 'parent_session_id',
				type: 'string',
				default: '',
				description: 'The parent session ID',
			},
			{
				displayName: 'Source IP',
				name: 'source_ip',
				type: 'string',
				default: '',
				description: 'The IP address of the entity',
			},
			{
				displayName: 'With CLD country?',
				name: 'with_cld_country',
				type: 'boolean',
				default: false,
				description:
					'Specifies whether the information about country and subdivision of CLD should be included in the response',
			},
			{
				displayName: 'With nodes?',
				name: 'with_nodes',
				type: 'boolean',
				default: false,
				description:
					'Specifies whether the information about used nodes should be included in the response',
			},
			{
				displayName: 'With resale hierarchy?',
				name: 'with_resale_hierarchy',
				type: 'boolean',
				default: false,
				description:
					'Specifies whether the information about the resellers hierarchy should be included in the response',
			},
		],
	},
] as INodeProperties[];
