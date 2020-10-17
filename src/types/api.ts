export type APIParams = {
    token?: string;
    apiKey?: string;
    request: Request;
}

export interface IAPI {
    request<T1, T2>(method: Method, endpoint: string, options: RequestOptions<T1>): Promise<T2>;
}

export type RequestOptions<T> = {
    params?: T;
    data?: T;
    useToken?: boolean;
}

export type RequestParams = { method: Method, url: string, data?: object, params?: object }

export interface Request {
    send<T>(params: RequestParams): PromiseLike<{ data: T }>;
}

export type DataOptions<T> = {
    data: OptionsContents<T>
}

export type ParamOptions<T> = {
    params: OptionsContents<T>
}

export type OptionsContents<T extends {}> = T & {
    key?: string;
    token?: string;
}

export type RequestifiedParams<T> = ParamOptions<T>|DataOptions<T>;

export type Credentials = { token?: string }|{ key?: string }

export type DataOrParams = 'data'|'params';

/**
 * Taken from official axios types.
 */
export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';
