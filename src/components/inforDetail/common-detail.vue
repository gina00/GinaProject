<template>
  <section class="detailBox">
    <div v-if="title.length>0" class="title">{{title}}</div>
    <el-row class="detailShow">
      <el-col v-for="item in data" :key="item" :span="colSpan">
        <span class="lable">{{item.lable}}:</span>
        <span class="value">{{item.value}}</span>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: false
    },

    cloSize: {
      type: Number,
      default: 3,
      required: false
    },
    data: {
      type: Array,
      default: null,
      required: true
    }
  },
  computed: {
    colSpan() {
      return 24 / this.cloSize;
    }
  }
};
</script>
<style lang="scss">
.detailBox .title {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #526476;
  letter-spacing: 0.14px;
  font-weight: bold;
  margin-bottom: 10px;
}
.detailShow .lable {
  min-width: 90px;
  display: inline-block;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #6d7c8b;
  letter-spacing: 0.14px;
}
.detailShow .value {
  color: #34495e;
}
.detailBox .el-col {
  margin: 15px 0;
}
.detailBox .el-card__body {
  padding: 20px 50px;
}
</style>

