export default function (params: {
    intent: 'buy' | 'sell' | 'all';
    inactive: boolean;
}): {
    intent: number | undefined;
    inactive: number;
};
