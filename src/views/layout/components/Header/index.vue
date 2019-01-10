<template>
  <section class="head-content">
    <div class="logoBox">
      <div class="logoimg">
        <img src="@/assets/images/GI-logo.png">
      </div>
      <span>GinaProject</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchVal: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.logoBox {
  color: #fff;
  border-right: 1px solid #36424d;
  width: 230px;
  height: 80px;
  display: flex;
  align-items: center;
  .logoimg {
    width: 45px;
    height: 45px;
    overflow: hidden;
    margin: 0 10px;
    img {
      width: 100%;
    }
  }
}
</style>
