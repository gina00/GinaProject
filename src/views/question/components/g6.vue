<template>
  <div>
    <div id="mountNode"></div>
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
              id: 1,
              name: "root-flow",
              jobFlowId: 100000016,
              version: 1,
              createDate: "2019-03-12 16:05:16",
              changeDate: "2019-03-12 16:05:16",
              jobId: 100000016
            },
            {
              id: 2,
              name: "node-flow2",
              jobFlowId: 100000016,
              version: 1,
              createDate: "2019-03-12 16:05:16",
              changeDate: "2019-03-12 16:05:16",
              jobId: 100000017
            },
            {
              id: 3,
              name: "node-flow3",
              jobFlowId: 100000016,
              version: 1,
              createDate: "2019-03-12 16:05:16",
              changeDate: "2019-03-12 16:05:16",
              jobId: 100000018
            },
            {
              id: 4,
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
              source: 1,
              target: 2
            },
            {
              source: 1,
              target: 3
            },
            {
              source: 2,
              target: 4
            },
            {
              source: 3,
              target: 4
            }
          ]
        },
        appVersion: {
          timestamp: "2019-03-12 16:16:36"
        }
      }
    };
  },
  mounted() {
    this.getData();
    this.create();
  },
  methods: {
    getData() {
      this.$axios.get("/api/graphList").then(response => {
        this.graphList = response.data;
      });
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
    dataNewArr(arr) {
      var newArr = [];
      var x = 250;
      var y = 0;
      for (var i = 0; i < arr.length; i++) {
        debugger;
        x += 20;
        y += 20;
        var newObj = {
          name: arr[i].name,
          x: x,
          y: y
        };
        newArr.push(newObj);
      }
      console.log(newArr);
      return newArr;
    },
    create() {
      G6.registerNode("jobNodeCard", {
        // 绘制
        draw(item) {
          const group = item.getGraphicGroup();
          const width = 170;
          const height = 80;
          const dataModel = item.getModel();
          console.log(dataModel);
          const html = G6.Util.createDOM(`
          <div class='node'>
            <div class='titleBox'>
                <div class='nodeID'>${dataModel.name}</div>
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
          anchor: [[0.5, 0], [0.5, 1]];
        }
      });
      const data = {
        nodes: this.dataNewArr(this.graphList.content.data)
      };
      const graph = new G6.Graph({
        container: mountNode,
        renderer: "svg",
        width: 1200,
        height: 600,
        fitView: "tc",
        plugins: [new G6.Plugins["layout.dagre"]()]
      });
      graph.node({
        shape: "jobNodeCard"
      });
      graph.edge({
        style: {
          endArrow: true
        }
      });
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
</style>
