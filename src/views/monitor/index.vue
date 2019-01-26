<template>
  <section>
    <div class="titleBox">
      <span class="title">监控概览</span>
    </div>

    <panel-group></panel-group>

    <el-row :gutter="10" class="table-group">
      <el-col :xs="12" :sm="12" :lg="16">
        <el-card shadow="never">
            <p class="tableTitle">按模块查看</p>
            <module-table></module-table>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="8">
          <el-card shadow="never">
            <p class="tableTitle">按人员查看</p>
            <person-table></person-table>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import panelGroup from "./components/panelGroup";
import moduleTable from "./components/moduleTable";
import personTable from "./components/personTable";
export default {
  components: {
    panelGroup,
    moduleTable,
    personTable
  },
  
};
</script>

<style lang="scss" scoped>
.table-group{
    .tableTitle{
        padding: 0 0 20px;
    }
}
</style>
