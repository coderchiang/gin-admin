import {
    RolePageParams,
    RolePageListGetResultModel,
    RoleListItem
} from './model/roleModel';
import { defHttp } from '/@/utils/http/axios';
 

enum Api {
 //role
 RoleList = '/admin/role/list',
 RoleAdd ='/admin/role/add',
 RoleEdit ='/admin/role/edit',
 RoleDel ='/admin/role/del',
}

//role
export const getRoleList = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RoleList, params });

  export const addRole = (params?:RoleListItem) =>
  defHttp.post({ url: Api.RoleAdd, params });
  export const editRole = (params?:RoleListItem) =>
  defHttp.put({ url: Api.RoleEdit, params });
  export const delRole = (params?:any) =>
  defHttp.delete({ url: Api.RoleDel, params });