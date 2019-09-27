<template>
  <div>
    <div>
      <el-radio-group v-model="operate" @change="changeOperate">
        <el-radio-button label="default">默认</el-radio-button>
        <el-radio-button label="addNode">添加节点</el-radio-button>
        <el-radio-button label="addEdge">添加边</el-radio-button>
      </el-radio-group>
    </div>
    <div id="mountNode"></div>
    <el-dialog title="编辑节点" :visible.sync="editNode">
      <el-form :model="editNodeNameList">
        <el-form-item label="节点名称" :label-width="formLabelWidth">
          <el-input v-model="editNodeNameList.name" />
        </el-form-item>

        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editNode = false">取 消</el-button>
        <el-button type="primary" @click="toEditCurren">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="删除连线" :visible.sync="delectLink">
      <span>确认要删除这个关系吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delectLink = false">取 消</el-button>
        <el-button type="primary" @click="removeLinkCurren">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import dagre from "dagre/dist/dagre";
import { debuglog } from "util";
import nodeConfig from "./nodeConfig";
nodeConfig();
export default {
  data() {
    return {
      showNodeDetail: false,
      formLabelWidth: "120px",
      graphList: {
        content: {
          data: [],
          links: []
        }
      },
      //保存点击节点后，存放该节点的数据
      clickgraphList: {},
      // G6 实例
      g6Graph: null,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      dataModel: "",
      editData: "",
      filterData: [],
      tooltipEl: null,
      operate: "default",
      graphObj: null,
      addNode: "addNode",
      addEdge: "addEdge",

      alertMessage: "创建作业流",
      flowData: {},
      flowTree: undefined,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        source: "",
        target: ""
      },
      editLink: false,
      delNode: false,
      editNode: false,
      editNodeName: false,
      dialogVisible: {
        clusterSelector: false,
        appListSelector: false
      },
      filterData: [],
      selectedJob: null,
      editLinkData: "",
      currenDataModel: null,
      editNodeNameList: {
        name: ""
      },
      drawer: false,
      direction: "rtl",
      whichDrawerToShow: null,
      hasChangeArrData: [],
      operateStatus: null,
      delectLink: false,
      delectLinkData: null,
      linkDataModel: "",
      waitRemoveLinkData: [],
      tooltipEl: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 在指定的位置显示tooltip
    showTooltip(message, position) {
      var domthis = this;
      if (!domthis.tooltipEl) {
        var container = document.getElementById("mountNode");
        debugger;
        var icon = document.createElement("i");
        domthis.tooltipEl = document.createElement("div");
        domthis.tooltipEl.setAttribute("class", "graph-tooltip");
        icon.setAttribute("class", "fa fa-minus");
        container.appendChild(domthis.tooltipEl);
        domthis.tooltipEl.appendChild(icon);
      }
      //给tooltipEl添加个click事件，调用this.removeLink();
      domthis.tooltipEl.onclick = function() {
        debugger;
        domthis.removeLink();
      };
      domthis.tooltipEl.textContent = message;
      // tooltip是相对于画布canvas element绝对定位，所以position的x，y必须是相对于画布的坐标
      domthis.tooltipEl.style.left = position.x + "px";
      domthis.tooltipEl.style.top = position.y + "px";
      domthis.tooltipEl.style.display = "block";
    },

    // 隐藏tooltip
    hideTooltip() {
      if (!this.tooltipEl) {
        return;
      }
      this.tooltipEl.style.display = "none";
    },

    getData() {
      this.$axios.get("/api/graphList").then(response => {
        this.graphList = response.data;
        this.create();
      });
    },
    changeOperate(value) {
      debugger;
      this.graphObj.setMode(value);
    },
    refresh() {
      const data = {
        nodes: this.graphList.content.nodes,
        edges: this.graphList.content.links
      };
      this.graphObj.read(data);
    },
    refreshBydata(flowData) {
      this.graphList.content = flowData;
      const data = {
        nodes: this.graphList.content.nodes,
        edges: this.graphList.content.links
      };
      this.graphObj.read(data);
    },
    // 删除节点
    removeCurren() {
      // 通过ID查询节点实例
      debugger;
      const item = this.graphObj.findById(this.currenDataModel.id);
      this.graphObj.removeItem(item);
      this.sync();
    },
    sync() {
      const grapData = this.graphObj.save();
      this.flowData.nodes = grapData.nodes;
      this.flowData.links = grapData.edges;
    },
    toedit() {
      this.editNode = true;
    },
    toEditCurren() {
      const item = this.graphObj.findById(this.currenDataModel.id);
      if (
        !this.editNodeNameList.name ||
        this.editNodeNameList.name.length === 0
      ) {
        this.editNodeNameList.name = this.selectedJob.jobDesc;
      }
      const model = {
        name: this.editNodeNameList.name
      };
      if (this.selectedJob && this.selectedJob.id) {
        model.jobId = this.selectedJob.id;
      }
      this.graphObj.updateItem(item, model);
      const grapData = this.graphObj.save();
      this.graphObj.read(grapData);
      this.sync();
      this.editNode = false;
    },
    removeLink() {
      this.delectLink = true;
    },
    removeLinkCurren() {
      debugger;
      const item = this.graphObj.findById(this.delectLinkData.id);
      this.graphObj.removeItem(item);
      this.delectLink = false;
      this.hideTooltip();
    },
    create() {
      // 定义默认线
      var g = new dagre.graphlib.Graph();
      g.edges().forEach(function(edge, i) {
        coord = g.edge(edge);
        data.edges[i].startPoint = coord.points[0];
        data.edges[i].endPoint = coord.points[coord.points.length - 1];
        data.edges[i].controlPoints = coord.points.slice(
          1,
          coord.points.length - 1
        );
      });
      const self = this;
      // 数据源
      var data = {
        nodes: this.graphList.content.nodes,
        edges: this.graphList.content.links
      };

      // 封装点击添加点的交互
      G6.registerBehavior("click-add-node", {
        getEvents() {
          return {
            "canvas:click": "onClick"
          };
        },
        onClick(ev) {
          const graph = this.graph;
          const node = graph.addItem("node", {
            x: ev.x,
            y: ev.y,
            id: G6.Util.uniqueId()
          });
        }
      });
      // 封装点击添加边的交互
      G6.registerBehavior("click-add-edge", {
        getEvents() {
          return {
            "node:click": "onClick",
            mousemove: "onMousemove",
            "edge:click": "onEdgeClick" // 点击空白处，取消边
          };
        },
        onClick(ev) {
          const node = ev.item;
          const graph = this.graph;
          const point = { x: ev.x, y: ev.y };
          const model = node.getModel();
          if (this.addingEdge && this.edge) {
            graph.updateItem(this.edge, {
              target: model.id
            });

            this.edge = null;
            this.addingEdge = false;
            self.sync();
          } else {
            this.edge = graph.addItem("edge", {
              source: model.id,
              target: point
            });
            this.addingEdge = true;
          }
          self.sync();
        },
        onMousemove(ev) {
          const point = { x: ev.x, y: ev.y };
          if (this.addingEdge && this.edge) {
            this.graph.updateItem(this.edge, {
              target: point
            });
          }
        },
        onEdgeClick(ev) {
          const currentEdge = ev.item;
          // 拖拽过程中，点击会点击到新增的边上
          if (this.addingEdge && this.edge == currentEdge) {
            graph.removeItem(this.edge);
            this.edge = null;
            this.addingEdge = false;
          }
          self.sync();
        }
      });

      var graph = new G6.Graph({
        container: "mountNode",
        width: 1200,
        height: 600,
        modes: {
          default: [
            "drag-canvas",
            {
              type: "drag-node",
              delegate: false
            },
            {
              type: "zoom-canvas",
              sensitivity: 0.5
            }
          ],
          addNode: ["click-add-node", "click-select"],
          addEdge: ["click-add-edge", "click-select"]
        },
        defaultNode: {
          shape: "card-node",
          anchorPoints: [[0.5, 1], [0.5, 0]]
        },
        defaultEdge: {
          shape: "VHV"
        },
        edgeStyle: {
          default: {
            stroke: "#A3B1BF",
            endArrow: true,
            lineWidth: 3,
            stroke: "#80deea"
          }
        }
      });
      this.graphObj = graph;
      graph.data(data);
      graph.render();

      // 节点点击事件
      graph.on("node:click", ev => {
        const funcMap = {
          delete: () => {
            this.removeCurren();
          },
          edit: () => {
            this.toedit();
          }
        };
        const shape = ev.target;
        const item = ev.item._cfg;
        this.currenDataModel = item.model;
        this.editNodeNameList = item.model;

        // 删除节点
        if (shape && shape._attrs.operateCode) {
          debugger;
          const action = funcMap[shape._attrs.operateCode];
          action();
        }
      });
      // 线的点击事件
      graph.on("edge:click", ev => {
        const edge = ev.item;
        const shape = ev.target;
        const item = ev.item._cfg;
        this.delectLinkData = item;

        if (item.id) {
          // 如果点击是发生在节点里面的小圆上，显示tooltip
          this.showTooltip("×", {
            x: ev.x,
            y: ev.y
          });
        }
        graph.setItemState(edge, "selected", !edge.hasState("selected")); // 切换选中
      });
      graph.on("canvas:click", function(event) {
        self.hideTooltip();
      });
      graph.on("edge:mouseenter", ev => {
        const edge = ev.item;
        graph.setItemState(edge, "active", true);
      });

      graph.on("edge:mouseleave", ev => {
        const edge = ev.item;
        graph.setItemState(edge, "active", false);
      });
    }
  }
};
</script>

<style>
#contextMenu {
  position: absolute;
  list-style: none;
  padding: 10px 5px;
  left: -100px;
  background: #ccc;
}

#contextMenu li {
  cursor: pointer;
}
#graph-container canvas {
  border: 1px solid #ccc;
}
.node-event-demo .header {
  font-size: 14px;
  margin: 10px 0;
}
.graph-tooltip {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #e2e2e2;
  border-radius: 30px;
  font-size: 16px;
  color: #ffffff;
  background-color: #e91e1ee6;
  padding: 3px 9px;
  -webkit-box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  cursor: pointer;
}
</style>
