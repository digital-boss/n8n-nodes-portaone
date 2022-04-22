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
] as INodeProperties[];
