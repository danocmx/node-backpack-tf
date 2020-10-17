import { SellListing, BuyListing, Currencies, Listing, SellOrderItem, BuyOrderItem } from '../types/listing';
import {
	SearchResponse,
	SearchBuyOrders,
	SearchSellOrders,
} from '../types/search';

export function handleSearchResponse(data: SearchResponse): Search {
	return new Search(data);
}

export class Search {
	public total: number;
	public skip: number;
	public pageSize: number;
	public sell: SearchSellOrders;
	public buy: SearchBuyOrders;

	constructor(data: SearchResponse) {
		this.total = data.total;
		this.skip = data.skip;
		this.pageSize = data.page_size;

		this.sell = new SellOrders(data.sell);
		this.buy = new BuyOrders(data.buy);
	}
}

export class SellOrders {
	public total: number;
	public fold: boolean;
	public listings: SellListing[];

	constructor(data: SearchSellOrders) {
		this.total = data.total;
		this.fold = data.fold;
		this.listings = data.listings.map((listing) => new CSellListing(listing));
	}
}

export class BuyOrders {
	public total: number;
	public fold: boolean;
	public listings: BuyListing[];

	constructor(data: SearchBuyOrders) {
		this.total = data.total;
		this.fold = data.fold;
		this.listings = data.listings.map((listing) => new CBuyListing(listing));
	}
}

export class CListing {
	public id: string;
	public steamid: string;
	public appid: number;
	public currencies: Currencies;
	public offers: number;
	public buyout: number;
	public details: string;
	public created: number;
	public bump: number;
	public intent: 1|0;
	public automatic: number;
	public count: number;
    public promoted: number;
	
	constructor(data: Listing) {
		this.id = data.id;
		this.steamid = data.steamid;
		this.appid = data.appid;
		this.currencies = defaultCurrencies(data.currencies);
		this.offers = data.offers;
		this.buyout = data.buyout;
		this.details = data.details;
		this.created = data.created;
		this.bump = data.bump;
		this.count = data.count;
		this.promoted = data.promoted;
		this.intent = data.intent;
		this.automatic = data.automatic;
	}
}

export class CSellListing extends CListing {
	public intent: 1;
	public item: SellOrderItem;

	constructor(data: SellListing) {
		super(data);
		this.item = data.item;
		this.intent = data.intent;
	}
}

export class CBuyListing extends CListing {
	public intent: 0;
	public item: BuyOrderItem;

	constructor(data: BuyListing) {
		super(data);
		this.item = data.item;
		this.intent = data.intent;
	}
}

export function defaultCurrencies(currencies: Partial<Currencies>): Currencies {
	return (<any>Object).assign({}, { keys: 0, metal: 0 }, currencies);
}
