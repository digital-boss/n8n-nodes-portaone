import { IExecuteFunctions } from 'n8n-core';
import { ILoadOptionsFunctions, INodeExecutionData, INodePropertyOptions, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class Eloqua implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getContactFields(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
