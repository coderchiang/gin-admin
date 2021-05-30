import { MenuModeEnum, MenuTypeEnum } from '../enums/menuEnum';

export interface LockInfo {
  pwd: string | undefined;
  isLock: boolean;
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

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
