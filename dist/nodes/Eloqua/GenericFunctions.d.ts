import { IExecuteFunctions, IHookFunctions } from 'n8n-core';
import { IDataObject, ILoadOptionsFunctions } from 'n8n-workflow';
export interface IProduct {
    fields: {
        item?: object[];
    };
}
export declare function eloquaApiRequest(this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions, method: string, endpoint: string, body: IDataObject, staticData?: IDataObject, query?: IDataObject): Promise<any>;
