<template>
  <div class="farm">
    <div class="layui-tab layui-tab-brief" lay-filter="farmProject">
      <ul class="layui-tab-title">
        <li class="layui-this">农业厅统一门户</li>
        <li>农业交流展会</li>
        <li>生猪可视化系统</li>
      </ul>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
            <unifiedPortal v-on:showLogin="showAdvice" v-if="!this.subPag.isLogin"></unifiedPortal>
            <portalLogin v-if=" this.subPag.isLogin"></portalLogin>
            <portalHome></portalHome>
        </div>
        <div class="layui-tab-item">2</div>
        <div class="layui-tab-item">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import unifiedPortal from "./components/unifiedPortal";
import portalLogin from "./components/portalLogin";
import portalHome from "./components/portalHome";
export default {
  components: {
    unifiedPortal,
    portalLogin,
    portalHome
  },
  data() {
    return {
        // 接收子页面的状态变量
        subPag:{
            isLogin:false
        }
    };
  },
  mounted() {
    this.useLayUi();
  },
  methods: {
    useLayUi() {
      layui.use("element", function() {
        var element = layui.element;

        //一些事件监听
        element.on("tab(farmProject)", function(data) {
          console.log(data);
        });
      });
    },
    showAdvice(isLogin){
        this.subPag.isLogin=isLogin;//子页面传回的状态复制给父组件，父组件通过是否显示来切换显示内容
    }
  }
};
</script>

<style lang="scss" scoped>

.layui-tab-content{
    min-height: 700px;
}
</style>