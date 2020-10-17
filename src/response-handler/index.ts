import handleCreateListings from './handle-create-listings';
import handleDeleteListings from './handle-delete-listings'
import handleMyListings from './handle-my-listings';
import handleHeartbeat from './handle-heartbeat';

import { handleSearchResponse as handleSearch } from './search';

const responseHandler = {
    handleCreateListings,
    handleSearch,
    handleDeleteListings,
    handleMyListings,
    handleHeartbeat
}

export default responseHandler;
