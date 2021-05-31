import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/role',
  meta: {
    icon: 'ion:settings-outline',
    title: t('routes.main.system'),
  },
  children: [
    // {
    //   path: 'account',
    //   name: 'AccountManagement',
    //   meta: {
    //     title: t('routes.demo.system.account'),
    //     ignoreKeepAlive: true,
    //   },
    //   component: () => import('/@/views/demo/system/account/index.vue'),
    // },
//     {
//       path: 'role',
//       name: 'Role',
//       meta: {
//         title:"动态加载角色",
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/main/system/role/index.vue'),
//     },

//     {
//       path: 'menu',
//       name: 'MenuManagement',
//       meta: {
//         title: t('routes.demo.system.menu'),
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/home/system/index.vue'),
//     },
//     {
//       path: 'dept',
//       name: 'DeptManagement',
//       meta: {
//         title: t('routes.demo.system.dept'),
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/demo/system/dept/index.vue'),
//     },
//     {
//       path: 'changePassword',
//       name: 'ChangePassword',
//       meta: {
//         title: t('routes.demo.system.password'),
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/demo/system/password/index.vue'),
//     },
 ],
 };

export default system;
