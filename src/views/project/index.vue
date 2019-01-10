<template>
    <section>
        <div class="titleBox">
            <span class="title">项目管理</span>
        </div>
        <card-group></card-group>
    </section>
</template>

<script>
import cardGroup from './components/cardgroup'
export default {
    components:{
        cardGroup
    }
}
</script>
<style lang="scss" scoped>
.titleBox{
    margin-bottom: 20px;
    .title{
        font-size: 20px;
    }
}
</style>

