<template>
  <section v-on:contextmenu="closeCurrentRightMenu()">
    <div v-on:contextmenu="closeCurrentRightMenu()" class="tree-container">
      <div :class="className" id="myChart" :style="{height:height,width:width}" ref="myEchart"></div>
      <div class="menuBox left-hover-menu" :v-show="isShow" v-bind:style="styleObject">
        <div>节点详情</div>
        <div>英文名:data charts</div>
        <div>产品域定义:用于记录各种数据.</div>
      </div>

      <!-- <div :v-show="!isShow" v-bind:style="styleObject" class="menuBox rightClickMenu" >
            <div>右键菜单业务对象</div>
            <div>编辑</div>
            <div>删除</div>
      </div>-->
    </div>
  </section>
</template>

<script>
import echarts from "echarts";
import { relative } from "path";
require("echarts/theme/infographic"); // echarts theme
export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "700px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object
    }
  },
  data() {
    return {
      styleObject: {
        color: "#333",
        fontSize: "13px",
        position: "absolute",
        left: 123,
        top: 123
      },
      isShow: false,
      chart: null,
      treeList: {},
      option: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    closeCurrentRightMenu() {
      //奇怪了 怎么关不掉原生的右键菜单。你研究下吧  哈哈
      //debugger;
      return false;
    },
    initChart() {
      let data = {};
      this.chart = echarts.init(
        document.getElementById("myChart"),
        "infographic"
      );
      this.chart.showLoading();
      this.$axios.get("/api/treeList").then(response => {
        //
        this.treeList = response.data;
        this.chart.hideLoading();
        this.chart.setOption(
          (this.option = {
            tooltip: {
              trigger: "item",
              triggerOn: "mousemove"
            },
            series: [
              {
                type: "tree",
                data: [this.treeList],
                left: "2%",
                right: "2%",
                top: "8%",
                bottom: "20%",

                symbol: "emptyCircle",
                orient: "vertical",
                expandAndCollapse: true,
                label: {
                  normal: {
                    position: "top",
                    rotate: -90,
                    verticalAlign: "middle",
                    align: "right",
                    fontSize: 9
                  }
                },

                leaves: {
                  label: {
                    normal: {
                      position: "bottom",
                      rotate: -90,
                      verticalAlign: "middle",
                      align: "left"
                    }
                  }
                },
                animationDurationUpdate: 750
              }
            ]
          })
        );
        var self = this;
        this.chart.on("click", params => {
          console.log(params);
          self.isShow = true;
          self.styleObject.left = params.event.offsetX + 15 + "px";
          self.styleObject.top = params.event.offsetY + 15 + "px";
        });

        // this.chart.on("contextmenu",params=> {
        //     //contextmenu事件，右击触发
        //     console.log("contextmenu");
        //     self.isShow = !self.isShow;
        //     self.styleObject.left = params.event.offsetX + 15+'px';
        //     self.styleObject.top = params.event.offsetY + 15+'px';
        // });
        // $(".tree-container").bind("contextmenu", function() {
        //   return false;
        // }); //防止默认菜单弹出
        // this.chart.on("contextmenu", function(params) {
        //   $(".right-click-menu").css({
        //     display: "block",
        //     left: params.event.offsetX + 15,
        //     top: params.event.offsetY + 15
        //   });
        // });
        // $(".tree-container").click(function() {

        //   // $(".right-click-menu").css({
        //   //   display: "none",
        //   //   left: "-9999px",
        //   //   top: "-9999px"
        //   // });
        // });
      });
    }
  }
};
</script>

<style scoped>
.tree-container {
  position: relative;
}
.menuBox {
  background: #fff;
  border-radius: 5px;
  color: #333;
  border: 1px solid #dbdbdb;
}
.menuBox div {
  border-bottom: 1px solid #eee;
  padding: 15px;
}
.menuBox div:hover {
  cursor: pointer;
  background: #f5f5f5;
}
.left-hover-menu {
  position: absolute;
  left: -99999px;
  top: -999999px;
}

.rightClickMenu {
  position: absolute;
  left: -99999px;
  top: -999999px;
}
</style>
