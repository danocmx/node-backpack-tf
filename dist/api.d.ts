import { IAPI, RequestOptions, APIParams, RequestifiedParams, Method } from './types/api';
declare class API implements IAPI {
    private requesteer;
    private apiKey?;
    private token?;
    constructor({ request, apiKey, token }: APIParams);
    request<T1, T2>(method: Method, endpoint: string, options: RequestOptions<T1>): Promise<T2>;
    getRequestData<T>({ useToken, data, params, }: RequestOptions<T>): RequestifiedParams<T> | {};
}
export default API;
