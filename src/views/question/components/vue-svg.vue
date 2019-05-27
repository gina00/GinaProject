<template>
  <section class="contentText">
    <h3>VUE项目中如何使用SVG？</h3>
    <div class="methodBox">
      <div class="methodHead">前言</div>
      <P>
        关于svg的介绍请参考张鑫旭老师的博客：
        <a
          href="https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/?spm=a313x.7781069.1998910419.50"
          target="_blank"
        >未来必热：SVG Sprite介绍</a>
      </P>
    </div>
    <div class="methodBox">
      <div class="methodHead">svg的优缺点：</div>
      <h5>优点：</h5>
      <ol class="step">
        <li>支持多色图标，不受单色限制。</li>
        <li>可以通过font-size,color来控制样式</li>
        <li>可以利用css实现动画</li>
        <li>缩放不失真</li>
        <li>减少http请求</li>
      </ol>
      <h5>缺点：</h5>
      <ol class="step">
        <li>ie9+以上才支持</li>
        <li>浏览器渲染svg的性能一般，不如png</li>
      </ol>
      <h5>font库：可以去阿里巴巴矢量图</h5>
    </div>
    <div class="methodBox">
      <div class="methodHead">一、普通使用方法</div>
      <h4>第一步：引入项目下面生成的symbol代码：</h4>
      <div class="codeBox">
        <textarea>
              <script src="./iconfont.js"></script>
          </textarea>
      </div>
      <h4>第二步：加入通用css代码（引入一次就行）：</h4>
      <div class="codeBox">
        <textarea>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xxx"></use>
              </svg>
          </textarea>
      </div>
      <h4>第三步：挑选相应图标并获取类名，应用于页面：</h4>
      <div class="codeBox">
        <textarea>
              <style type="text/css">
                    .icon {
                    width: 1em; height: 1em;
                    vertical-align: -0.15em;
                    fill: currentColor;
                    overflow: hidden;
                    }
                </style>
          </textarea>
      </div>
    </div>
    <div class="methodBox">
      <div class="methodHead">二、在vue中封装一个组件</div>
      <h4>第一步：</h4>
      <P>在vue脚手架生成的文件夹下的src/components创建一个SvgIcon.vue文件</P>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/svg-icon.png">
      </div>
      <h4>第二步</h4>
      <p>在src目录下创建icons文件下，文件夹下面有svg文件夹和index.js文件</p>
      <p>-svg文件夹：存放每个svg文件</p>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/svg-reve.png">
      </div>
      <h4>第三步</h4>
      <p>使用和安装svg-sprite</p>
      <p>这里使用webpack loader中的一个svg-sprite-loader，可以将多个svg打包成svg-spite</p>
      <ol class="step">
        <li>
          <p>安装</p>
          <div class="codeBox">
            <textarea>
                  npm install svg-sprire-loader --save-dev
              </textarea>
          </div>
        </li>
        <li>
          <p>配置build/webpack.base.conf.js</p>
          <div class="codeBox">
            <img src="@/assets/images/codeImg/baseconfig.png">
          </div>
        </li>
      </ol>
      <h4>第四步：自动导入</h4>
      <p>自动导入需要用到webpack的require context</p>
      <div class="codeBox">
        <textarea>
                  // require.context的简单介绍
                    require.context("./file", false, /.file.js$/);
                    这行代码就会去 file 文件夹（不包含子目录）下面的找所有文件名以 .file.js 结尾的文件能被 require 的文件。就是说可以通过正则匹配引入相应的文件模块。

                    // require.context有三个参数：
                    directory：说明需要检索的目录
                    useSubdirectories：是否检索子目录
                    regExp: 匹配文件的正则表达式
                  
              </textarea>
      </div>
      <p>在src/icons/index.js使用require context</p>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/require.png">
      </div>
      <h4>第五步：在main.js中引入</h4>
      <div class="codeBox">
        <textarea>
                 import '@/icons'    
        </textarea>
      </div>
      <p>自此，已经完成组件的封装</p>
      <h4>三、使用icons/svg-文件</h4>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/usesvg.png">
        <img src="@/assets/images/codeImg/svg-icon-use.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
