export declare type CreateListingsReponse = {
    listings: {
        [item: string]: {
            created?: 1;
            error?: string;
            retry?: number;
        };
    };
};
