<template>
  <section class="detail">
    <div class="titleBox">
      <router-link to="/project">
        <el-button icon="el-icon-back" circle></el-button>
      </router-link>
      <div class="title">
        <div class="text" >
            <span>{{projectName}}</span>
        </div>
        <span class="date" style="margin-top:0;">创建时间：{{projectDate}}</span>        
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
  computed: {
    ...mapGetters([
      'projectName',
      'projectDetail',
      'projectDate'
    ]),
  },
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
      line-height: 40px;
      .text p {
        font-size: 14px;
        color: #666;
        padding: 10px 0;
      }
    }
    .date {
      font-size: 14px;
      color: #999;
    }
  }
  .content {
    min-height: 500px;
    background: #fff;
    padding: 20px;
  }
}

</style>

