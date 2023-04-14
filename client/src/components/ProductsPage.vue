<template>

    <router-view/>

		<div class="columns">
			<div class="column is-one-fifth mycol">
				<ProductsPageSidebar/>
			</div>
			<div class="column">
				<p>Placeholder Results header goes here</p>
			</div>
		</div>

</template>

<script>
import ProductsPageSidebar from './ProductsPageSidebar.vue'




export default {
  name: 'App',
  components: {
		ProductsPageSidebar
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
