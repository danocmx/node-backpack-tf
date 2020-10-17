import BackpackTF from './backpack-tf';
import API from './api';
import ResponseHandler from './response-handler';
import ParamConstructor from './param-constructor';

import { Request } from './types/api';

export default function ({ token = '', apiKey = '', request }: { token: string, apiKey: string, request: Request }) {
    return new BackpackTF({
        api: new API({
            token,
            apiKey,
            request,
        }),
        responseHandler: ResponseHandler,
        paramConstructor: ParamConstructor,
    })
}
