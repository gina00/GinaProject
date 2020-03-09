<template>
  <div class="farm">
    <div class="layui-tab layui-tab-brief" lay-filter="farmProject">
      <ul class="layui-tab-title">
        <li class="layui-this">生猪可视化系统</li>
        <li>农业农村厅统一门户系统</li>
        <li>江西农交会养殖展会</li>
        <li>动物检疫票证系统</li>
      </ul>
      <div class="layui-tab-content">
        <div class="layui-tab-item  layui-show">
          <pigShow></pigShow>
        </div>
        <div class="layui-tab-item">
          <unifiedPortal></unifiedPortal>
        </div>
        <div class="layui-tab-item">
          <farmShow></farmShow>
        </div>
        <div class="layui-tab-item">
          <animalTicket></animalTicket>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import unifiedPortal from "./components/unifiedPortal";
import animalTicket from "./components/animalTicket";
import farmShow from "./components/farm-show";
import pigShow from "./components/pig-show";
export default {
  components: {
    unifiedPortal,
    animalTicket,
    farmShow,
    pigShow
  },
  data() {
    return { 
      // 接收子页面的状态变量
      // subPag:{
      //     isLogin:false
      // }
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
    }
    // showAdvice(isLogin){
    //     this.subPag.isLogin=isLogin;//子页面传回的状态复制给父组件，父组件通过是否显示来切换显示内容
    // }
  }
};
</script>

<style lang="scss" scoped>
.farm{
  background: #fff;
}
.layui-tab-content {
  min-height: 700px;
}
</style>