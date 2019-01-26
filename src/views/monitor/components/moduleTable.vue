<template>
<el-table :data="bigTableData" style="width: 100%">
    <el-table-column type="expand">
        <template slot-scope="props">
            <el-table :data="tableData[props.row.key]" stripe style="width: 100%">
                <el-table-column label="项目名称" prop="name"></el-table-column>
                <el-table-column label="Bugs" prop="bugs"></el-table-column>
                <el-table-column label="漏洞" prop="vulnerabilities"></el-table-column>
                <el-table-column label="异味" prop="code_smells"></el-table-column>
                <el-table-column label="覆盖率" prop="coverage"></el-table-column>
                <el-table-column label="重复" prop="duplicated_lines_density"></el-table-column>
            </el-table>
        </template>
    </el-table-column>
    <el-table-column label="模块名称" prop="name"></el-table-column>
    <el-table-column label="Bugs" prop="bugs"></el-table-column>
    <el-table-column label="漏洞" prop="vulnerabilities"></el-table-column>
    <el-table-column label="异味" prop="code_smells"></el-table-column>
    <el-table-column label="覆盖率" prop="coverage"></el-table-column>
    <el-table-column label="重复" prop="duplicated_lines_density"></el-table-column>
</el-table>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            //模块列表
            moduleList: [{
                    name: "系统管理",
                    key: "sysmgr",
                    //一个模块有多个工程，工程列表
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:sysmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:sysmgr-data-module"
                        }
                    ]
                },
                {
                    name: "资源管理",
                    key: "resmgr",
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:resmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:resmgr-data-module"
                        }
                    ]
                }
            ],
            bigTableData: [{
                    name: "系统管理",
                    key: "sysmgr",
                    bugs: 2,
                    vulnerabilities: 1,
                    code_smells: 3,
                    coverage: '20%',
                    duplicated_lines_density: '20%',
                },
                {
                    name: "资源名称",
                    key: "resmgr",
                    bugs: 3,
                    vulnerabilities: 3,
                    code_smells: 2,
                    coverage: '20%',
                    duplicated_lines_density: '20%',
                }
            ],
            tableData: {
                sysmgr: [],
                resmgr: []
            }
        };
    },
  
    mounted() {
        //this.getMenuInfo();
        this.getProjectData();
    },
    methods: {
        //监视小表格数据，有变动就触发求和,为什么没有运行呢
        sumTableData: function () {
            for (const modelKey in this.tableData) {
                var sum = {
                    key: "",
                    bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                }
                sum.key = modelKey;
                //开始累加
                if (this.tableData.hasOwnProperty(modelKey)) {
                    const modelData = this.tableData[modelKey];
                    modelData.forEach(element => {
                        sum.bugs += element.bugs;
                        sum.vulnerabilities += element.vulnerabilities;
                        sum.code_smells += element.code_smells;
                        sum.coverage += element.coverage;
                        sum.duplicated_lines_density += element.duplicated_lines_density;
                    });

                }
                //设置到大表数据
                this.bigTableData.forEach(element => {
                    if (element.key == modelKey) {
                        element.bugs = sum.bugs;
                        element.vulnerabilities = sum.vulnerabilities;
                        element.code_smells = sum.code_smells;
                        element.coverage = sum.coverage;
                        element.duplicated_lines_density = sum.duplicated_lines_density;
                    }
                });
            }
        },
        // getMenuInfo() {
        //   //定义我需要的指标项数据结构
        //   // var metricMap = [{ metricName: "code_smells", metricdes: "异味" }];
        //   // var metricList = ["code_smells","bugs"];
        //   this.$axios
        //     .get(
        //       "/sonar/api/measures/component?additionalFields=metrics%2Cperiods&componentKey=com.newland.paas.paasservice%3Aresmgr&metricKeys=alert_status%2Cquality_gate_details%2Cbugs%2Cnew_bugs%2Creliability_rating%2Cnew_reliability_rating%2Cvulnerabilities%2Cnew_vulnerabilities%2Csecurity_rating%2Cnew_security_rating%2Ccode_smells%2Cnew_code_smells%2Csqale_rating%2Cnew_maintainability_rating%2Csqale_index%2Cnew_technical_debt%2Ccoverage%2Cnew_coverage%2Cnew_lines_to_cover%2Ctests%2Cduplicated_lines_density%2Cnew_duplicated_lines_density%2Cduplicated_blocks%2Cncloc%2Cncloc_language_distribution%2Cprojects%2Cnew_lines"
        //     )
        //     .then(response => {
        //       this.list = response.data;
        //       console.log(this.list);
        //     });
        // },
        //遍历modelList ,调用getModuleInfo
        getModuleInfo(modelkey, componentKey) {
            this.$axios
                .get(
                    `/sonar/api/measures/component?additionalFields=metrics%2Cperiods&componentKey=${componentKey}&metricKeys=alert_status%2Cquality_gate_details%2Cbugs%2Cnew_bugs%2Creliability_rating%2Cnew_reliability_rating%2Cvulnerabilities%2Cnew_vulnerabilities%2Csecurity_rating%2Cnew_security_rating%2Ccode_smells%2Cnew_code_smells%2Csqale_rating%2Cnew_maintainability_rating%2Csqale_index%2Cnew_technical_debt%2Ccoverage%2Cnew_coverage%2Cnew_lines_to_cover%2Ctests%2Cduplicated_lines_density%2Cnew_duplicated_lines_density%2Cduplicated_blocks%2Cncloc%2Cncloc_language_distribution%2Cprojects%2Cnew_lines`
                )
                .then(response => {
                    //看下怎么存起来，这是每个工程的数据
                    this.list = response.data;
                    //response.data.component.measures是数组，里面有bugs 异味等等，要把它转成一个对象。
                    //比如这个转换方法就是parse吧,
                    var data = this.parse(response.data.component.measures);
                    data.name = componentKey;
                    //吧取得的单条记录方如tableData，知道了  通过下标改数据 VUE 检测不到，不会触发watch
                    this.tableData[modelkey].push(data);
                    //这样影响性能，先这样吧
                    this.sumTableData();

                });
            return this.list;
        },
        // 现在完善这个方法就好了，你来我来？我要去尿尿，可以不去？下班了  不高了  
        parse(measures) {
            // result就是小表格的单条记录，要从measures里面过滤出来
            var result = {
                bugs: 0,
                vulnerabilities: 1,
                code_smells: 3,
                coverage: 20,
                duplicated_lines_density: 20,
            };

            return result;

        },
        getProjectData() {
            var newKey = "";
            for (var i = 0; i < this.moduleList.length; i++) {
                var modelkey = this.moduleList[i].key;
                var projectList = this.moduleList[i].projectList;
                projectList.forEach(element => {
                    console.log(`获取模块${modelkey}的项目${element.componentKey}的数据`);
                    this.getModuleInfo(modelkey, element.componentKey);
                });

            }
        }
    }
};
</script>

<style lang="scss" scoped>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>
