import { SellListing, BuyListing } from './listing';
export declare type MyListingsResponse = {
    cap: number;
    promotes_remaining: number;
    listings: (SellListing | BuyListing)[];
};
