export declare type Listing = {
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
};
export declare type Currencies = {
    keys: number;
    metal: number;
    usd?: number;
};
export declare type BuyListing = Listing & {
    item: BuyOrderItem;
    intent: 0;
};
export declare type SellListing = Listing & {
    item: SellOrderItem;
    intent: 1;
};
export declare type OrderItem = {
    defindex: number;
    quality: number;
    attributes: Attributes[];
    name: string;
    quantity: string;
};
export declare type SellOrderItem = OrderItem & {
    id: number;
    original_id: number;
    level: number;
    inventory: number;
    origin: number;
    style: number;
};
export declare type BuyOrderItem = OrderItem & {
    'user-id': string;
};
export declare type Attributes = {
    float_value?: number;
    defindex: number;
    value?: number | string;
};
