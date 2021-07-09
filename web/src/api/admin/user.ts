import {
    UserParams,
   
    UserListItem,
    UserInfoModel,
    UserListGetResultModel,
  } from './model/userModel';
  import { defHttp } from '/@/utils/http/axios';

enum Api {
    //user无须授权
 
    USER_INFO = '/admin/user/info',
    //user
    UserList = '/admin/user/list',
    UserAdd = '/admin/user/add',
    UserEdit = '/admin/user/edit',
    UserDel = '/admin/user/del',

    //resetpassword
    ResetPwd='/admin/password'
}
export const getUserInfo = () => defHttp.get<UserInfoModel>({ url: Api.USER_INFO });

export const getUserList = (params?: UserParams) =>
  defHttp.get<UserListGetResultModel>({ url: Api.UserList, params });
  export const addUser = (params?:UserListItem) =>
  defHttp.post({ url: Api.UserAdd, params });
  export const editUser = (params?:UserListItem) =>
  defHttp.put({ url: Api.UserEdit, params });
  export const delUser = (params?:any) =>
  defHttp.delete({ url: Api.UserDel, params });

  //reset Password
  export const resetPwd = (params?:any) =>
  defHttp.put({ url: Api.ResetPwd, params });
