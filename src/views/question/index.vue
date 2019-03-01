<template>
  <section>
    <div class="titleBox">
      <span class="title">问题总结</span>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </section>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    open(){
          this.$prompt("请输入邮箱", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: "邮箱格式不正确"
          })
            .then(({ value }) => {
              this.$message({
                type: "success",
                message: "你的邮箱是: " + value
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "取消输入"
              });
            });
      },
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
