export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/goods', authority: ['ADMIN'] },
      // 商品管理页面
      {
        path: '/goods',
        icon: 'table',
        name: 'goods',
        authority: ['ADMIN'],
        component: './Goods/BasicList',
      },
      {
        path: '/goods/:id',
        hideInMenu: true,
        name: 'gooddetail',
        authority: ['ADMIN'],
        component: './Goods/BasicProfile',
      },
      // 订单管理页面
      {
        path: '/orders',
        icon: 'table',
        name: 'orders',
        authority: ['ADMIN'],
        component: './Orders/TableList',
      },
      {
        path: '/orders/:id',
        hideInMenu: true,
        name: 'orderdetail',
        authority: ['ADMIN'],
        component: './Orders/BasicProfile',
      },
      {
        path: '/users',
        icon: 'table',
        authority: ['ADMIN'],
        name: 'users',
        component: './Users/BasicList',
      },

      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
    ],
  },

];
