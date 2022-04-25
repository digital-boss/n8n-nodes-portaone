import { INodeProperties } from 'n8n-workflow';

export const invoiceDescription = [
	// ----------------------------------
	//         Invoices - Operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['invoice'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of an invoice',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all invoices',
			},
			{
				name: 'Apply Adjustment',
				value: 'applyAdjustment',
				description: 'Apply an adjustment to an invoice',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
	// ----------------------------------
	//         Invoice - Get
	// ----------------------------------
	{
		displayName: 'Invoice ID',
		name: 'i_invoice',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['get'],
			},
		},
		description: 'Filters invoices by invoice ID.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['get'],
			},
		},
		default: {},
		description: 'Additional optional fields of the invoice.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Customer ID',
				name: 'i_customer',
				type: 'number',
				default: '',
				description:
					'Filters invoices by the ID of the customer for whom the invoices were generated.',
			},
			{
				displayName: 'Invoice Number',
				name: 'invoice_number',
				type: 'number',
				default: '',
				description:
					'Filters invoices by the invoice number. Note: the invoice number can be unique in the scope of the customer, reseller, environment; uniqueness depends on the invoice generation settings for the customer/reseller/environment.',
			},
			{
				displayName: 'Get PDF',
				name: 'get_pdf',
				type: 'boolean',
				default: false,
				description:
					'The flag indicates whether to include the PDF file in the response. Note: if the PDF file does not exist, only the invoice information will be included in the response.',
			},
		],
	},

	// --------------------------
	//         Invoice - GetAll
	// --------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['getAll'],
			},
		},
		default: {},
		description: 'Additional optional fields of the invoice.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Customer ID',
				name: 'i_customer',
				type: 'number',
				default: 0,
				description: 'The unique ID of the customer the invoice belongs to',
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
				displayName: 'Invoice number',
				name: 'invoice_number',
				type: 'number',
				default: 0,
				description: 'Refers to Invoice Number - unique identifier of the invoice',
			},
			{
				displayName: 'Issued after',
				name: 'issued_after',
				type: 'string',
				default: '',
				description: "Fetch invoices with the 'issue_date' later than this date. Use Format YYYY-MM-DD",
			},
			{
				displayName: 'Issued before',
				name: 'issued_before',
				type: 'string',
				default: '',
				description: "Fetch invoices with the 'issue_date' earlier than this date. Use Format YYYY-MM-DD",
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 100,
				description: 'Limit of invoices (maximum quantity of invoices)',
			},
		],
	},
	// --------------------------
	//         Invoice - Apply Adjustment
	// --------------------------
	{
		displayName: 'Invoice ID',
		name: 'i_invoice',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['applyAdjustment'],
			},
		},
		description: 'Invoice by invoice ID top apply adjustment to',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		default: 0,
		typeOptions: {
			numberPrecision: 2,
		},
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['applyAdjustment'],
			},
		},
		description: 'An amount of adjustment',
	},
	{
		displayName: 'Refund to Credit Card?',
		name: 'refund_to_cc',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['applyAdjustment'],
			},
		},
		description:
			'For fully paid invoices only. If set to 1, the adjustment amount will be refunded to the credit card.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['invoice'],
				operation: ['applyAdjustment'],
			},
		},
		default: {},
		description: 'Additional optional fields of the invoice.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Visible Comment',
				name: 'visible_comment',
				type: 'string',
				default: '',
				description: 'A comment on this transaction visible to the customer in the xDR browser.',
			},
			{
				displayName: 'Internal Comment',
				name: 'internal_comment',
				type: 'string',
				default: '',
				description:
					'An internal comment on this transaction; not visible in the xDR browser, and accessible only from the database directly.',
			},
		],
	},
] as INodeProperties[];
