<template>
  <section>
    <div class="titleBox">
      <span class="title">关于我</span>
    </div>
    <infor :title=title :cloSize="3" :data=data></infor>
    <infor :title=title2 :cloSize="2" :data=data2></infor>
  </section>
</template>

<script>
import infor from "@/components/inforDetail/common-detail";
export default {
  components: {
    infor
  },
  data() {
    return {
        title:"基本信息",
        title2:"",
      data: [
        {
          lable: "申请人",
          value: "Boos"
        },
        {
          lable: "工单类型",
          value: "卸载申请"
        },
        {
          lable: "申请时间",
          value: "2018-03-28 12:50:09"
        },
        {
          lable: "集成容器",
          value: "容器cluster"
        },
        {
          lable: "地域/机房",
          value: "六合龙池机房"
        },
        {
          lable: "集群状态",
          value: "启动"
        },
        {
          lable: "创建时间",
          value: "2018-03-29 14:50:09"
        },
        {
          lable: "描述",
          value: ""
        },
        {
          lable: "VIP",
          value: ""
        }
      ],
      data2: [
        {
          lable: "申请人2",
          value: "Boos"
        },
        {
          lable: "工单类型2",
          value: "卸载申请"
        },
        {
          lable: "申请时间2",
          value: "2018-03-28 12:50:09"
        },
        {
          lable: "集成容器2",
          value: "容器cluster"
        },
        {
          lable: "地域/机房2",
          value: "六合龙池机房"
        },
        {
          lable: "集群状态2",
          value: "启动"
        },
        {
          lable: "创建时间2",
          value: "2018-03-29 14:50:09"
        },
        {
          lable: "描述2",
          value: ""
        },
        {
          lable: "VIP2",
          value: ""
        }
      ]
    };
  }
};
</script>

<style>
</style>
