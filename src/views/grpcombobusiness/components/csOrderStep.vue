<template>
  <div>
    <div class="steps_panel">
      <ul>
        <li class="step_item first_step is_success">
          <div class="step_item_linepanel is_center">
            <span class="icon-circle">
              <i class="icon-circle-bg"></i>
            </span>
            <div class="step_item_line_baselayout"></div>
          </div>
          <div class="step_item_textpanel is_center">
            <p>融合下单</p>
            <p>2020-10-01 11:00:00</p>
          </div>
        </li>
        <li class="step_item is_success">
          <div class="step_item_linepanel is_center">
            <span class="icon-circle">
              <i class="icon-circle-bg"></i>
            </span>
            <div class="step_item_line_baselayout"></div>
          </div>
          <div class="step_item_textpanel is_center">
            <p>审批</p>
            <p>2020-10-01 11:00:00</p>
          </div>
        </li>
        <li class="step_item is_success">
          <div class="step_item_linepanel is_center">
            <span class="icon-circle">
              <i class="icon-circle-bg"></i>
            </span>
            <div class="step_item_line_baselayout"></div>
          </div>
          <div class="step_item_textpanel is_center">
            <p>融合下单2</p>
            <p>2020-10-01 11:00:00</p>
          </div>
        </li>
        <li class="step_item is_doing">
          <div class="step_item_linepanel is_center">
            <span class="icon-circle">
              <i class="icon-circle-bg"></i>
            </span>
            <div class="step_item_line_baselayout"></div>
          </div>
          <div class="step_item_textpanel is_center">
            <p>合同签订</p>
            <p>2020-10-01 11:00:00</p>
          </div>
        </li>
        <li class="step_item is_process">
          <div class="step_item_linepanel is_center">
            <span class="icon-circle">
              <i class="icon-circle-bg"></i>
            </span>
            <div class="step_item_line_baselayout"></div>
          </div>
          <div class="step_item_textpanel is_center">
            <p>业务开通</p>
            <p>2020-10-01 11:00:00</p>
          </div>
        </li>
        <li class="step_item is_process">
          <div class="step_item_linepanel is_center">
            <span class="icon-circle">
              <i class="icon-circle-bg"></i>
            </span>
            <div class="step_item_line_baselayout"></div>
          </div>
          <div class="step_item_textpanel is_center">
            <p>测试联调确认</p>
            <p>2020-10-01 11:00:00</p>
          </div>
        </li>
        <li class="step_item last_step is_process">
          <div class="step_item_linepanel is_center">
            <span class="icon-circle">
              <i class="icon-circle-bg"></i>
            </span>
            <div class="step_item_line_baselayout"></div>
          </div>
          <div class="step_item_textpanel is_center">
            <p>竣工</p>
            <p>2020-10-01 11:00:00</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* step panel */
.steps_panel ul {
  overflow: auto;
}
.step_item {
  width: 160px;
  float: left;
  position: relative;
}
.step_item_linepanel {
  position: relative;
}
.step_item_line_baselayout {
  width: 100%;
  height: 5px;
  position: absolute;
  top: 10px;
}
.icon-circle {
  width: 26px;
  height: 26px;
  /* border-radius: 50px; */
  /* background: #fff; */
  background: url(/static/images/cs_product/bop-cs-icon.png);
  /* border: 3px solid; */
  display: inline-block;
  position: relative;
  z-index: 1;
}
.icon-circle-bg {
  position: absolute;
  left: -5px;
  top: -4px;
}

.is_process .icon-circle {
  /* border-color: #aadee9; */
  background-position: -53px 0;
}
.is_process .step_item_line_baselayout {
  background: #aadee9;
}
.is_process .step_item_textpanel {
  color: #aadee9;
}
/* .is_process .icon-circle-bg {
  background: url(/static/images/cs_product/hook_gray.png) center;
  background-size: 23px;
} */
/* is_success */
.is_success .icon-circle {
  /* border-color: #409eff; */
  background-position: 0 0;
}
.is_success .step_item_line_baselayout {
  background: #409eff;
}
.is_success .step_item_textpanel {
  color: #409eff;
}
/* .is_success .icon-circle-bg {
  background: url(/static/images/cs_product/hook_blue.png) center;
 background-size: 23px;
} */
/* is_doing */
.is_doing .icon-circle {
  /* border-color: #ff9900; */
  background-position: -27px 0;
}
.is_doing .step_item_line_baselayout {
  background: #ff9900;
}
.is_doing .step_item_textpanel {
  color: #ff9900;
}
.step_item_textpanel.is_center {
  text-align: center;
}
.is_center {
  text-align: center;
}
.first_step .icon-circle {
  position: relative;
}
.first_step .step_item_line_baselayout {
  width: 57%;
  left: 70px;
}
.last_step .icon-circle {
  position: relative;
}
.last_step .step_item_line_baselayout {
  width: 57%;
  right: 70px;
}
</style>