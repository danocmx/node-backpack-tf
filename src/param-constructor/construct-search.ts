import { SearchOptions, SearchRequestParams } from '../types/search';

export function constructSearch(params: SearchOptions): SearchRequestParams {
    const itemBody: SearchRequestParams = {
        intent: params.intent || 'dual',
        page_size: params.pageSize || 30,
        page: params.page || 1,
        fold: params.fold || 1,
    }

    const {
        item,
        steamid,
        quality,
        killstreak,
        australium,
        craftable,
        texture,
        itemType,
        wear,
        particle,
        elevated,
    } = params;

    if (item) itemBody.item = item;
    if (steamid) itemBody.steamid = steamid;
    if (texture) itemBody.texture_name = texture;
    if (wear) itemBody.wear_tier = wear;
    if (elevated) itemBody.elevated = 11;
    if (itemType) itemBody.item_type = itemType;
    
    if (isValidNumberValue(quality)) itemBody.quality = quality;
    if (isValidNumberValue(killstreak)) itemBody.killstreak_tier = killstreak;
    if (isValidNumberValue(australium)) itemBody.australium = australium;
    if (isValidNumberValue(craftable)) itemBody.craftable = craftable;
    if (isValidNumberValue(particle)) itemBody.particle = particle;

    return itemBody;
}

function isValidNumberValue(value: number|void) {
    return value || value === 0;
}
