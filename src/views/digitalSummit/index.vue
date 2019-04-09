<template>
  <section>
    <div class="scanMain" v-if="scanShow">
      <div class="scanBox">
        <div class="scanContent">
          <div class="imgBox">
            <img src="@/assets/images/digitalImages/scanning.png">
          </div>
          <div class="codeBox" v-if="loading">
            <img src="@/assets/images/digitalImages/bg.png">
            <img class="loading" v-if="loading" src="@/assets/images/digitalImages/loading.gif">
          </div>
          <div class="btnBox" @click.ctrl="openFullScreen()" @dblclick="openNoData()">
            <span>扫码查看人群画像</span>
          </div>
        </div>
      </div>
    </div>
    <userFeature v-if="userFeatureShow" :user-data="userFeatureShow" :scan-data="scanShow"></userFeature>
    <noData v-if="nodataShow" :no-data="nodataShow" :scan-data="scanShow"></noData>
  </section>
</template>

<script>
import userFeature from "./userFeature";
import noData from "./404";
export default {
  components: {
    userFeature,
    noData
  },
  data() {
    return {
      loading: false,
      scanShow: true,
      userFeatureShow: false,
      nodataShow: false,
      count: 0
    };
  },
  methods: {
    openFullScreen() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.userFeatureShow = true;
        this.scanShow = !this.userFeatureShow;
      }, 2000);
      
    },
    openNoData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.nodataShow = true;
        this.scanShow = !this.nodataShow;
      }, 2000);
      
    },
  }
};
</script>

<style lang="scss" scoped>
.scanContent {
  position: relative;
  .codeBox {
    position: absolute;
    top: 0px;
    left: 30px;
    .loading {
      position: absolute;
      top: 110px;
      left: 170px;
    }
  }
}
</style>

