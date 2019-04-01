const questionList = {
    state: {
        questionName: "",
        questionType: "1",
        questionDetail: "xxx",
        questionDate: "xxxx",
    },
    //mutations：动态的改变state的值完成页面的同步渲染,直接在state对象后面加就行了
    //mutations是定义：改变state方法的集合
    //mutations对象是函数
    //默认传值是state，也就是上面的state，所以可以直接操作state.count
    mutations: {
        //在组件里某个按钮可以这样使用 ——> $store.commit('Count ')，
        //提交Count方法，改变count值
        //若两个组件都使用了count值，点击按钮的时候，将同步修改，这是弊端
        getQuestionName(state, params) {
            state.questionName = params //查询后变量rowId赋值给state里的rowId变量
        },
        getQuestionType(state, params) {
            state.questionType = params //查询后变量rowId赋值给state里的rowId变量
        },
        getQuestionDetail(state, params) {
            state.questionDetail = params //查询后变量rowId赋值给state里的rowId变量
        },
        getQuestionDate(state, params) {
            state.questionDate = params //查询后变量rowId赋值给state里的rowId变量
        }
    },
    //mutations里的方法会同步改变值，
    //actions的默认参数是context
    //context.commit('Count ')的意思是触发mutations下的Count函数
    //组件里怎么触发actions的函数？——> $store.dispatch('Acount')
    actions: {
        Acount(context) {
            context.commit('setCount')
        }
    }

}
export default questionList