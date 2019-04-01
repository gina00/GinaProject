import Vue from 'vue'
import Vuex from 'vuex'

//分模块新建每个组件对应的store对象，并引入到此
import questionStore from './modules/questionList' //管理某个组件的store对象，引入刚才的app.js

Vue.use(Vuex)

//使用app.js文件下的state方法：——app.js是整个应用的状态集合
//我们应该给组件所用到的state进行归类到新的文件里，好管理
//没有分modules，使用$store.state.count
//分modules后，使用$store.state.app.count
//意味着寻找到app模块下的count状态值
//如果不划分，全局均可用到count，并改变其

const store = new Vuex.Store({
    modules: {
        question: questionStore, //另起别名
    }
})

export default store