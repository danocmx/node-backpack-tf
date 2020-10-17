import { SellListing, BuyListing, Currencies, Listing, SellOrderItem, BuyOrderItem } from '../types/listing';
import { SearchResponse, SearchBuyOrders, SearchSellOrders } from '../types/search';
export declare function handleSearchResponse(data: SearchResponse): Search;
export declare class Search {
    total: number;
    skip: number;
    pageSize: number;
    sell: SearchSellOrders;
    buy: SearchBuyOrders;
    constructor(data: SearchResponse);
}
export declare class SellOrders {
    total: number;
    fold: boolean;
    listings: SellListing[];
    constructor(data: SearchSellOrders);
}
export declare class BuyOrders {
    total: number;
    fold: boolean;
    listings: BuyListing[];
    constructor(data: SearchBuyOrders);
}
export declare class CListing {
    id: string;
    steamid: string;
    appid: number;
    currencies: Currencies;
    offers: number;
    buyout: number;
    details: string;
    created: number;
    bump: number;
    intent: 1 | 0;
    automatic: number;
    count: number;
    promoted: number;
    constructor(data: Listing);
}
export declare class CSellListing extends CListing {
    intent: 1;
    item: SellOrderItem;
    constructor(data: SellListing);
}
export declare class CBuyListing extends CListing {
    intent: 0;
    item: BuyOrderItem;
    constructor(data: BuyListing);
}
export declare function defaultCurrencies(currencies: Partial<Currencies>): Currencies;
