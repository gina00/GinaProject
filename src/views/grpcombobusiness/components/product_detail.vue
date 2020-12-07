<template>
  <div class="cs_product_detail_panel">
    <div class="breadcrumbs_panel">
      <span class="lay_current">当前位置：</span>
      <span class="product_list_title_span">
        <a href="#">商品大类列表</a>
      </span>
      <span>/</span><span>移动办公助理</span>
    </div>
    <div class="cs_product_detail_top">
      <div class="cs_product_detail_title">
        <span>移动公网</span>
      </div>
      <div class="product_name_panel">
        <ul>
          <span class="product_name w120 gray"> 商品名称：</span>
          <li class="select">
            <span>集团移动网络</span>
          </li>
          <li>
            <span>热线视频彩铃(企视秀)</span>
          </li>
        </ul>
      </div>
      <div class="choose_panel">
        　
        <ul class="btn_numbox">
          <span class="product_name w120 gray">数量：</span>
          <li><span id="num-jian" class="num_jian">-</span></li>
          <li>
            <input type="text" class="input_num" id="input-num" value="0" />
          </li>
          <li><span id="num_add" class="num_add">+</span></li>
        </ul>
      </div>
      <div class="btn_panel">
        <span class="product_name w120"></span>
        <a class="btn_element_normal blue_btn">资源勘查</a>
        <a class="btn_element_normal blue_btn">立即下单</a>
        <a class="btn_element_normal gray_btn"> 加入购物车</a>
        <a class="favorite_btn icon-unfavorite"></a>
      </div>
    </div>
    <div class="cs_product_detail_content">
      <div class="content_panel">
        <div class="content_title">
          <i>1</i>
          <span>产品介绍</span>
        </div>
        <p class="pgr_detail">
          码信通。0元/月，无赠送短信条数，网内短信资费按照0.10元/条收取,网外短信资费按照0.10元/条收取,国际短信没有开通。
        </p>
      </div>
      <div class="content_panel">
        <div class="content_title">
          <i>1</i>
          <span>产品介绍</span>
        </div>
        <p class="pgr_detail">
          码信通。0元/月，无赠送短信条数，网内短信资费按照0.10元/条收取,网外短信资费按照0.10元/条收取,国际短信没有开通。
        </p>
      </div>
      <div class="content_panel">
        <div class="content_title">
          <i>1</i>
          <span>产品介绍</span>
        </div>
        <p class="pgr_detail">
          码信通。0元/月，无赠送短信条数，网内短信资费按照0.10元/条收取,网外短信资费按照0.10元/条收取,国际短信没有开通。
        </p>
      </div>
    </div>
    <div class="shoppingcart" id="shoppingcart">
      <a class="shoppingcart_btn">
        <i class="icon-shoppingcart"></i>
        <span>购物车</span>
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.numberClick();
    this.isdary();
  },
  methods: {
    numberClick() {
      //数字加减框
      $("body").on("click", ".num_jian", function (m) {
        var obj = $(this).closest("ul").find(".input_num");
        if (obj.val() <= 0) {
          obj.val(0);
        } else {
          obj.val(parseInt(obj.val()) - 1);
        }
        obj.change();
      });
      $("body").on("click", ".num_add", function (m) {
        var obj = $(this).closest("ul").find(".input_num");
        obj.val(parseInt(obj.val()) + 1);
        obj.change();
      });
    },
  },
  isdary() {
      //获取元素
      var dv = $("#shoppingcart");
      var x = 0;
      var y = 0;
      var l = 0;
      var t = 0;
      var isDown = false;
      //鼠标按下事件
      dv.onmousedown = function (e) {
        //获取x坐标和y坐标
        x = e.clientX;
        y = e.clientY;

        //获取左部和顶部的偏移量
        l = dv.offsetLeft;
        t = dv.offsetTop;
        //开关打开
        isDown = true;
        //设置样式
        dv.style.cursor = "move";
      };
      //鼠标移动
      window.onmousemove = function (e) {
        if (isDown == false) {
          return;
        }
        //获取x和y
        var nx = e.clientX;
        var ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        var nl = nx - (x - l);
        var nt = ny - (y - t);

        dv.style.left = nl + "px";
        dv.style.top = nt + "px";
      };
      //鼠标抬起事件
      dv.onmouseup = function () {
        //开关关闭
        isDown = false;
        dv.style.cursor = "default";
      };
    },
};
</script>

<style>
.cs_product_detail_top {
  padding: 20px;
  background: #fff;
  border: 1px solid #e9e9e9;
  margin-bottom: 20px;
}
.cs_product_detail_content {
  border: 1px solid #e9e9e9;
  border-bottom: 0;
}
.cs_product_detail_content > div {
  border-bottom: 1px solid #e9e9e9;
}
.gray {
  color: gray;
}
.product_name_panel {
  margin: 10px 0 15px;
  height: 30px;
}
.product_name_panel ul {
  overflow: auto;
  display: inline-block;
  height: 45px;
}
.product_name_panel ul li {
  float: left;
  padding: 8px 23px;
  margin-right: 10px;
  border: 3px solid #eee;
}
.product_name_panel ul li.select {
  border: 3px solid #fca505;
}
.product_name {
  height: 45px;
  vertical-align: baseline;
  float: left;
  line-height: 45px;
  text-align: right;
}
.cs_product_detail_title {
  font-size: 20px;
  margin-bottom: 30px;
}
.btn_element_normal {
  color: #fff;
  cursor: pointer;
}
.btn_element_normal:hover {
  color: #fff;
  cursor: pointer;
  opacity: 0.9;
}
.blue_btn {
  background: #0af;
}
.gray_btn {
  background: #604fac;
}
.btn_panel {
  margin: 20px 0;
}
.btn_panel a {
  padding: 10px 37px;
  margin-right: 8px;
}
.w120 {
  width: 120px;
}
.cs_product_detail_top .favorite_btn {
  background: #fff;
  border: 1px solid #eee;
}
.cs_product_detail_content .content_panel {
  padding: 20px;
  background: #fff;
}
.cs_product_detail_content .content_title {
  font-size: 14px;
  font-weight: bold;
}
.content_panel .pgr_detail {
  text-indent: 2em;
  padding: 30px 0;
}
/* 图标 */
a.icon-unfavorite {
  width: 30px;
  height: 15px;
  display: inline-block;
  background: url("/static/images/cs_product/star_gray.png");
}
a.icon-favorited {
  width: 30px;
  height: 15px;
  display: inline-block;
  background: url("/static/images/cs_product/star_yellow.png");
}

.btn_numbox {
  overflow: hidden;
  margin-top: 10px;
  display: inline-block;
  height: 45px;
}

.btn_numbox li {
  float: left;
}

.btn_numbox li {
  display: inline-block;
  font-size: 12px;
  color: #808080;
  vertical-align: sub;
}

.btn_numbox .num_jian,
.input_num,
.num_add {
  display: inline-block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  border: 1px solid #e6e6e6;
}
.btn_numbox .input_num {
  width: 58px;
  height: 35px;
  color: #333;
  border-left: 0;
  border-right: 0;
}
.breadcrumbs_panel {
  margin-bottom: 20px;
}
.breadcrumbs_panel span {
  margin-right: 15px;
  color: #666;
}
.lay_current {
  border-left: 3px solid #ff9327;
  padding-left: 10px;
  font-weight: normal;
  margin: 0px;
}
.breadcrumbs_panel span.product_list_title_span a {
  font-weight: 700;
  text-decoration: none;
  color: #303133;
}
.breadcrumbs_panel span.product_list_title_span a:hover {
  font-weight: 700;
  text-decoration: none;
  color: #0af;
}
.shoppingcart_btn {
  position: absolute;
  color: #fff;
  background: #ff7300;
  opacity: 0.2;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  border-radius: 5px;
}
.shoppingcart_btn:hover {
  opacity: 0.3;
}
.icon-shoppingcart {
  width: 30px;
  height: 15px;
  display: inline-block;
  background: url(/static/images/cs_product/shoppingcart.png);
}

</style>