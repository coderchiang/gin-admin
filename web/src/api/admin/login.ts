import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
} from './model/loginModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login',
  Logout='/logout',
  Captcha='/captcha',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function loadCaptcha(mode: ErrorMessageMode = 'modal') {
  return defHttp.get(
    {
      url: Api.Captcha,
    },
    {
      errorMessageMode: mode,
    }
  );
}


export function logout(params?:any) {
  return defHttp.post<any>(
    {
      url: Api.Logout,
      params,
    },
  );
}
