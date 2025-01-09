export type GetSnapshotParams = {
  item: string;
};

export function constructGetSnapshotParams(params: GetSnapshotParams) {
  return {
    sku: params.item,
    appid: 440,
  };
}
