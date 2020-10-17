import { IAPI } from './types/api';
import { IResponseHandler, IParamConstructor, BackpackTFOptions } from './types/backpack-tf';

import { DeleteListingsResponse } from './types/delete-listings';
import { MyListingsResponse } from './types/my-listings';
import { HeartbeatResponse } from './types/heartbeat';
import { CreateListingsReponse } from './types/create-listings';
import { SearchResponse } from './types/search';

class BackpackTF<
	TAPI extends IAPI,
	TRHandler extends IResponseHandler,
	TConstructor extends IParamConstructor
> {
	public api: TAPI;
	public responseHandler: TRHandler;
	public paramConstructor: TConstructor;

	constructor({
		api,
		responseHandler,
		paramConstructor,
	}: BackpackTFOptions<TAPI, TRHandler, TConstructor>) {
		this.api = api;
		this.responseHandler = responseHandler;
		this.paramConstructor = paramConstructor;
	}

	async searchClassifieds(params: Parameters<TConstructor['constructSearch']>[0]): Promise<ReturnType<TRHandler['handleSearch']>> {        
        const response = await this.api.request<ReturnType<TConstructor['constructSearch']>, SearchResponse>(
			'GET',
			'classifieds/search/v1',
			{ params: this.paramConstructor.constructSearch(params) }
		);

		return this.responseHandler.handleSearch(response);
    }
    
    async createListings(params: Parameters<TConstructor['constructCreateListings']>[0]): Promise<ReturnType<TRHandler['handleCreateListings']>> {        
        const response = await this.api.request<ReturnType<TConstructor['constructCreateListings']>, CreateListingsReponse>(
            'POST',
            'classifieds/list/v1',
            { useToken: true, data: this.paramConstructor.constructCreateListings(params) }
        )

        return this.responseHandler.handleCreateListings(response);
	}
	
	async deleteListings(params: Parameters<TConstructor['constructDeleteListings']>[0]): Promise<ReturnType<TRHandler['handleDeleteListings']>> {
		const response = await this.api.request<ReturnType<TConstructor['constructDeleteListings']>, DeleteListingsResponse>(
            'DELETE',
            'classifieds/delete/v1',
            { useToken: true, data: this.paramConstructor.constructDeleteListings(params) }
        )

        return this.responseHandler.handleDeleteListings(response);
	}

	async sendHeartbeat(params: Parameters<TConstructor['constructHeartbeat']>[0]): Promise<ReturnType<TRHandler['handleHeartbeat']>> {
		const response = await this.api.request<ReturnType<TConstructor['constructHeartbeat']>, HeartbeatResponse>(
            'POST',
            'aux/heartbeat/v1',
            { useToken: true, data: this.paramConstructor.constructHeartbeat(params) }
        )

        return this.responseHandler.handleHeartbeat(response);
	}

	async getMyListings(params: Parameters<TConstructor['constructMyListings']>[0]): Promise<ReturnType<TRHandler['handleMyListings']>> {
		const response = await this.api.request<ReturnType<TConstructor['constructMyListings']>, MyListingsResponse>(
            'GET',
            'classifieds/listings/v1',
            { useToken: true, params: this.paramConstructor.constructMyListings(params) }
        )

        return this.responseHandler.handleMyListings(response);
	}
}

export default BackpackTF;
