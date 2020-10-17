export type CreateListingsReponse = {
    listings: {
        [item: string]: {
            created?: 1;
            error?: string;
            retry?: number;
        };
    }
}

// @TODO: add types compliant to the bp docs.
export type CreateListingsParams = any;