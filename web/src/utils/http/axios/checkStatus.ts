import { useMessage } from '/@/hooks/web/useMessage';
import { useI18n } from '/@/hooks/web/useI18n';
import router from '/@/router';
import { PageEnum } from '/@/enums/pageEnum';

const { createMessage } = useMessage();

const error = createMessage.error!;
export function checkStatus(status: number, msg: string): void {
  const { t } = useI18n();
  switch (status) {
    case 400:
      error(`${msg}`);
      break;
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      error(t('sys.app.errMsg401'));
      router.push(PageEnum.BASE_LOGIN);
      break;
    case 403:
      error(t('sys.app.errMsg403'));
      break;
    // 404请求不存在
    case 404:
      error(t('sys.app.errMsg404'));
      break;
    case 405:
      error(t('sys.app.errMsg405'));
      break;
    case 408:
      error(t('sys.app.errMsg408'));
      break;
    case 500:
      error(t('sys.app.errMsg500'));
      break;
    case 501:
      error(t('sys.app.errMsg501'));
      break;
    case 502:
      error(t('sys.app.errMsg502'));
      break;
    case 503:
      error(t('sys.app.errMsg503'));
      break;
    case 504:
      error(t('sys.app.errMsg504'));
      break;
    case 505:
      error(t('sys.app.errMsg505'));
      break;
    default:
  }
}
