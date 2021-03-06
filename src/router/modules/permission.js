const Layout = () => import('@/views/layout/Layout');


export default {
    path: '/permission',
    component: Layout,
    redirect: 'permission/page',
    meta: {
      title: '权限',
      icon: 'lock',
    },
    alwaysShow:true,
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/PagePermission'),
        meta:{
          title:'页面权限',
          roles:['admin']
        }
      },
      {
        path:'directive',
        component: () => import('@/views/permission/DirectivePermission'),
        meta:{
          title:'指令权限',
        }
      },
      {
        path:'roles',
        component: () => import('@/views/permission/RolesPermission'),
        meta:{
          title:'角色权限',
        }
      }
    ],
  }