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

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('v-chart', ECharts)
Vue.prototype.$echarts = ECharts
    /* eslint-disable no-new */
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>',
    render: h => h(App)
})