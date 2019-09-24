<template>
  <div>
    <div>
      <el-radio-group v-model="operate" @change="changeOperate">
        <el-radio-button label="addNode">添加节点</el-radio-button>
        <el-radio-button label="addEdge">添加边</el-radio-button>
      </el-radio-group>
    </div>
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import G6Editor from "@antv/g6-editor";
export default {
  name: "index",
  components: {},
  mounted() {
    this.initG6();
  },
  props: {},
  data() {
    return {
      operate: null,
      graphObj: null,
      default: "",
      addNode: "",
      addEdge: ""
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
    create() {
      // 封装点击添加边的交互
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
      const data = {
        nodes: [
          {
            id: "node1",
            x: 100,
            y: 200
          },
          {
            id: "node2",
            x: 300,
            y: 200
          },
          {
            id: "node3",
            x: 300,
            y: 300
          }
        ],
        edges: [
          {
            id: "edge1",
            target: "node2",
            source: "node1"
          }
        ]
      };

      const graph = new G6.Graph({
        container: "mountNode",
        width: 500,
        height: 500,
        modes: {
          default: ["drag-node", "click-select"],
          addNode: ["click-add-node", "click-select"],
          addEdge: ["click-add-edge", "click-select"]
        }
      });
      this.graphObj = graph;
      graph.data(data);
      graph.render();
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#flowChart {
  border: 1px solid #ebeef5;
  position: relative;
  overflow: hidden;
}

.operating {
  position: absolute;
  z-index: 99;
  background-color: #ffffff;
  padding: 20px 10px;
  box-shadow: 1px 1px 4px 0 #0a0a0a2e;
}

.info {
  position: absolute;
  right: 0;
  z-index: 99;
  box-shadow: 1px 1px 4px 0 #0a0a0a2e;
  .title {
    height: 40px;
    padding-left: 10px;
    border-top: 1px solid #dce3e8;
    border-bottom: 1px solid #dce3e8;
    border-left: 1px solid #dce3e8;
    background: rgb(235, 238, 242);
    line-height: 40px;
    span {
      font-size: 14px;
    }
  }
  .content {
    background: rgba(247, 249, 251, 0.45);
    width: 200px;
    height: 800px;
    border-left: 1px solid #e6e9ed;
    padding: 10px;
  }
}

.btn-group {
  border-right: 1px solid #efefef;
  display: inline-block;
  padding-left: 10px;
  padding-right: 14px;
  &:last-of-type {
    border-right: 0;
  }
  .btn {
    display: inline-block;
    margin: 2px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    border: 1px solid rgba(233, 233, 233, 0);
    i {
      font-size: 20px;
    }
    &:hover {
      border: 1px solid #e9e9e9;
      color: #767a85;
      border-radius: 2px;
      background: #fafafe;
    }
  }
  .el-form-item {
    margin-bottom: 0 !important;
  }
}
</style>