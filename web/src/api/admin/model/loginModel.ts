/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  Id: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface UserInfo {
  id: number;
  username: string;
  email: string;
  nickname: string;
  role_id: number;
  createTime: string;
  remark: string;
  status: number;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  token: string;
  userinfo:UserInfo;
}
