export type InventoryStatusResponse = {
  current_time: number;
  last_update: number;
  timestampt: number;
  next_update: number;
  refresh_interval: number;
}

export type InventoryValuesResponse = {
  market_value: number;
  value: number;
}

export type InventoryRefreshResponse = {
  current_time: number;
  last_update: number;
  timestampt: number;
  next_update: number;
  refresh_interval: number;
}
