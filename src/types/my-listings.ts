import { SellListing, BuyListing } from './listing';

export type MyListingsResponse = {
    cap: number;
    promotes_remaining: number;
    listings: (SellListing|BuyListing)[];
}
