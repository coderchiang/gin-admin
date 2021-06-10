import { BasicPageParams,BasicFetchResult} from '/@/api/model/baseModel';
export interface UserInfoModel {
    email: string;
    name: string;
    introduction: string;
    phone: string;
    address: string;
  }
  
  
  export interface UserListItem {
    id: number;
    username: string;
    email: string;
    nickname: string;
    role_id: number;
    createTime: string;
    remark: string;
    status: number;
  }
  export interface UserId {
    id: number | string;
  }

  export type UserParams = BasicPageParams & {
    username?: string;
    nickname?: string;
  };

  export type UserListGetResultModel = BasicFetchResult<UserListItem>;
  