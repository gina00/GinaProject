<template>
  <section>
    <div class="container">
      <router-link to="/monitor" class="link">演示地址</router-link>
      <section>
        <h3>项目背景</h3>
        <p>统计每个模块下遗留BUG数量，以及人员工作量的统计。提高工作效率，解决跨平台查看遗留问题的不便捷性</p>
      </section>
      <section>
        <h3>项目效果展示</h3>
        <div class="content">
            <img src="/static/images/projectList/monitor.png">
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import monitor from "../../monitor/index";
export default {
  components: {
    monitor
  }
};
</script>

<style lang="scss" scoped>

</style>
