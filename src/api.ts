import {
	IAPI,
	RequestOptions,
	Credentials,
	RequestClient,
	Method,
} from './types/api';

/**
 * @todo add ratelimiting
 */
class API implements IAPI {
	private requesteer!: RequestClient;
	private apiKey?: string;
	private token?: string;

	set(
		{ request, apiKey, token }: { apiKey?: string, request: RequestClient, token?: string }
	) {
		this.requesteer = request;
		this.apiKey = apiKey;
		this.token = token;
	}

	/**
	 * @param {string} method
	 * @param {string} endpoint
	 * @param {object} options
	 */
	async request<T1, T2>(
		method: Method,
		endpoint: string,
		{ useToken, payload }: RequestOptions<T1>
	): Promise<T2> {
		const credential: Credentials = useToken
			? { token: this.token }
			: { key: this.apiKey };
		const url = `https://backpack.tf/api/${endpoint}`;

		if (method === 'POST' || method === 'DELETE') {
			return this.requesteer.send<T2>({
				method,
				url,
				data: {
					...payload,
					...credential,
				},
			});
		}

		return this.requesteer.send<T2>({
			method: 'GET',
			url,
			params: {
				...payload,
				...credential,
			},
		});
	}
}

export default API;
