<template>
<div>
    <router-link to="/dashboard">
        <el-menu-item index="dashboard">
            <i class="fa fa-tachometer" aria-hidden="true"></i>
            <span slot="title" class="itemText">Dashboard</span>
        </el-menu-item>
    </router-link>
    <router-link to="/project">
        <el-menu-item index="project">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <span slot="title" class="itemText">项目案例</span>
        </el-menu-item>
    </router-link>
    <router-link to="/question">
        <el-menu-item index="totalordermanage/index">
        <i class="fa fa-credit-card" aria-hidden="true"></i>
            <span slot="title" class="itemText">问题总结</span>
        </el-menu-item>
    </router-link>
    <router-link to="/shoppingmanage">
    <el-menu-item index="shoppingmanage/index">
    <i class="fa fa-address-card-o" aria-hidden="true"></i>
        <span slot="title" class="itemText">关于我</span>
    </el-menu-item>
    </router-link>
    <router-link to="/monitor">
    <el-menu-item index="monitor/index">
    <i class="fa fa-address-card-o" aria-hidden="true"></i>
        <span slot="title" class="itemText">监控概览</span>
    </el-menu-item>
    </router-link>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    
    
  }
};
</script>

<style lang="scss" scoped>
.itemText{
    margin-left: 15px;
}
</style>
