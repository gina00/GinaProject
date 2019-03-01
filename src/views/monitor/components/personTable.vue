<template>
<el-table :data="tableData" stripe style="width: 100%" class="tableHeight">
    <el-table-column label="负责人" width="180">
        <template slot-scope="scope">
            <el-tag v-if="scope.row.val!=='未分配'" >{{scope.row.val?scope.row.val.substring(0,1):""}}</el-tag>
            <span style="margin-left: 10px">{{ scope.row.val }}</span>
        </template>
    </el-table-column>
    <el-table-column prop="count" label="剩余数" width="180"></el-table-column>
</el-table>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            tableData: []
        };
    },
    mounted() {
        //记住一点，Ajax请求是异步的。就是记得请求发布后不会阻塞下面的代码执行
        //所以 getMenuInfo调用ajax请求后，没有等待返回就会执行getStr
        // 想要顺序执行就得用回调。。。.then 就是请求调用完成的回调。领完还有成功回调 和失败回调
        this.getMenuInfo();
        this.getRandomColor();
    },
    methods: {
        getMenuInfo() {
            this.$axios
                .get(
                    "/sonar/api/issues/search?componentKeys=com.newland.paas%3Apaas-all&s=FILE_LINE&resolved=false&ps=1&organization=default-organization&facets=assignees&additionalFields=_all"
                )
                .then(response => {
                    this.list = response.data.facets[0].values;
                    this.tableData.push(...this.list);
                    this.getStr();
                    console.log(this.tableData);
                });
        },
        //
        // sss(tableData,firstNameList){
        //   //就是这样的咯
        //   var index =0;
        //   tableData.forEach(element => {
        //     //element就是每行数据{val:songdi,count:12}
        //     //现在给element家一个字段first，就是首字符
        //     element.first=firstNameList[index];//tableData每一行里，若有first属性，则直接被覆盖值，若没有，则创建并被赋值
        //     index++;
        //   });
        //   return this.tableData;
          
        // },
        getStr() {
            var newStr = "";
            var newNameArr = [];
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].val == "") {
                    this.list[i].val = "未分配";
                }
                newStr=this.list[i].val.substring(0,1);
                newNameArr.push(newStr);
            }
            return newNameArr;
        },
        getRandomColor: function () {
            return (
                "#" +
                (function (color) {
                    return (color += "0123456789abcdef" [
                            Math.floor(Math.random() * 16)
                        ]) && color.length == 6 ?
                        color :
                        arguments.callee(color);
                })("")
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.tableHeight {
    height: 578px;
    overflow: scroll;
}
</style>
