export type SearchParams = {
  intent?: string;
  pageSize?: number;
  page?: number;
  fold?: number;
  item?: string;
  steamid?: string;
  quality?: number;
  killstreak?: number;
  craftable?: number;
  australium?: number;
  texture?: string;
  itemType?: string;
  wear?: number;
  particle?: number;
  elevated?: boolean;
}

type SearchOutputParams = {
  intent: string;
  page_size: number;
  page: number;
  fold: number;
  item?: string;
  steamid?: string;
  texture_name?: string;
  wear_tier?: number;
  elevated?: number;
  item_type?: string;
  quality?: number;
  killstreak_tier?: number;
  australium?: number;
  craftable?: number;
  particle?: number;
}

export function constructSearchParams(params: SearchParams): SearchOutputParams {
    const itemBody: SearchOutputParams = {
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
