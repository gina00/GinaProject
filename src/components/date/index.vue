<template>
    <section>
        <div>日期</div>
        <div>时钟</div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getDate(){
            const today=new Date();
            const h=today.getHours();
            const m=today.getMinutes();
            const s=today.getSeconds();
            console.log()
        }
    },
}
</script>

<style>

</style>
