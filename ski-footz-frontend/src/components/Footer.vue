<template>
 <div id="footer-section">
   <router-link to="/products" id="products-link">
     <h1>SKI-FOOTZ</h1>
   </router-link>     
   <h2>Explore ski-footz online store..</h2>       
</div> 
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
#footer-section {
  display: block;
  position: relative;
  background: grey;
  margin-bottom: 0;
  font-family: Poppins sans-serif;
}

h2 {
          display: block;
          text-align: right;
          margin: 25px;
}

#products-link {
    text-align: center;
    display: block;
    color: #ff0000;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
  }

</style>