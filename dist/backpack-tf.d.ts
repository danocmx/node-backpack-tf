import { IAPI } from './types/api';
import { IResponseHandler, IParamConstructor, BackpackTFOptions } from './types/backpack-tf';
declare class BackpackTF<TAPI extends IAPI, TRHandler extends IResponseHandler, TConstructor extends IParamConstructor> {
    api: TAPI;
    responseHandler: TRHandler;
    paramConstructor: TConstructor;
    constructor({ api, responseHandler, paramConstructor, }: BackpackTFOptions<TAPI, TRHandler, TConstructor>);
    searchClassifieds(params: Parameters<TConstructor['constructSearch']>[0]): Promise<ReturnType<TRHandler['handleSearch']>>;
    createListings(params: Parameters<TConstructor['constructCreateListings']>[0]): Promise<ReturnType<TRHandler['handleCreateListings']>>;
    deleteListings(params: Parameters<TConstructor['constructDeleteListings']>[0]): Promise<ReturnType<TRHandler['handleDeleteListings']>>;
    sendHeartbeat(params: Parameters<TConstructor['constructHeartbeat']>[0]): Promise<ReturnType<TRHandler['handleHeartbeat']>>;
    getMyListings(params: Parameters<TConstructor['constructMyListings']>[0]): Promise<ReturnType<TRHandler['handleMyListings']>>;
}
export default BackpackTF;
