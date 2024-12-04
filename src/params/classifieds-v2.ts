import { Intent } from '../common';
import { Currencies } from '../responses/common';

export type UpdateListingParam = {
  id: string;
  body: UpdateListing;
};

export type UpdateListing = {
  currencies?: Currencies;
  details?: string;
  quantity?: number;
};

export function constructDeleteAllListingsParams(intent?: Intent) {
  if (intent)
    return {
      intent,
    };

  return undefined;
}
