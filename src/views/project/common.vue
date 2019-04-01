<template>
  <section class="detail">
    <div class="titleBox">
      <router-link to="/project">
        <el-button icon="el-icon-back" circle></el-button>
      </router-link>
      <div class="title">
        <div class="text">
            传入前面标题等内容
          <!-- <span>{{setType}} - {{setName}}</span>
          <el-button type="success" size="mini">{{setType}}</el-button>
          <p>{{setDetail}}</p>
        </div>
        <span class="date">创建时间：{{setDate}}</span> -->
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {};
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

