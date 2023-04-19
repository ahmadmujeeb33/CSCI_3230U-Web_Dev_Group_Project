<template>
	<div class="background">
		<div class="category_tiles">
			<div class="column" @click="goToCategory('Animal')">
					<a>
							<span class="title is-5">Animals</span>
							<img src="../assets/categories/animal.jpg">
					</a>
			</div>

			<div class="column" @click="goToCategory('Cinema')">
					<a>
						<span class="title is-5">Cinema</span>
							<img src="../assets/categories/cinema.jpg">
					</a>
			</div>

			<div class="column" @click="goToCategory('Food')">
					<a>
						<span class="title is-5">Food</span>
							<img src="../assets/categories/food.jpg">
					</a>
			</div>

			<div class="column" @click="goToCategory('Gaming')">
					<a class="title is-5">
						<span class="title is-5">Gaming</span>
							<img src="../assets/categories/gaming.jpg">
					</a>
			</div>

			<div class="column" @click="goToCategory('Robot')">
					<a>
						<span class="title is-5">Robot</span>
							<img src="../assets/categories/robot.jpg">
					</a>
			</div>

			<!-- <div class="column " @click="goToCategory('Phones')">
					<a>
							Phones
							<img src="../assets/categories/phones.jpg">
					</a>
			</div>

			<div class="column " @click="goToCategory('Watches')">
					<a>
							Watches
							<img src="../assets/categories/watches.jpg">
					</a>
			</div>

			<div class="column " @click="goToCategory('Sports')">
					<a>
							Sports
							<img src="../assets/categories/sports.jpg">
					</a>
			</div>

			<div class="column " @click="goToCategory('Clothes')">
					<a>
							Clothes
							<img src="../assets/categories/clothes.jpg">
					</a>
			</div>

			<div class="column" @click="goToCategory('Laptops')">
					<a>
							Laptops
							<img src="../assets/categories/laptops.jpg">
					</a>
			</div>

			<div class="column" @click="goToCategory('Bikes')">
					<a>
							Bikes
							<img src="../assets/categories/bikes.jpg">
					</a>
			</div>

			<div class="column" @click="goToCategory('Furniture')">
					<a>
							Furniture
							<img src="../assets/categories/furniture.jpg">
					</a>
			</div> -->

			<div class="column" @click="goToCategory('Other')">
					<a>
						<span class="title is-5">Other</span>
							<img src="../assets/categories/other.jpg">
					</a>
			</div>
		</div>
	<!-- End class=background div -->
	</div>
</template>


<script>
import axios from 'axios'
import store from '../store'

export default {
    name: "CategoriesPage",

    methods: {
        async goToCategory(category) {
            try {
                let response = await axios.post("/api/category", { "category": category });
                console.log(response);
                store.commit("updateMessage", response.data);
                window.open("/Products", "_self");
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}

// $(document).ready(function () {
// 	$('.background').each(function(){ //loop through each element with the .dynamic-height class
// 		$(this).css({
// 			'padding-bottom' : 100 + 'px' //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
// 		});
// 		$(this).append("<br>");
// 	});
// });
</script>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.body {
    background-color: antiquewhite;
}

.background{
	padding-bottom: 110px;
}

.category_tiles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding-bottom: 30px;
}

.column {
    background-color: rgb(232, 104, 25);
    margin: 20px;
    height: 350px
}

a:link, a:visited, a:active, a {
	color: #FFDAB3;
}

a:hover {
	color: white;
}

</style>
