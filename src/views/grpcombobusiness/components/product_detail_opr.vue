<template>
  <div class="cs_product_detail_panel">
    <div class="cs_product_detail_top">
      <div class="cs_product_detail_title">
        <span>移动云</span>
      </div>
      <div class="product_name_panel">
        <span class="dpl w120 gray"> 商品名称：</span>
        <span class="product_name">移动云</span>
      </div>
      <div class="choose_panel">
        　<span class="dpl w120 gray">数量：</span>
          <ul class="btn_numbox">
              <li><span id="num-jian" class="num_jian">-</span></li>
              <li>
                <input type="text" class="input_num" id="input-num" value="0" />
              </li>
              <li><span id="num_add" class="num_add">+</span></li>
            </ul>
      </div>
      <div class="btn_panel">
        <span class="dpl w120 gray"></span>
        <a class="btn_element_normal blue_btn">立即下单</a>
        <a class="btn_element_normal gray_btn">加入购物车</a>
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
      this.numberClick();
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
.dpl {
  display: inline-block;
  text-align: right;
}
.product_name {
  border: 3px solid #fca505;
  padding: 10px 23px;
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
  background: rgb(147, 70, 199);
}
.btn_panel {
  margin: 20px 0;
}
.btn_panel a {
  padding: 10px 37px;
  margin-right: 15px;
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
  margin-top: 20px;
display: inline-block;
}

.btn_numbox li {
  float: left;
}

.btn_numbox li 
 {
  display: inline-block;
  font-size: 12px;
  color: #808080;
  vertical-align: sub;
}

.btn_numbox .num_jian,.input_num,.num_add {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  border: 1px solid #e6e6e6;
}
.btn_numbox .input_num {
  width: 58px;
  height: 28px;
  color: #333;
  border-left: 0;
  border-right: 0;
}
</style>