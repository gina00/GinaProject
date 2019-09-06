<template>
  <div>
    <div class="titleBox">
      <span class="title">研究JS/CSS</span>
    </div>
    <el-row class="listBox">
      <el-col :span="24" class="list" v-for="item in 10" :key="item">
        <el-row class="listContent">
          <el-col :span="6">
            <img src="@/assets/logo.png" />
          </el-col>
          <el-col :span="18">
            <div class="listTitle"><a>这是jjjjjjjjj标题</a></div>
            <div
              class="subtext"
            >这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介</div>
            <div class="toolbar">
              <div class="tool-left">
                <div class="date">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  <span>2019-08-22</span>
                </div>
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                <span>1223</span>
              </div>
              <div class="tool-right">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <span>1223</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="pagination">
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
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage4: 4
    };
  }
};
</script>

<style lang="scss" scoped>
.listBox {
  background: #fff;
  .list {
    border-bottom: 1px dashed rgb(228, 228, 228);
    &:hover {
      background: #f6f6f6;
    }
  }
  .listContent {
    .el-col {
      padding: 15px;
    }
    .listTitle {
      font-size: 20px;
      padding: 20px 0;
    }
    .subtext {
      font-size: 14px;
      color: rgb(165, 165, 165);
      overflow: hidden;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      line-height: 25px;
    }
  }
  .toolbar {
    position: relative;
    color: rgb(192, 191, 191);
    margin-top: 20px;
    .tool-left {
      display: inline-block;
      padding: 0 3px;
      .date {
        display: inline-block;
        margin-right: 10px;
      }
    }
    .tool-right {
      position: absolute;
      display: inline-block;
      right: 10px;
    }
  }
}
.pagination {
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
}
</style>