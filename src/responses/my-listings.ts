import { BuyListing, SellListing } from './common';

export type MyListingsResponse = {
  cap: number;
  promotes_remaining: number;
  listings: (SellListing|BuyListing)[];
}
