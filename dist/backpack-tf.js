"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BackpackTF {
    constructor({ api, responseHandler, paramConstructor, }) {
        this.api = api;
        this.responseHandler = responseHandler;
        this.paramConstructor = paramConstructor;
    }
    searchClassifieds(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.request('GET', 'classifieds/search/v1', { params: this.paramConstructor.constructSearch(params) });
            return this.responseHandler.handleSearch(response);
        });
    }
    createListings(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.request('POST', 'classifieds/list/v1', { useToken: true, data: this.paramConstructor.constructCreateListings(params) });
            return this.responseHandler.handleCreateListings(response);
        });
    }
    deleteListings(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.request('DELETE', 'classifieds/delete/v1', { useToken: true, data: this.paramConstructor.constructDeleteListings(params) });
            return this.responseHandler.handleDeleteListings(response);
        });
    }
    sendHeartbeat(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.request('POST', 'aux/heartbeat/v1', { useToken: true, data: this.paramConstructor.constructHeartbeat(params) });
            return this.responseHandler.handleHeartbeat(response);
        });
    }
    getMyListings(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.request('GET', 'classifieds/listings/v1', { useToken: true, params: this.paramConstructor.constructMyListings(params) });
            return this.responseHandler.handleMyListings(response);
        });
    }
}
exports.default = BackpackTF;
