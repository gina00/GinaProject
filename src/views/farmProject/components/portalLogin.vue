<template>
  <div class="bgBox">
    <div class="logoBox">
      <img src="@/assets/images/farm/logo.png" />
    </div>
    <div class="main-container">
      <div class="loginBox">
        <div class="loginContainer">
          <div class="login-bg">
            <img src="@/assets/images/farm/pic_1.png" />
          </div>
          <div class="loginContent">
            <div class="title">统一综合门户</div>
            <div class="formBox">
              <div class="formTitle">
                <span>欢迎登录</span>
                <p class="bottmline"></p>
              </div>
              <div class="formContent">
                <input type="text" class="userIpt" placeholder="请输入用户名" />
                <input type="password" class="pwIpt" placeholder="请输入密码" />
                <div class="btnBox">
                  <button class="loginbtn">登录</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="bottomText">福建省农业农村厅（中共福建省委实施乡村振兴战略领导小组办公室）承办:福建省农业信息服务中心</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>



.bgBox {
    background: #4bb558;
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
}

.logoBox {
    position: absolute;
    top: 25px;
    left: 25px;
}

.main-container {
    text-align: center;
}

.loginBox {
    /* width: calc(100% - 240px); */
    display: inline-block;
    border-radius: 5px;
    background: #fff;
}

.login-bg {
    padding: 20px 30px;
}

.loginContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: left;
    box-shadow: 0 7px 10px #278f35;
}

.loginContent {
    padding: 46px 30px;
}

.loginContent .title {
    font-size: 24px;
    color: #0a9d1c;
    margin: 25px 0;
    font-weight: bold;
}

.formBox {
    width: 280pt;
    padding: 23px;
    border-radius: 5px;
    box-shadow: 0 0 50px #dbdfe8;
    background: #fff;
}

.formTitle {
    font-size: 20px;
    color: #0a9d1c;
    text-align: left;
    font-weight: bold;
}
.formContent{
    margin-top: 10px;
}

.bottmline {
    border-radius: 10px;
    width: 65px;
    height: 5px;
    background: #0a9d1c;
    margin-top: 6pt;
}

input {
    outline: none;
    border: none;
}
.userIpt::-webkit-input-placeholder{
    color: #9caec7;
    font-size: 14px;
}
.userIpt::-moz-placeholder{ 
    color: #9caec7;  
    font-size: 14px;      
}
.userIpt:-ms-input-placeholder{ 
    color: #9caec7;     
    font-size: 14px;   
}
.pwIpt::-webkit-input-placeholder{
    color: #9caec7;
    font-size: 14px;
}
.pwIpt::-moz-placeholder{ 
    color: #9caec7;   
    font-size: 14px;     
}
.pwIpt:-ms-input-placeholder{ 
    color: #9caec7;       
    font-size: 14px; 
}
.userIpt,
.pwIpt {
    font-size: 14px; 
    border: 1px solid #9caec7;
    width: 100%;
    padding-left: 49px;
    height: 40px;
    margin-top: 15px;
}
.userIpt{
    // background: url(assets/images/farm/icon_1.png) no-repeat 3% 37%;
}
.pwIpt{
    // background: url(assets/images/farm/icon_3.png) no-repeat 3% 37%;
}

.userIpt:hover,
.pwIpt:hover {
    border: 1px solid #0a9d1c;
}
.userIpt:hover{
    // background: url(assets/images/farm/icon_2.png) no-repeat 3% 37%;
}
.pwIpt:hover{
    // background: url(assets/images/farm/icon_4.png) no-repeat 3% 37%;
}
.userIpt:focus,
.pwIpt:focus {
    border: 1px solid #0a9d1c;
}
.userIpt:focus{
    // background: url(assets/images/farm/icon_2.png) no-repeat 3% 37%;
}
.pwIpt:focus{
    // background: url(assets/images/farm/icon_4.png) no-repeat 3% 37%;
}
.userIpt:active,
.pwIpt:active {
    border: 1px solid #0a9d1c;
}

.iconBox {
    overflow: auto;
    display: inline-block;
    padding: 0 10px;
    border-right: 1px solid #ccc;
    width: 40px;
}
button{
    border: none;
    outline: none;
}
.btnBox{
    margin-top: 25px;
}
.loginbtn{
    width: 100%;
    background: #0a9d1c;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
}
.bottomText{
    padding: 80px 80px 0;
    color: #acd9b1;
    font-size: 12px;
    letter-spacing: 2px;

}
</style>