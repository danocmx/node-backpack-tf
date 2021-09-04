import { Intent } from '../common';
import { Attributes, Currencies } from './common';

export type SnapshotResponse = {
  id: null;
  listings: SnapshotListing[];
  appid: 440;
  sku: string;
  createdAt: number;
};

export type SnapshotListing = {
  steamid: string;
  offers: 0 | 1;
  buyout: 0 | 1;
  details: string;
  intent: Intent;
  timestamp: number;
  bump: number;
  price: number;
  item: SnapshotItem;
  currencies: Partial<Currencies>;
  userAgent?: {
    lastPulse: number;
    client: string | '-';
  };
};

export type SnapshotItem = {
  id: number;
  original_id: number;
  defindex: number;
  level: number;
  quality: number;
  inventory: number;
  quantity: number;
  origin: number;
  attributes: Attributes[];
};
