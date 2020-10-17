declare function _exports(data: any): SearchResponse;
export = _exports;
declare class SearchResponse {
    constructor(data: any);
    total: any;
    skip: any;
    pageSize: any;
    sell: Order;
    buy: Order;
}
declare class Order {
    constructor(data: any);
    total: any;
    fold: any;
    listings: any;
}
