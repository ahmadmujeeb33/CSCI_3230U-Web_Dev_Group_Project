<template>
  <!-- <NavigationBar></NavigationBar>
  <CategoriesPage></CategoriesPage>
  <BottomBar></BottomBar> -->

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <FavoritesList /> -->
  <!-- <AddProductVue /> -->
  <div id="mainApp">
    <NavigationBar></NavigationBar>
    <router-view />
    
    <BottomBar></BottomBar>
    <!-- <HelloWorld /> -->
    <!-- <FavoritesList /> -->
    <!-- <MainComponent/> -->


  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import BottomBar from './components/BottomBar.vue';


// import CategoriesPage from './components/CategoriesPage.vue';
// import BottomBar from './components/BottomBar.vue';
// import AddProductVue from './components/AddProduct.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import FavoritesList from './components/FavoritesList.vue'
// import MainComponent from './components/MainComponent.vue'



export default {
  name: 'App',
  components: {
    NavigationBar,
    BottomBar,
    

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
  /* margin-top: 60px; */
}

#mainApp {
  background-color: antiquewhite;
}
</style>
