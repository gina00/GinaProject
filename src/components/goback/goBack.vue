<template>
  <section>
    <a class="backBox" id="btn" >
      <i class="el-icon-arrow-up"></i>
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.onload = this.goBack();
  },
  methods: {
    goBack() {
        var btn = document.getElementById("btn");
        var bSys = true;
        var timer = null;
        //var con = document.getElementById("con"); //检测用户是否拖动了滚动条
        window.onscroll = function() {
          if (!bSys) {
            clearInterval(timer);
          }
          bSys = false;
          if (window.pageYOffset > 300) {
            btn.style.display = "block";
          } else {
            btn.style.display = "none";
          }
        }; //用户点击了返回顶部
        btn.onclick = function() {
          console.log("回到顶部");
          timer = setInterval(function() {
            //顶部距离
            var scrollTop =
              document.documentElement.scrollTop || document.body.scrollTop;
            var iSpeed = Math.floor(-scrollTop / 8); //如果滚动到了顶部，清除定时器
            if (scrollTop == 0) {
              clearInterval(timer);
            }

            bSys = true;
            document.documentElement.scrollTop = document.body.scrollTop =
              scrollTop + iSpeed;
          }, 30);
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.backBox {
  position: fixed;
  background: #000;
  opacity: 0.2;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  border-radius: 5px;
  display: none;
}
.backBox:hover{
    opacity: 0.3;
}
</style>

