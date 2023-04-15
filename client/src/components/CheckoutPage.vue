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
				
				<section class="card-form address">
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
										<input class="input street" type="text" placeholder="123 Cob Lane">
									</div>
								</div>
							

								<!-- City -->
								<div class="field">
									<label class="label">City</label>
									<div class="control">
										<input class="input city" type="text" placeholder="Orillia">
									</div>
								</div>

								<!-- Postal Code -->
								<div class="field">
									<label class="label">Postal Code</label>
									<div class="control">
										<input class="input postalCode" type="text" placeholder="A1A 1A1">
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
											<select class="province">
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
										<input class="input country" type="text" placeholder="Canada">
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
					<a class="card-footer-item" @click="clickNext">Next</a>
				</footer>
				</section>
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

					<section class="card-form payment" hidden="true">
						<div class="card-content">
							<div class="content">
								<h2 class="title is-5">Cardholder Information</h2>
								<div class="columns">
									<div class="column is-half">
										<div class="field">
											<label class="label">First Name</label>
											<div class="control">
												<input class="input firstName" type="text" placeholder="First">
											</div>
										</div>
									

										<!-- Card Number -->
										<div class="field">
											<label class="label">Card Number</label>
											<div class="control">
												<input class="input cardNumber" type="text" placeholder="XXXX-XXXX-XXXX-XXXX">
											</div>
										</div>
									</div>
									<!-- End column -->

									<div class="column is-half">
										<div class="field">
											<label class="label">Last Name</label>
											<div class="control">
												<input class="input lastName" type="text" placeholder="Last">
											</div>
										</div>


									<!-- CVV and Expiry Date -->
									<div class="columns">
										<div class="column is-half">
											<div class="field">
												<label class="label">CVV</label>
												<div class="control">
													<input class="input CVV" type="text" placeholder="XXX">
												</div>
											</div>
										</div>

										<div class="column">
											<div class="field">
												<label class="label">Expiry Date</label>
												<div class="control">
													<input class="input expiry" type="text" placeholder="YYYY-MM-DD">
												</div>
											</div>
										</div>
									

									</div>
									<!-- End mini column  -->
									
									</div>
									<!-- End column -->
								</div>
								<!-- End all columns -->



							</div>
						</div>
						<footer class="card-footer">
							<a class="card-footer-item" ref="prev"  @click="clickPrev">Previous</a>
							<a class="card-footer-item" @click="showReview">Next</a>
						</footer>
					</section>
				</div>


				<!-- 2. Review -->
			<div class="card mb-5">
					<header class="card-header">
						<p class="card-header-title">
							3. Review
						</p>
						<button class="card-header-icon" aria-label="more options">
							<span class="icon">
								<i class="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</button>
					</header>

					<section class="card-form review" hidden>
						<div class="card-content">
							<div class="content">
								<!-- Under construction.  Will need to 
								<br>
								<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->

								
								<table class="table">
									<thead>
										<tr>
											<th>Under Construction</th>
										</tr>
									</thead>
									<tbody id="results">
										<tr>
											<td class="streetReview"></td>
											<td class="cityReview"></td>
											<td class="countryReview"></td>
											<td class="postalCodeReview"></td>
										</tr>
										<tr>
											<td class="cardNumberReview"></td>
											<td class="CVVReview"></td>
											<td class="expiryReview"></td>
										</tr>
									</tbody>
								</table>


							</div>
						</div>
						<footer class="card-footer">
							<a class="card-footer-item" ref="prev"  @click="clickPrev">Previous</a>
						</footer>
					</section>
				</div>
					
		
		</div>
		<!-- End checkout form -->
</template>

<script setup>
import $ from 'jquery'

$(document).ready(function () {
	// hide all but 1st level
	$(".card-form").hide();
	$(".address").show();
});

function clickNext(event) {
	let speed = 500;

	//hide current card
	let section = $(event.target).parents("section");
	section.hide(speed);
	let parentDiv = section.parent("div");
	let nextParent = parentDiv.next();
	let nextSection = nextParent.find("section");
	//show next card
	nextSection.show(speed);
}

function showReview(event) {
	// show abbrevated product info, shipping address & payment
	// use Bulma table, extract info currently in the text fields for address & payment
	
	// array of values to populate
	let toPopulate = ["street"];

	$( ".input" ).each(function( i ) {
    if($(this).val() !== ""){
			toPopulate.push(i);
			console.log($(this).val());

			//assign tr variable to code needed to access next tr
			//$("."+toPopulate[i]+"Review").text($("."+toPopulate[i]).val());
			//console.log($("."+toPopulate[i]).val());


			//Add field title (ex: address)
			let tr = $('<tr>'); //tr row has all category info
			let td = $('<td>'); //1st td has header, 2nd td has value
				
		
			// //https://www.w3schools.com/jquery/jquery_dom_set.asp
			// td.text(toPopulate[i]);
			// tr.append(td);

			//Add value
			td = $('<td>');
			//https://www.w3schools.com/jquery/html_replaceall.asp
			//https://www.w3schools.com/jsref/jsref_string.asp
			td.text($(this).val());
			
			tr.append(td);

			$("#results").append(tr);
		}
	});

	//go to next panel (review panel) once it is ready
	clickNext(event);
}


function clickPrev(event) {
	let speed = 500;

	//hide current card
	let section = $(event.target).parents("section");
	section.hide(speed);
	let parentDiv = section.parent("div");
	let nextParent = parentDiv.prev();
	let nextSection = nextParent.find("section");
	//show next card
	nextSection.show(speed);
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

.hot {
	color: red;
}

.title {
	text-align: left;
}
</style>
