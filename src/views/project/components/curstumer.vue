<template>
  <section>
    <div class="container">
      <a href="http://127.0.0.1:8860/" class="link" target="_blank">演示地址</a>
      <a href="https://github.com/gina00/vue-project.git" class="link" target="_blank">项目地址</a>
      <section>
        <h3>项目背景及开发目的</h3>
        <div class="content">
          <p>CRM产品部专项组主要负责中国移动客户做Html5页面和中国移动客户关系管理系统（以下简称IBOP系统），其中我个人涉及到前端的工作是IBOP系统。进入公司后，了解到IBOP系统历史比较悠久，从界面设计以及前端开发流程来看都相对比较传统，并且产品的交互比较欠缺，用户体验度降低。一个优秀的前端产品，界面效果要给用户一个统一的感觉，并且交互得当。为满足效果，UI/UE设计人员根据原系统设计出稿原型。</p>
          <p>根据原型，需展开前端开发工作，选择相应的前端框架来实现开发，尽可能100%来还原原型设计稿。由于项目需求还未真正落实，因此目前本项目的开发属个人按照过往经验自主学习并研发。前端开发采用了的前端框架VUE——UI框架Element、前端样式CSS3、前端构建工具Webpack、服务端采用框架Express、开发工具VScode。</p>
          <p>兼容性问题：由于前端框架VUE仅支持IE9以上的浏览器，因此不对IE8以下的浏览器做兼容处理。</p>
        </div>
      </section>
      <section>
        <h3>项目功能模块</h3>
        <div class="content">
          <p>IBOP系统的开发主要是供中国移动客服人员使用。其中包含了登录模块、用户信息、产品菜单、综合信息、个人资料、产品信息、营销业务、套餐情况、我的账户、家宽信息等功能 。服务端主要作用在于模拟数据交互，针对客户端对数据的请求和处理作出响应。</p>
        </div>
      </section>
      <section>
        <h3>项目架构</h3>
        <div class="content">
          <p>IBOP系统的开发采用了的前端框架VUE——UI框架Element、前端样式CSS3、前端构建工具Webpack、服务端采用框架Express。当页面加载时，部分数据从服务端请求后响应到前端界面上。</p>
          <p>开发工具：使用VScode，Git作为项目管理工具。</p>
          <p>界面测试浏览器：IE9及以上、Chrome浏览器</p>
        </div>
      </section>
      <section>
        <h3>部署步骤</h3>
        <ol class="step">
          <li>npm install 安装项目依赖包</li>
          <li>node server/app 启动express 后台登录验证</li>
          <li>npm run dev 运行项目，端口8080</li>
          <li>用户名：admin 密码：abcd1234</li>
        </ol>
      </section>
      <section>
        <h3>项目效果展示</h3>
        <div class="content">
          <p>前端开发界面效果如图：</p>
          <div>
            <p>登录页</p>
            <img src="/static/images/projectList/login.jpg">
          </div>
          <div>
            <p>登录之后呈现的首页</p>
            <img src="/static/images/projectList/151615.jpg">
          </div>
          <div>
            <p>综合信息页面</p>
            <img src="/static/images/projectList/22151634.jpg">
          </div>
          <div>
            <p>综合信息-营销业务</p>
            <img src="/static/images/projectList/1151651.jpg">
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-interpolation-mode: bicubic;
  }
  .link {
    color: #0af;
    padding-right: 10px;
  }
  .step{
      
      li{
          padding: 10px 0;
          list-style: lower-alpha;
      }
  }
  .content {
  p {
    line-height: 1.6rem;
    padding: 15px 0;
    font-size: 14px;
    margin: 0px 0;
    text-indent: 2em;
  }
  
}
}
</style>

