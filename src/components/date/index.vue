<template>
    <section>
        <div>{{new Date()|moment("YYYY-MM-DD")}}</div>
        <div>{{new Date()|moment("HH:mm:ss")}}</div>
    </section>
</template>

<script>
import moment from "vue-moment";
export default {
    data() {
        return {
            today:new Date()
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
