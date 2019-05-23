// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import '@/assets/styles/index.scss'
import 'font-awesome/css/font-awesome.css'
import ECharts from 'echarts'
import jsPlumb from 'jsplumb'
import axios from "axios"
import store from '@/store/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('v-chart', ECharts)
Vue.prototype.$echarts = ECharts
    /* eslint-disable no-new */
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb
Vue.prototype.$axios = axios
Vue.use(require('vue-moment'))

Vue.use(VueResource)
    //要给axios添加拦截器，为每个请求添加 heard
    // http request 拦截器
axios.interceptors.request.use(
    config => {

        config.headers.Authorization = "Basic YWRtaW46NjgwNzEx";

        return config;
    },
    err => {
        return Promise.reject(err);
    });

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>',
    render: h => h(App)
})