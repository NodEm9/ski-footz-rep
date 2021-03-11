<template>
  <div id="app">
   <NavBar />
    <!-- <promotions-section /> -->
     <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
// import PromotionsSection from './components/PromotionsSection.vue'

export default {
  name: 'App',

//Register the component NavBar
  components: {
    NavBar,
    Footer,
    // PromotionsSection,
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  min-width: 800px;
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

 button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }

</style>
