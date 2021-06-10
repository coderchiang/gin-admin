import {
    LogParams,
   
    LogListGetResultModel,

    DelBatcgParam,
  } from './model/logModel';
  import { defHttp } from '/@/utils/http/axios';


enum Api {
  //log
 LogList ='/admin/log/list',
 LogDel='/admin/log/del',
 LogDelBatch='/admin/log/del_batch',
}

 

 //log
 export const getLogList = (params?: LogParams) =>
 defHttp.get<LogListGetResultModel>({ url: Api.LogList, params });

 export const delLog = (params?:any) =>
 defHttp.delete({ url: Api.LogDel, params });

 export const delBatchLog = (params?:DelBatcgParam) =>
 defHttp.delete<boolean>({ url: Api.LogDelBatch, params });