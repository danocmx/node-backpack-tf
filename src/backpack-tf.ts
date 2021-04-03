import { RequestClient } from './request-client/common';
import { constructMyListingParams, MyListingsParams } from './params/my-listings';
import { constructSearchParams, SearchParams } from './params/search';
import { constructDeleteListingsParams } from './params/delete-listings';
import { constructCreateListingsParams, ListingParams } from './params/create-listings';
import { MyListingsResponse } from './responses/my-listings';
import { handleSearchResponse, SearchResponse, Search } from './responses/search';
import { DeleteListingsResponse } from './responses/delete-listings';
import { CreateListingsResponse } from './responses/create-listings';
import { HeartbeatResponse } from './responses/heartbeat';

export type BackpackTFOptions = {
  requestClient: RequestClient;
  token: string;
  apiKey: string;
};

export class BackpackTF {
  private requestClient: RequestClient;
  private apiKey: string;
  private token: string;

  constructor({ requestClient, apiKey, token }: BackpackTFOptions) {
    this.requestClient = requestClient;
    this.apiKey = apiKey;
    this.token = token;
  }

  private request<T>(
    method: "GET" | "DELETE" | "POST",
    path: string,
    {
      payload = {},
      as = 'data',
      auth = 'none'
    }: {
      payload?: Record<string, unknown>;
      as?: 'data'|'params';
      auth: 'key'|'token'|'none';
    }
  ) {
    const payloadWithAuth = { ...payload };
    if (auth === 'key') payloadWithAuth.key = this.apiKey;
    else if (auth === 'token') payloadWithAuth.token = this.token;

    return this.requestClient.send<T>({
      method,
      url: `https://backpack.tf/${path}`,
      ...(as === 'data' ? { data: payloadWithAuth } : { params: payloadWithAuth }),
    });
  }

  searchClassifieds(params: SearchParams): Promise<Search> {
    return this.request<SearchResponse>(
      "GET",
      "classifieds/search/v1",
      {
        auth: 'key',
        as: 'params',
        payload: constructSearchParams(params)
      }
    ).then((response) => {
      return handleSearchResponse(response);
    });
  }

  createListings(listings: ListingParams[]): Promise<CreateListingsResponse> {
    return this.request<CreateListingsResponse>(
      "POST",
      "classifieds/list/v1",
      {
        auth: "token",
        payload: constructCreateListingsParams(listings),
        as: 'data',
      }
    );
  }

  deleteListings(ids: string[]) {
    return this.request<DeleteListingsResponse>(
      'DELETE',
      'classifieds/delete/v1',
      {
        auth: 'token',
        payload: constructDeleteListingsParams(ids),
        as: 'data'
      }
    )
  }

  sendHeartbeat() {
    return this.request<HeartbeatResponse>(
      'POST',
      'aux/heartbeat/v1',
      {
        auth: 'token',
        payload: {},
        as: 'params'
      }
    )
  }

  getMyListings(params: MyListingsParams) {
    return this.request<MyListingsResponse>(
      'GET',
      'classifieds/listings/v1',
      {
        auth: 'token',
        payload: constructMyListingParams(params),
        as: 'params'
      }
    )
  }
}
