<template>
  <div>
    <router-link to="/dashboard">
      <el-menu-item index="1">
        <i class="fa fa-tachometer" aria-hidden="true"></i>
        <span slot="title" class="itemText">概览</span>
      </el-menu-item>
    </router-link>
    <router-link to="/project">
      <el-menu-item index="2">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <span slot="title" class="itemText">项目总结</span>
      </el-menu-item>
    </router-link>
    <router-link to="/question">
      <el-menu-item index="3">
        <i class="fa fa-list" aria-hidden="true"></i>
        <span slot="title" class="itemText">问题总结</span>
      </el-menu-item>
    </router-link>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location" aria-hidden="true"></i>
        <span slot="title" class="itemText">本地项目</span>
      </template>

      <router-link to="/monitor">
        <el-menu-item index="4-1">
          <i class="fa fa-area-chart" aria-hidden="true"></i>
          <span slot="title" class="itemText">监控概览</span>
        </el-menu-item>
      </router-link>
      <router-link to="/digital">
        <el-menu-item index="4-2">
          <i class="fa fa-users" aria-hidden="true"></i>
          <span slot="title" class="itemText">用户特征</span>
        </el-menu-item>
      </router-link>
      <router-link to="/flow">
        <el-menu-item index="4-3">
          <i class="fa fa-line-chart" aria-hidden="true"></i>
          <span slot="title" class="itemText">流量包选择</span>
        </el-menu-item>
      </router-link>
      <router-link to="/farm">
        <el-menu-item index="4-4">
          <i class="fa fa-line-chart" aria-hidden="true"></i>
          <span slot="title" class="itemText">农业农村厅</span>
        </el-menu-item>
      </router-link>
      <router-link to="/grpcombobusiness">
        <el-menu-item index="4-5">
          <i class="fa fa-line-chart" aria-hidden="true"></i>
          <span slot="title" class="itemText">政企产品受理大厅</span>
        </el-menu-item>
      </router-link>
    </el-submenu>
    <router-link to="/about">
      <el-menu-item index="5">
        <i class="fa fa-address-card-o" aria-hidden="true"></i>
        <span slot="title" class="itemText">关于我</span>
      </el-menu-item>
    </router-link>
    <router-link to="/dom">
      <el-menu-item index="6">
        <i class="fa fa-address-card-o" aria-hidden="true"></i>
        <span slot="title" class="itemText">JS&CSS</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.itemText {
  margin-left: 15px;
}
</style>
