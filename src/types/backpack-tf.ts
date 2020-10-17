import BackpackTF from '../backpack-tf';
import API from '../api';
import ParamConstructor from '../param-constructor';
import ResponseHandler from '../response-handler';

import { IAPI } from './api';

import { DeleteListingsResponse } from './delete-listings';
import { MyListingsResponse } from './my-listings';
import { HeartbeatResponse } from './heartbeat';
import { CreateListingsReponse } from './create-listings';
import { SearchResponse } from './search';

export interface IResponseHandler {
    handleSearch(response: SearchResponse): any;
    handleCreateListings(response: CreateListingsReponse): any;
    handleMyListings(response: MyListingsResponse): any;
    handleHeartbeat(response: HeartbeatResponse): any;
    handleDeleteListings(response: DeleteListingsResponse): any;
}

// @TODO: make compliant typees as returns
export interface IParamConstructor {
    constructSearch(params: any): any;
    constructCreateListings(params: any): any;
    constructMyListings(params: any): any;
    constructHeartbeat(params: any): any;
    constructDeleteListings(params: any): any;
}

export type BackpackTFOptions<T1 extends IAPI, T2 extends IResponseHandler, T3 extends IParamConstructor> = {
    api: T1;
    responseHandler: T2;
    paramConstructor: T3;
}

export type BPTF<T1 extends IAPI, T2 extends IResponseHandler, T3 extends IParamConstructor> = BackpackTF<T1, T2, T3>

export type DefaultBPTF = BPTF<API, typeof ResponseHandler, typeof ParamConstructor>;
