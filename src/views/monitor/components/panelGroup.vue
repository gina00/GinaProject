<template>
<section>
    <el-row class="panel-group">
        <el-col :xs="12" :sm="12" :lg="4" v-for="(item,index) in list" :key="item.name" class="card-panel-col">
            <div class="card-panel">
                <div class="typeBox">
                    <p class="typeName">{{item.name}}</p>
                    <p class="typeIcon" :class="[iconBgCol[index]+'-panel']">
                        <i class="fa" :class="iconList[index]" aria-hidden="true"></i>
                    </p>
                </div>
                <div class="card-panel-description">
                    <div class="numBox">
                        <count-to class="card-panel-num" :startVal="0" :endVal="item.allNum" :duration="2600"></count-to>
                        <span class="unit">{{item.unit}}</span>
                    </div>
                    <div class="numBox" v-if="item.newData">
                        <count-to class="card-panel-num" :startVal="0" :endVal="item.newData" :duration="2600"></count-to>
                        <span class="unit">{{item.subUnit}}</span>
                        <span class="divider"></span>
                        <span class="unit">{{item.newDataName}}</span>
                    </div>
                </div>
                <div class="versionBox">
                    <p>New code: 自上个版本</p>
                    <p>起始于3个月前</p>
                </div>
                <div class="versionChange">
                    <p>
                        <span>新增</span>
                        <span class="red">{{item.newNum}}</span>
                        <span>{{item.unit}}</span>
                        <span>{{item.name}}</span>
                    </p>
                    <p v-if="item.newData">
                        <span class="divider"></span>
                        <span class="red">{{item.newData}}</span>
                        <span>{{item.subUnit}}</span>
                        <span>{{item.newDataName}}</span>
                    </p>
                </div>
            </div>
        </el-col>
    </el-row>
</section>
</template>

<script>
import CountTo from "vue-count-to";
import { major } from 'semver';
export default {
    components: {
        CountTo
    },
    data() {
        return {
            isshow: false,
            list: [], //存放卡片里的新组成字段
            totalList: [], //存放后台读取出的总数据
            val: 0,
            iconBgCol:["pink","blue","orange","green","subgreen"],
            iconList:['fa-bug','fa-bullseye','fa-code','fa-window-restore','fa-cogs']
        };
    },
    mounted() {
        this.getMenuInfo();
    },
    // computed: {
    //   card1: function() {
    //     var result = {
    //       allNum: 0,
    //       newNum: 0
    //     };
    //     // 总债务sqale_index,虽然是list，但是里面只有一个
    //     //debugger;/傻逼了  上面定义的是：newList。这里使用的是 newlist、L一个大写一个小写
    //     if (this.newList.length > 0) {
    //       var allList = this.newList.filter(item => item.metric == "bugs");
    //       var newAddList = this.newList.filter(item => item.metric == "new_bugs");
    //       result.allNum = allList[0] ? 0 : allList[0].value;
    //       result.newNum = newAddList[0] ? 0 : newAddList[0].periods[0].value;
    //     }

    //     return result;
    //   }
    // },
    methods: {
        getMenuInfo() {
            //定义我需要的指标项数据结构
            // var metricMap = [{ metricName: "code_smells", metricdes: "异味" }];
            // var metricList = ["code_smells","bugs"];
            this.$axios
                .get(
                    "/sonar/api/measures/component?additionalFields=metrics%2Cperiods&componentKey=com.newland.paas%3Apaas-all&metricKeys=alert_status%2Cquality_gate_details%2Cbugs%2Cnew_bugs%2Creliability_rating%2Cnew_reliability_rating%2Cvulnerabilities%2Cnew_vulnerabilities%2Csecurity_rating%2Cnew_security_rating%2Ccode_smells%2Cnew_code_smells%2Csqale_rating%2Cnew_maintainability_rating%2Csqale_index%2Cnew_technical_debt%2Ccoverage%2Cnew_coverage%2Cnew_lines_to_cover%2Ctests%2Cduplicated_lines_density%2Cnew_duplicated_lines_density%2Cduplicated_blocks%2Cncloc%2Cncloc_language_distribution%2Cprojects%2Cnew_lines"
                )
                .then(response => {
                    this.totalList = response.data;
                    this.card(this.totalList);
                    //console.log(this.totalList);
                });
        },
        //过滤出数值value
        myfilterVal(key, arr) {
            if (arr && arr.length > 0) {
                var afterFilterList = arr.filter(item => item.metric == key);
                if (!afterFilterList || afterFilterList.length == 0) {
                    return '0';
                }
                this.val = afterFilterList[0].value || afterFilterList[0].periods[0].value || '0';
            }
            return this.val;
        },
        //过滤出总名称
        myfilterName(key, arrName) {
            var name = "";
            if (arrName && arrName.length > 0) {
                var afterFilterNameList = arrName.filter(item => item.metric == key);
                name = afterFilterNameList[0].metric;
            }
            return name;
        },
        //过滤出附属名称
        myfilterkeyName(key, arrName) {
            var keyName = "";
            if (arrName && arrName.length > 0) {
                var afterFilterKeyNameList = arrName.filter(item => item.key == key);
                keyName = afterFilterKeyNameList[0].key;
            }
            return keyName;
        },
        card: function (totalList) {
            var card1 = {
                //bugs
                name: this.myfilterName("bugs", totalList.component.measures),
                allNum: this.myfilterVal("bugs", totalList.component.measures),
                newNum: this.myfilterVal("new_bugs", totalList.component.measures),
                unit: "",
                subUnit:""
            };
            var card2 = {
                //漏洞
                name: this.myfilterName("vulnerabilities", totalList.component.measures),
                allNum: this.myfilterVal("vulnerabilities", totalList.component.measures),
                newNum: this.myfilterVal("new_vulnerabilities", totalList.component.measures),
                unit: "",
                subUnit:""
            };
            var card3 = {
                //异味，债务
                name: this.myfilterName("code_smells", totalList.component.measures),
                allNum: this.myfilterVal("code_smells", totalList.component.measures),
                newNum: this.myfilterVal(
                    "new_code_smells",
                    totalList.component.measures
                ),
                newData: this.myfilterVal(
                    "new_technical_debt",
                    totalList.component.measures
                ),
                newDataName: this.myfilterkeyName("sqale_index", totalList.metrics),
                unit: "",
                subUnit:""
            };
            var card4 = {
                //覆盖率
                name: this.myfilterName("coverage", totalList.component.measures),
                allNum: this.myfilterVal("coverage", totalList.component.measures),
                newNum: this.myfilterVal("new_coverage", totalList.component.measures),
                newData: this.myfilterVal("tests", totalList.component.measures),
                newDataName: this.myfilterkeyName("tests", totalList.metrics),
                unit: "",
                subUnit:""
            };
            var card5 = {
                //重复
                name: this.myfilterName(
                    "duplicated_lines_density",
                    totalList.component.measures
                ),
                allNum: this.myfilterVal(
                    "duplicated_lines_density",
                    totalList.component.measures
                ),
                newNum: this.myfilterVal(
                    "new_duplicated_lines_density",
                    totalList.component.measures
                ),
                newData: this.myfilterVal(
                    "duplicated_blocks",
                    totalList.component.measures
                ),
                newDataName: this.myfilterkeyName("duplicated_blocks", totalList.metrics),
                unit: "",
                subUnit:""
            };
            this.list.push(card1);
            this.list.push(card2);
            this.list.push(card3);
            this.list.push(card4);
            this.list.push(card5);
            //console.log(this.list);
            //中英文匹配 映射 转换
            var metricMap = [{
                    metricName: "bugs",
                    metricdes: "Bugs",
                    unit: "个",
                    subUnit:""
                },
                {
                    metricName: "vulnerabilities",
                    metricdes: "漏洞",
                    unit: "个",
                    subUnit:""
                },
                {
                    metricName: "code_smells",
                    metricdes: "异味",
                    unit: "个",
                    subUnit:"天",
                    keyName: "sqale_index",
                    keyCn: "债务"
                },
                {
                    metricName: "coverage",
                    metricdes: "覆盖率",
                    unit: "%",
                    subUnit:"个",
                    keyName: "tests",
                    keyCn: "单元测试数"
                },
                {
                    metricName: "duplicated_lines_density",
                    metricdes: "重复",
                    unit: "%",
                    subUnit:"个",
                    keyName: "duplicated_blocks",
                    keyCn: "重复块"
                }
            ];
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < metricMap.length; j++) {
                    if (metricMap[j].metricName == this.list[i].name) {
                        this.list[i].name = metricMap[j].metricdes;
                        this.list[i].unit = metricMap[j].unit;
                        this.list[i].subUnit = metricMap[j].subUnit;
                        this.list[i].newDataName = metricMap[j].keyCn;
                    }
                }
            }
            //转换编制小时 按天显示，取整数显示
            var newDebtVal=0;
            var newNumVal = 0;
            var Day = 0;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].name == '异味') {
                    newDebtVal = this.list[i].newData;
                    this.list[i].newData=Math.round((newDebtVal / 60) / 8);
                }
                newNumVal=this.list[i].newNum;
                this.list[i].newNum=Math.floor(newNumVal);
                //=this.list[i].newData.toFixed(2);
                console.log(this.list[i].newData);
            }

        },

    }
};
</script>

<style lang="scss" scoped>
.panel-group {
    margin-bottom: 20px;

    .card-panel-col {
        background: #fff;
        box-shadow: 0 0 2px #eee;
        width: calc((100% - 80px) / 5);
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }

        .card-panel {
            padding: 10px 15px;
            border-radius: 2px;
            line-height: 25px;
            font-size: 14px;
            position: relative;
            min-height: 120px;
            transition: all ease-in 0.5s;
            .typeBox {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .typeName {
                    color: #666;
                }

                .typeIcon {
                    border-radius: 50px;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 18px;
                }
            }

            .card-panel-description {
                display: flex;
                justify-content: flex-start;
                padding: 10px 0;

                .numBox {
                    margin-right: 12px;

                    .card-panel-num {
                        font-size: 24px;
                        font-weight: bold;
                    }

                    .unit {
                        font-size: 12px;
                        color: #999;
                    }
                }
            }

            .versionBox {
                font-size: 12px;
                line-height: 18px;

                p {
                    color: #666;

                    &:last-child {
                        color: #999;
                    }
                }
            }

            .versionChange {
                padding: 5px 0;
                font-size: 12px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                p {
                    margin-right: 4px;
                }

                span {
                    display: inline-block;
                }

                .red {
                    color: #ff0000;
                }

                .green {
                    color: #67c23a;
                }
            }

            .divider {
                display: inline-block;
                height: 10px;
                margin: 0 3px;
                border-right: 1px solid #b3b6c7;
            }
        }

        /*panel背景色*/
        .card-panel:hover {
            cursor: pointer;
            box-shadow:0 0 5px rgb(238, 238, 238);
        }
        .pink-panel {
            background: #fddfdf;

            i {
                color: #f56c6c;
            }
        }
        .blue-panel {
            background: #b2d9fd;

            i {
                color: #0486fe;
            }
        }
        .orange-panel {
            background: #f8eed1;

            i {
                color: #fdbd00;
            }
        }
        .green-panel {
            background: #d8f1c8;

            i {
                color: #67c23a;
            }
        }
        .subgreen-panel {
            background: #e0dffd;

            i {
                color: #3135ff;
            }
        }
    }
}
</style>
