<template>
  <section class="detailBox">
    <div v-if="title.length>0" class="title">{{title}}</div>
    <el-row class="detailShow">
      <el-col v-for="(item,index) in data" :key="item.index" :span="colSpan">
        <span class="lable">{{item.lable}}:</span>
        <div
          @mouseover="handleMouseOver(index)"
          @mouseleave="handleMouseLeave(index)"
          class="value"
        >{{item.value}}</div>
        <!-- <div class="tooltip" v-if="isshow"></div> -->
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

    colSize: {
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
      return 24 / this.colSize;
    }
  },
  data() {
    return {
      isshow: false
    };
  },
  mounted() {
    // mounted 是组件挂载就会执行的函数，你的这个方案，是组件挂载后循环vale，超长就加tip。
    // 也是可以的，是一种方案
    //this.handleMouseOver();
  },
  methods: {
    handleMouseOver(index) {
      const textAll = event.path[0];
      const nowWidth = textAll.offsetWidth;
      const realWidth = textAll.scrollWidth;
      if (nowWidth - realWidth < 0) {
        var parent = document.getElementsByClassName("value")[index].parentNode;
        const tooltip=document.createElement("div");
        const tooltipTextNode=document.createTextNode(textAll.innerHTML);
        tooltip.setAttribute("class","tooltip");
        parent.appendChild(tooltip);
        tooltip.appendChild(tooltipTextNode);
      }
      console.log(event);
    },
    handleMouseLeave(index) {
      var parent = document.getElementsByClassName("value")[index].parentNode;
      var node=document.querySelector(".tooltip");
      parent.removeChild(node);
    }
  }
};
</script>
<style lang="scss">
.detailBox {
  .title {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #526476;
    letter-spacing: 0.14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .el-col {
    position: relative;
  }
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
  width: 110px;
  color: #34495e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detailBox .el-col {
  margin: 15px 0;
}
.detailBox .el-card__body {
  padding: 20px 50px;
}
.tooltip {
  min-width: 50px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #333;
  background: #333;
  position: absolute;
  top: -33px;
  left: 0;
  color: #fff;
  &::after {
    content: "";
    width: 0px;
    height: 0px;
    border-width: 8px 10px 0;
    border-style: solid;
    border-color: #333 transparent transparent;
    position: absolute;
    top: 38px;
    left: 50%;
  }
}
</style>

