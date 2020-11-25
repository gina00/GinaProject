<template>
  <div>
     <!-- <acceptHall></acceptHall>  -->
     <productDetail></productDetail> 
     <!-- <productDetailOpr></productDetailOpr>  -->
  </div>
</template>

<script>
import acceptHall from './accept/acceptHall'
import productDetail from './components/product_detail'
import productDetailOpr from './components/product_detail_opr'
export default {
    components:{
        acceptHall,
        productDetail,
        productDetailOpr
    }

}
</script>

<style>
i[class^='icon-'],a[class^='icon-']{
    width: 28px;
    height: 28px;
    display: inline-block;
    vertical-align: middle;
}

</style>