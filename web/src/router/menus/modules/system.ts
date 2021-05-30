import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2000,
  menu: {
    name: t('routes.main.admin.menu'),
    path: '/admin',
    children: [
      {
        path: 'account',
        name: t('routes.demo.admin.account'),
      },
      {
        path: 'role',
        name: t('routes.main.admin.role'),
      },
      {
        path: 'menu',
        name: t('routes.demo.admin.menu'),
      },
      {
        path: 'dept',
        name: t('routes.demo.admin.dept'),
      },

      {
        path: 'changePassword',
        name: t('routes.demo.admin.password'),
      },
    ],
  },
};
export default menu;
