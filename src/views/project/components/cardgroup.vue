<template>
  <el-row :gutter="40">
    <el-col :span="11" v-for="(item,index) in list" :key="index">
      <el-card :body-style="{ padding: '5px' }" shadow="hover">
        <div class="imgBox">
            <a :href="item.href">
          <img :src="item.imageSrc" class="image">
          </a>
          <div class="mask"></div>
        </div>
        <div class="textBox">
          <div class="textcontent">
            <span class="Htitle">{{item.name}}</span>
            <p>{{item.detail}}</p>
          </div>

          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">查看详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      currentDate: new Date()
    };
  },
  mounted() {
    this.getMenuInfo();
    console.log(this.list);
  },
  methods: {
    getMenuInfo() {
      this.$axios.get("/api/projectList").then(response => {
        this.list = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.imgBox{
    height: 260px;
  border-bottom: 1px solid #e9e9e9;
  overflow: hidden;
  cursor: pointer;
//   .mask{
//       display: none;
//   }
//   &:hover{
//        .mask{
//       display: block;
//       background: #000;
//       opacity: 0.3;
//   }
  
.image {
  width: 100%;
  display: block;
  transition:ease 1s;
  &:hover{
      transform:scale(1.1,1.1);
  }
}
}

.textBox {
  padding: 15px;
  .textcontent {
    margin-bottom: 20px;
    .Htitle {
      display: inline-block;
      font-size: 18px;
      color: #333;
      margin: 15px 0;
    }
    p {
      font-size: 13px;
      color: #666;
      overflow: hidden;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: calc(100%);
      line-height: 25px;
    }
  }
}
[class*=el-col-]{
    margin-bottom: 20px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}


.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
