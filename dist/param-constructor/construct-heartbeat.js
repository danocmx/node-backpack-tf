"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(params) {
    return {
        automatic: ['all', 'sell'].includes(params.automatic)
            ? params.automatic : 'all',
    };
}
exports.default = default_1;
