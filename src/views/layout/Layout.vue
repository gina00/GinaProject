<template>
<div class="container">
    <header>
        <header-item></header-item>
    </header>
    <div class="main-container">
        <div class="side-content">
            <side-bar></side-bar>
        </div>
        <div class="main-content">
            <app-main></app-main>
        </div>
    </div>
</div>
</template>

<script>
// import { HeaderItem, SideBar, AppMain } from "./components";
import SideBar from './components/Sidebar/index'
import AppMain from './components/AppMain'
import HeaderItem from './components/Header/index'
export default {
  components: {
    "header-item": HeaderItem,
    "side-bar": SideBar,
    "app-main": AppMain
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  min-height: 800px;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 230px;
  position: relative;
  background: #f5f7fa;
  padding: 20px;
  text-align: left;
  margin-top: 80px;
}

.container {
  header {
    height: 80px;
    background: #2b3844;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
}
</style>
