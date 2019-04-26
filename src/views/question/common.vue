<template>
  <section class="detail">
    <div class="titleBox">
      <router-link to="/question">
        <el-button icon="el-icon-back" circle></el-button>
      </router-link>
      <div class="title">
        <div class="text">
          <span>{{questionType}} - {{questionName}}</span>
            <el-button type="success" size="mini">{{questionType}}</el-button>  
          <p>{{questionDetail}}</p>
        </div>
        <span class="date">创建时间：{{questionDate}}</span>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'questionName',
      'questionType',
      'questionDetail',
      'questionDate'
    ])
  }
  // computed: {
  //   setName() {
  //     return this.$store.state.question.questionName; //计算属性获取状态值
  //   },
  //   setType() {
  //     return this.$store.state.question.questionType; //计算属性获取状态值
  //   },
  //   setDetail() {
  //     return this.$store.state.question.questionDetail; //计算属性获取状态值
  //   },
  //   setDate() {
  //     return this.$store.state.question.questionDate; //计算属性获取状态值
  //   }
  // }
};
</script>
<style lang="scss" scoped>
.detail {
  .titleBox {
    width: 100%;
    padding: 20px;
    background: #fff;
    margin-bottom: 2px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-left: 15px;
      .text p {
        font-size: 14px;
        color: #666;
        padding: 10px 0;
      }
    }
    .date {
      font-size: 14px;
      color: #999;
      margin-top: 30px;
    }
  }
  .content {
    min-height: 500px;
    background: #fff;
    padding: 20px;
  }
}
</style>

