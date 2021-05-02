import { Cursor } from "../common"

export type AlertResponse = {
  id: string;
  item_name: string;
  intent: 'buy' | 'sell';
  appid: 440;
  steamid: string;
  blanket?: 1;
  min?: number;
  max?: number;
  currency?: string;
}

export type GetAlertsResponse = {
  results: AlertResponse[];
  cursor: Cursor;
}
