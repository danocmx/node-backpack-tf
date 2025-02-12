type Attribute = {
  defindex: string | number;
  float_value?: string | number;
  value?: string | number;
  // For kits:
  is_output?: boolean;
  quantity?: string | number;
  itemdef?: string | number;
  quality?: string | number;
  attributes?: Attribute[];
};

/**
 * There are currently two formats that you can use to create listings using v2 endpoints.
 * There is this one which uses an array of "attribute" objects to represent the item (all properties except defindex, quality and craftability are defined here) and then there is the other one which uses priceindex.
 * See this comment for additional information: https://github.com/TF2Autobot/tf2autobot/issues/995#issuecomment-1037413616
 */
export type AttributeFormat = {
  defindex: string | number;
  quality: string | number;
  flag_cannot_craft?: boolean;
  attributes?: Attribute[];
};

export type PriceIndexFormat = {
  quality: string | number;
  name: string;
  craftable: boolean;
  priceindex: string;
};

export type ListingParams<T = PriceIndexFormat> = {
  intent: 'sell' | 'buy';
  id?: string;
  item?: T;
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

export function constructV2CreateListingParams<T>(listing: ListingParams<T>) {
  // If the listing is of type AttributeFormat, then we can just return it as is because we don't need to do any conversion.
  if (
    (listing as ListingParams<AttributeFormat>).item?.defindex !== undefined
  ) {
    return listing as ListingParams<AttributeFormat>;
  }

  // If no defindex is specified then attribute format won't work so safely assume it's price index.
  const item = listing.item as PriceIndexFormat;

  return {
    offers: listing.offers ? 1 : 0,
    buyout: listing.buyout ? 1 : 0,
    promoted: listing.promoted ? 1 : 0,
    details: listing.details,
    currencies: listing.currencies,
    ...(listing.intent === 'buy'
      ? {
          intent: 0,
          item: item && {
            quality: item.quality,
            item: item.name,
            craftable: item.craftable ? 1 : 0,
            priceindex: item.priceindex,
          },
        }
      : {
          intent: 1,
          id: listing.id,
        }),
  };
}
