"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EloquaApi = void 0;
class EloquaApi {
    constructor() {
        this.name = 'eloquaApi';
        this.displayName = 'Oracle Eloqua API';
        this.documentationUrl = 'eloqua';
        this.properties = [
            {
                displayName: 'Company Name',
                name: 'companyName',
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
        ];
    }
}
exports.EloquaApi = EloquaApi;
//# sourceMappingURL=EloquaApi.credentials.js.map