import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout/index'
import Tree from '../views/question/components/echart-tree.vue'

Vue.use(Router)

export const constantRouterMap = [{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () =>
        import('@/views/dashboard/index')
    }]
  },
  {
    path: '/project',
    component: Layout,
    redirect: '/project/index',
    name: 'Project',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/project/index')
    }]
  },
  {
    path: '/project/detail',
    component: Layout,
    hidden: true,
    children: [{
      path: 'common',
      component: () =>
        import('@/components/inforCommon/index'),
      children: [{
          path: '/project/customer',
          component: () =>
            import('@/views/project/components/curstumer')
        },
        {
          path: '/project/ordercenter',
          component: () =>
            import('@/views/project/components/ordercenter')
        },
        {
          path: '/project/newOrderCenter',
          component: () =>
            import('@/views/project/components/newOrderCenter')
        },
        {
          path: '/project/monitor',
          component: () =>
            import('@/views/project/components/monitor')
        },
        {
          path: '/project/digital',
          component: () =>
            import('@/views/project/components/digital')
        },
        {
          path: '/project/flow',
          component: () =>
            import('@/views/project/components/windowFlow')
        },
        {
          path: '/project/breed',
          component: () =>
            import('@/views/project/components/breedApp')
        },
      ]
    }]
  },

  {
    path: '/question',
    component: Layout,
    redirect: '/question/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/question/index')
    }]
  },

  {
    path: '/question/detail',
    component: Layout,
    hidden: true,
    children: [{
      path: 'common',
      component: () =>
        import('@/components/inforCommon/index'),
      children: [{
          path: '/question/tree',
          component: () =>
            import('@/views/question/components/echart-tree')
        },
        {
          path: '/question/graph',
          component: () =>
            import('@/views/question/components/graph')
        },
        {
          path: '/question/jtopo',
          component: () =>
            import('@/views/question/components/jtopo')
        },
        {
          path: '/question/jsplumb',
          component: () =>
            import('@/views/question/components/jsplumb')
        },
        {
          path: '/question/g6',
          component: () =>
            import('@/views/question/components/g6')
        },
        {
          path: '/question/g6-edit',
          component: () =>
            import('@/views/question/components/g6-edit')
        },
        {
          path: '/question/g6-demo',
          component: () =>
            import('@/views/question/components/g6-demo')
        },
        {
          path: '/question/middle',
          component: () =>
            import('@/views/question/components/middle')
        },
        {
          path: '/question/knownMiddle',
          component: () =>
            import('@/views/question/components/knownMiddle')
        },
        {
          path: '/question/svg',
          component: () =>
            import('@/views/question/components/vue-svg')
        },
        {
          path: '/question/g6-behavior',
          component: () =>
            import('@/views/question/components/g6-behavior')
        },
      ]
    }]
  },
  {
    path: '/monitor',
    component: Layout,
    redirect: '/monitor/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/monitor/index')
    }]
  },
  {
    path: '/digital',
    component: Layout,
    redirect: '/digital/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/digitalSummit/index')
    }]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/about/index')
    }]
  },
  {
    path: '/flow',
    component: Layout,
    redirect: '/flow/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/digitalSummit/flow')
    }]
  },
  {
    path: '/dom',
    component: Layout,
    redirect: '/dom/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/dom/index')
    }]
  },
  {
    path: '/editWord',
    component: Layout,
    redirect: '/editWord/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/question/components/editDocumentword')
    }]
  },
  {
    path: '/farm',
    component: Layout,
    redirect: '/farm/index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/farmProject/index')
    }]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
