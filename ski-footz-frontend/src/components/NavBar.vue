<template>
   <div id="nav-bar">
    <router-link to="/products" id="products-link">
     <h1>SKI FOOTZ</h1>
   </router-link> 
   <router-link to="/cart" id="cart-link">
    <button>
      Shopping Cart
      <font-awesome-icon icon="cart-arrow-down" />
      </button>
   </router-link>
</div>    
</template>

<script>    
export default {
       name: 'NavBar',   
}
</script>

<style scoped>
  #nav-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 2px solid #d5d;
    height: 75px;
    width: 100%;
    background-color: rgb(253, 253, 233);
}

  #products-link {
    display: block;
    font-size: 22px;
    left: 32px;
    margin: 5px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
      color: #ff0000;
  }

  #cart-link {
    position: absolute;
    right: 16px;
    margin-top: 15px;
    place-items: right;
  }
  #cart-link, button {
    background: none;
    color: black;
  } 

  @media screen and (max-width: 40em) {
    #nav-bar {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #d5d;
    height: 150px;
    width: 100%;
    padding: 80px;
    left: 0px;
    background-color: rgb(253, 253, 233);
}

 #products-link {
    /* flex: 1; */
    color: black;
    font-size: 22px;
    text-align: left;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0px;
  }

  #cart-link {
    left: 95px;
    bottom: 36px;
    position: relative;
  }
   #cart-link, button {
    background: green;
    color: #fff;
    font-size: 40px;
  } 

}
</style>