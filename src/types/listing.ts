export type Listing = {
    id: string;
    steamid: string;
    appid: number;
    currencies: Currencies;
    offers: number;
    buyout: number;
    details: string;
    created: number;
    bump: number;
    intent: 1|0;
    automatic: number;
    count: number;
    promoted: number;
}

export type Currencies = {
    keys: number;
    metal: number;
    usd?: number;
}

export type BuyListing = Listing & {
    item: BuyOrderItem;
    intent: 0;
}

export type SellListing = Listing & {
    item: SellOrderItem;
    intent: 1;
}

export type OrderItem = {
    defindex: number;
    quality: number;
    attributes: Attributes[];
    name: string;
    quantity: string;
}

export type SellOrderItem = OrderItem & {
    id: number;
    original_id: number;
    level: number;
    inventory: number;
    origin: number;
    style: number;
}

export type BuyOrderItem = OrderItem & {
    'user-id': string;
}

export type Attributes = {
	float_value?: number;
	defindex: number;
	value?: number|string; 
}
