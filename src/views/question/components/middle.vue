<template>
  <section class="contentText">
    <h3>未知宽高元素的垂直水平居中</h3>
    <div class="methodBox">
      <div class="methodHead">第一种方法：</div>
      <P>针对元素宽高未知的情况下(宽高均为100%)时，组合使用display：table-cell和vertical-align、text-align。使父元素内的所有行内元素水平垂直居中（内部div设置display：inline-block即可）</P>
      <div class="important">重点！html,body都需要设置100%</div>
      <p>与其他一些display属性类似，table-cell同样会被其他一些css属性破坏，例如float，position：absolute，所以在使用display：table-cell时，尽量不要使用float或者position:absolute（可以考虑为之增加一个父div定义float等属性。）；设置了table-cell的元素对宽度和高度敏感（在父元素上设置table-row等属性，也会使其不感知height。），对margin值无反应，响应padding属性</p>
      <p>对table-cell元素设置百分比（如100%）的宽高值是无效的，但是可以将元素设置display:table，再将父元素设置百分比跨高，子元素table-cell会自动撑满父元素。这就可以做相对于整个页面的水平垂直居中。</p>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/table.jpg">
      </div>
    </div>
    <div class="methodBox">
      <div class="methodHead">第二种方法：display：flex-box</div>
      <P>Flexbox(伸缩盒)是CSS3中新增的特性，利用这个属性可以解决页面中的居中问题。只需要3行代码就可以实现，不需要设置元素的尺寸，能够自适应页面。</P>
      <div>这个方法只能在现代浏览器上有效，IE10+、chrome、Safari、Firefox。</div>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/flex.jpg">
      </div>
    </div>
    <div class="methodBox">
      <div class="methodHead">第三种方法：display:inline-block +伪元素生成content内容</div>
      <P>实现原理：原理：利用inline-block的vertical-align: middle去对齐before伪元素，before伪元素的高度与父对象一样，就实现了高度方向的对齐。居中块的尺寸可以做包裹性、自适应内容，兼容性也相当好。缺点是水平居中需要考虑inline-block间隔中的留白（代码换行符遗留问题。）。（宽度是已知的，高度可以是未知的）</P>
      <div class="important">重点：“伪元素”，顾名思义。它创建了一个虚假的元素，并插入到目标元素内容之前或之后。伪元素如果没有设置“content”属性，伪元素是无用的</div>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/inlineblock.jpg">
      </div>
    </div>
    <div class="methodBox">
      <div class="methodHead">第四种方法：绝对定位+transform反向偏移。position:absolute; transform:translate(-50%,-50%);</div>
      <P>原理很简单：由于top、left偏移了父对象的50%宽度高度，所以需要利用transform反向偏移居中块的50%宽高</P>
      <div class="important">重点：transform的计算基准是元素本身，所以这里可以用50%来做反向偏移</div>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/position.jpg">
      </div>
      <p>实现效果</p>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/show.jpg">
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
.contentText {
  .methodHead {
    font-weight: bold;
  }
  p {
    line-height: 1.5em;
    padding: 15px 0;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-interpolation-mode: bicubic;
  }
  .methodBox{
      margin: 10px 0;
  }
  .codeBox{
      margin: 10px 0;
  }
  .important{
      color: red;
  }
}
</style>
