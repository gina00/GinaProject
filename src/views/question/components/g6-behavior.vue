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
    <el-dialog title="删除节点" :visible.sync="delNode">
      <span>是否要删除该节点?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delNode = false">取 消</el-button>
        <el-button type="primary" @click="removeCurren">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import dagre from "dagre/dist/dagre";
import { debuglog } from "util";
import nodeConfig from "./nodeConfig";

export default {
  data() {
    return {
      operate: "default",
      graphObj: null,
      addNode: "addNode",
      addEdge: "addEdge",
      showNodeDetail: false,
      editNode: false,
      addNode: false,
      delNode: false,
      dataModel: "",
    };
  },
  mounted() {
    this.create();
  },
  methods: {
    changeOperate(value) {
      debugger;
      this.graphObj.setMode(value);
    },
    // 删除节点
    // 方法，获取该节点的索引
    removeData(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
          arr.splice(i, 1);
          break;
        }
      }
    },
    removeCurren() {
      var dataArr = this.flowData.nodes;
      var linkArr = this.flowData.links;
      this.removeData(dataArr, this.dataModel);
      for (var key in linkArr) {
        if (
          linkArr[key].source == this.dataModel.id ||
          linkArr[key].target == this.dataModel.id
        ) {
          delete linkArr[key];
        }
      }
      this.whichDrawerToShow = null;
      // 重新渲染画布
      this.refresh();
    },
    create() {
      nodeConfig();
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
      // 数据源
      var data = {
        nodes: [
          {
            id: "022111111111",
            name: "cardNodeApp",
            ip: "127.0.0.1",
            nodeError: false,
            type: "root",
            keyInfo: "",
            operate: {
              delete: "删除",
              edit: "编辑"
            },
            x: 250,
            y: 50
          },
          {
            id: "12222222",
            name: "cardNodeApp",
            ip: "127.0.0.1",
            nodeError: false,
            type: "root",
            keyInfo: "",
            operate: {
              delete: "删除",
              edit: "编辑"
            },
            x: 50,
            y: 300
          },
          {
            id: "022",
            name: "cardNodeApp",
            ip: "127.0.0.1",
            nodeError: false,
            type: "implementing",
            keyInfo: "",
            operate: {
              delete: "删除",
              edit: "编辑"
            },
            x: 450,
            y: 300,
            children: [
              {
                name: "sub"
              }
            ]
          }
        ],
        edges: [
          {
            source: "0",
            target: "2"
          },
          {
            source: "1",
            target: "2"
          }
        ]
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
          } else {
            this.edge = graph.addItem("edge", {
              source: model.id,
              target: point
            });
            this.addingEdge = true;
          }
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
      // // 创建右键菜单
      // var conextMenuContainer = document.createElement("ul");
      // conextMenuContainer.id = "contextMenu";

      // // 创建li
      // var firstLi = document.createElement("li");
      // firstLi.innerText = "删除";
      // conextMenuContainer.appendChild(firstLi);

      // var lastLi = document.createElement("li");
      // lastLi.innerText = "编辑";
      // conextMenuContainer.appendChild(lastLi);
      // document.body.appendChild(conextMenuContainer);

      // var menu = document.getElementById("contextMenu");
      // graph.on("node:contextmenu", function(evt) {
      //   debugger;
      //   menu.style.left = evt.x + 244 + "px";
      //   menu.style.top = evt.y + 260 + "px";
      // });

      // graph.on("node:mouseleave", function(evt) {
      //   menu.style.left = "-100px";
      // });
      // 节点点击事件
      graph.on("node:click", ev => {
        const shape = ev.target;
        const item = ev.item._cfg;
        const itemModel = item.model;
        // if (itemModel.operate.delete=='删除') {
        //   alert("点击了删除");
        // }
        // if (itemModel.operate.edit=='编辑') {
        //   alert("点击了编辑");
        // }
        //删除节点
        if (item.id==itemModel.id && itemModel.operate.delete=="删除") {
          console.log(item.model);
          if (this.delNode == false) {
            this.delNode = true;
            this.dataModel = item.model;
          }
        }
      });
      // 线的点击事件
      graph.on("edge:click", ev => {
        const edge = ev.item;
        graph.setItemState(edge, "selected", !edge.hasState("selected")); // 切换选中
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
</style>
