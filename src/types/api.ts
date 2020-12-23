export type APIParams = {
	token?: string;
	apiKey?: string;
	request?: RequestClient;
};

export type Method = 'GET'|'POST'|'DELETE';

export interface IAPI {
	set(params: APIParams): any;
	request<T1, T2>(
		method: Method,
		endpoint: string,
		options: RequestOptions<T1>
	): Promise<T2>;
}

export type RequestOptions<T> = {
	payload: T;
	useToken: boolean;
};

export type RequestParams = {
	method: Method;
	url: string;
	data?: object;
	params?: object;
};

export type DataOptions<T> = {
	data: OptionsContents<T>;
};

export type ParamOptions<T> = {
	params: OptionsContents<T>;
};

export type OptionsContents<T extends {}> = T & {
	key?: string;
	token?: string;
};

export type Credentials = { token?: string } | { key?: string };

export type GetRequestOptions = {
	method: 'GET';
	url: string;
	params: { [key: string]: any };
};

export type PostAndDeleteRequestOptions = {
	method: 'POST'|'DELETE';
	url: string;
	data: { [key: string]: any };
};

export type RequestClient = {
	send<T>(options: GetRequestOptions | PostAndDeleteRequestOptions): Promise<T>;
};
