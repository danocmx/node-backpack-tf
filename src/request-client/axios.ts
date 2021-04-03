import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiRequestParams, RequestClient } from './common';

export function getAxiosRequest(instance?: AxiosInstance): RequestClient {
    return {
        async send<T>(options: ApiRequestParams) {
            try {
                const { data } = await (instance ? instance(options) : axios(options));

                return data as T;
            } catch (e) {
                if (isAxiosError(e)) {
                    throw new Error(e?.response?.data.message || e.message);
                }

                throw e;
            }
        }
    }
}

function isAxiosError(err: Error|AxiosError): err is AxiosError {
    return Object.prototype.hasOwnProperty.call(err, 'isAxiosError');
}
