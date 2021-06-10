import { BasicFetchResult} from '/@/api/model/baseModel';

import { RouteMeta } from '/@/router/types';

  export interface MenuItem {
    id: string;
    pid:number;
    orderNo: string;
    createTime: string;
    status: number;
    icon: string;
    component: string;
    routePath: string;
  }


  export type MenuParams = {
    menuName?: string;
    status?: string;
  };

  export interface RouteItem {
    path: string;
    component: any;
    meta: RouteMeta;
    name?: string;
    alias?: string | string[];
    redirect?: string;
    caseSensitive?: boolean;
    children?: RouteItem[];
  }
  export type getUserMenuRouteResult = RouteItem[];
  export type MenuListGetResultModel = BasicFetchResult<MenuItem>;
