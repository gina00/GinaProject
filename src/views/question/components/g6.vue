<template>
  <div>
    <div id="mountNode"></div>
    <el-dialog class="detailBox" title="节点详情" :visible.sync="showNodeDetail">
      <template v-for="item in clickgraphList">
        <div :key="item.id">
          <el-row>
            <el-col :span="4" class="title">节点名称</el-col>
            <el-col :span="20" class="val">{{item.name}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">任务集群ID:</el-col>
            <el-col :span="20" class="val">{{item.jobFlowId}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">版本</el-col>
            <el-col :span="20" class="val">{{item.version}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">集群ID</el-col>
            <el-col :span="20" class="val">{{item.jobId}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">创建日期</el-col>
            <el-col :span="20" class="val">{{item.createDate}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">改变日期</el-col>
            <el-col :span="20" class="val">{{item.changeDate}}</el-col>
          </el-row>
        </div>
      </template>
    </el-dialog>
    <el-dialog title="新增节点" :visible.sync="addNode">
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
        <el-button @click="addNode = false">取 消</el-button>
        <el-button type="primary" @click="addNode = false">确 定</el-button>
      </div>
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
    <el-dialog title="删除节点" :visible.sync="delNode">
      <span>是否要删除该节点?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delNode = false">取 消</el-button>
        <el-button type="primary" @click="delNode = false">确 定</el-button>
      </span>
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
      addNode: false,
      delNode: false,
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
          data: [],
          links: []
        }
      },
      //保存点击节点后，存放该节点的数据
      clickgraphList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/graphList").then(response => {
        this.graphList = response.data;
        this.create();
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
          const points = item.getPoints();
          const start = points[0];
          const end = points[points.length - 1 ];
          const vgap = end.y - start.y;
          const ygap = (vgap / 4) * 3;
          return [
            ["M", start.x, start.y],//moveto
            ["L", start.x, start.y + 25],
            ["L", end.x, start.y +25],
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
          const height = 75;
          const buttonWidth = 14;
          const buttonHeight = 14;
          let button = "";
          const dataModel = item.getModel();
          const html = G6.Util.createDOM(`
          <div class='node'>
            <div class='titleBox'>
                <div class='nodeID' id='${dataModel.id}'>${dataModel.name}</div>
                <i class="fa fa-spinner icon" aria-hidden="true" id='statusIcon${
                  dataModel.id
                }'></i>
            </div>
            <div class='editBox'>
                <div class='editIcon'>
                    <i class="fa fa-pencil-square-o icon" aria-hidden="true" id='editIcon${
                      dataModel.id
                    }'></i>
                </div>
                
                <div class='operatorIcon'>
                    <i class="fa fa-plus icon" aria-hidden="true" id='addIcon${
                      dataModel.id
                    }'></i>
                    <i class="fa fa-minus icon" aria-hidden="true" id='deleteIcon${
                      dataModel.id
                    }'></i>
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
        anchor: [[0.5, 0],[0.5, 1]]
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
        layout: dagre,
        defaultIntersectBox: "jobNodeCard"
      });
      //节点样式，采用什么节点，此处采用html自定义节点
      graph.node({
        shape: "jobNodeCard"
      });
      //连接线的样式
      graph.edge({
        shape: "VHV",
        style: {
          endArrow: true,
          lineWidth: 3,
          stroke: "#0af"
        }
      }) ;
      //节点点击事件
      graph.on("node:click", ev => {
        const { domEvent, item } = ev;
        const { target } = domEvent;
        const itemName = item.getModel();
        //查看节点详情
        if (target.id == item.id) {
          if (this.showNodeDetail == false) {
            //过滤点击节点的数据
            this.clickgraphList = this.graphList.content.data.filter(
              i => i.name == itemName.name
            );
            this.showNodeDetail = true;
          } else {
            this.showNodeDetail = false;
          }
        }
        //节点状态
        if (target.id == `statusIcon${item.id}`) {
          alert("状态icon被点中了");
        }
        //编辑节点
        if (target.id == `editIcon${item.id}`) {
          if (this.editNode == false) {
            this.editNode = true;
          }
        }
        //添加节点
        if (target.id == `addIcon${item.id}`) {
          if (this.addNode == false) {
            this.addNode = true;
            var obj = {};
            debugger;
            obj.name = this.form.name;
            obj.type = this.form.region;
            this.graphList.content.data.push(obj);
          } else {
            this.addNode = false;
          }
          console.log(this.graphList.content.data);
        }
        //删除节点
        if (target.id == `deleteIcon${item.id}`) {
          if (this.delNode == false) {
            this.delNode = true;
          }
        }

        graph.update(item, {
          showAfter: true
        });
      });
      //   graph.source(data.nodes, data.edges);
      graph.read(data);
    }
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
