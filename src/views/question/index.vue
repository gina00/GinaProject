<template>
  <section>
    <div class="titleBox">
      <span class="title">问题总结</span>
      <p class="subTitle">
        总结在开发项目中遇到的问题
        <span class="red">(主要涉及HTML、CSS、JS)</span>，以及一些技术的研究结果
      </p>
    </div>
    <el-table ref="filterTable" :data="tableDataList.tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="Name" width="200"></el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="150"
        :filters="this.filterType"
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
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="200"
        column-key="date"
        :filters="this.filterDate"
        :filter-method="filterHandler"
      ></el-table-column>

      <!-- <el-table-column prop="type" label="类型" width="200" ></el-table-column> -->
      <el-table-column prop="detail" label="问题描述"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            v-for="operate in scope.row.operates"
            :key="operate"
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >{{operate}}</el-button>
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
  data() {
    return {
      show: true,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableDataList: {
        tableData: []
      },
      DateData:[],
      filterDate: [],
      typeData: [],
      filterType: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/questionLis").then(response => {
        this.tableDataList = response.data;
        this.filterDateFun();
        this.filterTypeFun();
      });
    },
    filterDateFun() {
      for (var i = 0; i < this.tableDataList.tableData.length; i++) {
        var dateObj = {
          text: this.tableDataList.tableData[i].date,
          value: this.tableDataList.tableData[i].date
        };
        this.DateData.push(dateObj);
      }
      this.filterDate = this.deteleObject(this.DateData);
    },
    filterTypeFun() {
      for (var i = 0; i < this.tableDataList.tableData.length; i++) {
        var typeObj = {
          text: this.tableDataList.tableData[i].type,
          value: this.tableDataList.tableData[i].type
        };
        this.typeData.push(typeObj);
      }
      this.filterType = this.deteleObject(this.typeData);
    },
    //删除数组对象中重复的对象
    deteleObject(obj) {
      var uniques = [];
      var stringify = {};
      for (var i = 0; i < obj.length; i++) {
        var keys = Object.keys(obj[i]);
        keys.sort(function(a, b) {
          return Number(a) - Number(b);
        });
        var str = "";
        for (var j = 0; j < keys.length; j++) {
          str += JSON.stringify(keys[j]);
          str += JSON.stringify(obj[i][keys[j]]);
        }
        if (!stringify.hasOwnProperty(str)) {
          uniques.push(obj[i]);
          stringify[str] = true;
        }
      }
      uniques = uniques;
      return uniques;
    },
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
      return row.type === value;
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
    },
    // 点击列表详情，跳转，获取数据提交到state，common页面获得数据，并显示
    handleClick(row) {
      //commit提交，修改值
      //提交setCount方法,与store中mutation定义的方法名一样，
      //后面参数参照提交setCount方法是否需要传参。
      this.$store.commit("getQuestionName", row.name);
      this.$store.commit("getQuestionType", row.type);
      this.$store.commit("getQuestionDetail", row.detail);
      this.$store.commit("getQuestionDate", row.date);

      this.$router.push({
        path: row.link,
        params: {
          jobFlowId: row.id
        }
      });
      console.log(row);
    },
    changeCount() {}
  }
};
</script>

<style lang="scss" scoped>
.paginBox {
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: row-reverse;
}

.subTitle {
  font-size: 13px;
  color: #999;
  padding: 15px 0;
}

.subTitle .red {
  color: #e62224;
}
</style>
