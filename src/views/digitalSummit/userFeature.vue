<template>
  <section>
    <div class="middleBox">
      <div class="main">
        <div class="container">
          <div class="topBox">
            <div class="userBox">
              <div class="userTitle">
                <img class="icon" src="@/assets/images/digitalImages/title01.png">
              </div>
              <div class="userImg">
                <img class="icon" src="@/assets/images/digitalImages/user.png">
              </div>
              <div class="userFeature">
                <p class="bigText orange">影视达人</p>
                <p class="bigText green">美食达人</p>
              </div>
            </div>
            <div class="driver">
              <img src="@/assets/images/digitalImages/line01.png">
            </div>
            <div class="avg">
              <div class="commonBox">
                <div class="userTitle">
                  <img src="@/assets/images/digitalImages/title02.png">
                </div>
                <div class="shoppingBox">
                  <div class="left">
                    <p class="red commonText">您经常进行网购</p>
                    <img src="@/assets/images/digitalImages/netshopping.png">
                  </div>
                  <div class="right">
                    <p class="gray commonText">您好像不太喜欢购物</p>
                    <img src="@/assets/images/digitalImages/mall.png">
                  </div>
                </div>
                <div class="alipayBox">
                  <span class="baseText">您喜欢用支付宝付款</span>
                  <img src="@/assets/images/digitalImages/alipay.png">
                </div>
              </div>
              <div class="commonBox">
                <img class="codeImg" src="@/assets/images/digitalImages/code.png">
                <div class="userTitle">
                  <img src="@/assets/images/digitalImages/title03.png">
                </div>
                <div class="playBox">
                  <div class="top">
                    <p class="orange commonText">您喜欢体育新闻</p>
                    <div class="playFeatureImgBox">
                      <img src="@/assets/images/digitalImages/sport.png">
                      <img src="@/assets/images/digitalImages/game.png">
                      <img src="@/assets/images/digitalImages/music.png">
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="btl">
                      <p class="orange commonText">您是一位爱好动漫的人</p>
                      <div class="playFeatureImgBox">
                        <img src="@/assets/images/digitalImages/book.png">
                        <img src="@/assets/images/digitalImages/anime.png">
                      </div>
                    </div>
                    <div class="btr">
                      <p class="orange commonText">您是一位影视达人</p>
                      <div class="playFeatureImgBox">
                        <img src="@/assets/images/digitalImages/cinema.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 修改内容 -->
          <div class="driverX">
            <i class="driverlcircle"></i>
            <i class="driverRcircle"></i>
            <!-- <img src="@/assets/images/digitalImages/line02.png"> -->
          </div>
          <!-- 修改内容 -->
          <div class="bottomBox">
            <div class="commonBox foodBox">
              <!-- 新增样式名 -->
              <div class="userTitle">
                <img src="@/assets/images/digitalImages/title04.png">
                <span class="green bigText">您是美食达人</span>
              </div>
              <div class="eatBox" style="display:none;">
                <img src="@/assets/images/digitalImages/food.png">
                <div class="foodMessageBox">
                  <img src="@/assets/images/digitalImages/phone.png">
                  <span class="baseText">电话叫餐</span>
                  <div class="phoneWays">
                    <img src="@/assets/images/digitalImages/mcdonald.png">
                    <img src="@/assets/images/digitalImages/kfc.png">
                  </div>
                </div>
              </div>
              <div class="eatBox" style="display:block;">
                <img src="@/assets/images/digitalImages/food.png">
                <p class="foodMessageBox">
                  <img src="@/assets/images/digitalImages/phone.png">
                  <span class="baseText">无电话叫餐习惯</span>
                </p>
              </div>
            </div>
            <div class="commonBox">
              <div class="userTitle">
                <img src="@/assets/images/digitalImages/title05.png">
              </div>
              <div class="playBox">
                <p class="blue commonText">您出行喜欢的交通工具是飞机</p>
                <div class="playFeatureImgBox">
                  <div>
                    <img src="@/assets/images/digitalImages/airplane.png">
                    <p class="blue">飞机</p>
                  </div>
                  <div>
                    <img src="@/assets/images/digitalImages/train02.png">
                    <p class="gray">火车</p>
                  </div>
                  <div>
                    <img src="@/assets/images/digitalImages/car02.png">
                    <p class="gray">汽车</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="commonBox">
              <div class="userTitle">
                <img src="@/assets/images/digitalImages/title06.png">
              </div>
              <div class="playBox">
                <p class="blue commonText">您喜欢睡前玩手机</p>
                <div class="playFeatureImgBox">
                  <div>
                    <img src="@/assets/images/digitalImages/social02.png">
                    <p class="gray">社交</p>
                  </div>
                  <div>
                    <img src="@/assets/images/digitalImages/ticket02.png">
                    <p class="gray">彩票</p>
                  </div>
                  <div>
                    <img src="@/assets/images/digitalImages/mobilephone.png">
                    <p class="blue">手机</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    userData,
    scanData,
  },
  data() {
    return {
      count:""
    }
  },
  mounted() {
    if (this.userData) {
      this.go();
    }
  },
  methods: {
    go() {
      debugger;
      const TIME_COUNT = 3;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.scanData = false;
        this.timer = setInterval(function() {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.scanData = true;
            clearInterval(this.timer);
            this.timer = null;
            this.userData = !this.scanData;
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

