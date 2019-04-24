<template>
  <div class="maskBox">
    <div class="maskBg"></div>
    <div class="windowBox">
      <div class="windowContent">
        <div class="topBox">
          <div class="title">
            <img src="@/assets/images/flow/title.png">
          </div>
          <a class="closeIcon">
            <img src="@/assets/images/flow/close.png">
          </a>
        </div>
        <div class="centerBox">
          <div class="leftBox">
            <img src="@/assets/images/flow/bg01.png">
          </div>
          <div class="rightBox">
            <div class="stepImg">
              <img src="@/assets/images/flow/step.png">
            </div>

            <div class="stepBox">
              <div class="step">
                <img src="@/assets/images/flow/scanning_completed.png">
                <span class="green">扫码</span>
              </div>
              <div class="step">
                <img src="@/assets/images/flow/photograph_normal.png">
                <span class="grey">拍照</span>
              </div>
              <div class="step">
                <img src="@/assets/images/flow/finish_normal.png">
                <span class="grey">完成</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomBox">
          <p>流量包6档(2016版本)</p>
          <p>本套餐随关联营销案生效，营销案失效则同步失效。生效期间每月赠送1G国内移动数据流量，超出后在国内使用按0.29元/M流量资费。执行套餐外费用和流量双封顶规则。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { setInterval, clearInterval } from "timers";
export default {
  //props: ["noData", "scanData"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.maskBox {
  display: table;
  width: 100%;
  height: 100%;
      position: relative;
  background: url('../../../static/images/projectList/mbg.png') no-repeat center;
}

.maskBg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0 ,.4);
  position: absolute;
}

.windowBox {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

.windowContent {
  width: 45%;
  padding: 20px;
  margin: 0 auto;
  background: #fff;
  overflow: auto;
}

.windowContent .topBox {
  position: relative;
  padding: 10px;
}

.windowContent .closeIcon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.windowContent .centerBox {
  padding: 30px 30px 0;
  overflow: auto;
}

.windowContent .centerBox .leftBox {
  float: left;
  padding-left: 20px;
}

.windowContent .centerBox .rightBox {
  margin: 40px 0 0;
  padding-left: 12%;
  overflow: auto;
}

.centerBox .rightBox .stepImg {
  float: left;
}

.centerBox .rightBox .stepBox {
  float: left;
}

.centerBox .rightBox .stepBox .step {
  margin-bottom: 45px;
  margin-left: 40px;
}

.centerBox .rightBox .stepBox .step span {
  margin-left: 8px;
}

.centerBox .rightBox .stepBox .step img {
  vertical-align: middle;
}

.bottomBox {
  padding: 10px 50px;
}

.bottomBox p {
  font-size: 14px;
  line-height: 25px;
  color: #333;
  text-align: left;
}

/* color */

.green {
  color: #57d785;
}

.grey {
  color: #a6a5a6;
}
</style>

