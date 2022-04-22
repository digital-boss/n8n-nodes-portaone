import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class PortaOneTokenApi implements ICredentialType {
	name = 'portaOneTokenApi';
	displayName = 'PortaOne Token API';
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
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}
