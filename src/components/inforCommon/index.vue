<template>
  <section class="detail">
    <div class="titleBox">
      <span>
        <el-button icon="el-icon-back" circle @click="$router.go(-1)"></el-button>
      </span>
      <div class="title">
        <div class="text" >
            <span>{{commonType}}-{{commonName}}</span>
            <el-button type="success" size="mini">{{commonType}}</el-button>
            <p>{{commonTitle}}</p>
        </div>
        <span class="date" style="margin-top:0;">创建时间：{{commonDate}}</span>        
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
      'commonName',
      'commonTitle',
      'commonDate',
      'commonType'
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

