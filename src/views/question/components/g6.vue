<template>
  <div>
    <div id="mountNode"></div>
    <el-dialog class="detailBox" title="节点详情" :visible.sync="showNodeDetail">
      <template v-for="(item,index) in clickgraphList">
        <el-row :key="index">
          <el-col :span="4" class="title">节点名称</el-col>
          <el-col :span="20" class="val">{{item.name}}</el-col>
        </el-row>
        <el-row :key="index">
          <el-col :span="4" class="title">任务集群ID:</el-col>
          <el-col :span="20" class="val">{{item.jobFlowId}}</el-col>
        </el-row>
        <el-row :key="index">
          <el-col :span="4" class="title">版本</el-col>
          <el-col :span="20" class="val">{{item.version}}</el-col>
        </el-row>
        <el-row :key="index">
          <el-col :span="4" class="title">集群ID</el-col>
          <el-col :span="20" class="val">{{item.jobId}}</el-col>
        </el-row>
        <el-row :key="index">
          <el-col :span="4" class="title">创建日期</el-col>
          <el-col :span="20" class="val">{{item.createDate}}</el-col>
        </el-row>
        <el-row :key="index">
          <el-col :span="4" class="title">改变日期</el-col>
          <el-col :span="20" class="val">{{item.changeDate}}</el-col>
        </el-row>
      </template>
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
  </div>
</template>

<script>
import G6 from "@antv/g6";
import G6Editor from "@antv/g6-editor";
import "@antv/g6/build/plugin.layout.dagre";
export default {
  data() {
    return {
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
            {
              id: "1",
              name: "root-flow",
              jobFlowId: 100000016,
              version: 1,
              createDate: "2019-03-12 16:05:16",
              changeDate: "2019-03-12 16:05:16",
              jobId: 100000016
            },
            {
              id: "2",
              name: "node-flow2",
              jobFlowId: 100000016,
              version: 1,
              createDate: "2019-03-12 16:05:16",
              changeDate: "2019-03-12 16:05:16",
              jobId: 100000017
            },
            {
              id: "3",
              name: "node-flow3",
              jobFlowId: 100000016,
              version: 1,
              createDate: "2019-03-12 16:05:16",
              changeDate: "2019-03-12 16:05:16",
              jobId: 100000018
            },
            {
              id: "4",
              name: "node-flow4",
              jobFlowId: 100000016,
              version: 1,
              createDate: "2019-03-12 16:05:16",
              changeDate: "2019-03-12 16:05:16",
              jobId: 100000019
            }
          ],
          links: [
            {
              source: "1",
              target: "2"
            },
            {
              source: "1",
              target: "3"
            },
            {
              source: "2",
              target: "4"
            },
            {
              source: "3",
              target: "4"
            }
          ]
        },
        appVersion: {
          timestamp: "2019-03-12 16:16:36"
        }
      },
      //保存点击节点后，存放该节点的数据
      clickgraphList: []
    };
  },
  mounted() {
    this.getData();
    this.create();
    this.bindingClick();
  },
  methods: {
    getData() {
      this.$axios.get("/api/graphList").then(response => {
        this.graphList = response.data;
      });
    },
    //创建关系图
    create() {
      const data = {
        nodes: this.graphList.content.data,
        edges: this.graphList.content.links
      };
      //自定义线
      G6.registerEdge("VHV", {
        getPath(item) {
          debugger;
          const points = item.getPoints();
          const start = points[0];
          const end = points[points.length - 1];
          const vgap = end.y - start.y;
          const ygap = (vgap / 4) * 3;
          return [
            ["M", start.x, start.y],
            ["L", start.x, start.y + 45],
            ["L", end.x, start.y + 78],
            ["L", end.x, end.y]
          ];
        }
      });
      //自定义节点-html元素节点
      G6.registerNode("jobNodeCard", {
        // 绘制
        draw(item) {
          const group = item.getGraphicGroup();
          const width = 170;
          const height = 100;
          const dataModel = item.getModel();
          const html = G6.Util.createDOM(`
          <div class='node'>
            <div class='titleBox'>
                <div class='nodeID' id='${dataModel.id}'>${dataModel.name}</div>
                <i class="fa fa-spinner icon" aria-hidden="true"></i>
            </div>
            <div class='editBox'>
                <div class='editIcon'>
                    <i class="fa fa-pencil-square-o icon" aria-hidden="true">Edit</i>
                </div>
                
                <div class='operatorIcon'>
                    <i class="fa fa-plus icon" aria-hidden="true"></i>
                    <i class="fa fa-trash icon" aria-hidden="true"></i>
                </div>
            </div>
          </div>
          `);
          const keyShape = group.addShape("dom", {
            attrs: {
              x: 0,
              y: 0,
              width,
              height,
              html
            }
          });
          return keyShape;
        },
        anchor(node) {
          // const hierarchy = node.getHierarchy();
          const inEdges = node.getInEdges();
          const outEdges = node.getOutEdges();
          const inEdgesNum = inEdges.length;
          const outEdgesNum = outEdges.length;
          const inAnchorArea = 1 - 1 / (inEdgesNum + 1);
          const outAnchorArea = 1 - 1 / (outEdgesNum + 1);
          const inGap = inAnchorArea / inEdgesNum;
          const outGap = outAnchorArea / outEdgesNum;
          const inAnchors = getAnchors(inEdgesNum, inGap, "in");
          const outAnchors = getAnchors(outEdgesNum, outGap, "out");
          const anchor = inAnchors.concat(outAnchors);
          return anchor;
        }
      });
      G6.registerNode("rect", {
        getPath: function getPath(item) {
          var width = 100; // 一半宽
          var height = 40; // 一半高
          return G6.Util.getRectPath(
            -width / 2,
            -height / 2,
            width,
            height,
            10
          );
        }
      });
      const dagre = new G6.Layouts.Dagre();
      //画布定义
      const plugin = new G6.Plugins["layout.dagre"]();
      const graph = new G6.Graph({
        container: mountNode,
        renderer: "svg",
        width: 1200,
        height: 1200,
        fitView: "tc",
        plugins: [plugin],
        layout: new G6.Layouts["Dagre"](),
        defaultIntersectBox: "jobNodeCard"
      });
      //节点样式，采用什么节点，此处采用html自定义节点
      graph.node({
        shape: "jobNodeCard"
      });
      //连接线的样式
      graph.edge({
        shape: "",
        style: {
          endArrow: true,
          lineWidth: 3,
          stroke: "#0af"
        }
      });
      //节点点击事件

      graph.on("node:click", ev => {
        const item = ev.item.getModel();
        //查看节点详情
        document.getElementById(item.id).onclick = function() {
          alert("ok");
        };
        if (this.showNodeDetail == false) {
          //过滤点击节点的数据
          this.clickgraphList = this.graphList.content.data.filter(
            i => i.name == item.name
          );
          this.showNodeDetail = true;
        } else {
          this.showNodeDetail = false;
        }

        debugger;
        const adddom = document.getElementById(item.id);
        document.getElementById(item.id).onclick = function() {
          var obj = {};
          obj.name = this.form.name;
          obj.type = this.form.region;
          this.graphList.content.data.push(obj);
          this.AddNode = false;
          console.log(this.graphList.content.data);
        };

        console.log(item);
        graph.update(item, {
          showAfter: true
        });
      });
      //   graph.source(data.nodes, data.edges);
      graph.read(data);
      function getAnchors(edgesNum, gap, type) {
        const anchors = [];
        let y;
        if (type === "out") y = 1;
        else y = 0;

        if (edgesNum % 2) {
          // odd number
          anchors.push([0.5, y]);
          for (let i = 1; i <= (edgesNum - 1) / 2; i += 1) {
            anchors.push([0.5 - i * gap, y]);
            anchors.push([0.5 + i * gap, y]);
          }
        } else {
          // even number
          if (edgesNum != 0) {
            anchors.push([0.5 - gap / 2, y]);
            anchors.push([0.5 + gap / 2, y]);
            for (let i = 1; i <= (edgesNum - 2) / 2; i += 1) {
              anchors.push([0.5 - gap / 2 - i * gap, y]);
              anchors.push([0.5 + gap / 2 + i * gap, y]);
            }
          }
        }
        return anchors;
      }
    },
    addDom(){
      
    },
    bindingClick() {
      for (var i in 4) {
        debugger;
        const adddom = document.getElementById(i);
        adddom.onclick = function() {
          var obj = {};
          obj.name = this.form.name;
          obj.type = this.form.region;
          this.graphList.content.data.push(obj);
          this.AddNode = false;
          console.log(this.graphList.content.data);
        };
      }
    },
    //添加节点
    AddNewNode() {},
    
  }
};
</script>

<style scope>
.node {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #b5d9fd;
  font-size: 14px;
  min-height: 60px;
  background-color: #e6f1fc;
  vertical-align: middle;
  cursor: pointer;
}
.node .titleBox {
  padding: 0;
  position: relative;
  font-weight: bold;
  color: #0af;
}
.node .titleBox .icon {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
}
.node .icon {
  padding: 0 5px;
  color: #188bc6;
}
.editBox {
  display: flex;
  justify-content: space-between;
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
