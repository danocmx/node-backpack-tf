export type DeleteListingsResponse = {
  deleted: number;
  errors: {
    listing_id: string;
    message: string;
  }[];
};
