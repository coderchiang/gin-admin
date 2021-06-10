import {
    MenuParams,
   
    MenuListGetResultModel,
    getUserMenuRouteResult,
    MenuItem,
  } from './model/menuModel';
  import { defHttp } from '/@/utils/http/axios';

enum Api {
    //menu
USER_MENU = '/admin/user/menu',
MenuList = '/admin/menu/list',
MenuAdd='/admin/menu/add',
MenuEdit = '/admin/menu/edit',
MenuDel = '/admin/menu/del',
}

//menu

export const getUserMenu = (params?: any) => {
  return defHttp.get<getUserMenuRouteResult>({ url: Api.USER_MENU, params });
};
export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

  export const addMenu = (params?:MenuItem) =>
  defHttp.post({ url: Api.MenuAdd, params });
  export const editMenu = (params?:MenuItem) =>
  defHttp.put({ url: Api.MenuEdit, params });

  export const delMenu = (params?:any) =>
  defHttp.delete({ url: Api.MenuDel, params });
  

