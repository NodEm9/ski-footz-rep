<template>
<div class="product-item">
  <img id="product-image" v-bind:src="product.imageUrl">
  <h1>Name: {{ product.name }}</h1>
  <h3>Price: {{ product.price }}</h3>
  <router-link v-bind:to="'/products/' + product.id">
      <button class="view-detail">View Details</button>
  </router-link>
</div>
</template>

<script>
export default {
   name: 'ProductsGridItem',
   props: ['product'],

}
</script>

<style scoped>
.product-item {
    grid-auto-columns: 1 / 4;
    grid-auto-rows: 1 / 6;
    width: 300px;
    min-height: 350px;
    border-radius: 8px;
    box-shadow: 0px 3px 4px gray;
    justify-content: space-around;
    margin: 15px;
    padding: 16px;
  }

 h1 {
   font-size: 18px;
 }

#product-image {
  max-width: 100%;
  min-height: 160px;
  margin-bottom: 15px;
}

 .view-detail {
  min-width: 100%;
  left: 0;
  margin-top: 16px;
}
</style>