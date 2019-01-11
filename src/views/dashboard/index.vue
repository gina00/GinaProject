<template>
  <section class="commonTabBgBox">
    <el-carousel :interval="4000" type="card" width="80%" height="300px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.bannerImg">
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
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
  overflow: hidden;

  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
