<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
<<<<<<< Updated upstream
import HelloWorld from './components/HelloWorld.vue'
=======
// import AddProductVue from './components/AddProduct.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import FavoritesList from './components/FavoritesList.vue'
// import MainComponent from './components/MainComponent.vue'
import Homepage from './components/Homepage.vue';

>>>>>>> Stashed changes

export default {
  name: 'App',
  components: {
<<<<<<< Updated upstream
    HelloWorld
  }
}
=======
    // MainComponent
    // FavoritesList,
    // HelloWorld
    // AddProductVue
    Homepage,
  },
};
>>>>>>> Stashed changes
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
