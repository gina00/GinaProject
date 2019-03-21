<template>
  <section>
    <div class="titleBox">
      <span class="title">问题总结</span>
      <p class="subTitle">总结在开发项目中遇到的问题，以及一些技术的研究结果</p>
    </div>
    <el-table ref="filterTable" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ID" label="ID" width="200"></el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="200"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="150"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.type === 'echart' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.type}}</el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="type" label="类型" width="200" ></el-table-column> -->
      <el-table-column prop="detail" label="问题描述"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <router-link v-for="operate in scope.row.operates" :key="operate" :to="scope.row.link">
            <el-button @click="handleClick(scope.row)" type="text" size="small">{{operate}}</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginBox">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleClose(e) {
      this.show = false;
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.type;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },

  data() {
    return {
      show: true,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          ID: "tree",
          date: "2019-02-28",
          type: "echart",
          detail: "研究tree树节点",
          operates: ["查看详情"],
          link: "/question/tree"
        },
        {
          ID: "graph",
          date: "2019-03-05",
          type: "echart",
          detail: "研究graph关系图",
          operates: ["查看详情"],
          link: "/question/graph",
          tag: "公司"
        },
        {
          ID: "jTopo",
          date: "2019-03-11",
          type: "jTopo",
          detail: "研究jTopo关系图",
          operates: ["查看详情"],
          link: "/question/jtopo"
        },
        {
          ID: "jsPlumb",
          date: "2019-03-11",
          type: "jsPlumb",
          detail: "研究jTopo关系图",
          operates: ["查看详情"],
          link: "/question/jsplumb"
        },
        {
          ID: "G6",
          date: "2019-03-12",
          type: "AntV G6",
          detail: "研究G6关系图",
          operates: ["查看详情"],
          link: "/question/g6"
        },
        {
          ID: "G6-Edit",
          date: "2019-03-12",
          type: "AntV G6",
          detail: "研究G6-Edit关系图",
          operates: ["查看详情"],
          link: "/question/g6-edit"
        },
        {
          ID: "G6-Demo",
          date: "2019-03-12",
          type: "AntV G6",
          detail: "研究G6-Demo关系图",
          operates: ["查看详情"],
          link: "/question/g6-demo"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.paginBox{
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: row-reverse;
}
.subTitle{
  font-size: 12px;
  color: #666;
  padding: 10px 0;
}
</style>
