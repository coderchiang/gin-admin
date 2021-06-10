import { BasicPageParams,BasicFetchResult} from '/@/api/model/baseModel';

export interface RoleListItem {
    id: string;
    roleName: string;
    roleValue: string;
    remark:string;
    status: number;
    orderNo: string;
  }

  export interface RoleParams {
    roleName?: string;
    status?: string;
  };
  export type RolePageParams = BasicPageParams & RoleParams;
  export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;