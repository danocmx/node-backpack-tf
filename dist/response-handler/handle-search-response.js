module.exports = function (data) {
    return new SearchResponse(data);
};
var SearchResponse = (function () {
    function SearchResponse(data) {
        this.total = data.total;
        this.skip = data.skip;
        this.pageSize = data.page_size;
        this.sell = new Order(data.sell);
        this.buy = new Order(data.buy);
    }
    return SearchResponse;
}());
var Order = (function () {
    function Order(data) {
        this.total = data.total;
        this.fold = data.fold;
        this.listings = mapDataToListing(data.listings);
    }
    return Order;
}());
function mapDataToListing(data) {
    return data.map(function (listing) { return (new Listing(listing)); });
}
var Listing = (function () {
    function Listing(data) {
        this.id = data.id;
        this.steamid = data.steamid;
        this.item = data.item;
        this.appid = data.appid;
        this.currencies = defaultCurrencies(data.currencies);
        this.offers = data.offers;
        this.buyout = data.buyout;
        this.details = data.details;
        this.created = data.created;
        this.bump = data.bump;
        this.intent = data.intent;
        this.automatic = data.automatic;
    }
    return Listing;
}());
function defaultCurrencies(currencies) {
    return Object.assign({}, { keys: 0, metal: 0 }, currencies);
}
