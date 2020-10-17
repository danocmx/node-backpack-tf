"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(params) {
    return {
        intent: convertIntent(params.intent),
        inactive: params.inactive ? 0 : 1,
    };
}
exports.default = default_1;
function convertIntent(intent) {
    switch (intent) {
        case 'sell': return 1;
        case 'buy': return 0;
        default: return undefined;
    }
}
