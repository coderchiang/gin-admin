import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/admin',
  name: 'System',
  component: LAYOUT,
  redirect: '/admin/role',
  meta: {
    icon: 'ion:settings-outline',
    title: t('routes.main.admin'),
  },
  children: [
    // {
    //   path: 'account',
    //   name: 'AccountManagement',
    //   meta: {
    //     title: t('routes.demo.admin.account'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/admin/account/index.vue'),
    // },
//     {
//       path: 'role',
//       name: 'Role',
//       meta: {
//         title:"动态加载角色",
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/main/admin/role/index.vue'),
//     },

//     {
//       path: 'menu',
//       name: 'MenuManagement',
//       meta: {
//         title: t('routes.demo.admin.menu'),
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/home/admin/index.vue'),
//     },
//     {
//       path: 'dept',
//       name: 'DeptManagement',
//       meta: {
//         title: t('routes.demo.admin.dept'),
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/demo/admin/dept/index.vue'),
//     },
//     {
//       path: 'changePassword',
//       name: 'ChangePassword',
//       meta: {
//         title: t('routes.demo.admin.password'),
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/demo/admin/password/index.vue'),
//     },
 ],
 };

export default system;
