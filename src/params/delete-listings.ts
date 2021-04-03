export function constructDeleteListingsParams(
  ids: string[]
): { listing_ids: string[] } {
  return {
    listing_ids: ids,
  };
}
