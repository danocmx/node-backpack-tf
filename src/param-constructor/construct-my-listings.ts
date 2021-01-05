export default function(params: { intent: 'buy'|'sell'|'all', inactive: boolean }) {
    return {
        intent: convertIntent(params.intent),
        inactive: params.inactive ? 1 : 0,
    }
}

function convertIntent(intent: string): number|undefined {
    switch (intent) {
        case 'sell': return 1;
        case 'buy': return 0;
        default: return undefined;
    }
}