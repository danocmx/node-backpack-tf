"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCurrencies = exports.CBuyListing = exports.CSellListing = exports.CListing = exports.BuyOrders = exports.SellOrders = exports.Search = exports.handleSearchResponse = void 0;
function handleSearchResponse(data) {
    return new Search(data);
}
exports.handleSearchResponse = handleSearchResponse;
class Search {
    constructor(data) {
        this.total = data.total;
        this.skip = data.skip;
        this.pageSize = data.page_size;
        this.sell = new SellOrders(data.sell);
        this.buy = new BuyOrders(data.buy);
    }
}
exports.Search = Search;
class SellOrders {
    constructor(data) {
        this.total = data.total;
        this.fold = data.fold;
        this.listings = data.listings.map((listing) => new CSellListing(listing));
    }
}
exports.SellOrders = SellOrders;
class BuyOrders {
    constructor(data) {
        this.total = data.total;
        this.fold = data.fold;
        this.listings = data.listings.map((listing) => new CBuyListing(listing));
    }
}
exports.BuyOrders = BuyOrders;
class CListing {
    constructor(data) {
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
exports.CListing = CListing;
class CSellListing extends CListing {
    constructor(data) {
        super(data);
        this.item = data.item;
        this.intent = data.intent;
    }
}
exports.CSellListing = CSellListing;
class CBuyListing extends CListing {
    constructor(data) {
        super(data);
        this.item = data.item;
        this.intent = data.intent;
    }
}
exports.CBuyListing = CBuyListing;
function defaultCurrencies(currencies) {
    return Object.assign({}, { keys: 0, metal: 0 }, currencies);
}
exports.defaultCurrencies = defaultCurrencies;
