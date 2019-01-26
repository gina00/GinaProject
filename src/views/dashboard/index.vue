<template>
  <section class="commonTabBgBox">
    <el-carousel :interval="3000" type="card" height="330px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.bannerImg">
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20" class="showConstrator">
      <p class="title">系统构成</p>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <i class="fa fa-css3" aria-hidden="true"></i>
          <div class="bigTitle">ElementUI</div>
          <div class="samllText">IBOP系统的开发采用了的前端框架VUE——UI框架Element</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <i class="fa fa-css3" aria-hidden="true"></i>
          <div class="bigTitle">CSS3</div>
          <div class="samllText">前端样式CSS3,实现转换、过渡效果</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <i class="fa fa-html5" aria-hidden="true"></i>
          <div class="bigTitle">Webpack</div>
          <div class="samllText">前端构建工具，打包管理项目文件</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
           <i class="fa fa-html5" aria-hidden="true"></i>
          <div class="bigTitle">Express</div>
          <div class="samllText">服务端采用框架，实现数据读取写入</div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bannerList: []
    };
  },
  mounted() {
    this.getBannerList();
  },

  methods: {
    getBannerList() {
      this.$axios.get("/api/bannerList").then(response => {
        this.bannerList = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__item {
  display: table-cell;
  text-align: center;
  vertical-align: middle;

  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  img {
    width: 100%;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.showConstrator{
  padding: 35px 0;
  text-align: center;
  font-size: 30px;
  color: #afc9cf;
  background: #f7f7f7;
  .title{
    margin: 20px 0;
    color: #666;
    font-size: 25px;
  }
  .el-col{
    border-right: 1px solid #e7e7e7;
    padding: 10px;
    &:last-child{
      border-right: none;
    }
  }
  .bigTitle{
    font-size: 24px;
    color: rgb(124, 124, 124);
    padding: 10px 0;
  }
  .samllText{
    font-size: 14px;
    color: rgb(189, 189, 189);
    line-height: 20px;
  }
}
</style>
