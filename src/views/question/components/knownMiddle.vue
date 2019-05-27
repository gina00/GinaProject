<template>
  <section class="contentText">
    <h3>已知宽高元素的垂直水平居中</h3>
    <div class="methodBox">
      <div class="methodHead">第一种方法</div>
      <p>绝对定位+margin：auto（position:absolute; left:0; top:0; right:0; bottom:0; margin:auto）都要写，缺一不可</p>
      <p>为什么要把几个定位方向值都要写?</p>
      <p>
        当一个绝对定位元素，其对立定位方向属性同时有具体定位数值的时候，流体特性就发生了。
        具有流体特性绝对定位元素的margin:auto的填充规则和普通流体元素一模一样：
      </p>
      <ol>
        <li>如果一侧定值，一侧auto，auto为剩余空间大小</li>
        <li>如果两侧均是auto, 则平分剩余空间；</li>
      </ol>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/position2.jpg">
      </div>
      <P>此时.son这个元素的尺寸表现为“格式化宽度和格式化高度”，和 div 的“正常流宽度”一样，同属于外部尺寸，也就是尺寸自动填充父级元素的可用尺寸的，然后，我们给.son设置尺寸，宽高被限制，原本应该填充的空间就被多余了出来，这多余的空间就是margin:auto计算的空间，因此，如果这时候，我们再设置一个margin:auto，我们这个.son元素就水平和垂直方向同时居中了。因为，auto正好把上下左右剩余空间全部等分了，自然就居中啦！</P>
    </div>
    <div class="methodBox">
      <div class="methodHead">第二种方法</div>
      <p>绝对定位+margin反向偏移</p>
      <p>position：absolute; top:50%; left:50%; margin-left:-(width+padding)/2+'px'; margin-top:-(height+padding)/2+'px';</p>
      <div class="important">重点了：margin值的设置不能使用百分比哦</div>
      <p>
        因为margin是基于父元素的宽度来计算百分比的
        这个原理和上面的方案4很相似，由于top、left偏移了父对象的50%宽度高度，所以需要利用margin反向偏移居中块的50%宽高
      </p>
      <div class="codeBox">
        <img src="@/assets/images/codeImg/position3.jpg">
      </div>
     </div>
    <p>实现效果</p>
    <div class="codeBox">
      <img src="@/assets/images/codeImg/show2.jpg">
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
