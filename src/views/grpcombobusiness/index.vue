<template>
  <div>
    <!-- <acceptHall></acceptHall>  -->
    <!-- <productDetail></productDetail> -->
    <!-- <productDetailOpr></productDetailOpr>  -->
    <!-- <csShoppingcartPage></csShoppingcartPage>  -->
    <csOrderStep></csOrderStep> 
  </div>
</template>

<script>
import acceptHall from "./accept/acceptHall";
import productDetail from "./components/product_detail";
import productDetailOpr from "./components/product_detail_opr";
import csShoppingcartPage from "./components/cs_shoppingcart_page";
import csOrderStep from "./components/csOrderStep";
export default {
  components: {
    acceptHall,
    productDetail,
    productDetailOpr,
    csShoppingcartPage,
    csOrderStep
  },
};
</script>

<style>

i[class^="icon-"],
a[class^="icon-"] {
  width: 28px;
  height: 28px;
  display: inline-block;
  vertical-align: middle;
}
</style>