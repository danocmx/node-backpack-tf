import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiRequestParams, RequestClient } from './common';

export function getAxiosRequest(instance?: AxiosInstance): RequestClient {
  return {
    async send<T>(options: ApiRequestParams) {
      try {
        const { data } = await (instance ? instance(options) : axios(options));

        return data as T;
      } catch (e: unknown) {
        if (isAxiosError<{ message?: string }>(e)) {
          const message: string = e?.response?.data?.message || e.message;
          throw new Error(`${options.method} ${options.url}: ${message}`);
        }

        throw e;
      }
    },
  };
}

function isAxiosError<TResponse>(err: unknown | AxiosError<TResponse>): err is AxiosError<TResponse> {
  return Object.prototype.hasOwnProperty.call(err, 'isAxiosError');
}
