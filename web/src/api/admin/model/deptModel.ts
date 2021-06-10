import { BasicPageParams,BasicFetchResult} from '/@/api/model/baseModel';


  export interface DeptListItem {
    id: string;
    orderNo: string;
    createTime: string;
    remark: string;
    status: number;
  }

  export type DeptParams = BasicPageParams & {
    deptName?: string;
    status?: string;
  };

  export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;


