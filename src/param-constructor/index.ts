import constructCreateListings from './construct-create-listings';
import constructHeartbeat from './construct-heartbeat';
import constructDeleteListings from './construct-delete-listings';
import constructMyListings from './construct-my-listings';

import { constructSearch } from './construct-search';

const paramConstructor = {
    constructCreateListings,
    constructSearch,
    constructHeartbeat,
    constructDeleteListings,
    constructMyListings
}

export default paramConstructor;
