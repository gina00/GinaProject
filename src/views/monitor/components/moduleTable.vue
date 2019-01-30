<template>
<el-table :data="moduleList" style="width: 100%" class="tableHeight">
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
            //重组数据结构，新建模块列表
            moduleList: [{
                    name: "系统管理",
                    key: "sysmgr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
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
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:resmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:resmgr-data-module"
                        }
                    ]
                },
                {
                    name: "应用管理",
                    key: "appmgr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:appmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:appmgr-data-module"
                        }
                    ]
                },
                {
                    name: "服务管理",
                    key: "svrmgr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:svrmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:svrmgr-data-module"
                        }
                    ]
                },
                {
                    name: "框架管理",
                    key: "frwmgr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:frwmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:framework-data-module"
                        }
                    ]
                },
                {
                    name: "资产管理",
                    key: "astmgr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:astmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:astmgr-data-module"
                        }
                    ]
                },
                {
                    name: "集群管理",
                    key: "clumgr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:clumgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:clumgr-data-module"
                        }
                    ]
                },
                {
                    name: "脚本管理",
                    key: "scpmgr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:scpmgr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:scpmgr-data-module"
                        }
                    ]
                },
                {
                    name: "公共",
                    key: "common",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:auth"
                        },
                        {
                            componentKey: "com.newland.paas.paasservice:gateway"
                        }
                    ]
                },
                {
                    name: "执行引擎",
                    key: "execute-engine-svr",
                     bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                    projectList: [{
                            componentKey: "com.newland.paas.paasservice:execute-engine-svr"
                        },
                        {
                            componentKey: "com.newland.paas.paasdatamodule:execengn-data-module"
                        }
                    ]
                }
            ],

            bigTableData: [{
                    key: "sysmgr",
                    bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                },
                {
                    name: "资源名称",
                    key: "resmgr",
                    bugs: 0,
                    vulnerabilities: 0,
                    code_smells: 0,
                    coverage: 0,
                    duplicated_lines_density: 0,
                }],
            tableData: {
                sysmgr: [],
                resmgr: []
            }
        };
    },

    mounted() {        
        this.getProjectData();
    },
    methods: {
        //监视小表格数据，有变动就触发求和
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
                        sum.bugs += Number(element.bugs);
                        sum.vulnerabilities += Number(element.vulnerabilities);
                        sum.code_smells += Number(element.code_smells);
                        sum.coverage += Number(element.coverage);
                        sum.duplicated_lines_density += Number(element.duplicated_lines_density);
                    });

                }
                //设置到大表数据
                this.moduleList.forEach(element => {
                    if (element.key == modelKey) {
                        element.bugs = Number(sum.bugs);
                        element.vulnerabilities = Number(sum.vulnerabilities);
                        element.code_smells = Number(sum.code_smells);
                        element.coverage = Number(sum.coverage)+"%";
                        element.duplicated_lines_density = Number(sum.duplicated_lines_density)+"%";
                    }
                });
            }
        },
        //遍历modelList ,调用getModuleInfo,拿到各个模块的具体数据
        getProjectData() {
            var newKey = "";
            for (var i = 0; i < this.moduleList.length; i++) {
                var modelkey = this.moduleList[i].key;
                //初始化tableData每个项目的数据为空数组
                this.$set(this.tableData,modelkey,[]);
                var projectList = this.moduleList[i].projectList;
                projectList.forEach(element => {
                    //console.log(`获取模块${modelkey}的项目${element.componentKey}的数据`);
                    this.getModuleInfo(modelkey, element.componentKey);
                });
                

            }
        },
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
        
        //过滤出每个工程对应的bugs等等的数值value
        myfilterVal(key, arr) {
            var value = 0;
            if (arr && arr.length > 0) {
                var afterFilterList = arr.filter(item => item.metric == key); //过滤后，只有一个数据的数组
                if (afterFilterList) {
                    value = afterFilterList[0].value || afterFilterList[0].periods[0].value;
                }
            }
            return value;
        },
        // 现在完善这个方法就好了
        parse(measures) {
            // result就是小表格的单条记录，要从measures里面过滤出来
            var result = {
                bugs: this.myfilterVal('bugs', this.list.component.measures),
                vulnerabilities: this.myfilterVal('vulnerabilities', this.list.component.measures),
                code_smells: this.myfilterVal('code_smells', this.list.component.measures),
                coverage: this.myfilterVal('coverage', this.list.component.measures),
                duplicated_lines_density: this.myfilterVal('duplicated_lines_density', this.list.component.measures),
            };

            return result;

        },

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
.tableHeight{
    height: 555px;
  overflow: scroll;
}
</style>
