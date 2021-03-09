<template>
<div id="app">
  <ProductsListItem
   v-for="product in products"
   :key="product.id"
   :product="product" 
   v-on:remove-from-cart="$emit('remove-from-cart', $event)"/>
</div>
</template>

<script>
import ProductsListItem from './ProductsListItem.vue'

export default {
  name: 'ProductsList',
  props: ['products'],
  components: { ProductsListItem }, 
}
</script>

<style scoped>

</style>
   