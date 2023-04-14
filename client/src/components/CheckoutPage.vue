<template>

    <!-- <router-view/> -->
		<div class="card">
			<header class="card-header">
				<p class="card-header-title">
					Component
				</p>
				<button class="card-header-icon" aria-label="more options">
					<span class="icon">
						<i class="fas fa-angle-down" aria-hidden="true"></i>
					</span>
				</button>
			</header>
			<div class="card-content">
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
					<a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
					<br>
					<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item">Save</a>
				<a href="#" class="card-footer-item">Edit</a>
				<a href="#" class="card-footer-item">Delete</a>
			</footer>
		</div>
</template>

<script>


export default {
  name: 'App',
  components: {
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
