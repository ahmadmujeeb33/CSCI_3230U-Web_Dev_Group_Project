<template>

	<router-view/>
	<!-- Search results header -->
	<section class="hero">
			<p class="subtitle left-align">
				<b>Search Results:</b> 123 Products Found
			</p>
		
	</section>

	<!-- Display Products in Grid -->
	<div class="columns">
		<!-- Filter menu -->
		<div class="column is-one-fifth mycol">
			<ProductsPageSidebar/>
		</div>
		<!-- Show product grid in remaining space -->
		<div class="column">
			<section class="hero">
				<div class="hero-body">
					<p class="title">
						Search Results
					</p>
					<p class="subtitle">
						Put Products Grid Here
					</p>
				</div>
			</section>
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
.left-align {
	text-align: left;
	background-color: #fafafa;
	padding: 10px;
	margin-bottom: 10px;
}
</style>
