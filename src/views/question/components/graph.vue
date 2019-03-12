<template>
  <section :contextmenu="closeCurrentRightMenu()">
    <div v-on:contextmenu="closeCurrentRightMenu()" class="tree-container">
      <div :class="className" id="myChart" :style="{height:height,width:width}" ref="myEchart"></div>
      <div
        class="menuBox left-hover-menu"
        v-if="isShow"
        v-bind:style="styleObject"
        @click="closeMenu($event)"
      >
        <div @click="showNodeDetail = true">查看节点详情</div>
        <div @click="editNode = true">编辑节点</div>
        <div @click="AddNode = true">新增节点</div>
        <div v-if="isDelete" @click="DelNode = true">删除节点</div>
      </div>
    </div>
    <el-dialog class="detailBox" title="节点详情" :visible.sync="showNodeDetail">
      <template v-for="(item,index) in clickgraphList">
        <el-row :key="index">
          <el-col :span="4" class="title">节点名称</el-col>
          <el-col :span="20" class="val">{{item.name}}</el-col>
        </el-row>
        <el-row :key="index">
          <el-col :span="4" class="title">节点描述:</el-col>
          <el-col :span="20" class="val">{{item.jobDesc}}</el-col>
        </el-row>
        <el-row :key="item">
          <el-col :span="4" class="title">作者</el-col>
          <el-col :span="20" class="val">{{item.author}}</el-col>
        </el-row>
        <el-row :key="item">
          <el-col :span="4" class="title">任务类型</el-col>
          <el-col :span="20" class="val">{{item.type}}</el-col>
        </el-row>
        <el-row :key="item">
          <el-col :span="4" class="title">集群ID</el-col>
          <el-col :span="20" class="val">{{item.clusterId}}</el-col>
        </el-row>
        <el-row :key="item">
          <el-col :span="4" class="title">创建日期</el-col>
          <el-col :span="20" class="val">{{item.createDate}}</el-col>
        </el-row>
        <el-row :key="item">
          <el-col :span="4" class="title">改变日期</el-col>
          <el-col :span="20" class="val">{{item.changeDate}}</el-col>
        </el-row>
      </template>
    </el-dialog>
    <el-dialog title="编辑节点" :visible.sync="editNode">
      <el-form :model="form">
        <el-form-item label="节点名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="节点类型" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editNode = false">取 消</el-button>
        <el-button type="primary" @click="editNode = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增节点" :visible.sync="AddNode">
      <el-form :model="form">
        <el-form-item label="节点名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="节点类型" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AddNode = false">取 消</el-button>
        <el-button type="primary" @click="AddNewNode">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="删除节点" :visible.sync="DelNode">
      <span>是否要删除该节点?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="DelNode = false">取 消</el-button>
        <el-button type="primary" @click="DelNode = false">确 定</el-button>
      </span>
    </el-dialog>
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
      styleObject: {
        color: "#333",
        fontSize: "13px",
        position: "absolute",
        left: 123,
        top: 123
      },
      isShow: false,
      isDelete: true,
      chart: null,
      option: null,
      showNodeDetail: false,
      editNode: false,
      AddNode: false,
      DelNode: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      graphList: {
        content: {
          data: [
          ]
        },
        appVersion: {}
      },
      //保存点击节点后，存放该节点的数据
      clickgraphList: []
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    closeCurrentRightMenu() {
      return false;
    },
    closeMenu(e) {
      this.isShow = !this.isShow;
      e.stopPropagation;
    },
    //过滤点击节点的数据
    filterName(key, arrName) {
      if (arrName && arrName.length > 0) {
        this.clickgraphList = arrName.filter(item => item.name == key);
      }
      return this.clickgraphList;
    },
    //判断有无子节点，源节点不可删除，false
    isDeleteNode(name, arrName) {
      if (arrName && arrName.length > 0) {
        for (var i = 0; i <= arrName.length; i++) {
          //是否为根节点
          if (name == arrName[i].source && name != arrName[i].target) {
            this.isDelete = false;
          } else {
            this.isDelete = true;
          }
        }
      }
      return this.isDelete;
    },
    //添加节点
    AddNewNode() {
      var obj = {};
      obj.name = this.form.name;
      obj.type = this.form.region;
      this.graphList.content.data.push(obj);
      this.AddNode = false;
      console.log(this.graphList.content.data);
    },
    createdNewArr(arr) {
      var newArr = [];
      var x=250;
      var y=0;
      for (var i = 0; i < arr.length; i++) {
          debugger;
          x+=20;
          y+=20;
        var newObj = { 
            name: arr[i].name,
            x:x,
            y:y
            };
        newArr.push(newObj);
      }
      console.log(newArr);
      return newArr;
    },
    initChart() {
      this.chart = echarts.init(
        document.getElementById("myChart"),
        "infographic"
      );
      this.chart.showLoading();
      this.$axios.get("/api/graphList").then(response => {
        this.graphList = response.data;
        this.chart.hideLoading();
        var graphNode = this.graphList.content.data;
        this.chart.setOption(
          (this.option = {
            title: {
              text: "graph关系图"
            },
            tooltip: {
              show: false,
              formatter: function(e) {
                // return e.data.displayname;
                return "hello";
              },
              // position: [500, 10],
              triggerOn: "click"
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                type: "graph",
                layout: "force",
                legendHoverLink: true,
                force: {
                  //力引导图基本配置
                  //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
                  repulsion: 10, //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                  gravity: 0.03, //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                  edgeLength: 20, //边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                  layoutAnimation: true
                  //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
                },
                //设置球的大小
                draggable : true,
                symbolSize: 100,
                symbol: "rect", //标记图形 'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）, 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）
                draggable: true,
                label: {
                  normal: {
                    show: true
                  }
                },
                edgeSymbol: ["circle", "arrow"],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                  normal: {
                    textStyle: {
                      fontSize: 20
                    }
                  }
                },
                itemStyle: {
                  //===============图形样式，有 normal 和 emphasis 两个状态。normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                  normal: {
                    //默认样式
                    label: {
                      show: true
                    },
                    color: "#0af",
                    opacity: 1
                    //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                  },
                  emphasis: {
                    //高亮状态
                    color: ""
                  }
                },
                lineStyle: {
                  normal: {
                    color: "#61b7cf",
                    opacity: 1,
                    width: 3,
                    curveness: 0
                  }
                },
                data: this.createdNewArr(this.graphList.content.data),
                // links: [],
                links: this.graphList.content.links
              }
            ]
          })
        );
      });
      var node = this;
      this.chart.on("click", params => {
        console.log(params);
        node.isShow = true;
        node.styleObject.left = params.event.offsetX + 15 + "px";
        node.styleObject.top = params.event.offsetY + 15 + "px";
        node.filterName(params.data.name, node.graphList.content.data);
        node.isDeleteNode(params.data.name, node.graphList.content.links);
        return params.data.name;
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
.detailBox .title {
  background: #f2f6fc;
  padding: 15px;
  text-align: right;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  margin-bottom: 1px;
}
.detailBox .val {
  padding: 15px;
  background: #f6f6f6;
  height: 47px;
}
</style>
