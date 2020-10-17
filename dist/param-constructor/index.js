"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const construct_create_listings_1 = __importDefault(require("./construct-create-listings"));
const construct_heartbeat_1 = __importDefault(require("./construct-heartbeat"));
const construct_delete_listings_1 = __importDefault(require("./construct-delete-listings"));
const construct_my_listings_1 = __importDefault(require("./construct-my-listings"));
const construct_search_1 = require("./construct-search");
const paramConstructor = {
    constructCreateListings: construct_create_listings_1.default,
    constructSearch: construct_search_1.constructSearch,
    constructHeartbeat: construct_heartbeat_1.default,
    constructDeleteListings: construct_delete_listings_1.default,
    constructMyListings: construct_my_listings_1.default
};
exports.default = paramConstructor;
