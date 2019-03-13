import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layout from '../views/layout/Layout.vue'
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
                import ('@/views/dashboard/index')
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
                import ('@/views/project/index')
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
                import ('@/views/question/index')
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
                import ('@/views/monitor/index')
        }]
    },
    {
        path: '/question/tree',
        component: Layout,
        redirect: '/question/components/echart-tree',
        hidden: true,
        children: [{
            path: '/question/components/echart-tree',
            component: () =>
                import ('@/views/question/components/echart-tree')
        }]
    },
    {
        path: '/question/graph',
        component: Layout,
        redirect: '/question/components/graph',
        hidden: true,
        children: [{
            path: '/question/components/graph',
            component: () =>
                import ('@/views/question/components/graph')
        }]
    },
    {
        path: '/question/jtopo',
        component: Layout,
        redirect: '/question/components/jtopo',
        hidden: true,
        children: [{
            path: '/question/components/jtopo',
            component: () =>
                import ('@/views/question/components/jtopo')
        }]
    },
    {
        path: '/question/jsplumb',
        component: Layout,
        redirect: '/question/components/jsplumb',
        hidden: true,
        children: [{
            path: '/question/components/jsplumb',
            component: () =>
                import ('@/views/question/components/jsplumb')
        }]
    },
    {
        path: '/question/g6',
        component: Layout,
        redirect: '/question/components/g6',
        hidden: true,
        children: [{
            path: '/question/components/g6',
            component: () =>
                import ('@/views/question/components/g6')
        }]
    },
    {
        path: '/question/g6-edit',
        component: Layout,
        redirect: '/question/components/g6-edit',
        hidden: true,
        children: [{
            path: '/question/components/g6-edit',
            component: () =>
                import ('@/views/question/components/g6-edit')
        }]
    }

]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})