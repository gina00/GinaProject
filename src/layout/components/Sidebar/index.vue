<template>
  <el-scrollbar style="height:100%" wrapClass="scrollbar-wrapper">
    <el-menu
      :default-active="activedMenu()"
      class="el-menu-vertical-demo"
      background-color="#252a2f"
      text-color="#fff"
      active-text-color="#00aaff"
      @open="handleOpen"
      @close="handleClose"
      :collapse="getChange"
    >
      <div class="subMenuTitle">
        <el-radio-group v-model="getChange" style="margin-bottom: 20px;">
          <el-radio-button :label="false" v-if="getChange">
            <i class="el-icon-more" :label="false"></i>
          </el-radio-button>
          <el-radio-button :label="true" v-if="!getChange">
            <i class="el-icon-menu" :label="true"></i>
            <span class="itemText">MENU</span>
          </el-radio-button>
        </el-radio-group>
      </div>
      <sidebar-item></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SiderbarItem from "./SidebarItem";
export default {
  components: {
    "sidebar-item": SiderbarItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ]),
    getChange: {
      //新增 get和set,解决v-model的双向绑定问题。单独定义getChange方法不能实现双向数据绑定
      get: function() {
        return this.$store.state.sidebar.isCollapse; //去vuex里取isCollapse状态值
      },
      set: function() {
        this.$store.state.sidebar.isCollapse = !this.$store.state.sidebar
          .isCollapse; //通过set方法，改变isCollapse值
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    activedMenu() {
      if (this.$route.path.indexOf("/dashboard") == 0) {
        return "1";
      } else if (this.$route.path.indexOf("/project") == 0) {
        return "2";
      } else if (this.$route.path.indexOf("/question") == 0) {
        return "3";
      } else if (this.$route.path.indexOf("/monitor/index") == 0) {
        return "4-1";
      } else if (this.$route.path.indexOf("/digital") == 0) {
        return "4-2";
      } else if (this.$route.path.indexOf("/flow") == 0) {
        return "4-3";
      } else if (this.$route.path.indexOf("/grpcombobusiness") == 0) {
        return "4-5";
      }
      else if (this.$route.path.indexOf("/about/index") == 0) {
        return "5";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-scrollbar__wrap {
  overflow-y: scroll;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 231px;
  min-height: 400px;
  color: #fff;
}

.subMenuTitle {
  display: flex;
  flex-direction: column;
  align-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .el-radio-group {
    margin-bottom: 0 !important;
  }
  .itemText {
    margin-left: 15px;
  }
  .cn {
    font-size: 14px;
  }

  .en {
    font-size: 14px;
    color: #999;
    margin: 10px 0;
  }
}
</style>
