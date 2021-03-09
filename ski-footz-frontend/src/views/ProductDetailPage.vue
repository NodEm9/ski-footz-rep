<template>
<div id="app" v-if="product">
  <div id="image-wrap">
     <img v-bind:src="product.imageUrl" >
  </div>
  <div id="product-details">
    <h1>ArticleName: {{ product.name }}</h1>
    <h3 id="price">${{ product.price }}</h3>
    <p>Average Ratings: {{ product.averageRating }}</p>
      <button 
       id="add-to-cart"
       v-on:click="addToCart"
       v-if="!itemIsInCart && !showSuccessMessage">Add to Cart</button>
      <button 
       id="add-to-cart"
       class="green-button"
       v-if="!itemIsInCart && showSuccessMessage">Successfully Added Item To Cart!</button>
      <button 
       id="add-to-cart"
       class="grey-button"
       v-if="itemIsInCart"
       v-on:click="addToCart">Item already in cart!</button>
   <h4>Description</h4>
   <p>{{ product.description }}</p>
  </div>
</div>
<NotFoundPage v-else/>     
</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage'; 

export default {
  name: 'ProductDetailPage',
  components: { NotFoundPage },
  data() {
     return {
          product: {},
          cartItems: [],
          showSuccessMessage: false,
     };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(item => item.id === this.product.id);
    }
  },
  methods: {
    async addToCart(){
     await axios.post('/api/users/12345/cart', {
        productId: this.$route.params.id,
      });
      this.showSuccessMessage = true; 
      setTimeout(() => {
        this.$router.push('/products');
      }, 1500);   
    },
  },
  async created() {
   const { data: product } = await axios.get(`/api/products/${this.$route.params.id}`);
   this.product = product;

   const { data: cartItems } = await axios.get('/api/users/12345/cart/');
   this.cartItems = cartItems;
  },
          
}
</script>

<style scoped>
#app {
    margin-top: 16px;
    padding: 26px;
    max-width: 600px;
    min-height: 100vh;
    justify-content: space-between;

  }

  #img-wrap {
    text-align: center;
    top: 5px;
  }

  img {
    min-width: 600px;
    margin: 16px;

  }
  
  h1 {
    font-size: 17px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
    margin: 10px 0;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }

.green-button {
  background-color: green;
}
.grey-button {
  background-color: grey;
}
</style>