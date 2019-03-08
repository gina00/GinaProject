<template>
  <section>
    <div class="titleBox">
      <span class="title">问题总结</span>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ID" label="ID" width="200"></el-table-column>
      <el-table-column prop="date" label="日期" width="200"></el-table-column>
      <el-table-column prop="type" label="类型" width="200"></el-table-column>
      <el-table-column prop="detail" label="问题描述"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <router-link v-for="operate in scope.row.operates" :key="operate" :to="scope.row.link">
            <el-button @click="handleClick(scope.row)" type="text" size="small">{{operate}}</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  methods: {
    handleClose(e) {
      this.show = false;
    }
  },

  data() {
    return {
      show: true,
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
          link: "/question/graph"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
