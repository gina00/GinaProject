<template>
  <div>
    <el-alert :title="alertMessage" type="info" show-icon :closable="false" />
    <div id="mountNode" class="container-grid nodeFlow" />
    <div v-show="whichDrawerToShow=='addNode'" class="drawer">
      <div class="drawerHead">
        <span>选择作业</span>
        <el-button
          icon="el-icon-close"
          style="float: right; padding: 3px 0"
          type="text"
          @click="whichDrawerToShow=null"
        />
      </div>
      <div class="content">
        <job-list
          :show-create-button="false"
          :select-model="true"
          :job-types="['K8S_JOB']"
          @selected="onSelectJob"
        />
      </div>
    </div>
    <div v-show="whichDrawerToShow=='editLink'" class="drawer">
      <div class="drawerHead">
        <span>添加节点关系</span>
        <el-button
          icon="el-icon-close"
          style="float: right; padding: 3px 0"
          type="text"
          @click="whichDrawerToShow=null"
        />
      </div>
      <div class="content">
        <el-form :model="form">
          <el-form-item label="目标节点" :label-width="formLabelWidth">
            <el-select v-model="form.date1" placeholder="请选择节点关系">
              <div v-for="item in this.filterData" :key="item.index">
                <el-option :label="item.name" :value="item.id" />
              </div>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="drawerFoot">
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="whichDrawerToShow=null">取 消</el-button>
          <el-button size="small" @click="editLinkgraph">确 定</el-button>
        </div>
      </div>
    </div>
    <div v-show="whichDrawerToShow=='delectLink'" class="drawer">
      <div class="drawerHead">
        <span>删除连线</span>
        <el-button
          icon="el-icon-close"
          style="float: right; padding: 3px 0"
          type="text"
          @click="whichDrawerToShow=null"
        />
      </div>
      <div class="content">
        <el-form :model="form">
          <el-form-item label="有关系的节点" :label-width="formLabelWidth">
            <el-select v-model="form.target" placeholder="请选择节点关系">
              <div v-for="item in this.waitRemoveLinkData" :key="item.index">
                <el-option :label="item.name" :value="item" />
              </div>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="drawerFoot">
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="whichDrawerToShow=null">取 消</el-button>
          <el-button size="small" @click="removeLink">确 定</el-button>
        </div>
      </div>
    </div>
    <div v-show="whichDrawerToShow=='delNode'" class="drawer">
      <div class="drawerHead">
        <span>删除节点</span>
        <el-button
          icon="el-icon-close"
          style="float: right; padding: 3px 0"
          type="text"
          @click="whichDrawerToShow=null"
        />
      </div>
      <div class="content">
        <span>是否要删除该节点?</span>
      </div>
      <div class="drawerFoot">
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="whichDrawerToShow=null">取 消</el-button>
          <el-button size="small" @click="removeCurren">确 定</el-button>
        </div>
      </div>
    </div>
    <div v-show="whichDrawerToShow=='editNodeName'" class="drawer">
      <div class="drawerHead">
        <span>修改名称</span>
        <el-button
          icon="el-icon-close"
          style="float: right; padding: 3px 0"
          type="text"
          @click="whichDrawerToShow=null"
        />
      </div>
      <div class="content">
        <el-form :model="editNodeNameList">
          <el-form-item label="节点名称" :label-width="formLabelWidth">
            <el-input v-model="editNodeNameList.name" />
          </el-form-item>
        </el-form>
      </div>
      <div class="drawerFoot">
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="whichDrawerToShow=null">取 消</el-button>
          <el-button size="small" @click="editName">确 定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import appListSelectWidget from "../appWizardWidgets/paas-appList-select.vue";
import nt from "@/page/business/network.js";
import jobList from "@/page/business/appMgr/jobFlow/app_jobflow_list.vue";
export default {
  name: "Jobflow",
  components: {
    "nl-app-list-select": appListSelectWidget,
    "job-list": jobList
  },
  props: {
    value: { type: Object, required: true }
  },
  data() {
    return {
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
      formLabelWidth: "120px",
      addNode: false,
      editLink: false,
      delNode: false,
      editNodeName: false,
      dialogVisible: {
        clusterSelector: false,
        appListSelector: false
      },
      filterData: [],
      selectedJob: null,
      editLinkData: "",
      dataModel: "",
      editNodeNameList: {
        name: ""
      },
      drawer: false,
      direction: "rtl",
      whichDrawerToShow: null,
      hasChangeArrData: [],
      operate: {
        addLink: {
          sourceNodeClick: null,
          targetNodeClick: null
        }
      },
      operateStatus: null,
      delectLink: false,
      linkDataModel: "",
      waitRemoveLinkData: []
    };
  },
  watch: {
    value: function(val) {
      this.flowData = this.value;
      // const tempScale = this.flowTree.getZoom()
      // this.flowTree.read(this.flowData)
      // this.flowTree.zoom(tempScale)
    }
  },
  mounted() {
    this.flowData = this.value;
    this.create();
  },
  methods: {
    onSelectJob(job) {
      // 实现作业选中业务
      this.whichDrawerToShow = null;
      console.log(job);
      this.selectedJob = job;
      // 获取节点ID后 开始新增节点
      this.getNextNodeId();
    },

    // 新增节点、连线
    AddNewNode() {
      var newNode = {};
      // 设置新增节点的id，赋值给newNodeId；
      newNode.id = this.newNodeId;
      newNode.name = this.selectedJob.jobDesc;
      newNode.jobId = this.selectedJob.id;
      this.flowData.nodes.push(newNode);
      this.AddNewLink();
      // 数据加到model中 要通知G6重绘画布
      this.refresh();
      this.addNode = false;
    },
    refresh() {
      const data = {
        nodes: this.flowData.nodes,
        edges: this.flowData.links
      };
      this.g6Graph.read(data);
    },
    refreshBydata(flowData) {
      this.flowData = flowData;
      const data = {
        nodes: this.flowData.nodes,
        edges: this.flowData.links
      };
      this.g6Graph.read(data);
    },

    AddNewLink() {
      debugger;
      var newLink = {};
      // 节点上添加，源节点即为该节点
      newLink.source = this.source.id;
      newLink.target = this.newNodeId;
      this.flowData.links.push(newLink);
      console.log(this.flowData.links);
    },
    getNextNodeId() {
      nt.doRequest({
        method: "get",
        uri: "/paas/jobmgr/v1/job-flow/node-id",
        onSuccess: resp => {
          this.newNodeId = resp.data.content;
          this.AddNewNode();
        },
        onError: resp => {}
      });
    },
    // 编辑节点，新增连线
    filterDataNode(arr) {
      debugger;
      var editId = this.editLinkData.id;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id != editId) {
          var newArr = {
            id: arr[i].id,
            name: arr[i].name
          };
          this.filterData.push(newArr);
        }
      }
      // this.filterData=this.deteleObject(this.filterData);
      return this.filterData;
    },
    cancel() {
      // 重新渲染画布
      this.refresh();
    },
    editLinkgraph() {
      this.editNewLink();
      // 重新渲染画布
      this.refresh();
      this.filterData = [];
    },
    editNewLink() {
      var newLink = {};
      // 节点上添加，源节点即为该节点
      newLink.source = this.editLinkData.id;
      newLink.target = this.form.target;
      this.whichDrawerToShow = null;
      this.flowData.links.push(newLink);
    },
    // 删除数组对象中重复的对象
    deteleObject(obj) {
      debugger;
      var uniques = [];
      var stringify = {};
      for (var i = 0; i < obj.length; i++) {
        // 返回一个由一个给定对象的自身可枚举属性组成的数组
        // 即keys=[text,value];
        var keys = Object.keys(obj[i]);

        keys.sort(function(a, b) {
          return Number(a) - Number(b);
        });
        // str=""text""值""value""值""
        var str = "";
        for (var j = 0; j < keys.length; j++) {
          str += JSON.stringify(keys[j]);
          str += JSON.stringify(obj[i][keys[j]]);
        }
        // hasOwnProperty返回一个布尔值,指示对象自身属性中是否具有指定的属性
        if (!stringify.hasOwnProperty(str)) {
          // 判断字符串是否存在
          uniques.push(obj[i]);
          stringify[str] = true; // 为已存入对象的属性str 设置值为true。因为hasOwnProperty返回一个布尔值。
        }
      }
      uniques = uniques;
      return uniques;
    },
    // 修改一个节点为待选状态
    changeNodeColor(node) {
      var statuNode = document.getElementById(`addLinkIcon${node.id}`);
      const newStatus = this.getEleParent(node.id).parentNode;
      const animateNode = this.getEleParent(node.id).parentNode.parentNode;
      // 判断是否红色框
      //if (this.hasClass("fa-link", statuNode)) {
        this.addClass("glexIcon",statuNode);
        this.addClass("glex", newStatus); // 改变状态
        this.addClass("anima", animateNode); // 添加呼吸灯效果
      //}
      // if (this.hasClass('glex ', newStatus)) {
      //   // 经过5s后变成绿初始状态
      //   setTimeout(() => {
      //     newStatus.classList.remove('glex')
      //     animateNode.classList.remove('anima')
      //   }, 5000)
      // }
    },
    changeNoddesColor(sourceNode) {
      // 获取需要改为待选选状态的node
      var waitSelectNodes = [];
      for (var i in this.flowData.nodes) {
        var node = this.flowData.nodes[i];
        // 排除自身和root
        if (!node.isRoot && node.id != sourceNode.id) {
          var existLink = false;
          for (var j in this.flowData.links) {
            var link = this.flowData.links[j];
            // 已经存在关系
            if (link.target == node.id && link.source == sourceNode.id) {
              existLink = true;
              break;
            }
            if (link.source == node.id && link.target == sourceNode.id) {
              existLink = true;
              break;
            }
          }
          if (!existLink) {
            this.changeNodeColor(node);
            // waitSelectNodes.push(node.id);
          }
        }
      }
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
    //删除连线
    removeLinkData(node) {
      debugger;
      this.waitRemoveLinkData = [];
      var dataArr = this.flowData.nodes;
      var linkArr = this.flowData.links;
      for (var key in linkArr) {
        //当前元素是目标节点
        if (linkArr[key].target == node.id) {
          for (var i in dataArr) {
            if (linkArr[key].source == dataArr[i].id) {
              var newArr = {
                id: linkArr[key].source,
                name: dataArr[i].name + "-" + linkArr[key].source,
                type: "source"
              };
              this.waitRemoveLinkData.push(newArr);
            }
          }
        }
        //当前元素是源节点
        if (linkArr[key].source == node.id) {
          for (var i in dataArr) {
            if (linkArr[key].target == dataArr[i].id) {
              var newArr = {
                id: linkArr[key].target,
                name: dataArr[i].name + "-" + linkArr[key].target,
                type: "target"
              };
              this.waitRemoveLinkData.push(newArr);
            }
          }
        }
        console.log(this.waitRemoveLinkData);
      }
      return this.waitRemoveLinkData;
    },
    removeLink() {
      var linkArr = this.flowData.links;
      for (var key in linkArr) {
        var link = linkArr[key];
        if (
          link.source == this.linkDataModel.id &&
          link.target == this.form.target.id &&
          this.form.target.type == "target"
        ) {
          delete linkArr[key];
        }
        if (
          link.target == this.linkDataModel.id &&
          link.source == this.form.target.id &&
          this.form.target.type == "source"
        ) {
          delete linkArr[key];
        }
      }
      this.whichDrawerToShow = null;
      this.refresh();
    },
    // 节点名称修改
    editName() {
      this.whichDrawerToShow = null;
      this.refresh();
    },
    // 是否红色node，是的话为祖父组件添加样式。
    getEleParent(id) {
      var statuNode = document.getElementById(id);
      var parent = statuNode.parentNode;
      return parent;
    },
    // 判断元素是否有需要添加的class
    hasClass(cla, element) {
      if (element.className.trim().length === 0) {
        return false;
      }

      var allClass = element.className.trim().split(" ");
      return allClass.indexOf(cla) > -1;
    },
    addClass(cla, element) {
      // cla 需要添加的类名，element 是需要添加类名的
      // 没有class属性
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
    // 创建关系图
    create() {
      const data = {
        nodes: this.flowData.nodes,
        edges: this.flowData.links
      };
      // 自定义线
      G6.registerEdge("VHV", {
        getPath(item) {
          const points = item.getPoints();
          const start = points[0];
          const end = points[points.length - 1];
          const vgap = end.y - start.y;
          const ygap = (vgap / 4) * 3;
          return [
            ["M", start.x, start.y - 25], // moveto
            ["L", start.x, start.y + 25],
            ["L", end.x, start.y + 25],
            ["L", end.x, end.y]
          ];
        }
      });
      // 自定义节点-html元素节点
      G6.registerNode("jobNodeCard", {
        // 绘制
        draw(item) {
          const group = item.getGraphicGroup();
          const width = 170;
          const height = 85;
          const buttonWidth = 14;
          const buttonHeight = 14;
          const button = "";
          const dataModel = item.getModel();
          const html = G6.Util.createDOM(`
          <div class="domNode">
            <div class='node normal'>
              <div class='titleBox'>
                  <div class='nodeID' id='${dataModel.id}'>${dataModel.name}</div>
              </div>
              <div class='editBox'>
                  <div class='editIcon'>
                      <i class="fa fa-pencil-square-o icon" aria-hidden="true" id='editIcon${dataModel.id}'></i>
                  </div>

                  <div class='operatorIcon'>
                      <i class="fa fa-plus icon" aria-hidden="true" id='addIcon${dataModel.id}'></i>
                      <i class="fa fa-trash icon" aria-hidden="true" id='deleteIcon${dataModel.id}'></i>
                      <i class="fa fa-link icon" aria-hidden="true" id='addLinkIcon${dataModel.id}'></i>
                      <i class="fa fa-chain-broken icon" aria-hidden="true" id='deleteLinkIcon${dataModel.id}'></i>
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
      // 画布定义
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
      // 节点样式，采用什么节点，此处采用html自定义节点
      graph.node({
        shape: "jobNodeCard"
      });
      // 连接线的样式
      graph.edge({
        shape: "VHV",
        style: {
          endArrow: true,
          lineWidth: 3,
          stroke: "#80deea"
        }
      });
      // 节点点击事件
      graph.on("node:click", ev => {
        debugger;
        const { domEvent, item } = ev;
        const { target } = domEvent;
        const itemName = item.getModel();
        // 新增连线，添加关系
        if (target.id == `addLinkIcon${item.id}`) {
          // 是否第一次点击
          if (!this.operateStatus) {
            this.operateStatus = "addLink";
            this.alertMessage = `从节点 ${item.modelCache.name} 添加关系....`;
            this.operate.addLink.sourceNodeClick = item.id;
            // this.filterDataNode(this.flowData.nodes)
            // 修改节点颜色为待选
            this.changeNoddesColor(item.model);
            return;
          }
          // 第二次点击
          if (this.operateStatus == "addLink") {
            this.alertMessage = `添加关系完成`;
            this.operateStatus = null;
            this.operate.addLink.targetNodeClick = item.id;
            var newLink = {};
            newLink.source = this.operate.addLink.sourceNodeClick;
            newLink.target = this.operate.addLink.targetNodeClick;
            this.flowData.links.push(newLink);
            this.refresh();
            // 修改节点颜色为普通，清除待选
          }
        }
        // 添加节点
        if (target.id == `addIcon${item.id}`) {
          // 根源节点复制
          this.source = itemName;
          this.showAppSelect();
          this.whichDrawerToShow = "addNode";
        }
        // 删除节点
        if (target.id == `deleteIcon${item.id}`) {
          this.dataModel = item.model;
          this.whichDrawerToShow = "delNode";
        }
        // 删除连线
        if (target.id == `deleteLinkIcon${item.id}`) {
          debugger;
          this.linkDataModel = item.model;
          this.removeLinkData(item.model);
          this.whichDrawerToShow = "delectLink";
        }
        // 修改节点名称
        if (target.id == `editIcon${item.id}`) {
          this.editNodeNameList = item.model;
          this.whichDrawerToShow = "editNodeName";
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
    showAppSelect() {
      this.dialogVisible.appListSelector = true;
    },
    onAppSelected(dt) {
      const target = {
        id: dt.id,
        appName: dt.appName,
        jobDesc: dt.jobDesc,
        children: []
      };
      const root = this.flowData.roots[0];
      if (!this.appselectexiste(target, root)) {
        this.flowData = this.addNode(this.flowData, this.appJobSource, target);
        this.dialogVisible.appListSelector = false;
      } else {
        this.$message({
          type: "error",
          message: "请选择其他作业应用!"
        });
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style>
.container-grid {
  height: inherit;
  background: -webkit-linear-gradient(top, transparent 20px, #f2f6fc 21px),
    -webkit-linear-gradient(left, transparent 20px, #f2f6fc 21px);
  background: -moz-linear-gradient(top, transparent 20px, #f2f6fc 21px),
    -moz-linear-gradient(left, transparent 20px, #f2f6fc 21px);
  background-size: 21px 21px;
}
.nodeFlow {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: auto;
  border: 1px solid #ebeef5;
}
.domNode .node {
  padding: 10px;
  font-size: 14px;
  min-height: 60px;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.domNode .node .titleBox {
  margin-bottom: 20px;
  padding: 0;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.domNode .node .nodeID {
  white-space: nowrap;
  width: 110px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.domNode .node .titleBox .icon {
  font-size: 12px;
}

.domNode .node .icon {
  padding: 0 5px;
}

.domNode .editBox {
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
.domNode .normal {
  border: 1px solid #b5d9fd;
  background-color: #e6f1fc;
}

.domNode .normal .titleBox {
  color: #0af;
}

.domNode .normal .icon {
  color: #188bc6;
}

/* red */
.anima {
  width: 168px;
  opacity: 0.9;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-name: breathe2;
  -webkit-animation-duration: 2700ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
}

.domNode .red {
  border: 1px solid #fdb5b5;
  background-color: #fce6e6;
}

.domNode .red .titleBox {
  color: #f00;
}

.domNode .red .icon {
  color: #e35353;
}

@keyframes breathe2 {
  0% {
    box-shadow: 3px 15px 10px rgba(27, 175, 232, 0.1);
  }

  100% {
    box-shadow: 3px 15px 20px rgba(22, 161, 209, 0.4);
  }
}

@-webkit-keyframes breathe2 {
  0% {
    box-shadow: 3px 15px 10px rgba(27, 175, 232, 0.1);
  }

  100% {
    box-shadow: 3px 15px 20px rgba(22, 161, 209, 0.4);
  }
}
/* green */
.domNode .green {
  border: 1px solid #b5fdb6;
  background-color: #e9fce6;
}

.domNode .green .titleBox {
  color: #00ca08;
}

.domNode .green .icon {
  color: #18c61f;
}
/* green */
.domNode .glex {
  border: 1px solid #b5fdef;
  background-color: #e6fcfa;
}

.domNode .glex .titleBox {
  color: #00daff;
}

.domNode .glex .icon {
  color: #18b4c6;
}
.domNode .glex .icon.glexIcon {
    animation: changeSize ease-in-out 1000ms infinite;
}
.drawer {
  min-width: 220px;
  height: calc(100% - 58px);
  position: absolute;
  z-index: -0;
  top: 56px;
  right: 9px;
  background: #fff;
  margin-top: 1px;
  border-left: 1px solid #eee;
  animation: showDrawer ease-in-out 100ms;
}
.drawerHead {
  padding: 20px;
  position: relative;
  border-bottom: 1px solid #e8ecf2;
}
.hideDrawer {
  animation: hideDrawer ease-in-out 100ms;
}
.drawer .content {
  padding: 20px;
  min-height: 200px;
}
.drawerFoot {
  border-top: 1px solid #e8ecf2;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
}
@keyframes showDrawer {
  from {
    right: -300px;
  }
  to {
    right: 0;
  }
}
@keyframes hideDrawer {
  from {
    right: 0px;
  }
  to {
    right: -300px;
  }
}
@keyframes changeSize {
  0% {
    font-size: 14px;
    color: #18b4c6;
  }
  50% {
    font-size: 18px;
    color: #03e6ff;
  }
  100% {
    font-size: 16px;
    color: #00b9ce;
  }
} 

@-webkit-keyframes changeSize {
  0% {
    font-size: 14px;
    color: #18b4c6;
  }
  50% {
    font-size: 18px;
    color: #03e6ff;
  }
  100% {
    font-size: 16px;
    color: #00b9ce;
  }
}

</style>
