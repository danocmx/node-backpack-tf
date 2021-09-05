export type ListingParams = {
  intent: 'sell' | 'buy';
  id?: string;
  item?: {
    quality: string | number;
    name: string;
    craftable: boolean;
    priceindex: string;
  };
  offers?: boolean;
  buyout?: boolean;
  promoted?: boolean;
  details?: string;
  currencies: {
    keys: number;
    metal: number;
  };
};

export function constructCreateListingsParams(listings: ListingParams[]) {
  return {
    listings: listings.map(constructCreateListingParams),
  };
}

export function constructCreateListingParams(listing: ListingParams) {
  return {
    offers: listing.offers ? 1 : 0,
    buyout: listing.buyout ? 1 : 0,
    promoted: listing.promoted ? 1 : 0,
    details: listing.details,
    currencies: listing.currencies,
    ...(listing.intent === 'buy'
      ? {
          intent: 0,
          item: listing.item && {
            quality: listing.item.quality,
            item_name: listing.item.name,
            craftable: listing.item.craftable ? 1 : 0,
            priceindex: listing.item.priceindex,
          },
        }
      : {
          intent: 1,
          id: listing.id,
        }),
  };
}
