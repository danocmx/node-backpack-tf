import BackpackTF from './backpack-tf';
import API from './api';
import ResponseHandler from './response-handler';
import ParamConstructor from './param-constructor';

import { RequestClient } from './types/api';

export default function ({ token = '', apiKey = '', request }: { token?: string, apiKey?: string, request?: RequestClient }) {
    return new BackpackTF({
        token ,
        apiKey,
        request,
        api: new API(),
        responseHandler: ResponseHandler,
        paramConstructor: ParamConstructor,
    });
}
