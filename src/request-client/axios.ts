import axios, { AxiosInstance, AxiosError } from 'axios';

import { GetRequestOptions, PostAndDeleteRequestOptions, RequestClient } from '../types/api';

export function getAxiosRequest(instance?: AxiosInstance): RequestClient {
    return {
        async send<T>(options: GetRequestOptions|PostAndDeleteRequestOptions) {
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
