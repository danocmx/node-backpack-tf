export default function(params: { automatic: string }) {
    return {
        automatic: ['all', 'sell'].includes(params.automatic)
            ? params.automatic : 'all',
    }
}