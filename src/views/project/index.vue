<template>
  <section>
    <div class="titleBox">
      <span class="title">项目样例</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '5px' }" shadow="hover">
          <div class="imgBox">
            <a :href="item.href" target="_blank">
              <img :src="item.imageSrc" class="image">
            </a>
            <div class="mask"></div>
          </div>
          <div class="textBox">
            <div class="textcontent">
              <span class="Htitle">{{item.name}}</span>
              <p>{{item.detail}}</p>
            </div>
            <div class="bottom">
              <div class="time">{{ item.createDate }}</div>
              <el-button type="primary" class="button" @click="showDetail(index)">{{item.operate}}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: []
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
    },
    showDetail(index) {
      this.$store.commit("getName",this.list[index].name);
      this.$store.commit("geTitle",this.list[index].detail);
      this.$store.commit("getDate",this.list[index].createDate);
      this.$router.push({
        path: this.list[index].link
      });
    }
  }
};
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.imgBox {
  height: 220px;
  border-bottom: 1px solid #e9e9e9;
  overflow: hidden;
  cursor: pointer;
  .image {
    width: 100%;
    display: block;
    transition: ease 1s;
    &:hover {
      transform: scale(1.1, 1.1);
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
[class*="el-col-"] {
  margin-bottom: 20px;
}

.time {
  font-size: 13px;
  color: #999;
  margin-top: 15px;
}

.bottom {
  display: flex;
  justify-content: space-between;
}
</style>

