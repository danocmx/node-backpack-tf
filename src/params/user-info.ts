export type UserInfoParams = string[];

export function constructUserInfoParams(params: UserInfoParams) {
  return {
    steamids: params.join(','),
  };
}
