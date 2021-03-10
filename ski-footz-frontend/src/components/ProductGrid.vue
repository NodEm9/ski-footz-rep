<template>
 <div id="page-wrap">
  <ProductsGridItem
    v-for="product in products"
    :key="product.id"
    :product="product"/>
 </div>
</template>

<script>
import ProductsGridItem from './ProductsGridItem.vue'

export default {
 name: 'ProductsGrid',
 props: ['products'],
 components: { ProductsGridItem },       
}
</script>

<style >
 #page-wrap {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 26px;
    min-height: 100vh;
    width: auto;
    position: relative;
    left: 2px;
    margin: auto;
  }

  @media screen and (max-width: 40em)  {
    #page-wrap {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 26px;
    min-height: 100vh;
    width: auto;
    position: relative;
    left: 2px;
    margin: auto;
    font-size: 30px;
  }
}
 @media screen and (max-width: 80em) {
  #page-wrap {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 26px;
    min-height: 100vh;
    width: auto;
    position: relative;
    left: 2px;
    margin: auto;
  }
}
</style>