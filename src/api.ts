import {
	IAPI,
	RequestOptions,
	Request,
	APIParams,
	RequestifiedParams,
	Credentials,
    Method,
} from './types/api';

class API implements IAPI {
	private requesteer!: Request;
	private apiKey?: string;
	private token?: string;

	constructor({ request, apiKey, token }: APIParams) {
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
		options: RequestOptions<T1>
	): Promise<T2> {
		const { data } = await this.requesteer.send<T2>({
			method,
			url: `https://backpack.tf/api/${endpoint}`,
			...this.getRequestData(options),
		});

		return data;
	}

	/**
	 * Chooses data to send with the request.
	 */
	getRequestData<T>({
		useToken,
		data,
		params,
	}: RequestOptions<T>): RequestifiedParams<T>|{} {
		const credential: Credentials = useToken
			? { token: this.token }
			: { key: this.apiKey };

		if (data) {
			return {
				data: {
					...credential,
					...data,
				},
			};
		}

		if (params) {
			return {
				params: {
					...credential,
					...params,
				},
			};
		}

		return {};
	}
}

export default API;
