import { INodeProperties } from 'n8n-workflow';

export const customerDescription = [
	// ----------------------------------
	//         Customers - Operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		options: [
			{
				name: 'Add',
				value: 'create',
				description: 'Add a customer',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an customer',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of an customer',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all customers',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
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
		description:
			'The unique ID of the customer record. Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		default: {},
		description: 'Additional optional fields of the customer.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Login',
				name: 'login',
				type: 'string',
				default: '',
				description:
					'The customers login for self-care web interface. Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description:
					'The customer name. Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
			},
			{
				displayName: 'Reference Number',
				name: 'refnum',
				type: 'string',
				default: '',
				description:
					'The reference number (custom field). Note: one of the following is used to get the customer information: customer ID, refnum, name, or login.',
			},
		]
	},

	// --------------------------
	//         Customer - GetAll
	// --------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['getAll'],
			},
		},
		default: {},
		description: 'Additional optional fields of the customer.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Bill Status',
				name: 'bill_status',
				type: 'options',
				options: [
					{ name: 'Open', value: 'O' },
					{ name: 'Suspended', value: 'S' },
					{ name: 'Closed', value: 'C' },
					{ name: 'Exported', value: 'E' },
					{ name: 'Deactivated', value: 'D' },
				],

				default: 'O',
				description: 'The billing status of the customer to search by.',
			},
			{
				displayName: 'Check usage?',
				name: 'check_usage',
				type: 'boolean',
				default: false,
				description: 'Check whether the customer has entities assigned',
			},
			{
				displayName: 'Company name',
				name: 'companyname',
				type: 'string',
				default: '',
				description: 'Customer\'s company name',
			},
			{
				displayName: 'Credit limit exceeded?',
				name: 'credit_limit_exceeded',
				type: 'boolean',
				default: false,
				description:
					'Include into the response only the customers who exceeded their credit limit.',
			},
			{
				displayName: 'First name',
				name: 'firstname',
				type: 'string',
				default: '',
				description: 'Customer\'s first name',
			},
			{
				displayName: 'Get statuses?',
				name: 'get_statuses',
				type: 'boolean',
				default: false,
				description: 'Get the statuses of the customers',
			},
			{
				displayName: 'Has invoices?',
				name: 'has_invoices',
				type: 'boolean',
				default: false,
				description: 'Filters customer list by invoice presence.',
			},
			{
				displayName: 'Customer type ID',
				name: 'i_customer_type',
				type: 'number',
				default: 0,
				description:
					'The type of the customer. Possible values: 1 - Retail customer or subcustomer, 2 - Reseller, 3 - Distributor',
			},
			{
				displayName: 'Main customer ID',
				name: 'i_main_customer',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the \'main\' customer (Main Office (HQ) customer) record within one linked customers\' group',
			},
			{
				displayName: 'Office type ID',
				name: 'i_office_type',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the Office_Types record. Possible values: 1 - none; 2 - branch_office; 3 - main_office',
			},
			{
				displayName: 'Parent ID',
				name: 'i_parent',
				type: 'number',
				default: 0,
				description: 'The unique ID of the reseller who manages the customer',
			},
			{
				displayName: 'Last name',
				name: 'lastname',
				type: 'string',
				default: '',
				description: 'Customer\'s last name',
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
				description: 'The customer name pattern',
			},
			{
				displayName: 'Spending limit reached?',
				name: 'spending_limit_reached',
				type: 'boolean',
				default: false,
				description:
					'Include into the response only the customers who reached their spending limit.',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'collection',
				default: {},
				description: 'Search customers by field(s) and value',
				placeholder: 'Add Search Option',
				options: [
					{
						displayName: 'Search by',
						name: 'search_by',
						type: 'string',
						default: '',
						description: 'Single or comma seperated list of fields to search by. Eg: \'name\' or \'firstname,lastname,companyname\'',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value to search by',
					},
				],
			},
		],
	},
	// --------------------------
	//         Customer - Create
	// --------------------------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		description: 'The name of the customer.',
	},
	{
		displayName: 'Currency',
		name: 'iso_4217',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		description:
			'The ISO 4217 code for the currency in which the customer is billed. Example values: EUR, USD, INR, etc.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		default: {},
		description: 'Additional optional fields of the customer.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Address Line 2',
				name: 'address_line_2',
				type: 'string',
				default: '',
				description:
					'The 2nd line of the customers address. Possible length: 167 characters.',
			},
			{
				displayName: 'API Token',
				name: 'api_token',
				type: 'string',
				default: '',
				description:
					'The API token of the customer. Used as an alternative to the standard login-password pairs for authenticating applications integrated with the system via API. Possible values: string of 36 characters using a combination of \'0-9\',\'a to f\', and \'-\' characters.',
			},
			{
				displayName: 'Auxilliary Fields',
				name: 'aux_fields',
				placeholder: 'Add auxilliary Field',
				description: 'Adds an auxilliary field to set the value of.',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Field',
						name: 'fields',
						values: [
							{
								displayName: 'Field Name',
								name: 'name',
								type: 'string',
								default: '',
								description: 'The field name.',
							},
							{
								displayName: 'Field Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'Value of the field to set.',
							},
						],
					},
				],
			},
			{
				displayName: 'Address first line',
				name: 'baddr1',
				type: 'string',
				default: '',
				description:
					'The 1st line of the customer\'s address. Possible length: 41 characters.',
			},
			{
				displayName: 'Balance',
				name: 'balance',
				type: 'number',
				default: 0,
				description:
					'The customer balance. Used to specify the customer\'s current balance. Note: only applicable for postpaid customers.',
			},
			{
				displayName: 'Balance Transfer Allowed?',
				name: 'balance_transfer_allowed',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'Indicates whether balance transfer is enabled for a customer. Subscriber-to-subscriber transfers allow end users to transfer prepaid amounts of money among accounts. Note: only debit and/or credit accounts with individual credit limits can transfer and receive funds. Possible values: Y - is enabled; N - is disabled.',
			},
			{
				displayName: 'BCC Email',
				name: 'bcc',
				type: 'string',
				default: '',
				description:
					'The BCC email address. Used to specify blind carbon copy. BCC allows one or more recipient email addresses to be entered, separated by commas, without revealing their information to other recipients. Recipients specified in the BCC field do not appear in the message header, and the To and Cc recipients will not know that a copy was sent to BCC recipients. Possible length: 99 characters.',
			},
			{
				displayName: 'Bill Status',
				name: 'bill_status',
				type: 'options',
				options: [
					{ name: 'Open', value: 'O' },
					{ name: 'Suspended', value: 'S' },
					{ name: 'Closed', value: 'C' },
					{ name: 'Exported', value: 'E ' },
				],
				default: 'O',
				description:
					'The customer status. Possible values: O - the customer is open; S - the customer is suspended due to an overdue invoice; C - the customer is closed due to an unpaid invoice; E - the customer is exported.',
			},
			{
				displayName: 'Bill Suspension Delayed?',
				name: 'bill_suspension_delayed',
				type: 'boolean',
				default: false,
				description:
					'Shows whether the suspension of a customers services has been delayed. Note: this field is applicable if the customer owner lifts the customer suspension (customer was suspended due to unpaid invoice, but owner wants to temporarily lift the suspension). Possible values: 0 - bill suspension is not delayed; 1 - bill suspension is delayed.',
			},
			{
				displayName: 'Billing Lock',
				name: 'billing_lock',
				type: 'options',
				options: [
					{ name: 'Vancant', value: 'N' },
					{ name: 'Engaged', value: 'C' },
					{ name: 'Engaged', value: 'L' },
				],
				default: 'N',
				description:
					'The advisory billing period closure lock. Note: used during porting the customer in dual-version configuration to prevent issues with billing. Possible values: N - vacant; C - engaged, billing period closure is restricted; F - engaged (both billing period closure and any fixups are restricted).',
			},
			{
				displayName: 'Blocked?',
				name: 'blocked',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'Indicates whether a customer\'s calls should be blocked. Used to block the customer by the administrator; no call services are provided until the administrator removes the block. Blocked customers have no access to self-care pages. Blocked customers are not subject to maintenance charges but subscription fees still apply. Possible values: Y - block account\'s calls; N - do not block account\'s calls.',
			},
			{
				displayName: 'BP Charge CC?',
				name: 'bp_charge_cc',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'The flag indicates whether to automatically charge the customer\'s credit card to pay an invoice. Note: if the value is empty, the value from the customer class should be used. This is an ineffective alternative for customers without a payment method configured. Possible values: Y - charge credit card when invoice is generated; N - don\'t charge credit card when invoice is generated; empty - use customer class value for this option (inherit value from customer class).',
			},
			{
				displayName: 'BP closure delayed info',
				name: 'bp_closure_delayed_info',
				type: 'collection',
				default: {},
				placeholder: 'Add Info',
				options: [
					{
						displayName: 'Auto Close On',
						name: 'auto_close_on',
						type: 'dateTime',
						default: '',
						description:
							'The timestamp for when the customer\'s billing period will be automatically closed.',
					},
					{
						displayName: 'Is closing scheduled?',
						name: 'is_closing_scheduled',
						type: 'options',
						options: [
							{ name: 'Yes', value: 'Y' },
							{ name: 'No', value: 'N' },
						],
						default: 'Yes',
						description:
							'Indicates whether the customer\'s billing period is scheduled to be closed.',
					},
				],
			},
			{
				displayName: 'Callshop enabled?',
				name: 'callshop_enabled',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'Indicates whether callshop features on customer\'s self-care interface are enabled. Possible values: Y - callshop features are enabled; N - callshop features are disabled.',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description:
					'The city of the customer\'s address (the city where the customer lives). Possible length: 31 characters.',
			},
			{
				displayName: 'Commission plan effective from',
				name: 'comm_plan_effective_from',
				type: 'dateTime',
				default: '',
				description:
					'The date and time when the commission plan was assigned. Commission plan is used to automatically calculate representatives\' commissions. It can contain different calculation schemas.',
			},
			{
				displayName: 'Company Name',
				name: 'companyname',
				type: 'string',
				default: '',
				description:
					'The customer\'s company name. Possible length: 100 characters.',
			},
			{
				displayName: 'Contact 1',
				name: 'cont1',
				type: 'string',
				default: '',
				description:
					'The main contact person. Used to specify the primary contact person of the customer. Possible length: 120 characters.',
			},
			{
				displayName: 'Contact 2',
				name: 'cont2',
				type: 'string',
				default: '',
				description:
					'The alternative contact person. Used to specify another person to contact if the customer or their primary contact is unreachable. Possible length: 120 characters.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description:
					'The code of the country in the ISO 3166-1 alpha-2 format. Example values: UA, KW, ES, etc.',
			},
			{
				displayName: 'Creation date',
				name: 'creation_date',
				type: 'dateTime',
				default: '',
				description: 'The date and time when the customer was created.',
			},
			{
				displayName: 'Credit Exceeded?',
				name: 'credit_exceed',
				type: 'boolean',
				default: false,
				description:
					'Indicates whether the customer\'s credit limit has been exceeded.',
			},
			{
				displayName: 'Credit Limit',
				name: 'credit_limit',
				type: 'number',
				default: 0,
				description:
					'The customer\'s credit limit value. Used to prevent the customer from going into overdraft.',
			},
			{
				displayName: 'Credit limit until',
				name: 'credit_limit_until',
				type: 'dateTime',
				default: '',
				description:
					'The date and time when the temporarily extended credit limit will be automatically reverted to the original value.',
			},
			{
				displayName: 'Credit limit warning',
				name: 'credit_limit_warning',
				placeholder: 'Add credit limit warning',
				description: 'Adds an credit limit warning.',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Field',
						name: 'fields',
						values: [
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								options: [
									{ name: 'Absolute amount', value: 'A' },
									{ name: 'Percent', value: 'P' },
								],
								default: 'A',
								description: 'The type of the warning threshold.',
							},
							{
								displayName: 'Warning Threshold',
								name: 'warning_threshold',
								type: 'number',
								default: 0,
								description:
									'The warning threshold value. Note: for postpaid customers, balance warning thresholds can be defined either as amounts or as percentages of a positive Permanent Credit Limit value. For prepaid customers, balance warning thresholds can be defined only as an amount of an Available Funds value.',
							},
						],
					},
				],
			},
			{
				displayName: 'Deactivate on',
				name: 'deactivate_on',
				type: 'dateTime',
				default: '',
				description: 'The date when the customer will be deactivated.',
			},
			{
				displayName: 'Discount rate',
				name: 'discount_rate',
				type: 'number',
				default: 0,
				description:
					'The value of the customer\'s subscription discount. Used to reduce the subscription periodic fees. The rate you enter here is the default one and applies to all of this customer\'s subscriptions: the ones assigned to the customer directly plus subscriptions assigned to their accounts',
			},
			{
				displayName: 'Balance control type ID',
				name: 'i_balance_control_type',
				type: 'number',
				default: 0,
				description:
					'The customer balance control type. This is the customer\'s balance model. It is either prepaid - a customer pays for services in advance - or postpaid - a customer pays at the end of the billing period. Possible values: 1 - postpaid (default); 2 - prepaid.',
			},
			{
				displayName: 'Billing period ID',
				name: 'i_billing_period',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s billing period. Used to define the frequency of invoicing for this customer. Possible values: 1 - daily; 2 - weekly; 3 - semimonthly; 4 - monthly; 5 - monthly (anniversary); 6 to 30 days.',
			},
			{
				displayName: 'Billing processor ID',
				name: 'i_billing_processor',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the taxation method. Used to specify a taxation plugin for calculating taxes. Note: if blank then the taxation method defined for the customer class is used; 0 means that taxes are included in the rate.',
			},
			{
				displayName: 'Comission plan ID',
				name: 'i_commission_plan',
				type: 'number',
				default: 0,
				description:
					'The ID of the overridden commission plan for this customer. Commission plan is used to automatically calculate representatives\' commissions. It can contain different calculation schemas. Note: the \'Override commission plan\' switch should be switched on.',
			},
			{
				displayName: 'Customer class ID',
				name: 'i_customer_class',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer class. Used to specify the customer class chosen for the customer. A customer class defines a set of parameters shared among a certain category of customers. Note: the customer class can have the same currency as the customer or currency can be unspecified.',
			},
			{
				displayName: 'Customer type ID',
				name: 'i_customer_type',
				type: 'number',
				default: 0,
				description:
					'The customer type. There are the following types of customers (all of whom have the same attributes, such as balance or address info): reseller - sells the service provided on your platform under his own name and product brand; distributor - resells your products to end users; retail customer - someone who actually uses the service. Possible values: 1 - retail customer or subcustomer; 2 - reseller; 3 - distributor.',
			},
			{
				displayName: 'Distributor ID',
				name: 'i_distributor',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the distributor record associated with the customer. The distributor resells your products to end users and earns commissions on those product sales.',
			},
			{
				displayName: 'Customer type ID',
				name: 'i_customer_type',
				type: 'number',
				default: 0,
				description:
					'The customer type. There are the following types of customers (all of whom have the same attributes, such as balance or address info): reseller - sells the service provided on your platform under his own name and product brand; distributor - resells your products to end users; retail customer - someone who actually uses the service. Possible values: 1 - retail customer or subcustomer; 2 - reseller; 3 - distributor.',
			},
			{
				displayName: 'DID pricing batch ID',
				name: 'i_do_batch',
				default: 0,
				description:
					'The customer type. There are the following types of customers (all of whom have the same attributes, such as balance or address info): reseller - sells the service provided on your platform under his own name and product brand; distributor - resells your products to end users; retail customer - someone who actually uses the service. Possible values: 1 - retail customer or subcustomer; 2 - reseller; 3 - distributor.',
			},
			{
				displayName: 'Web Language',
				name: 'i_lang',
				type: 'string',
				default: '',
				description:
					'The code for the customer\'s web language. Used to specify the preferred language for the customer self-care interface.',
			},
			{
				displayName: 'Main office ID',
				name: 'i_main_office',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the main office (customer record with office type 3). Main Office (HQ) - defines the \'main\' customer in the group for which the basic service configuration is done. All extensions and hunt groups added for this customer become available for all of its linked customers.',
			},
			{
				displayName: 'Number scope ID',
				name: 'i_number_scope',
				type: 'number',
				default: 0,
				description:
					'The system can generate invoices for all customers with sequential invoice numbering distributed throughout the environment. In some cases, you may want to have more than one sequence of numbers. Possible values: 1 - individual for environment; 3 - individual for customer; null - use system default.',
			},
			{
				displayName: 'Number scope reseller ID',
				name: 'i_number_scope_reseller',
				type: 'number',
				default: 0,
				description:
					'The system can generate invoices for all customers with sequential invoice numbering distributed throughout the environment. In some cases, you may want to have more than one sequence of numbers. Note: applicable only to sub-resellers of resellers. Possible values: 1 - individual for environment; 2 - individual for reseller; 3 - individual for customer; null - use system default.',
			},
			{
				displayName: 'Office type ID',
				name: 'i_office_type',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the office type. Main Office (HQ) - defines the \'main\' customer in the group for which the basic service configuration is done. All extensions and hunt groups added for this customer become available for all of its linked customers. Branch Office (site) - defines the \'subordinate\' customer created under the Main Office (HQ) customer. This customer inherits all of the main customer\'s extensions and hunt groups. Possible values: 1 - none; 2 - branch_office; 3 - main_office.',
			},
			{
				displayName: 'Parent ID',
				name: 'i_parent',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer\'s owner. Note: null means it\'s a direct customer/reseller/distributor.',
			},
			{
				displayName: 'Represenative ID',
				name: 'i_rep',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s representative. Used to specify a representative for this customer. Representatives work on behalf of the company, selling services for a commission. After you identify the representative for this customer, they start to receive a commission according to the commission plan you defined for them. Note: representatives don\'t participate in billing or revenue sharing; they are listed for information purposes only.',
			},
			{
				displayName: 'Role ID',
				name: 'i_role',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s access role. Used to allow you to control user access to all resources in the system.',
			},
			{
				displayName: 'Tariff ID',
				name: 'i_tariff',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s tariff. Used to specify a tariff to charge the reseller for calls made by their subcustomers. A tariff is a complete set of rates for a specific account, customer, or vendor. Note: applies to resellers only.',
			},
			{
				displayName: 'Incoming Tariff ID',
				name: 'i_tariff_incoming',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer\'s incoming tariff. Note: applies to resellers only.',
			},
			{
				displayName: 'Template ID',
				name: 'i_template',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s regular invoice template. An invoice template is a special HTML document that defines how your customers\' .pdf invoices look. Possible values: null - the template defined in the customer class is used; 0 - invoices are not created; [otherwise] - the unique ID of the regular invoice template.',
			},
			{
				displayName: 'Timezone ID',
				name: 'i_time_zone',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s time zone. Used to set the time zone for which to display the date and time values on the customer self-care interface.',
			},
			{
				displayName: 'Traffic profile ID',
				name: 'i_traffic_profile',
				type: 'number',
				default: 0,
				description:
					'The fraud traffic profile ID. Note: null value means the value is inherited from the customer class.',
			},
			{
				displayName: 'User interface time zone ID',
				name: 'i_ui_time_zone',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer\'s user interface time zone.  Note: to get the list of available time zones, use API method generic.get_time_zone_list; null value means the billing time will be used.',
			},
			{
				displayName: 'Discount plan ID',
				name: 'i_vd_plan',
				type: 'number',
				default: 0,
				description: 'The ID of the customer\'s discount plan.',
			},
			{
				displayName: 'Note / Description',
				name: 'note',
				type: 'string',
				default: '',
				description:
					'Used to make notes about the customer. When making changes in the customer record, the administrator can use the Notepad tab to provide a comment detailing the reason for these changes (for example, \'product changed, credited $50\').',
			},
		],
	},
	// --------------------------
	//         Customer - Update
	// --------------------------
	{
		displayName: 'Customer ID',
		name: 'i_customer',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['update'],
			},
		},
		default: 0,
		description:
			'The unique ID of the customer record. A customer is a client (an individual or a company) to whom the services are provided.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['update'],
			},
		},
		default: {},
		description: 'Additional optional fields of the customer.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Address Line 2',
				name: 'address_line_2',
				type: 'string',
				default: '',
				description:
					'The 2nd line of the customers address. Possible length: 167 characters.',
			},
			{
				displayName: 'API Token',
				name: 'api_token',
				type: 'string',
				default: '',
				description:
					'The API token of the customer. Used as an alternative to the standard login-password pairs for authenticating applications integrated with the system via API. Possible values: string of 36 characters using a combination of \'0-9\',\'a to f\', and \'-\' characters.',
			},
			{
				displayName: 'Auxilliary Fields',
				name: 'aux_fields',
				placeholder: 'Add auxilliary Field',
				description: 'Adds an auxilliary field to set the value of.',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Field',
						name: 'fields',
						values: [
							{
								displayName: 'Field Name',
								name: 'name',
								type: 'string',
								default: '',
								description: 'The field name.',
							},
							{
								displayName: 'Field Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'Value of the field to set.',
							},
						],
					},
				],
			},
			{
				displayName: 'Address first line',
				name: 'baddr1',
				type: 'string',
				default: '',
				description:
					'The 1st line of the customer\'s address. Possible length: 41 characters.',
			},
			{
				displayName: 'Balance',
				name: 'balance',
				type: 'number',
				default: 0,
				description:
					'The customer balance. Used to specify the customer\'s current balance. Note: only applicable for postpaid customers.',
			},
			{
				displayName: 'Balance Transfer Allowed?',
				name: 'balance_transfer_allowed',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'Indicates whether balance transfer is enabled for a customer. Subscriber-to-subscriber transfers allow end users to transfer prepaid amounts of money among accounts. Note: only debit and/or credit accounts with individual credit limits can transfer and receive funds. Possible values: Y - is enabled; N - is disabled.',
			},
			{
				displayName: 'BCC Email',
				name: 'bcc',
				type: 'string',
				default: '',
				description:
					'The BCC email address. Used to specify blind carbon copy. BCC allows one or more recipient email addresses to be entered, separated by commas, without revealing their information to other recipients. Recipients specified in the BCC field do not appear in the message header, and the To and Cc recipients will not know that a copy was sent to BCC recipients. Possible length: 99 characters.',
			},
			{
				displayName: 'Bill Status',
				name: 'bill_status',
				type: 'options',
				options: [
					{ name: 'Open', value: 'O' },
					{ name: 'Suspended', value: 'S' },
					{ name: 'Closed', value: 'C' },
					{ name: 'Exported', value: 'E ' },
				],
				default: 'O',
				description:
					'The customer status. Possible values: O - the customer is open; S - the customer is suspended due to an overdue invoice; C - the customer is closed due to an unpaid invoice; E - the customer is exported.',
			},
			{
				displayName: 'Bill Suspension Delayed?',
				name: 'bill_suspension_delayed',
				type: 'boolean',
				default: false,
				description:
					'Shows whether the suspension of a customers services has been delayed. Note: this field is applicable if the customer owner lifts the customer suspension (customer was suspended due to unpaid invoice, but owner wants to temporarily lift the suspension). Possible values: 0 - bill suspension is not delayed; 1 - bill suspension is delayed.',
			},
			{
				displayName: 'Billing Lock',
				name: 'billing_lock',
				type: 'options',
				options: [
					{ name: 'Vancant', value: 'N' },
					{ name: 'Engaged', value: 'C' },
					{ name: 'Engaged', value: 'L' },
				],
				default: 'N',
				description:
					'The advisory billing period closure lock. Note: used during porting the customer in dual-version configuration to prevent issues with billing. Possible values: N - vacant; C - engaged, billing period closure is restricted; F - engaged (both billing period closure and any fixups are restricted).',
			},
			{
				displayName: 'Blocked?',
				name: 'blocked',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'Indicates whether a customer\'s calls should be blocked. Used to block the customer by the administrator; no call services are provided until the administrator removes the block. Blocked customers have no access to self-care pages. Blocked customers are not subject to maintenance charges but subscription fees still apply. Possible values: Y - block account\'s calls; N - do not block account\'s calls.',
			},
			{
				displayName: 'BP Charge CC?',
				name: 'bp_charge_cc',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'The flag indicates whether to automatically charge the customer\'s credit card to pay an invoice. Note: if the value is empty, the value from the customer class should be used. This is an ineffective alternative for customers without a payment method configured. Possible values: Y - charge credit card when invoice is generated; N - don\'t charge credit card when invoice is generated; empty - use customer class value for this option (inherit value from customer class).',
			},
			{
				displayName: 'BP closure delayed info',
				name: 'bp_closure_delayed_info',
				type: 'collection',
				default: {},
				placeholder: 'Add Info',
				options: [
					{
						displayName: 'Auto Close On',
						name: 'auto_close_on',
						type: 'dateTime',
						default: '',
						description:
							'The timestamp for when the customer\'s billing period will be automatically closed.',
					},
					{
						displayName: 'Is closing scheduled?',
						name: 'is_closing_scheduled',
						type: 'options',
						options: [
							{ name: 'Yes', value: 'Y' },
							{ name: 'No', value: 'N' },
						],
						default: 'Yes',
						description:
							'Indicates whether the customer\'s billing period is scheduled to be closed.',
					},
				],
			},
			{
				displayName: 'Callshop enabled?',
				name: 'callshop_enabled',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'Y' },
					{ name: 'No', value: 'N' },
				],
				default: 'Yes',
				description:
					'Indicates whether callshop features on customer\'s self-care interface are enabled. Possible values: Y - callshop features are enabled; N - callshop features are disabled.',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description:
					'The city of the customer\'s address (the city where the customer lives). Possible length: 31 characters.',
			},
			{
				displayName: 'Commission plan effective from',
				name: 'comm_plan_effective_from',
				type: 'dateTime',
				default: '',
				description:
					'The date and time when the commission plan was assigned. Commission plan is used to automatically calculate representatives\' commissions. It can contain different calculation schemas.',
			},
			{
				displayName: 'Company Name',
				name: 'companyname',
				type: 'string',
				default: '',
				description:
					'The customer\'s company name. Possible length: 100 characters.',
			},
			{
				displayName: 'Contact 1',
				name: 'cont1',
				type: 'string',
				default: '',
				description:
					'The main contact person. Used to specify the primary contact person of the customer. Possible length: 120 characters.',
			},
			{
				displayName: 'Contact 2',
				name: 'cont2',
				type: 'string',
				default: '',
				description:
					'The alternative contact person. Used to specify another person to contact if the customer or their primary contact is unreachable. Possible length: 120 characters.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description:
					'The code of the country in the ISO 3166-1 alpha-2 format. Example values: UA, KW, ES, etc.',
			},
			{
				displayName: 'Creation date',
				name: 'creation_date',
				type: 'dateTime',
				default: '',
				description: 'The date and time when the customer was created.',
			},
			{
				displayName: 'Credit Exceeded?',
				name: 'credit_exceed',
				type: 'boolean',
				description:
					'Indicates whether the customer\'s credit limit has been exceeded.',
			},
			{
				displayName: 'Credit Limit',
				name: 'credit_limit',
				type: 'number',
				default: 0,
				description:
					'The customer\'s credit limit value. Used to prevent the customer from going into overdraft.',
			},
			{
				displayName: 'Credit limit until',
				name: 'credit_limit_until',
				type: 'dateTime',
				default: '',
				description:
					'The date and time when the temporarily extended credit limit will be automatically reverted to the original value.',
			},
			{
				displayName: 'Credit limit warning',
				name: 'credit_limit_warning',
				placeholder: 'Add credit limit warning',
				description: 'Adds an credit limit warning.',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Field',
						name: 'fields',
						values: [
							{
								displayName: 'Type',
								name: 'type',
								type: 'options',
								options: [
									{ name: 'Absolute amount', value: 'A' },
									{ name: 'Percent', value: 'P' },
								],
								default: 'A',
								description: 'The type of the warning threshold.',
							},
							{
								displayName: 'Warning Threshold',
								name: 'warning_threshold',
								type: 'number',
								default: 0,
								description:
									'The warning threshold value. Note: for postpaid customers, balance warning thresholds can be defined either as amounts or as percentages of a positive Permanent Credit Limit value. For prepaid customers, balance warning thresholds can be defined only as an amount of an Available Funds value.',
							},
						],
					},
				],
			},
			{
				displayName: 'Currency',
				name: 'iso_4217',
				type: 'string',
				default: '',
				description:
					'The ISO 4217 code for the currency in which the customer is billed. Example values: EUR, USD, INR, etc.',
			},
			{
				displayName: 'Deactivate on',
				name: 'deactivate_on',
				type: 'dateTime',
				default: '',
				description: 'The date when the customer will be deactivated.',
			},
			{
				displayName: 'Discount rate',
				name: 'discount_rate',
				type: 'number',
				default: 0,
				description:
					'The value of the customer\'s subscription discount. Used to reduce the subscription periodic fees. The rate you enter here is the default one and applies to all of this customer\'s subscriptions: the ones assigned to the customer directly plus subscriptions assigned to their accounts',
			},
			{
				displayName: 'Balance control type ID',
				name: 'i_balance_control_type',
				type: 'number',
				default: 0,
				description:
					'The customer balance control type. This is the customer\'s balance model. It is either prepaid - a customer pays for services in advance - or postpaid - a customer pays at the end of the billing period. Possible values: 1 - postpaid (default); 2 - prepaid.',
			},
			{
				displayName: 'Billing period ID',
				name: 'i_billing_period',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s billing period. Used to define the frequency of invoicing for this customer. Possible values: 1 - daily; 2 - weekly; 3 - semimonthly; 4 - monthly; 5 - monthly (anniversary); 6 to 30 days.',
			},
			{
				displayName: 'Billing processor ID',
				name: 'i_billing_processor',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the taxation method. Used to specify a taxation plugin for calculating taxes. Note: if blank then the taxation method defined for the customer class is used; 0 means that taxes are included in the rate.',
			},
			{
				displayName: 'Comission plan ID',
				name: 'i_commission_plan',
				type: 'number',
				default: 0,
				description:
					'The ID of the overridden commission plan for this customer. Commission plan is used to automatically calculate representatives\' commissions. It can contain different calculation schemas. Note: the \'Override commission plan\' switch should be switched on.',
			},
			{
				displayName: 'Customer class ID',
				name: 'i_customer_class',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer class. Used to specify the customer class chosen for the customer. A customer class defines a set of parameters shared among a certain category of customers. Note: the customer class can have the same currency as the customer or currency can be unspecified.',
			},
			{
				displayName: 'Customer type ID',
				name: 'i_customer_type',
				type: 'number',
				default: 0,
				description:
					'The customer type. There are the following types of customers (all of whom have the same attributes, such as balance or address info): reseller - sells the service provided on your platform under his own name and product brand; distributor - resells your products to end users; retail customer - someone who actually uses the service. Possible values: 1 - retail customer or subcustomer; 2 - reseller; 3 - distributor.',
			},
			{
				displayName: 'Distributor ID',
				name: 'i_distributor',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the distributor record associated with the customer. The distributor resells your products to end users and earns commissions on those product sales.',
			},
			{
				displayName: 'Customer type ID',
				name: 'i_customer_type',
				type: 'number',
				default: 0,
				description:
					'The customer type. There are the following types of customers (all of whom have the same attributes, such as balance or address info): reseller - sells the service provided on your platform under his own name and product brand; distributor - resells your products to end users; retail customer - someone who actually uses the service. Possible values: 1 - retail customer or subcustomer; 2 - reseller; 3 - distributor.',
			},
			{
				displayName: 'DID pricing batch ID',
				name: 'i_do_batch',
				default: 0,
				description:
					'The customer type. There are the following types of customers (all of whom have the same attributes, such as balance or address info): reseller - sells the service provided on your platform under his own name and product brand; distributor - resells your products to end users; retail customer - someone who actually uses the service. Possible values: 1 - retail customer or subcustomer; 2 - reseller; 3 - distributor.',
			},
			{
				displayName: 'Web Language',
				name: 'i_lang',
				type: 'string',
				default: '',
				description:
					'The code for the customer\'s web language. Used to specify the preferred language for the customer self-care interface.',
			},
			{
				displayName: 'Main office ID',
				name: 'i_main_office',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the main office (customer record with office type 3). Main Office (HQ) - defines the \'main\' customer in the group for which the basic service configuration is done. All extensions and hunt groups added for this customer become available for all of its linked customers.',
			},
			{
				displayName: 'Number scope ID',
				name: 'i_number_scope',
				type: 'number',
				default: 0,
				description:
					'The system can generate invoices for all customers with sequential invoice numbering distributed throughout the environment. In some cases, you may want to have more than one sequence of numbers. Possible values: 1 - individual for environment; 3 - individual for customer; null - use system default.',
			},
			{
				displayName: 'Number scope reseller ID',
				name: 'i_number_scope_reseller',
				type: 'number',
				default: 0,
				description:
					'The system can generate invoices for all customers with sequential invoice numbering distributed throughout the environment. In some cases, you may want to have more than one sequence of numbers. Note: applicable only to sub-resellers of resellers. Possible values: 1 - individual for environment; 2 - individual for reseller; 3 - individual for customer; null - use system default.',
			},
			{
				displayName: 'Office type ID',
				name: 'i_office_type',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the office type. Main Office (HQ) - defines the \'main\' customer in the group for which the basic service configuration is done. All extensions and hunt groups added for this customer become available for all of its linked customers. Branch Office (site) - defines the \'subordinate\' customer created under the Main Office (HQ) customer. This customer inherits all of the main customer\'s extensions and hunt groups. Possible values: 1 - none; 2 - branch_office; 3 - main_office.',
			},
			{
				displayName: 'Parent ID',
				name: 'i_parent',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer\'s owner. Note: null means it\'s a direct customer/reseller/distributor.',
			},
			{
				displayName: 'Represenative ID',
				name: 'i_rep',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s representative. Used to specify a representative for this customer. Representatives work on behalf of the company, selling services for a commission. After you identify the representative for this customer, they start to receive a commission according to the commission plan you defined for them. Note: representatives don\'t participate in billing or revenue sharing; they are listed for information purposes only.',
			},
			{
				displayName: 'Role ID',
				name: 'i_role',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s access role. Used to allow you to control user access to all resources in the system.',
			},
			{
				displayName: 'Tariff ID',
				name: 'i_tariff',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s tariff. Used to specify a tariff to charge the reseller for calls made by their subcustomers. A tariff is a complete set of rates for a specific account, customer, or vendor. Note: applies to resellers only.',
			},
			{
				displayName: 'Incoming Tariff ID',
				name: 'i_tariff_incoming',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer\'s incoming tariff. Note: applies to resellers only.',
			},
			{
				displayName: 'Template ID',
				name: 'i_template',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s regular invoice template. An invoice template is a special HTML document that defines how your customers\' .pdf invoices look. Possible values: null - the template defined in the customer class is used; 0 - invoices are not created; [otherwise] - the unique ID of the regular invoice template.',
			},
			{
				displayName: 'Timezone ID',
				name: 'i_time_zone',
				type: 'number',
				default: 0,
				description:
					'The unique ID of the customer\'s time zone. Used to set the time zone for which to display the date and time values on the customer self-care interface.',
			},
			{
				displayName: 'Traffic profile ID',
				name: 'i_traffic_profile',
				type: 'number',
				default: 0,
				description:
					'The fraud traffic profile ID. Note: null value means the value is inherited from the customer class.',
			},
			{
				displayName: 'User interface time zone ID',
				name: 'i_ui_time_zone',
				type: 'number',
				default: 0,
				description:
					'The ID of the customer\'s user interface time zone.  Note: to get the list of available time zones, use API method generic.get_time_zone_list; null value means the billing time will be used.',
			},
			{
				displayName: 'Discount plan ID',
				name: 'i_vd_plan',
				type: 'number',
				default: 0,
				description: 'The ID of the customer\'s discount plan.',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the customer.',
			},
			{
				displayName: 'Note / Description',
				name: 'note',
				type: 'string',
				default: '',
				description:
					'Used to make notes about the customer. When making changes in the customer record, the administrator can use the Notepad tab to provide a comment detailing the reason for these changes (for example, \'product changed, credited $50\').',
			},
		],
	},
] as INodeProperties[];
