"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backpack_tf_1 = __importDefault(require("./backpack-tf"));
const api_1 = __importDefault(require("./api"));
const response_handler_1 = __importDefault(require("./response-handler"));
const param_constructor_1 = __importDefault(require("./param-constructor"));
function default_1(token = '', apiKey = '', request) {
    return new backpack_tf_1.default({
        api: new api_1.default({
            token,
            apiKey,
            request,
        }),
        responseHandler: response_handler_1.default,
        paramConstructor: param_constructor_1.default,
    });
}
exports.default = default_1;
