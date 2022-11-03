import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class PortaOneBasicApi implements ICredentialType {
	name = 'portaOneBasicApi';
	displayName = 'PortaOne Basic API';
	documentationUrl = 'portaone';
	properties: INodeProperties[] = [
		{
			displayName: 'Instance URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
		},
		{
			displayName: 'User Name',
			name: 'userName',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Testing Mode',
			name: 'testingMode',
			type: 'boolean',
			default: false,
		},
	];
}
