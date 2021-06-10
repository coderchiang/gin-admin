import {
    DeptListItem,
    DeptListGetResultModel,
  } from './model/deptModel';
import { defHttp } from '/@/utils/http/axios';
 
 //dept

 enum Api {
 DeptList = '/admin/dept/list',
 DeptAdd = '/admin/dept/add',
 DeptEdit = '/admin/dept/edit',
 DeptDel = '/admin/dept/del',
}
//dept
export const getDeptList = (params?: DeptListItem) =>
defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });
export const addDept = (params?:DeptListItem) =>
defHttp.post({ url: Api.DeptAdd, params });

export const editDept = (params?:DeptListItem) =>
defHttp.put({ url: Api.DeptEdit, params });

export const delDept = (params?:any) =>
defHttp.delete({ url: Api.DeptDel, params });