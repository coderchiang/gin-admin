import {
  AccountParams,
  DeptListItem,
  MenuParams,
  MenuItem,
  UserInfoModel,
  UserListItem,
  RoleListItem,
  DelParam,
  DelBatcgParam,
  RolePageParams,
  LogQueryModel,
  LogResultModel,
  getMenuListByIdModel,
  MenuListGetResultModel,
  getMenuListByIdResult,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  //user无须授权
  USER_MENU = '/system/user/menu',
  USER_INFO = '/system/user/info',
  //user
  UserList = '/system/user/list',
  UserAdd = '/system/user/add',
  UserEdit = '/system/user/edit',
  UserDel = '/system/user/del',
  //dept
  DeptList = '/system/dept/list',
  DeptAdd = '/system/dept/add',
  DeptEdit = '/system/dept/edit',
  DeptDel = '/system/dept/del',
  //menu
  MenuList = '/system/menu/list',
  MenuAdd='/system/menu/add',
  MenuEdit = '/system/menu/edit',
  MenuDel = '/system/menu/del',
  //role
  RoleList = '/system/role/list',
  RoleAdd ='/system/role/add',
  RoleEdit ='/system/role/edit',
  RoleDel ='/system/role/del',
  //GetAllRoleList = '/system/getAllRoleList',
   //log
   LogList ='/system/log/list',
   LogDel='/system/log/del',
   LogDelBatch='/system/log/del_batch',

  //resetpassword
  ResetPwd='/system/password'
}


/**
 * @description: Get user menu based on id
 */


// Get personal center-basic settings

export const getUserInfo = () => defHttp.get<UserInfoModel>({ url: Api.USER_INFO });
export const getUserMenu = (params?: getMenuListByIdModel) => {
  return defHttp.get<getMenuListByIdResult>({ url: Api.USER_MENU, params });
};
//user
export const getUserList = (params?: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.UserList, params });
  export const addUser = (params?:UserListItem) =>
  defHttp.post({ url: Api.UserAdd, params });
  export const editUser = (params?:UserListItem) =>
  defHttp.put({ url: Api.UserEdit, params });
  export const delUser = (params?:DelParam) =>
  defHttp.delete({ url: Api.UserDel, params });
//dept
  export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });
  export const addDept = (params?:DeptListItem) =>
  defHttp.post({ url: Api.DeptAdd, params });

  export const editDept = (params?:DeptListItem) =>
  defHttp.put({ url: Api.DeptEdit, params });

  export const delDept = (params?:DelParam) =>
  defHttp.delete({ url: Api.DeptDel, params });
//menu
export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

  export const addMenu = (params?:MenuItem) =>
  defHttp.post({ url: Api.MenuAdd, params });
  export const editMenu = (params?:MenuItem) =>
  defHttp.put({ url: Api.MenuEdit, params });

  export const delMenu = (params?:DelParam) =>
  defHttp.delete({ url: Api.MenuDel, params });
//role
export const getRoleList = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RoleList, params });

  export const addRole = (params?:RoleListItem) =>
  defHttp.post({ url: Api.RoleAdd, params });
  export const editRole = (params?:RoleListItem) =>
  defHttp.put({ url: Api.RoleEdit, params });
  export const delRole = (params?:DelParam) =>
  defHttp.delete({ url: Api.RoleDel, params });
  //log
  export const getLogList = (params?: LogQueryModel) =>
  defHttp.get<LogResultModel>({ url: Api.LogList, params });

  export const delLog = (params?:DelParam) =>
  defHttp.delete({ url: Api.LogDel, params });

  export const delBatchLog = (params?:DelBatcgParam) =>
  defHttp.delete({ url: Api.LogDelBatch, params });


  //reset Password
  export const resetPwd = (params?:any) =>
  defHttp.post({ url: Api.ResetPwd, params });
