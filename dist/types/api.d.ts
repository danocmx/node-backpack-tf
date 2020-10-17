export declare type APIParams = {
    token?: string;
    apiKey?: string;
    request: Request;
};
export interface IAPI {
    request<T1, T2>(method: Method, endpoint: string, options: RequestOptions<T1>): Promise<T2>;
}
export declare type RequestOptions<T> = {
    params?: T;
    data?: T;
    useToken?: boolean;
};
export declare type RequestParams = {
    method: Method;
    url: string;
    data?: object;
    params?: object;
};
export interface Request {
    send<T>(params: RequestParams): PromiseLike<{
        data: T;
    }>;
}
export declare type DataOptions<T> = {
    data: OptionsContents<T>;
};
export declare type ParamOptions<T> = {
    params: OptionsContents<T>;
};
export declare type OptionsContents<T extends {}> = T & {
    key?: string;
    token?: string;
};
export declare type RequestifiedParams<T> = ParamOptions<T> | DataOptions<T>;
export declare type Credentials = {
    token?: string;
} | {
    key?: string;
};
export declare type DataOrParams = 'data' | 'params';
export declare type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
