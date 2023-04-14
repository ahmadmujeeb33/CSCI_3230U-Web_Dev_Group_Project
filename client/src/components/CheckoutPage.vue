<template>

    <!-- <router-view/> -->
		<div class="checkout-form">
			
			<!-------------------- 1. Address Card ---------------------------->
			<div class="card mb-5">
				<header class="card-header">
					<p class="card-header-title">
						1. Address
					</p>
					<button class="card-header-icon" aria-label="more options">
						<span class="icon">
							<i class="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</button>
				</header>
				<div class="card-content">
					<div class="content">
						<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
						<a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
						<br>
						<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
				
				
					
						<div class="columns">
							<!-- Street -->
							<div class="column is-half">
								<div class="field">
									<label class="label">Street</label>
									<div class="control">
										<input class="input" type="text" placeholder="123 Cob Lane">
									</div>
								</div>
							

								<!-- City -->
								<div class="field">
									<label class="label">City</label>
									<div class="control">
										<input class="input" type="text" placeholder="Orillia">
									</div>
								</div>

								<!-- Postal Code -->
								<div class="field">
									<label class="label">Postal Code</label>
									<div class="control">
										<input class="input" type="text" placeholder="A1A 1A1">
									</div>
								</div>
							</div>

							<!-- Column 2 -->
							<div class="column is-half">
								<!-- Phone Number -->
								<div class="field">
									<label class="label">Phone Number</label>
									<div class="control">
										<input class="input" type="text" placeholder="012 345 6789">
									</div>
								</div>

								<!-- Province -->
								<div class="field">
									<label class="label">Province</label>
									<div class="control">
										<!-- <input class="input" type="text" placeholder="Text input"> -->
										<div class="select is-fullwidth">
											<select>
												<option>AB</option>
												<option>BC</option>
												<option>MB</option>
												<option>NB</option>
												<option>NL</option>
												<option>NS</option>
												<option>NT</option>
												<option>NU</option>
												<option>ON</option>
												<option>PE</option>
												<option>QC</option>
												<option>SK</option>
												<option>YT</option>
											</select>
										</div>
									</div>
								</div>
							

								<!-- Country -->
								<div class="field">
									<label class="label">Country</label>
									<div class="control">
										<input class="input" type="text" placeholder="Canada">
									</div>
								</div>
							<!-- End of current column -->
							</div>
							<!-- End of all columns -->
						</div>
						
					</div>
					<!-- End of content -->
				</div>
				
				<footer class="card-footer">
					<a class="card-footer-item">Next</a>
				</footer>
			</div>
			<!-- End of card -->


			<!-- 2. Payment -->
			<div class="card mb-5">
					<header class="card-header">
						<p class="card-header-title">
							2. Payment
						</p>
						<button class="card-header-icon" aria-label="more options">
							<span class="icon">
								<i class="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</button>
					</header>
					<div class="card-content">
						<div class="content">
							Under construction.  Pressing previous will close this form and open the previous.  Pressing next will close this form and opens the next one.
							<br>
							<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
						</div>
					</div>
					<footer class="card-footer">
						<a class="card-footer-item" ref="prev"  @click="clickCard">Previous</a>
						<a class="card-footer-item">Next</a>
					</footer>
				</div>
		
		
		</div>
		<!-- End checkout form -->
</template>

<script setup>

function clickCard() {
	console.log("placeholder");	
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

.checkout-form {
	margin: 50px;
}

.label {
	text-align: left;
}

.space-bottom {
	margin-bottom: 50px;
}
</style>
