import handleCreateListings from './handle-create-listings';
import handleDeleteListings from './handle-delete-listings';
import handleMyListings from './handle-my-listings';
import handleHeartbeat from './handle-heartbeat';
import { handleSearchResponse as handleSearch } from './search';
declare const responseHandler: {
    handleCreateListings: typeof handleCreateListings;
    handleSearch: typeof handleSearch;
    handleDeleteListings: typeof handleDeleteListings;
    handleMyListings: typeof handleMyListings;
    handleHeartbeat: typeof handleHeartbeat;
};
export default responseHandler;
