<template>

	<router-view/>
	<div id="background">
		<!-- Search results header -->
		<section class="hero">
				<p class="title is-6 left-align mb-0">
					<b>Search Results:</b> <span id="numProducts"></span> Products Found
				</p>		
		</section>

		<!-- Display Products in Grid -->
		<div class="columns is-gapless"> <!-- "columns mt-5 is-8 is-variable" -->
			<!-- Filter menu -->
			<div class="column is-one-fifth menuColumn"> <!-- column is-4-tablet is-3-desktop -->
				<!-- <ProductsPageSidebar/> -->
				<!-- https://bulma.io/documentation/components/menu/ -->
				<section class="menu mt-0">
					<p class="menu-label">
						Sort
					</p>
					<ul class="menu-list">
						<li><a>By Name</a></li>
						<li><a>By Price</a></li>
					</ul>

					<p class="menu-label">
						Filter
					</p>
					<ul class="menu-list">
						<!-- <li><a>Team Settings</a></li> -->
						<li>
							<a class="is-active">Rating</a>
							<ul>
								<li><a>1 Star and Above</a></li>
								<li><a>2 Star and Above</a></li>
								<li><a>3 Star and Above</a></li>
								<li><a>4 Star and Above</a></li>
							</ul>
						</li>
						<li>
							<a class="is-active">Category</a>
							<ul id="categoryResults">
							</ul>
						</li>
					</ul>
				</section>
			</div>
			<!-- Show product grid in remaining space -->
			<div class="column is-four-fifths productColumn">
				
						<!-- Product Grid -->
						<section class="productSection">

							<div class="container" id="productGrid">
								
								<!-- Product Cards Dynamically Inserted Here -->

							<!-- End of Product Cards -->
							</div>
					</section>



			</div>
		</div>
	
	</div>

</template>

<script setup>
// import ProductsPageSidebar from './ProductsPageSidebar.vue'
import store from '../store'
import $ from 'jquery'

function productClick(event){
	console.log("event.target.id",event.target.id);
	store.commit('updateProduct', event.target.id);
	window.open("/InformationPage", "_self");
}

// const products = store.state.message;
//console.log(products);
$(document).ready(function () {
	console.log(store.state.message);
	let loopCount = 0;
	let uniqueCategories = [];
	$("#productGrid").replaceWith("<div class='container' id='productGrid'></div>");
	for (var product of store.state.message) {
		for(var key in product) {
			//add each product to the product grid with the link id set to the product id
			$("#productGrid").append('<div class="card"><header class="card-header"><p class="card-header-title">'+product[key]["title"]+'</p></header><div class="card-image"><figure class="image is-4by3"><img src="'+product[key]["url"]+'"></figure></div><footer class="card-footer"><a id="'+key+'" class="card-footer-item">Check it out!</a></footer></div>');
			
			document.getElementById(key).addEventListener("click", productClick); //how to add function parameter?

			// Set CSS of dynamically generated elements
			$(".card").css({"height": "max-content"});
			$(".card *").css({"background": "rgb(232, 104, 25)"});
		
			$("#productGrid").find("a:link, a:visited, a:active").css( "color", "#FFDAB3" );
			$("#productGrid").find("a:hover").css( "color", "white" );

			$(".container").css({"display": "grid", "grid-template-columns": "repeat(auto-fill, minmax(250px, 1fr))", "grid-gap": "0.5em"});

			//increment product counter
			loopCount += 1;

			//check if the category of this product is new (not already in categories array)
			if(!(uniqueCategories.includes(product[key]["categories"]))){
				uniqueCategories.push(product[key]["categories"]);
			}
			console.log('product[key]["categories"]',product[key]["categories"]);
		}
	}
	//show number of products
	$("#numProducts").replaceWith('<span id="numProducts">'+loopCount+'</span>');

	//update category filter with available categories based on search results
	console.log("uniqueCategories",uniqueCategories);
	$("#categoryResults").replaceWith('<ul id="categoryResults"></ul>');
	for(var cat in uniqueCategories) {
		$("#categoryResults").append('<li><a>'+uniqueCategories[cat]+'</a></li>');
	}
	

});


</script>

<style scoped>

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

.is-20px {
  width: 20px;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
}

/* Added CSS Styling */
#background {
    background-color: antiquewhite;
}

#background * {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}

a:link, a:visited, a:active {
    color: #FFDAB3;
}

a:hover {
    color: white;
}

.card * {
    background-color: rgb(232, 104, 25);
}

.menuColumn {
	background-color: #fafafa;
	margin-top: 2px;
}

.productSection {
	margin-top: 10px;
	padding-left: 10px;
	padding-right: 10px;
}

.menu {
	padding-top: 10px;
	padding-left: 10px;
	padding-right: 10px;
}
</style>
