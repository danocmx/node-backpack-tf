import { Intent } from '../common';
import { ApiResponse, Currencies } from './common';

// Type is incomplete because v2 api is subject to change.
export type V2Listing = {
  id: string;
  steamid: string;
  appid: number;
  currencies: Currencies;
  details: string;
  intent: Intent;
  automatic: number;
  promoted: boolean;
  listedAt: number;
  bumpedAt: number;
  status: 'hiddenByUser' | 'active' | 'notEnoughCurrency';
  archived: boolean;
  count: number;
  buyoutOnly: boolean;
  tradeOffersPreferred: boolean;
  item: {
    australium: boolean;
    baseName: string;
    appid: number;
    name: string;
    defindex: number;
    priceindex: string;
    tradable: boolean;
    slot: string;
    quantity: string;
  };
  user?: {
    id: string;
    tradeOfferUrl: string;
    premium: boolean;
    name: string;
    online: boolean;
  };
};

export type GetListingsResponse = ApiResponse<V2Listing>;

export type DeleteListingArchiveResponse = {
  deleted: number;
};

export type DeleteAllListingsResponse = {
  deleted: number;
};

export type FailedCreateListingResponse = {
  error: {
    message: string;
  };
};

export type SuccessCreateListingResponse = {
  result: V2Listing;
};

export type CreateListingBatchResponse = (
  | FailedCreateListingResponse
  | SuccessCreateListingResponse
)[];

export type UpdateListingBatchResponse = {
  errors: UpdateListingBatchError[];
  updated: V2Listing[];
};

export type UpdateListingBatchError = {
  index: number;
  id: string;
  message: string;
};

export type GetBatchOperationLimitResponse = {
  opLimit: number;
};
