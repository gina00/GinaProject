<template>
  <div>
    <div class="breathe-btn"></div>
    <div id="mountNode"></div>
    <el-dialog class="nodeDetailBox" title="节点详情" :visible.sync="showNodeDetail">
      <template>
        <div>
          <el-row>
            <el-col :span="4" class="title">节点名称</el-col>
            <el-col :span="20" class="val">{{clickgraphList.name}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">任务集群ID:</el-col>
            <el-col :span="20" class="val">{{clickgraphList.jobFlowId}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">版本</el-col>
            <el-col :span="20" class="val">{{clickgraphList.version}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">集群ID</el-col>
            <el-col :span="20" class="val">{{clickgraphList.jobId}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">创建日期</el-col>
            <el-col :span="20" class="val">{{clickgraphList.createDate}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" class="title">改变日期</el-col>
            <el-col :span="20" class="val">{{clickgraphList.changeDate}}</el-col>
          </el-row>
        </div>
      </template>
    </el-dialog>
    <el-dialog title="新增节点" :visible.sync="addNode">
      <el-form :model="form">
        <el-row class="formRow">
          <el-col :span="12">
            <el-form-item label="节点名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-col>
        </el-row>

        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
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
        <el-button @click="addNode = false">取 消</el-button>
        <el-button type="primary" @click="AddNewNode">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑节点" :visible.sync="editNode">
      <el-form :model="form">
        <el-form-item label="目标节点" :label-width="formLabelWidth">
          <el-select v-model="form.target" placeholder="请选择节点关系">
            <div v-for="item in this.filterData" :key="item.index">
              <el-option :label="item.name" :value="item.id"></el-option>
            </div>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editNode = false">取 消</el-button>
        <el-button type="primary" @click="editNodeP">确 定</el-button>
      </div>
    </el-dialog>
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
import G6Editor from "@antv/g6-editor";
import "@antv/g6/build/plugin.layout.dagre";
import { debuglog } from "util";
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
        desc: "",
        source: "",
        target: ""
      },
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
      filterData: []
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
    // 新增节点、连线
    AddNewNode() {
      var length = this.graphList.content.data.length;
      var newNode = {};
      //设置新增节点的id，赋值给newNodeId；
      this.newNodeId =
        this.graphList.content.data[length - 1].id.split(" ") + 1;
      newNode.id = this.newNodeId;
      newNode.name = this.form.name;
      this.graphList.content.data.push(newNode);
      this.AddNewLink();
      //数据加到model中 要通知G6重绘画布
      const data = {
        nodes: this.graphList.content.data,
        edges: this.graphList.content.links
      };
      this.g6Graph.read(data);
      this.addNode = false;
    },
    AddNewLink() {
      var newLink = {};
      //节点上添加，源节点即为该节点
      newLink.source = this.source.id;
      newLink.target = this.newNodeId;
      this.graphList.content.links.push(newLink);
      console.log(this.graphList.content.links);
    },
    //状态设置
    //是否红色node，是的话为祖父组件添加样式。
    getEleParent(id) {
      var statuNode = document.getElementById(id);
      var parent = statuNode.parentNode;
      return parent;
    },
    //判断元素是否有需要添加的class
    hasClass(cla, element) {
      if (element.className.trim().length === 0) {
        return false;
      }

      var allClass = element.className.trim().split(" ");
      return allClass.indexOf(cla) > -1;
    },
    addClass(cla, element) {
      //cla 需要添加的类名，element 是需要添加类名的
      //没有class属性
      if (element.className.trim().length === 0) {
        element.className = cla;
      } else if (!this.hasClass(cla, element)) {
        if (element.setAttribute) {
          element.setAttribute(
            "class",
            element.getAttribute("class") + " " + cla
          );
        } else {
          element.className = element.className + " " + cla;
        }
      }
    },
    // 删除节点
    //方法，获取该节点的索引
    removeData(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
          arr.splice(i, 1);
          break;
        }
      }
    },
    removeCurren() {
      debugger;
      var dataArr = this.graphList.content.data;
      var linkArr = this.graphList.content.links;
      this.removeData(dataArr, this.dataModel);
      for (var key in linkArr) {
        if (
          linkArr[key].source == this.dataModel.id ||
          linkArr[key].target == this.dataModel.id
        ) {
          delete linkArr[key];
        }
      }
      this.delNode = false;
      //重新渲染画布
      const data = {
        nodes: this.graphList.content.data,
        edges: this.graphList.content.links
      };
      this.g6Graph.read(data);
    },
    filterDataNode(arr) {
      var editId = this.editData.id;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id != editId) {
          var newArr = {
            id: arr[i].id,
            name: arr[i].name
          };
          this.filterData.push(newArr);
        }
      }
      //this.filterData=this.deteleObject(this.filterData);
      return this.filterData;
    },
    editNodeP() {
      this.editNewLink();
      //重新渲染画布
      const data = {
        nodes: this.graphList.content.data,
        edges: this.graphList.content.links
      };
      this.g6Graph.read(data);
      this.editNode = false;
      this.filterData = [];
    },
    editNewLink() {
      debugger;
      var newLink = {};
      //节点上添加，源节点即为该节点
      newLink.source = this.editData.id;
      newLink.target = this.form.target;
      this.graphList.content.links.push(newLink);
    },
    //删除数组对象中重复的对象
    deteleObject(obj) {
      debugger;
      var uniques = [];
      var stringify = {};
      for (var i = 0; i < obj.length; i++) {
        //返回一个由一个给定对象的自身可枚举属性组成的数组
        //即keys=[text,value];
        var keys = Object.keys(obj[i]);

        keys.sort(function(a, b) {
          return Number(a) - Number(b);
        });
        //str=""text""值""value""值""
        var str = "";
        for (var j = 0; j < keys.length; j++) {
          str += JSON.stringify(keys[j]);
          str += JSON.stringify(obj[i][keys[j]]);
        }
        //hasOwnProperty返回一个布尔值,指示对象自身属性中是否具有指定的属性
        if (!stringify.hasOwnProperty(str)) {
          //判断字符串是否存在
          uniques.push(obj[i]);
          stringify[str] = true; //为已存入对象的属性str 设置值为true。因为hasOwnProperty返回一个布尔值。
        }
      }
      uniques = uniques;
      return uniques;
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
          const end = points[points.length - 1];
          const vgap = end.y - start.y;
          const ygap = (vgap / 4) * 3;
          return [
            ["M", start.x, start.y - 25], //moveto
            ["L", start.x, start.y + 25],
            ["L", end.x, start.y + 25],
            ["L", end.x, end.y]
          ];
        }
      });
      // G6.registerEdge("line-arrow", {
      //   draw: function draw(cfg, group) {
      //     var startPoint = cfg.startPoint,
      //       endPoint = cfg.endPoint;

      //     var keyShape = group.addShape("path", {
      //       attrs: {
      //         path: [
      //           ["M", startPoint.x, startPoint.y],
      //           ["L", endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y],
      //           ["L", endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y],
      //           ["L", endPoint.x, endPoint.y]
      //         ],
      //         stroke: "#BBB",
      //         lineWidth: 1,
      //         startArrow: {
      //           path: "M 6,0 L -6,-6 L -3,0 L -6,6 Z",
      //           d: 6
      //         },
      //         endArrow: {
      //           path: "M 6,0 L -6,-6 L -3,0 L -6,6 Z",
      //           d: 6
      //         },
      //         className: "edge-shape"
      //       }
      //     });
      //     return keyShape;
      //   }
      // });
      //自定义节点-html元素节点
      G6.registerNode("jobNodeCard", {
        // 绘制
        draw(item) {
          const group = item.getGraphicGroup();
          const width = 170;
          const height = 85;
          const buttonWidth = 14;
          const buttonHeight = 14;
          let button = "";
          const dataModel = item.getModel();
          const html = G6.Util.createDOM(`
          <div>
            <div class='node normal'>
              <div class='titleBox'>
                  <div class='nodeID' id='${dataModel.id}'>${dataModel.name}</div>
                  <i class="fa fa-cog icon" aria-hidden="true" id='statusIcon${dataModel.id}'></i>
              </div>
              <div class='editBox'>
                  <div class='editIcon'>
                      <i class="fa fa-pencil-square-o icon" aria-hidden="true" id='editIcon${dataModel.id}'></i>
                  </div>

                  <div class='operatorIcon'>
                      <i class="fa fa-plus icon" aria-hidden="true" id='addIcon${dataModel.id}'></i>
                      <i class="fa fa-minus icon" aria-hidden="true" id='deleteIcon${dataModel.id}'></i>
                  </div>
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
        anchor: [[0.5, 0], [0.5, 1]]
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
      this.g6Graph = graph;
      //节点样式，采用什么节点，此处采用html自定义节点
      graph.node({
        shape: "jobNodeCard"
      });
      //连接线的样式
      graph.edge({
        shape: "line-arrow",
        style: {
          endArrow: true,
          lineWidth: 3,
          stroke: "#80deea"
        }
      });
      //节点点击事件
      graph.on("node:click", ev => {
        const { domEvent, item } = ev;
        const { target } = domEvent;
        const itemName = item.getModel();
        //查看节点详情
        if (target.id == item.id) {
          if (this.showNodeDetail == false) {
            //点击节点的数据
            this.clickgraphList = item.model;
            this.showNodeDetail = true;
          } else {
            this.showNodeDetail = false;
          }
        }
        //节点状态
        if (target.id == `statusIcon${item.id}`) {
          //存放需要添加样式的元素
          var statuNode = document.getElementById(`statusIcon${item.id}`);
          const newStatus = this.getEleParent(item.id).parentNode;
          const animateNode = this.getEleParent(item.id).parentNode.parentNode;

          // 判断是否红色框
          if (this.hasClass("fa-cog", statuNode)) {
            this.addClass("red", newStatus); //改变状态
            this.addClass("anima", animateNode); //添加呼吸灯效果
            statuNode.classList.remove("fa-cog");
            this.addClass("fa-spinner", statuNode); //更改状态按钮图标
          }
          // 绿色  完成状态
          if (this.hasClass("red", newStatus)) {
            // 经过5s后变成绿色状态
            setTimeout(() => {
              this.addClass("green", newStatus);
              statuNode.classList.remove("fa-spinner");
              this.addClass("fa-check-circle", statuNode); //更改状态按钮图标
              newStatus.classList.remove("red");
              animateNode.classList.remove("anima");
            }, 5000);
          }
          // 点击按钮切换到默认状态
          if (this.hasClass("green", newStatus)) {
            // 再次点击后，去掉绿色，变成红色
            statuNode.classList.remove("fa-check-circle");
            this.addClass("fa-cog", statuNode);
            newStatus.classList.remove("green");
          }
        }
        //编辑节点
        if (target.id == `editIcon${item.id}`) {
          if (this.editNode == false) {
            this.editNode = true;
            this.editData = itemName;
            this.filterDataNode(this.graphList.content.data);
          }
        }
        //添加节点
        if (target.id == `addIcon${item.id}`) {
          if (this.addNode == false) {
            // true 开始弹窗
            this.addNode = true;
            //根源节点复制
            this.source = itemName;
          }
        }
        //删除节点
        if (target.id == `deleteIcon${item.id}`) {
          console.log(item.model);
          if (this.delNode == false) {
            this.delNode = true;
            this.dataModel = item.model;
          }
        }
      });
      graph.read(data);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style>
.node {
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  min-height: 60px;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.node .titleBox {
  padding: 0;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.node .titleBox .icon {
  font-size: 12px;
}

.node .icon {
  padding: 0 5px;
}

.editBox {
  display: flex;
  justify-content: space-between;
}

.nodeDetailBox .title {
  background: #f2f6fc;
  padding: 15px;
  text-align: right;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  margin-bottom: 1px;
}

.nodeDetailBox .val {
  padding: 15px;
  background: #f6f6f6;
  height: 47px;
}

/* color */
/* normal blue */
.normal {
  border: 1px solid #b5d9fd;
  background-color: #e6f1fc;
}

.normal .titleBox {
  color: #0af;
}

.normal .icon {
  color: #188bc6;
}

/* red */
.anima {
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-name: breathe2;
  -webkit-animation-duration: 2700ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
}

.red {
  border: 1px solid #fdb5b5;
  background-color: #fce6e6;
}

.red .titleBox {
  color: #f00;
}

.red .icon {
  color: #e35353;
}

@keyframes breathe2 {
  0% {
    box-shadow: 0px 0px 5px rgba(228, 26, 26, 0.1);
  }

  100% {
    box-shadow: 0px 0px 10px rgba(228, 26, 26, 0.4);
  }
}

@-webkit-keyframes breathe2 {
  0% {
    box-shadow: 0px 0px 5px rgba(228, 26, 26, 0.1);
  }

  100% {
    box-shadow: 0px 0px 10px rgba(228, 26, 26, 0.4);
  }
}
/* green */
.green {
  border: 1px solid #b5fdb6;
  background-color: #e9fce6;
}

.green .titleBox {
  color: #00ca08;
}

.green .icon {
  color: #18c61f;
}
</style>
