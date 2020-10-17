"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handle_create_listings_1 = __importDefault(require("./handle-create-listings"));
const handle_delete_listings_1 = __importDefault(require("./handle-delete-listings"));
const handle_my_listings_1 = __importDefault(require("./handle-my-listings"));
const handle_heartbeat_1 = __importDefault(require("./handle-heartbeat"));
const search_1 = require("./search");
const responseHandler = {
    handleCreateListings: handle_create_listings_1.default,
    handleSearch: search_1.handleSearchResponse,
    handleDeleteListings: handle_delete_listings_1.default,
    handleMyListings: handle_my_listings_1.default,
    handleHeartbeat: handle_heartbeat_1.default
};
exports.default = responseHandler;
