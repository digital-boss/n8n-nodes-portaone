"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eloquaApiRequest = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const fs = require("fs");
async function requestBaseUrlFromServer(base64Creds) {
    const options = {
        headers: { Authorization: `Basic ${base64Creds}` },
        method: "GET",
        uri: "https://login.eloqua.com/id",
        json: true,
    };
    try {
        const responseData = await this.helpers.request.call(this, options);
        const baseUrl = responseData.urls.base;
        fs.writeFileSync("./eloquaBaseUrl.txt", baseUrl);
        return baseUrl;
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
    }
}
async function getBaseUrl(base64Creds, skipCache = false) {
    let baseUrl = "";
    if (!skipCache) {
        try {
            baseUrl = fs.readFileSync("./eloquaBaseUrl.txt").toString();
        }
        catch (err) {
            baseUrl = await requestBaseUrlFromServer.call(this, base64Creds);
        }
    }
    else {
        baseUrl = await requestBaseUrlFromServer.call(this, base64Creds);
    }
    return baseUrl;
}
async function eloquaApiRequest(method, endpoint, body, query) {
    const credentials = await this.getCredentials("eloqua");
    if (credentials === undefined) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), "No credentials got returned!");
    }
    const base64Creds = Buffer.from(`${credentials.companyName}\\${credentials.userName}:${credentials.password}`).toString("base64");
    const baseUrl = await getBaseUrl.call(this, base64Creds);
    if (query === undefined) {
        query = {};
    }
    const options = {
        headers: { Authorization: `Basic ${base64Creds}` },
        method,
        qs: query,
        uri: `${baseUrl}${endpoint}`,
        json: true,
    };
    if (Object.keys(body).length !== 0) {
        options.body = body;
    }
    try {
        const responseData = await this.helpers.request(options);
        if (responseData && responseData.success === false) {
            throw new n8n_workflow_1.NodeApiError(this.getNode(), responseData);
        }
        return responseData;
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
    }
}
exports.eloquaApiRequest = eloquaApiRequest;
//# sourceMappingURL=Eloqua.node.js.map