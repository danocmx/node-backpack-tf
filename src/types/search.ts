import { SellListing, BuyListing } from './listing';

export type SearchResponse = {
    message?: string;
    total: number;
    skip: number;
    page_size: number;
    buy: SearchBuyOrders;
    sell: SearchSellOrders;
}

export type SearchOrders = {
    total: number;
    fold: boolean;
}

export type SearchBuyOrders = SearchOrders & {
    listings: BuyListing[];
}

export type SearchSellOrders = SearchOrders & {
    listings: SellListing[];
}


export type SearchOptions = {
    intent?: string;
    pageSize?: number;
    page?: number;
    fold?: number;
    item?: string;
    steamid?: string;
    quality?: number;
    killstreak?: number;
    craftable?: number;
    australium?: number;
    texture?: string;
    itemType?: string;
    wear?: number;
    particle?: number;
    elevated?: boolean;
}

export type SearchRequestParams = {
    intent: string;
    page_size: number;
    page: number;
    fold: number;
    item?: string;
    steamid?: string;
    texture_name?: string;
    wear_tier?: number;
    elevated?: number;
    item_type?: string;
    quality?: number;
    killstreak_tier?: number;
    australium?: number;
    craftable?: number;
    particle?: number;
}
