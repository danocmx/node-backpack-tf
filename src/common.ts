export type Intent = 'buy' | 'sell';

export type Cursor = {
  skip: number;
  limit: number;
  total: number;
}