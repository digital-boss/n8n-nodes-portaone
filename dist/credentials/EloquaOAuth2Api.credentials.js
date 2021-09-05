"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EloquaOAuth2Api = void 0;
class EloquaOAuth2Api {
    constructor() {
        this.name = 'eloquaOAuth2Api';
        this.extends = [
            'oAuth2Api',
        ];
        this.displayName = 'Oracle Eloqua OAuth2 API';
        this.documentationUrl = 'eloqua';
        this.properties = [
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: 'https://login.eloqua.com/auth/oauth2/authorize',
                required: true,
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: 'https://login.eloqua.com/auth/oauth2/token',
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'hidden',
                default: '',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'hidden',
                default: '',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'body',
                description: 'Resource to consume.',
            },
        ];
    }
}
exports.EloquaOAuth2Api = EloquaOAuth2Api;
//# sourceMappingURL=EloquaOAuth2Api.credentials.js.map