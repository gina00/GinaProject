<template>
  <div class="contentBox">
    <!-- 单选框布局 -->
    <div>
      <label role="radio" tabindex="0" class="el-radio is-checked" aria-checked="true">
        <span class="el-radio__input is-checked">
          <span class="el-radio__inner"></span>
          <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original" value="1" />
        </span>
        <span class="el-radio__label">备选项</span>
      </label>
      <label role="radio" tabindex="0" class="el-radio">
        <span class="el-radio__input">
          <span class="el-radio__inner"></span>
          <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original" value="2" />
        </span>

        <span class="el-radio__label">备选项</span>
      </label>
    </div>
    <!--复选框布局 -->
    <div role="group" aria-label="checkbox-group" class="el-checkbox-group">
      <label class="el-checkbox is-checked">
        <span class="el-checkbox__input is-checked">
          <span class="el-checkbox__inner"></span>
          <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="复选框 A" />
        </span>
        <span class="el-checkbox__label">复选框 A</span>
      </label>
      <label class="el-checkbox">
        <span class="el-checkbox__input">
          <span class="el-checkbox__inner"></span>
          <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="复选框 C" />
        </span>
        <span class="el-checkbox__label">复选框 C</span>
      </label>
      <label class="el-checkbox is-disabled">
        <span class="el-checkbox__input is-disabled">
          <span class="el-checkbox__inner"></span>
          <input
            type="checkbox"
            aria-hidden="false"
            disabled="disabled"
            class="el-checkbox__original"
            value="禁用"
          />
        </span>
        <span class="el-checkbox__label">禁用</span>
      </label>
    </div>
    <!-- 进度条 -->
    <div
      role="progressbar"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
      class="el-progress el-progress--line"
    >
      <div class="el-progress-bar">
        <div class="el-progress-bar__outer" style="height: 6px;">
          <div class="el-progress-bar__inner" style="width: 50%;">
            <!---->
          </div>
        </div>
      </div>
      <div class="el-progress__text" style="font-size: 14.4px;">50%</div>
    </div>
    <div
      role="progressbar"
      aria-valuenow="70"
      aria-valuemin="0"
      aria-valuemax="100"
      class="el-progress el-progress--line el-progress--text-inside"
    >
      <div class="el-progress-bar">
        <div class="el-progress-bar__outer" style="height: 26px;">
          <div class="el-progress-bar__inner" style="width: 70%;">
            <div class="el-progress-bar__innerText">70%</div>
          </div>
        </div>
      </div>
    </div>
    <div
      role="slider"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-orientation="horizontal"
      class="el-slider"
      aria-valuetext="50"
      aria-label="slider between 0 and 100"
    >
      <div class="el-slider__runway">
        <div class="el-slider__bar" style="width: 49%; left: 0%;"></div>
        <div tabindex="0" class="el-slider__button-wrapper" style="left: 49%;">
          <div class="el-tooltip el-slider__button" aria-describedby="el-tooltip-2899" tabindex="0"></div>
        </div>
      </div>
    </div>
    <!-- 按钮 -->
    <button type="button" class="el-button el-button--default">
      <span>默认按钮</span>
    </button>
    <button type="button" class="el-button el-button--primary">
      <span>主要按钮</span>
    </button>
    <button type="button" class="el-button el-button--primary el-button--medium">
      <span>中等按钮</span>
    </button>
    <button type="button" class="el-button el-button--primary el-button--small">
      <span>小型按钮</span>
    </button>
    <button type="button" class="el-button el-button--primary el-button--mini">
      <span>超小按钮</span>
    </button>
    <!-- 表单系列 -->
    <div class="form">
      选项框
      <div class="el-input">
        <input type="text" autocomplete="off" class="el-input__inner" />
      </div>
      <div class="el-input el-input--suffix is-normal">
        <input
          type="text"
          readonly="readonly"
          autocomplete="off"
          placeholder="请选择活动区域"
          class="el-input__inner"
        />
        <span class="el-input__suffix">
          <span class="el-input__suffix-inner"></span>
        </span>
      </div>
      <div class="el-form-item el-form-item--feedback is-success">
        <label for="checkPass" class="el-form-item__label" style="width: 100px;">密码</label>
        <div class="el-form-item__content" style="margin-left: 100px;">
          <div class="el-input">
            <input type="password" autocomplete="off" class="el-input__inner" />
            <span class="el-input__suffix">
              <span class="el-input__suffix-inner"></span>
              <i class="el-input__icon el-input__validateIcon el-icon-circle-check"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="el-form-item el-form-item--feedback is-error">
        <label for="checkPass" class="el-form-item__label" style="width: 100px;">确认密码</label>
        <div class="el-form-item__content" style="margin-left: 100px;">
          <div class="el-input">
            <input type="password" autocomplete="off" class="el-input__inner" />
            <span class="el-input__suffix">
              <span class="el-input__suffix-inner"></span>
              <i class="el-input__icon el-input__validateIcon el-icon-circle-close"></i>
            </span>
          </div>
          <div class="el-form-item__error">两次输入密码不一致!</div>
        </div>
      </div>
      <div>
        <span>large input：</span>
        <div class="el-input el-input--large">
          <input type="text" autocomplete="off" class="el-input__inner" />
        </div>
        <span>medium input：</span>
        <div class="el-input el-input--medium">
          <input type="text" autocomplete="off" class="el-input__inner" />
        </div>
        <span>small input：</span>
        <div class="el-input el-input--small">
          <input type="text" autocomplete="off" class="el-input__inner" />
        </div>
      </div>
    </div>
    <div>
      文本域
      <div class="el-textarea">
        <textarea autocomplete="off" class="el-textarea__inner" style="min-height: 33px;"></textarea>
      </div>
    </div>
    <div style="position:relative;height:400px;">
      下拉菜单
      <div class="el-dropdown">
        <button
          type="button"
          class="el-button el-button--primary el-dropdown-selfdefine"
          aria-haspopup="list"
          aria-controls="dropdown-menu-6796"
          role="button"
          tabindex="0"
        >
          <span>
            更多菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </button>
        <ul
          class="el-dropdown-menu el-popper"
          id="dropdown-menu-6813"
          style="transform-origin: center top; z-index: 2358; position: absolute; top: 34px; left: 23px;"
          x-placement="bottom-end"
        >
          <li tabindex="-1" class="el-dropdown-menu__item">菜单1</li>
          <li tabindex="-1" class="el-dropdown-menu__item">菜单2</li>
          <li tabindex="-1" class="el-dropdown-menu__item">菜单3</li>
          <li tabindex="-1" class="el-dropdown-menu__item">菜单4</li>
          <li tabindex="-1" class="el-dropdown-menu__item">菜单5</li>
          <div x-arrow class="popper__arrow" style="left: 59px;"></div>
        </ul>
      </div>
    </div>
    <div>
      弹框组
      <div role="dialog" aria-modal="true" aria-label="提示" class="el-dialog">
        <div class="el-dialog__header">
          <span class="el-dialog__title">提示</span>
          <button type="button" aria-label="Close" class="el-dialog__headerbtn">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body">
          <span>这是一段信息</span>
        </div>
        <div class="el-dialog__footer">
          <span class="dialog-footer">
            <button type="button" class="el-button el-button--default">
              <span>取 消</span>
            </button>
            <button type="button" class="el-button el-button--primary">
              <span>确 定</span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div>
      表格
      <div>
        <div
          class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition"
          style="width: 100%;"
        >
          <div class="hidden-columns">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="el-table__header-wrapper">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              class="el-table__header"
              style="width: 819px;"
            >
              <colgroup>
                <col name="el-table_75_column_310" width="180" />
                <col name="el-table_75_column_311" width="180" />
                <col name="el-table_75_column_312" width="459" />
                <col name="gutter" width="0" />
              </colgroup>
              <thead class="has-gutter">
                <tr class>
                  <th colspan="1" rowspan="1" class="el-table_75_column_310 is-leaf">
                    <div class="cell">日期</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_75_column_311 is-leaf">
                    <div class="cell">姓名</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_75_column_312 is-leaf">
                    <div class="cell">地址</div>
                  </th>
                  <th class="gutter" style="width: 0px; display: none;"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="el-table__body-wrapper is-scrolling-none">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              class="el-table__body"
              style="width: 819px;"
            >
              <colgroup>
                <col name="el-table_75_column_310" width="180" />
                <col name="el-table_75_column_311" width="180" />
                <col name="el-table_75_column_312" width="459" />
              </colgroup>
              <tbody>
                <tr class="el-table__row">
                  <td rowspan="1" colspan="1" class="el-table_75_column_310">
                    <div class="cell">2016-05-02</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_311">
                    <div class="cell">王小虎</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_312">
                    <div class="cell">上海市普陀区金沙江路 1518 弄</div>
                  </td>
                </tr>
                <tr class="el-table__row">
                  <td rowspan="1" colspan="1" class="el-table_75_column_310">
                    <div class="cell">2016-05-04</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_311">
                    <div class="cell">王小虎</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_312">
                    <div class="cell">上海市普陀区金沙江路 1517 弄</div>
                  </td>
                </tr>
                <tr class="el-table__row">
                  <td rowspan="1" colspan="1" class="el-table_75_column_310">
                    <div class="cell">2016-05-01</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_311">
                    <div class="cell">王小虎</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_312">
                    <div class="cell">上海市普陀区金沙江路 1519 弄</div>
                  </td>
                </tr>
                <tr class="el-table__row">
                  <td rowspan="1" colspan="1" class="el-table_75_column_310">
                    <div class="cell">2016-05-03</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_311">
                    <div class="cell">王小虎</div>
                  </td>
                  <td rowspan="1" colspan="1" class="el-table_75_column_312">
                    <div class="cell">上海市普陀区金沙江路 1516 弄</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="el-table__column-resize-proxy" style="display: none;"></div>
        </div>
      </div>
    </div>
    <div class="el-transfer">
      <div
        class="el-transfer-panel"
        titles
        buttontexts
        filterplaceholder
        leftdefaultchecked
        rightdefaultchecked
        value="1,4"
        targetorder="original"
      >
        <p class="el-transfer-panel__header">
          <label class="el-checkbox">
            <span class="el-checkbox__input">
              <span class="el-checkbox__inner"></span>
              <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value />
            </span>
            <span class="el-checkbox__label">
              列表 1
              <span>0/13</span>
              <!---->
            </span>
          </label>
        </p>
        <div class="el-transfer-panel__body">
          <!---->
          <div
            role="group"
            aria-label="checkbox-group"
            class="el-checkbox-group el-transfer-panel__list"
          >
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="2" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 2</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="3" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 3</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="5" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 5</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="6" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 6</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="7" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 7</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item is-disabled">
              <span class="el-checkbox__input is-disabled">
                <span class="el-checkbox__inner"></span>
                <input
                  type="checkbox"
                  aria-hidden="false"
                  disabled="disabled"
                  class="el-checkbox__original"
                  value="8"
                />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 8</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="9" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 9</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="10" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 10</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="11" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 11</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item is-disabled">
              <span class="el-checkbox__input is-disabled">
                <span class="el-checkbox__inner"></span>
                <input
                  type="checkbox"
                  aria-hidden="false"
                  disabled="disabled"
                  class="el-checkbox__original"
                  value="12"
                />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 12</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="13" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 13</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="14" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 14</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="15" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 15</span>
                <!---->
              </span>
            </label>
          </div>
          <p class="el-transfer-panel__empty" style="display: none;">无匹配数据</p>
          <p class="el-transfer-panel__empty" style="display: none;">无数据</p>
        </div>
        <!---->
      </div>
      <div class="el-transfer__buttons">
        <button
          type="button"
          class="el-button el-button--primary is-disabled el-transfer__button"
          disabled="disabled"
        >
          <span>
            <i class="el-icon-arrow-left"></i>
          </span>
        </button>
        <button
          type="button"
          class="el-button el-button--primary is-disabled el-transfer__button"
          disabled="disabled"
        >
          <span>
            <i class="el-icon-arrow-right"></i>
          </span>
        </button>
      </div>
      <div
        class="el-transfer-panel"
        titles
        buttontexts
        filterplaceholder
        leftdefaultchecked
        rightdefaultchecked
        value="1,4"
        targetorder="original"
      >
        <p class="el-transfer-panel__header">
          <label class="el-checkbox">
            <span class="el-checkbox__input">
              <span class="el-checkbox__inner"></span>
              <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value />
            </span>
            <span class="el-checkbox__label">
              列表 2
              <span>0/2</span>
              <!---->
            </span>
          </label>
        </p>
        <div class="el-transfer-panel__body">
          <!---->
          <div
            role="group"
            aria-label="checkbox-group"
            class="el-checkbox-group el-transfer-panel__list"
          >
            <label class="el-checkbox el-transfer-panel__item">
              <span class="el-checkbox__input">
                <span class="el-checkbox__inner"></span>
                <input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="1" />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 1</span>
                <!---->
              </span>
            </label>
            <label class="el-checkbox el-transfer-panel__item is-disabled">
              <span class="el-checkbox__input is-disabled">
                <span class="el-checkbox__inner"></span>
                <input
                  type="checkbox"
                  aria-hidden="false"
                  disabled="disabled"
                  class="el-checkbox__original"
                  value="4"
                />
              </span>
              <span class="el-checkbox__label">
                <span>备选项 4</span>
                <!---->
              </span>
            </label>
          </div>
          <p class="el-transfer-panel__empty" style="display: none;">无匹配数据</p>
          <p class="el-transfer-panel__empty" style="display: none;">无数据</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contentBox {
  width: 50%;
}
/* 单选框样式 */
.el-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.el-radio__input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.el-radio__inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #409eff;
  background: #409eff;
}
.el-radio__inner:after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}
.el-radio__input.is-checked .el-radio__inner::after {
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
}
.el-radio__original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.el-radio__label {
  font-size: 14px;
  padding-left: 10px;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #409eff;
}
.el-radio:last-child {
  margin-right: 0;
}
// 复选框
.el-checkbox-group {
  font-size: 0;
}
.el-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
}
.el-checkbox:last-of-type {
  margin-right: 0;
}
.el-checkbox__input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.el-checkbox__inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}
.el-checkbox__input.is-checked .el-checkbox__inner:after {
  transform: rotate(45deg) scaleY(1);
}
.el-checkbox__original {
  opacity: 0;
  outline: none;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1;
}
.el-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 14px;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #409eff;
}
.el-checkbox__input.is-disabled .el-checkbox__inner {
  background-color: #edf2fc;
  border-color: #dcdfe6;
  cursor: not-allowed;
}
.el-checkbox__input.is-disabled .el-checkbox__inner:after {
  cursor: not-allowed;
  border-color: #c0c4cc;
}
// 进度条
.el-progress {
  position: relative;
  line-height: 1;
}
.el-progress-bar {
  padding-right: 50px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-right: -55px;
  box-sizing: border-box;
}
.el-progress-bar__outer {
  height: 6px;
  border-radius: 100px;
  background-color: #ebeef5;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
}
.el-progress-bar__inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #409eff;
  text-align: right;
  border-radius: 100px;
  line-height: 1;
  white-space: nowrap;
  transition: width 0.6s ease;
}
.el-progress-bar__inner:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.el-progress--text-inside .el-progress-bar {
  padding-right: 0;
  margin-right: 0;
}
.el-progress-bar__innerText {
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  font-size: 12px;
  margin: 0 5px;
}
.el-slider__runway {
  width: 100%;
  height: 6px;
  margin: 16px 0;
  background-color: #e4e7ed;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}
.el-slider__bar {
  height: 6px;
  background-color: #409eff;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  position: absolute;
}
.el-slider__button-wrapper {
  height: 36px;
  width: 36px;
  position: absolute;
  z-index: 1001;
  top: -15px;
  transform: translateX(-50%);
  background-color: transparent;
  text-align: center;
  user-select: none;
  line-height: normal;
}
.el-slider__button {
  width: 16px;
  height: 16px;
  border: 2px solid #409eff;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.2s;
  user-select: none;
}
.el-slider__button-wrapper .el-tooltip,
.el-slider__button-wrapper:after {
  display: inline-block;
  vertical-align: middle;
}
.el-slider__button-wrapper:after {
  content: "";
  height: 100%;
}
.el-slider__button-wrapper .el-tooltip,
.el-slider__button-wrapper:after {
  display: inline-block;
  vertical-align: middle;
}
.el-slider__button.dragging,
.el-slider__button.hover,
.el-slider__button:hover {
  transform: scale(1.2);
}
.el-slider__button.hover,
.el-slider__button:hover {
  cursor: grab;
}
// 按钮组
// 默认
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button:focus,
.el-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
// 选中按钮
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.el-button--primary:active {
  outline: none;
}
.el-button--primary.is-active,
.el-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}
// 尺寸
.el-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.el-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
// 选择框
.form {
  margin-top: 10px;
}
.form .el-input {
  margin-bottom: 10px;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-input__inner:hover {
  border-color: #c0c4cc;
}
.el-input__inner:focus {
  outline: none;
  border-color: #409eff;
}
.el-select > .el-input {
  display: block;
}
.el-select .el-input__inner {
  cursor: pointer;
  padding-right: 35px;
}
.el-input--suffix .el-input__inner {
  padding-right: 30px;
}
.el-input__suffix {
  position: absolute;
  height: 100%;
  right: 5px;
  top: 0;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  pointer-events: none;
}
.el-input__suffix-inner {
  pointer-events: all;
  position: relative;
}
.is-normal .el-input__suffix-inner::before {
  content: "";
  width: 10px;
  height: 10px;
  border-width: 5px;
  border-color: #ccc transparent transparent transparent;
  border-style: solid;
  position: absolute;
  right: 10px;
  top: 18px;
}
.is-normal .el-input__suffix-inner::after {
  content: "";
  width: 10px;
  height: 10px;
  border-width: 5px;
  border-color: transparent transparent #ccc transparent;
  border-style: solid;
  position: absolute;
  right: 10px;
  top: 18px;
  display: none;
}
.el-form-item.is-success .el-input__inner,
.el-form-item.is-success .el-input__inner:focus,
.el-form-item.is-success .el-textarea__inner,
.el-form-item.is-success .el-textarea__inner:focus {
  border-color: #a8e498;
}
.el-form-item.is-success .el-input__validateIcon {
  color: #a8e498;
}
.el-form-item.is-error .el-input__inner,
.el-form-item.is-error .el-input__inner:focus,
.el-form-item.is-error .el-textarea__inner,
.el-form-item.is-error .el-textarea__inner:focus {
  border-color: #f56c6c;
}
.el-form-item.is-error .el-input__validateIcon {
  color: #f56c6c;
}
.el-input--large {
  height: 40px;
}
.el-input--medium {
  height: 36px;
}
.el-input--small {
  height: 32px;
}
/*文本域*/
.el-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
}
.el-textarea__inner {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-textarea__inner:hover {
  border-color: #c0c4cc;
}
.el-textarea__inner:focus {
  outline: none;
  border-color: #409eff;
}
/*下拉菜单*/
[class*=" el-icon-"],
[class^="el-icon-"] {
  font-family: element-icons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-icon--right {
  margin-left: 5px;
}
.el-dropdown-menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px 0;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-popper[x-placement^="bottom"] {
  margin-top: 12px;
}
.el-dropdown-menu__item {
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  outline: none;
}
.el-dropdown-menu__item i {
  margin-right: 5px;
}
/*弹框*/
.el-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 50%;
}
.el-dialog__header {
  padding: 20px 20px 10px;
}
.el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.el-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #909399;
}
.el-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.el-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}
// 表格
.el-table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
}
.el-table--fit {
  border-right: 0;
  border-bottom: 0;
}
.el-table--border,
.el-table--group {
  border: 1px solid #ebeef5;
}

.el-table:before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
}
.el-table--border:after,
.el-table--group:after,
.el-table:before {
  content: "";
  position: absolute;
  background-color: #ebeef5;
  z-index: 1;
}
.el-table .hidden-columns {
  visibility: hidden;
  position: absolute;
  z-index: -1;
}
.el-table__body-wrapper,
.el-table__footer-wrapper,
.el-table__header-wrapper {
  width: 100%;
}
.el-table__footer-wrapper,
.el-table__header-wrapper {
  overflow: hidden;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: fixed;
  border-collapse: separate;
}
.el-table thead {
  color: #909399;
  font-weight: 500;
}
.el-table tr {
  background-color: #fff;
}
.el-table td,
.el-table th {
  padding: 12px 0;
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
}
.el-table th {
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  background-color: #fff;
}
.el-table--border td,
.el-table--border th {
  border-right: 1px solid #ebeef5;
}
.el-table--border th,
.el-table--border th.gutter:last-of-type {
  border-bottom: 1px solid #ebeef5;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #ebeef5;
}
.el-table .cell {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-left: 10px;
  padding-right: 10px;
}
.el-table th > .cell,
.el-table th div {
  display: inline-block;
  box-sizing: border-box;
  text-overflow: ellipsis;
}
.el-table th > .cell {
  position: relative;
  word-wrap: normal;
  vertical-align: middle;
  width: 100%;
}
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  padding-left: 10px;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #ebeef5;
}
.el-table__body-wrapper {
  overflow: hidden;
  position: relative;
}
.el-table--enable-row-transition .el-table__body td {
  transition: background-color 0.25s ease;
}
/*穿梭框*/
.el-transfer {
  font-size: 14px;
}
.el-transfer-panel {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  max-height: 100%;
  box-sizing: border-box;
  position: relative;
}
.el-transfer-panel .el-transfer-panel__header {
  height: 40px;
  line-height: 40px;
  background: #f5f7fa;
  margin: 0;
  padding-left: 15px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  color: #000;
}
.el-transfer-panel .el-transfer-panel__header .el-checkbox {
  display: block;
  line-height: 40px;
}
.el-transfer-panel .el-checkbox__label {
  padding-left: 8px;
}
.el-transfer-panel .el-transfer-panel__header .el-checkbox .el-checkbox__label {
  font-size: 16px;
  color: #303133;
  font-weight: 400;
}
.el-transfer-panel .el-transfer-panel__header .el-checkbox .el-checkbox__label span {
  position: absolute;
  right: 15px;
  color: #909399;
  font-size: 12px;
  font-weight: 400;
}
.el-transfer-panel__body {
  height: 246px;
}
.el-transfer-panel__list {
  margin: 0;
  padding: 6px 0;
  list-style: none;
  height: 246px;
  overflow: auto;
  box-sizing: border-box;
}
.el-checkbox-group {
  font-size: 0;
}
.el-transfer-panel__item.el-checkbox {
  color: #606266;
}
.el-transfer-panel__item .el-checkbox__input {
  position: absolute;
  top: 8px;
}
.el-transfer-panel .el-checkbox__inner {
  height: 14px;
  width: 14px;
  border-radius: 3px;
}
.el-transfer-panel .el-checkbox__inner:after {
  height: 6px;
  width: 3px;
  left: 4px;
}
.el-transfer-panel__item.el-checkbox .el-checkbox__label {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  box-sizing: border-box;
  padding-left: 24px;
  line-height: 30px;
}
.el-transfer-panel__item + .el-transfer-panel__item {
  margin-left: 0;
  display: block !important;
}
.el-transfer-panel__item.el-checkbox {
  color: #606266;
}
.el-transfer-panel__item:hover {
  color: #409eff;
}
.el-checkbox__input.is-disabled + span.el-checkbox__label {
  color: #c0c4cc;
  cursor: not-allowed;
}
.el-checkbox__input.is-disabled + span.el-checkbox__label {
  color: #c0c4cc;
  cursor: not-allowed;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #409eff;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner:before {
  content: "";
  position: absolute;
  display: block;
  background-color: #fff;
  height: 2px;
  transform: scale(0.5);
  left: 0;
  right: 0;
  top: 5px;
}
.el-transfer__buttons {
    display: inline-block;
    vertical-align: middle;
    padding: 0 30px;
}
.el-transfer__button {
    display: block;
    margin: 0 auto;
    padding: 10px;
    border-radius: 50%;
    color: #fff;
    background-color: #409eff;
    font-size: 0;
}
.el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.el-transfer__button.is-disabled, .el-transfer__button.is-disabled:hover {
    border: 1px solid #dcdfe6;
    background-color: #f5f7fa;
    color: #c0c4cc;
}
.el-transfer__button:first-child {
    margin-bottom: 10px;
}
.el-transfer__button i, .el-transfer__button span {
    font-size: 14px;
}
.el-transfer__button:nth-child(2) {
    margin: 0;
}
</style>
