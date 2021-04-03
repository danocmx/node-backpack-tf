export type CreateListingsResponse = {
  listings: {
      [item: string]: {
          created?: 1;
          error?: string;
          retry?: number;
      };
  }
}