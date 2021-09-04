export type CursorParams = {
  skip?: number;
  limit?: number;
}

export function constructCursorParams(params?: CursorParams) {
  return params;
}
