"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eloqua = void 0;
class Eloqua {
    constructor() {
        this.name = 'eloqua';
        this.displayName = 'Oracle Eloqua';
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
                default: '',
            },
        ];
    }
}
exports.Eloqua = Eloqua;
//# sourceMappingURL=Eloqua.credentials.js.map