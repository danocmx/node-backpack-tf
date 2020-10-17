import BackpackTF from './backpack-tf';
import API from './api';
import { Request } from './types/api';
export default function (token: string | undefined, apiKey: string | undefined, request: Request): BackpackTF<API, {
    handleCreateListings: typeof import("./response-handler/handle-create-listings").default;
    handleSearch: typeof import("./response-handler/search").handleSearchResponse;
    handleDeleteListings: typeof import("./response-handler/handle-delete-listings").default;
    handleMyListings: typeof import("./response-handler/handle-my-listings").default;
    handleHeartbeat: typeof import("./response-handler/handle-heartbeat").default;
}, {
    constructCreateListings: typeof import("./param-constructor/construct-create-listings").default;
    constructSearch: typeof import("./param-constructor/construct-search").constructSearch;
    constructHeartbeat: typeof import("./param-constructor/construct-heartbeat").default;
    constructDeleteListings: typeof import("./param-constructor/construct-delete-listings").default;
    constructMyListings: typeof import("./param-constructor/construct-my-listings").default;
}>;
