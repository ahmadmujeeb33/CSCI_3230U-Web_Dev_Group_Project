<template>

	<router-view/>
	<div class="background">
		<!-- Search results header -->
		<section class="hero">
				<p class="title is-6 left-align mb-0">
					<b>Search Results:</b> <span id="numProducts"></span> Product(s) Found
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
						Filter
					</p>
					<ul class="menu-list">
						<!-- <li><a>Team Settings</a></li> -->
						<li>
							<a class="is-active">Rating</a>
							<ul>
								<li><a @click="ratingFilterClick('reviews', 0)">All Ratings</a></li>
								<li><a @click="ratingFilterClick('reviews', 0.2)">1 Star and Above</a></li>
								<li><a @click="ratingFilterClick('reviews', 0.4)">2 Star and Above</a></li>
								<li><a @click="ratingFilterClick('reviews', 0.6)">3 Star and Above</a></li>
								<li><a @click="ratingFilterClick('reviews', 0.8)">4 Star and Above</a></li>
							</ul>
						</li>
						<li class="categoryMenu">
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
import store from '../store'
import $ from 'jquery'
function productClick(event){
	//console.log("event.target.id",event.target.id);
	store.commit('updateProduct', event.target.id);
	window.open("/InformationPage", "_self");
}

// 
function ratingFilterClick(field, threshold){
	//show all products (reset and previous filtering)
	$("#productGrid").find(".card").show();
	//count how many products are left
	let numProducts = 0;

	//apply new filter by rating
	for (var product of store.state.message) {
		for(var key in product) {
			// if category string
			if(typeof product[key][field] === "string"){
				let category = product[key][field]; //category is from product card
				if(category !== threshold){
					$("#productGrid").find("."+key).hide();
				} else {
					numProducts += 1;
				}
			}
			// else rating number
			else{
				let reviews = product[key][field];
				let avgRating = 0;
				let maxPossibleRating = 0
				for (var i = 0; i < reviews.length; i++) {
					// # reviews of that rating * review rating
					avgRating += reviews[i]*i;
					maxPossibleRating += reviews[i]*5;
				}
				avgRating = avgRating / maxPossibleRating;
				if(avgRating < threshold){
					$("#productGrid").find("."+key).hide();
				} else {
					numProducts += 1;
				}
			}
		}
	}
	$("#numProducts").replaceWith('<span id="numProducts">'+numProducts+'</span>');
}


$(document).ready(function () {
	let loopCount = 0;
	let uniqueCategories = [];
	$("#productGrid").replaceWith("<div class='container' id='productGrid'></div>");
	for (var product of store.state.message) {
		for(var key in product) {
			//add each product to the product grid with the link id set to the product id
			$("#productGrid").append('<div class="card '+key+'"><header class="card-header"><p class="card-header-title">'+product[key]["title"]+'</p></header><div class="card-image"><figure class="image is-4by3"><img src="'+product[key]["url"]+'"></figure></div><footer class="card-footer"><a id="'+key+'" class="card-footer-item">Check it out!</a></footer></div>');
			
			document.getElementById(key).addEventListener("click", productClick); //how to add function parameter?

			// Set CSS of dynamically generated elements
			$(".card").css({"height": "max-content"});
			$(".card *").css({"background": "rgb(232, 104, 25)"});
		
			$("#productGrid").find("a:link, a:visited, a:active, a").css( "color", "#FFDAB3" );
			$("#productGrid").find("a:hover").css( "color", "white" );

			$(".container").css({"display": "grid", "grid-template-columns": "repeat(auto-fill, minmax(250px, 1fr))", "grid-gap": "0.5em"});

			//increment product counter
			loopCount += 1;

			//check if the category of this product is new (not already in categories array)
			if(!(uniqueCategories.includes(product[key]["categories"]))){
				uniqueCategories.push(product[key]["categories"]);
			}
		}
	}
	$("#productGrid").css( "padding-bottom", "40px" );
	//show number of products
	$("#numProducts").replaceWith('<span id="numProducts">'+loopCount+'</span>');
	
	//Show resulting categories
	$("#categoryResults").replaceWith('<ul id="categoryResults"></ul>');
	for(var cat in uniqueCategories) {
		let currentCat = uniqueCategories[cat];
		$("#categoryResults").append('<li><a id='+currentCat+'>'+currentCat+'</a></li>');

		document.querySelector('#'+currentCat).addEventListener('click', function(){
			ratingFilterClick("categories", currentCat);
		}, false);
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

#productGrid{
	padding-bottom: 500px;
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
.background * {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}

a:link, a:visited, a:active, a {
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

.menu {
	padding-bottom: 145px;
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