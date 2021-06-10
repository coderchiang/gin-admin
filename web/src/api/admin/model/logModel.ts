import { BasicPageParams,BasicFetchResult} from '/@/api/model/baseModel';

//log

  export interface LogListItem {
    id: string;
    method: string     //请求方式
  
      operName    :  string      //操作者
    type : string  //操作类型
      operUrl      : string     //访问地址
      operIp      :  string     //客户端ip
      operLocation : string     //访问位置
  
    browser       :string
      os           : string
      platform    :  string
  
      latencyTime  : string       //耗时
      status       : string            //操作状态
      operTime     : string          //操作时间
    remark       : string        //备注
  
  }

  export interface DelBatcgParam {
    ids?: string[];
  };
  

  export type LogParams = BasicPageParams &{

    id: string;
    operName: string;
    ipaddr: string;
    method:string;
    type: number;
  }

  export type LogListGetResultModel = BasicFetchResult<LogListItem>;
  
  