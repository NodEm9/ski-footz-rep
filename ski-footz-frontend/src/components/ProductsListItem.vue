<template>
 <div class="product-container">
    <img class="product-image" v-bind:src="product.imageUrl" >
    <div class="detail-wrap">
       <h2>Article: {{ product.name }}</h2>
       <h3>Price: {{ product.price }}</h3>
       <p>Average Rating: {{ product.averageRating }}</p>
   </div>
   <button 
      class="remove-button"
      v-on:click="$emit('remove-from-cart', product.id)"
      >Remove From Cart</button>       
  </div>
</template>

<script>
export default {
  name: 'ProductsListItem',
  props: ['product'],
}
</script>

<style scoped>
.product-container {
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    margin: auto;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
    margin: 1px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
    /* place-items: center; */
    width: clamp(46ch, 50%, 36ch );
  }

   .remove-button {
    flex: 1;
    margin: 20px;
    max-width: 190px;
    right: 0;
  }

</style>