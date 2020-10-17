"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var backpack_tf_1 = __importDefault(require("./backpack-tf"));
var api_1 = __importDefault(require("./api"));
var response_handler_1 = __importDefault(require("./response-handler"));
var param_constructor_1 = __importDefault(require("./param-constructor"));
var request = {
    send: function (params) { return axios_1.default(params); },
};
var api = new api_1.default({
    request: request,
    token: 'dada',
    apiKey: 'sdasdada'
});
var bptf = new backpack_tf_1.default({
    api: api,
    responseHandler: response_handler_1.default,
    paramConstructor: param_constructor_1.default,
});
var searchParams = { item: 'Pyromancer\'s Mask ' };
