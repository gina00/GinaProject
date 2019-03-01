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
    }

]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})