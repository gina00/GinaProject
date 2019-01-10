<template>
  <section class="head-content">
    <div class="logoBox">
      <div class="logoimg">
        <img src="@/assets/images/GI-logo.png">
      </div>
      <span>GinaProject</span>
    </div>
    <div class="iconBox">
      <a class="fa fa-bell-o" aria-hidden="true"></a>
      <a>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link fa fa-user-circle-o">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Dashboard</el-dropdown-item>
            <el-dropdown-item>About Me</el-dropdown-item>
            <el-dropdown-item>Login Out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </a>
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
.head-content {
  display: flex;
  justify-content: space-between;
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
  .iconBox {
    color: #fff;
    display: flex;
    align-items: center;
    a{
      display: inline-block;
      padding: 15px;
      .el-dropdown{
        color: #fff;
      }
    }
  }
}
</style>
