<template>

	<router-view/>
	<!-- Search results header -->
	<section class="hero">
			<p class="subtitle left-align">
				<b>Search Results:</b> 123 Products Found
			</p>
		
	</section>

	<!-- Display Products in Grid -->
	<div class="columns"> <!-- "columns mt-5 is-8 is-variable" -->
		<!-- Filter menu -->
		<div class="column is-one-fifth"> <!-- column is-4-tablet is-3-desktop -->
			<ProductsPageSidebar/>
		</div>
		<!-- Show product grid in remaining space -->
		<div class="column">
			
					



					<!-- Grid of additional links to popular searches -->
					<section>
            <div class="container">

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            This is a generic card in a grid
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <!-- <img src="../assets/football.png"> -->
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Check it out!</a>
                    </footer>
                </div>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            This is a generic card in a grid
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <!-- <img src="../assets/football.png"> -->
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Check it out!</a>
                    </footer>
                </div>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            This is a generic card in a grid
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="../assets/football.png">
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Check it out!</a>
                    </footer>
                </div>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            This is a generic card in a grid
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="../assets/football.png">
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Check it out!</a>
                    </footer>
                </div>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            This is a generic card in a grid
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <!-- <img src="../assets/football.png"> -->
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Check it out!</a>
                    </footer>
                </div>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            This is a generic card in a grid
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <!-- <img src="../assets/football.png"> -->
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Check it out!</a>
                    </footer>
                </div>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            This is a generic card in a grid
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <!-- <img src="../assets/football.png"> -->
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Check it out!</a>
                    </footer>
                </div>

            </div>
        </section>



		</div>
	</div>

</template>

<script>
import ProductsPageSidebar from './ProductsPageSidebar.vue'




export default {
name: 'ProductsPage',
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

.is-20px {
  width: 20px;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
}
</style>
