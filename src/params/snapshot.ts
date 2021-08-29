export type GetSnapshotParams = {
  item: string;
  skip?: number;
};

export function constructGetSnapshotParams(params: GetSnapshotParams) {
  return {
    sku: params.item,
    skip: params.skip || 0,
    appid: 440,
  };
}
