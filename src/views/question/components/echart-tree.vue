<template>
  <section>
    <div class="tree-container">
      <div :class="className" id="myChart" :style="{height:height,width:width}" ref="myEchart"></div>
      <div class="left-hover-menu">
        <div>中文名: 报表</div>
        <div>英文名:data charts</div>
        <div>产品域定义:用于记录各种数据.</div>
      </div>

      <div class="right-click-menu">
        <div>新增业务对象</div>
        <div>编辑</div>
        <div>删除</div>
      </div>
    </div>
  </section>
</template>

<script>
import echarts from "echarts";
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
      chart: null,
      treeList: {},
      option: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let data = {};
      this.chart = echarts.init(
        document.getElementById("myChart"),
        "infographic"
      );
      this.chart.showLoading();
      this.$axios.get("/api/treeList").then(response => {
        //新增点击
        this.chart.on("click", lefClickFun);
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
        this.chart.on("mouseover", function(params) {
          console.log(params);
          $(".left-hover-menu").css({
            display: "block",
            left: params.event.offsetX + 15,
            top: params.event.offsetY + 15
          });
        });
        this.chart.on("mouseout", function(params) {
          console.log("out");
          $(".left-hover-menu").css({
            display: "none",
            left: "-9999px",
            top: "-9999px"
          });
        });

        $(".tree-container").bind("contextmenu", function() {
          return false;
        }); //防止默认菜单弹出
        this.chart.on("contextmenu", function(params) {
          $(".right-click-menu").css({
            display: "block",
            left: params.event.offsetX + 15,
            top: params.event.offsetY + 15
          });
        });
        $(".tree-container").click(function() {
          $(".right-click-menu").css({
            display: "none",
            left: "-9999px",
            top: "-9999px"
          });
        });
      });

      if (this.option && typeof this.option === "object") {
        this.chart.setOption(this.option, true);
      }
      //关键点！左键点击
      function lefClickFun(nodeName) {
        if (typeof nodeName.seriesIndex == "undefined") {
          return;
        }
        if (nodeName.type == "click") {
          alert(nodeName.name);
        }
      }
      function rightClickFun(params) {}
    }
  }
};
</script>

<style scoped>
.tree-container {
  border: 1px solid grey;
  position: relative;
}

.left-hover-menu {
  position: absolute;
  border: 1px solid grey;
  left: -99999px;
  top: -999999px;
}

.right-click-menu {
  position: absolute;
  border: 1px solid blue;
  left: -99999px;
  top: -999999px;
}
</style>
