<template>
  <section>
    <div class="container">
      <a href="http://127.0.0.1:8850/#/dashboard" class="link" target="_blank">演示地址</a>
      <a href="https://github.com/gina00/OrderCenter.git" class="link" target="_blank">项目地址</a>
      <section>
        <h3>项目背景</h3>
        <p>从中国移动客户关系系统中提取订单中心模块进行开发。采用主流前端框架开发，与老版本的区别在于从视觉角度来看界面UI更合理，交互效果更具体，能更好的自适应屏幕。从开发角度来看，提高了开发效率，减少比对低版本的兼容性。与此同时，对浏览器的版本有所要求(IE9以上)</p>
      </section>
      <section>
        <h3>现有需求</h3>
        <p>采用有别于旧版的全新视觉效果，使用新的前端技术（原有系统使用DIV+CSS、JQuery、cvs管理项目代码）。 此订单中心旨在引进新技术和新视觉来引起客户变革，从而慢慢推进整套系统的整改需求。</p>
      </section>
      <section>
        <h3>前端技术</h3>
        <ol class="step">
            <li>vue</li>
            <li>element</li>
            <li>Webpack</li>
            <li>Express</li>
        </ol>
      </section>
      <section>
        <h3>部署步骤</h3>
        <ol class="step">
          <li>npm install 安装项目依赖包</li>
          <li>npm run dev 运行项目，端口8850</li>
        </ol>
      </section>
      <section>
        <h3>项目效果展示</h3>
        <div class="content">
          <p>前端开发界面效果如图：</p>
          <div>
            <p>首页</p>
            <img src="/static/images/projectList/170535.jpg">
          </div>
          <div>
            <p>一线营业员订单管理</p>
            <img src="/static/images/projectList/170608.jpg">
          </div>
          <div>
            <p>后台营业员订单管理</p>
            <img src="/static/images/projectList/2170631.jpg">
          </div>
          <div>
            <p>支付订单管理</p>
            <img src="/static/images/projectList/170649.jpg">
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

</style>

