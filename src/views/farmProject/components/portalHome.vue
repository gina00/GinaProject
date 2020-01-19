<template>
  <div class="layui-fluid">
    <div class="layui-row">
      <div class="layui-col-md12 top">
        <div class="banner">
          <div class="logoPanel">
            <img src="@/assets/images/farm/green/image_logo.svg" />
          </div>
        </div>
        <div class="nav_top">
          <div class="left_box">
            <div class="back-box">
              <i class="layui-icon layui-icon-return"></i>
              <a class="back_home">返回首页</a>
            </div>

            <div class="ul-box" id="ul-box">
              <ul class="main_nav" id="main_nav">
                <li>
                  <a>信息系统11</a>
                </li>
                <li class="selected">
                  <a>信息系统2</a>
                </li>
                <li>
                  <a>信息系统333333333333333333333333</a>
                </li>
                <li>
                  <a>信息系统33333333333333333334</a>
                </li>
                <li>
                  <a>信息系统53333333333333333333335</a>
                </li>
                <li>
                  <a>信息系统6</a>
                </li>
                <li>
                  <a>信息系统7</a>
                </li>
                <li>
                  <a>信息系统8</a>
                </li>
                <li>
                  <a>信息系统9</a>
                </li>
                <li>
                  <a>信息系统10</a>
                </li>
                <li>
                  <a>信息系统11</a>
                </li>
              </ul>
            </div>

            <div class="moreBox" id="moreBox">
              <a class="link_more" id="link_more">
                <i class="layui-icon layui-icon-more"></i>
              </a>
              <ul class="more_ul" id="more_ul" style="display: none"></ul>
            </div>
          </div>
          <div class="right_box">
            <div class="loginOut">
              <i class="icon-login"></i>
              <span></span>
            </div>
            <div class="userBox" id="showUserBox">
              <i class="icon-user"></i>
              <span>欢迎您：</span>
              <span>admin</span>
              <span class="cart" id="cart"></span>
              <ul class="user_more_ul" id="user_more_ul" style="display: none">
                <li>
                  <a>用户信息</a>
                </li>
                <li>
                  <a>用户信息</a>
                </li>
                <li>
                  <a>用户信息</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-row">
      <div class="layui-col-md2">
        <ul class="layui-nav layui-nav-tree menu-list" lay-filter="menulist">
          <div class="menu_logo">
            <i class="icon-menu-logo"></i>
            <span class="cn">统一综合门户</span>
            <span class="en">Unified Integrated Portal</span>
          </div>
          <li class="layui-nav-item layui-nav-itemed">
            <a href="javascript:;">
              <i class="icon-taskManagement"></i>
              待办任务管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href="javascript:;">
              <i class="icon-userManagement"></i>
              农业农村厅用户管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-enterpriseManagement"></i>
              企业用户管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-groupManagement"></i>
              群组管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-newsManagement"></i>
              新闻管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-announcementManagement"></i>
              公告管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-QAmanage"></i>
              Q&A管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href>农业厅二级菜单</a>
              </dd>
              <dd>
                <a href>农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-mailManagement"></i>
              邮件管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-logManagement"></i>
              日志管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-keyManagement"></i>
              快捷键管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item">
            <a href>
              <i class="icon-systemManagement"></i>
              系统管理
            </a>
            <dl class="layui-nav-child">
              <dd>
                <a href="javascript:;">农业厅二级菜单</a>
              </dd>
              <dd>
                <a href="javascript:;">农业菜单</a>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="layui-col-md10 right_content">
        <div class="layui-row">
          <div class="layui-col-md12">
            <div class="layui-tab" lay-allowClose="true" lay-filter="breadbrumb">
              <ul class="layui-tab-title"></ul>
              <div class="layui-tab-content">
                  <rightContent></rightContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rightContent from "./rightContent";
export default {
  components: {
    rightContent
  }
};
</script>

<style lang="scss" scoped>
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
/* 重写layui */
.layui-fluid {
  padding: 0;
}
.layui-nav-tree .layui-nav-item a:hover {
  background-color: #1f9f1f;
}
.layui-nav-child dd {
  padding-left: 30px;
}
/* 头部 */
.top {
  width: 100%;
  position: relative;
}
.banner {
  width: 100%;
  height: 150px;
  // background: url(@/assets/images/farm/green/banner.jpg) no-repeat;
  background-size: cover;
}
.logoPanel {
  padding: 10px 0 0 10px;
}
.nav_top {
  width: 100%;
  height: 42px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}
.left_box {
  display: flex;
  width: 100%;
}
.back-box {
  padding-left: 30px;
}
.back_home {
  border-right: 1px solid #807f7f;
  line-height: 44px;
  height: 42px;
  display: inline-block;
  padding-right: 30px;
  color: #fff;
}
.ul-box {
  /* width: calc(100% - 150px - 41px - 240px); */
  overflow: hidden;
}
.main_nav {
  float: left;
  white-space: nowrap;
}
.main_nav li {
  float: left;
}
.main_nav li a {
  color: #fff;
  padding: 10px 30px;
  display: inline-block;
}
.main_nav li a:hover {
  color: #3f9ffe;
  border-bottom: 2px solid #3f9ffe;
}
.main_nav li.selected {
  color: #3f9ffe;
  border-bottom: 2px solid #3f9ffe;
}
.moreBox {
  position: relative;
}
.link_more {
  color: #fff;
  font-weight: bold;
  padding: 15px;
  float: left;
}
.link_more:hover,
.link_more:active {
  color: #3f9ffe;
}
.more_ul {
  border: 1px solid #0af;
  position: absolute;
  top: 41px;
  left: 0px;
  padding: 10px 20px;
  z-index: 1;
  background: #fff;
}
.more_ul li {
  list-style: disc;
  color: #333;
  margin: 10px;
  background: #fff;
}
.more_ul li a:hover {
  color: #0af;
}

.right_box {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.right_box .userBox {
  position: relative;
  padding: 7px 30px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  width: 100%;
}
.right_box .userBox span {
  padding-left: 5px;
}
.right_box .loginOut {
  padding: 8px 10px;
}
.cart::before {
  content: "";
  font-size: 0;
  border-width: 5px;
  border-style: solid;
  border-color: #ccc transparent transparent;
  position: absolute;
  top: 19px;
}
.carted::after {
  content: "";
  font-size: 0;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #ccc;
  position: absolute;
  top: 13px;
}
.userBox.selected {
  background: rgba(7, 124, 27, 0.6);
}
.user_more_ul {
  width: 100%;
  position: absolute;
  top: 42px;
  left: 0;
  background: #ccc;
  z-index: 1;
  background: #008100;
}
.user_more_ul li {
  padding: 7px 30px;
  border-bottom: 1px solid #0d990b;
}
.user_more_ul li:hover {
  padding: 7px 30px;
  background: #118d11;
}
.user_more_ul li a {
  padding: 10px;
}
.slide_menu {
  text-align: center;
}
.showPosition {
  position: relative;
}
.menu-list {
  position: relative;
  background: #008100;
  width: 100%;
}

.menu_logo {
  background: #008100;
  border-bottom: 10px solid #005f00;
  padding: 15px;
}
.menu_logo .cn {
  display: inline-block;
  font-size: 18px;
  color: #fff;
  padding-left: 12px;
}
.menu_logo .en {
  display: inline-block;
  font-size: 12px;
  color: #fff;
  padding-left: 40px;
}
.right_content {
  padding: 0 20px;
}
iframe {
  height: 100%;
}
i[class*="icon-"] {
  width: 28px;
  height: 28px;
  display: inline-block;
  vertical-align: middle;
}
// .icon-login {
//     background: url(@/assets/images/farm/green/btn_4.png) center no-repeat;
// }
// .icon-menu-logo {
//     background: url(../images/green/icon_8.png) center no-repeat;
// }
// .icon-taskManagement {
//     background: url(../images/green/icon_taskManagement.png) center no-repeat;
// }
// .current .icon-taskManagement {
//     background: url(../images/green/icon_taskManagement-hover.png) center no-repeat;
// }
// .icon-userManagement {
//     background: url(../images/green/icon_userManagement.png) center no-repeat;
// }
// .current .icon-userManagement {
//     background: url(../images/green/icon_userManagement-hover.png) center no-repeat;
// }
// .icon-enterpriseManagement {
//     background: url(../images/green/icon_enterpriseManagement.png) center no-repeat;
// }
// .current .icon-enterpriseManagement {
//     background: url(../images/green/icon_enterpriseManagement-hover.png) center no-repeat;
// }
// .icon-groupManagement {
//     background: url(../images/green/icon_groupManagement.png) center no-repeat;
// }
// .current .icon-groupManagement {
//     background: url(../images/green/icon_groupManagement-hover.png) center no-repeat;
// }
// .icon-newsManagement {
//     background: url(../images/green/icon_newsManagement.png) center no-repeat;
// }
// .current .icon-newsManagement {
//     background: url(../images/green/icon_newsManagement-hover.png) center no-repeat;
// }
// .icon-announcementManagement {
//     background: url(../images/green/icon_announcementManagement.png) center no-repeat;
// }
// .current .icon-announcementManagement {
//     background: url(../images/green/icon_announcementManagement-hover.png) center no-repeat;
// }
// .icon-QAmanage {
//     background: url(../images/green/icon_QAmanage.png) center no-repeat;
// }
// .current .icon-QAmanage {
//     background: url(../images/green/icon_QAmanage-hover.png) center no-repeat;
// }
// .icon-mailManagement {
//     background: url(../images/green/icon_mailManagement.png) center no-repeat;
// }
// .current .icon-mailManagement {
//     background: url(../images/green/icon_mailManagement-hover.png) center no-repeat;
// }
// .icon-logManagement {
//     background: url(../images/green/icon_logManagement.png) center no-repeat;
// }
// .current .icon-logManagement {
//     background: url(../images/green/icon_logManagement-hover.png) center no-repeat;
// }
// .icon-keyManagement {
//     background: url(../images/green/icon_keyManagement.png) center no-repeat;
// }
// .current .icon-keyManagement {
//     background: url(../images/green/icon_keyManagement-hover.png) center no-repeat;
// }
// .icon-systemManagement {
//     background: url(../images/green/icon_systemManagement.png) center no-repeat;
// }
// .current .icon-systemManagement {
//     background: url(../images/green/icon_systemManagement-hover.png) center no-repeat;
// }
</style>