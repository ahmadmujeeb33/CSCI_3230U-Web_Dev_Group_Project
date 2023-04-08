<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <FavoritesList/> -->
  <!-- <AddProductVue/> -->
  <div>
    <!-- <HelloWorld/>
    <FavoritesList/> -->
    <!-- <MainComponent/> -->
    <router-view/>

  </div>
</template>

<script>
// import AddProductVue from './components/AddProduct.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import FavoritesList from './components/FavoritesList.vue'
// import MainComponent from './components/MainComponent.vue'



export default {
  name: 'App',
  components: {
    // MainComponent
    // FavoritesList,
    // HelloWorld
    // AddProductVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
