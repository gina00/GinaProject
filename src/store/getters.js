// getters 去vuex里拿出变量，存放在这，需要取用的时候，在对应的页面computed里通过mapGetters拿到变量
// getters就是vuex的计算属性。
// 这样就不需要在对应的页面computed里去写一串 “this.$store.state.question.questionName”获取questionName的值
const getters = {
    questionName: state => state.question.questionName, //question表示数据在module为question里
    questionType: state => state.question.questionType,
    questionDetail: state => state.question.questionDetail,
    questionDate: state => state.question.questionDate,
    projectName: state => state.project.projectName,
    projectDetail: state => state.project.projectDetail,
    projectDate: state => state.project.projectDate,
}
export default getters