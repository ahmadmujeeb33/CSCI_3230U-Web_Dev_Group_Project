<template>
  <!-- <router-view/> -->
	<div class="background pt-0">
		<div class="checkout-form" hidden>
			
			<!-------------------- 1. Address Card ---------------------------->
			<div class="card mb-5">
				<header class="card-header">
					<p class="card-header-title">
						1. Address
					</p>
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
										<input class="input addressText" type="text" placeholder="123 Cob Lane">
									</div>
								</div>
							

								<!-- City -->
								<div class="field">
									<label class="label">City</label>
									<div class="control">
										<input class="input addressText" type="text" placeholder="Orillia">
									</div>
								</div>

								<!-- Postal Code -->
								<div class="field">
									<label class="label">Postal Code</label>
									<div class="control">
										<input class="input addressText" type="text" placeholder="A1A 1A1">
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
											<select class="province addressText">
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
										<div class="select is-fullwidth">
											<select class="province addressText">
												<option>Canada</option>
												<option>United States</option>
											</select>
										</div>
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
						<!-- <button class="card-header-icon" aria-label="more options">
							<span class="icon">
								<i class="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</button> -->
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
												<input class="input paymentText" type="text" placeholder="XXXX-XXXX-XXXX-XXXX">
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
													<input class="input paymentText" type="text" placeholder="XXX">
												</div>
											</div>
										</div>

										<div class="column">
											<div class="field">
												<label class="label">Expiry Date</label>
												<div class="control">
													<input class="input paymentText" type="text" placeholder="YYYY-MM-DD">
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


				<!-- 3. Review -->
			<div class="card mb-5">
					<header class="card-header">
						<p class="card-header-title">
							3. Review
						</p>
						<!-- <button class="card-header-icon" aria-label="more options">
							<span class="icon">
								<i class="fas fa-angle-down" aria-hidden="true"></i>
							</span>
						</button> -->
					</header>

					<section class="card-form review" hidden>
						<div class="card-content">
							<div class="content">
					
								<!-- Placeholder - Will dynamically show all products in cart as cards -->
								<h5 class="title is-5">Items</h5>
								<div class="container" id="productGrid">
									<!-- Product Cards Dynamically Inserted Here -->
								</div>

								<div class="columns mt-5">
									<!-- My Information -->
									<div class="column is-half review-column">
										<h5 class="title is-5 mb-2">My Information</h5>
											<!-- <h6 class="title is-6 mb-2">Address</h6>
												<p id="addressReview"></p>
											<h6 class="title is-6 mb-2">Payment</h6>
												<p id="paymentReview"></p> -->
											
											<table class="table mt-0" table-color="blue">
												<tbody>
													<tr>
														<th>Address: </th>
														<td id="addressReview"></td>
													</tr>
													<tr>
														<th>Payment: </th>
														<td id="paymentReview"></td>
													</tr>
												</tbody>
											</table>
									</div>

									<!-- Order Summary -->
									<div class="column is-half review-column">
										<h5 class="title is-5 mb-2">Order Summary</h5>
										<!-- <p id="itemsReview"><span class="title is-6 mb-2">Items:</span>$123.45</p> -->
										<!-- Order Summary Table -->
										<table class="table mt-0" table-color="blue">
											<tbody>
												<tr>
													<th>Items: </th>
													<td id="itemVal">$1234</td>
												</tr>
												<tr>
													<th>Shipping: </th>
													<td id="shipVal">$1234456</td>
												</tr>
												<tr>
													<th>Tax: </th>
													<td id="taxVal">$1</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<th>Order Total: </th>
													<th id="totalVal">$123456789</th>
												</tr>
											</tfoot>
										</table>

										<!-- Place Order Button -->
										<button class="button is-warning is-pulled-right" @click="clear_cart" >Place Order</button>
									<!-- End column -->
									</div>
								<!-- End all columns -->
								</div>

							</div>
						</div>
						<footer class="card-footer">
							<a class="card-footer-item" ref="prev"  @click="clickPrev">Previous</a>
						</footer>
					</section>
				</div>
					
		
		</div>
		<!-- End checkout form -->
	</div>
</template>

<script setup>
import $ from 'jquery'
import { getAuth,onAuthStateChanged, } from "firebase/auth";
import { getFirestore,doc,updateDoc,getDoc} from "firebase/firestore";
import { useRouter } from 'vue-router'
let products = [];
let speed = 500;

$(document).ready(function () {
	// hide all but 1st level
	$(".card-form").hide();
	$(".address").show();
	// console.log('In doc.ready:', products);
	// console.log('In doc.ready:', products.length);
	// //$("#testP").append(products);

	// products.forEach(function(item, index) {
	// 	console.log("index, item", index, item);
	// });
});

function clickNext(event) {
	//let speed = 500;

	//hide current card
	let section = $(event.target).parents("section");
	let pass = true;
	
	//check all fields are filled in
	let sectionInputs = $(section).find( "input" )

	let alertString = "Please fill in missing field(s): ";
	$(sectionInputs).each(function( ) {
    console.log("$(this).val()", $(this).val());
		if($(this).val() === ""){
			//if missing field, warn user and do not proceed
			alertString += $(this).parents(".field").find(".label").html() + ", ";//
			pass = false;
		}
	});


	if (pass === true){
		//hide current card
		section.hide(speed);
		let parentDiv = section.parent("div");
		let nextParent = parentDiv.next();
		let nextSection = nextParent.find("section");
		//show next card
		nextSection.show(speed);
	} else {
		alertString += "and try again."
		alert(alertString);
		return -1;
	}
}

function showReview(event) {
	// show abbrevated product info, shipping address & payment
	// use Bulma table, extract info currently in the text fields for address & payment

	$( ".addressText" ).each(function( ) {
    if($(this).val() !== ""){
			$("#addressReview").append($(this).val() + ", ");
		}
	});

	$( ".paymentText" ).each(function( ) {
    if($(this).val() !== ""){
			$("#paymentReview").append($(this).val() + ", ");
		}
	});

	$("#productGrid").replaceWith("<div class='container' id='productGrid'></div>");
	///console.log('In showReview:', products[0].title);
	let itemVal = 0;
	for (var i of products) {
		//add each product to the product grid with the link id set to the product id
		$("#productGrid").append('<div class="card"><header class="card-header"><p class="card-header-title">'+i.title+'</p></header><div class="card-image"><figure class="image is-4by3"><img src="'+i.url+'"></figure></div><footer class="card-footer"><p class="card-footer-item">$'+i.price+'</p></footer></div>');
		

		// Set CSS of dynamically generated elements
		$("#productGrid").find(".card").css({"height": "max-content"});
		$("#productGrid").find(".card *").css({"background": "rgb(232, 104, 25)"});
	
		$("#productGrid").find("a:link, a:visited, a:active, a").css( "color", "#FFDAB3" );
		$("#productGrid").find("a:hover").css( "color", "white" );

		$("#productGrid").css({"display": "grid", "grid-template-columns": "repeat(auto-fill, minmax(250px, 1fr))", "grid-gap": "0.5em"});

		itemVal += i.price; //increment to get total cost of all items
	}

	let taxVal = itemVal*0.13;
	let shipVal = 10;
	let totalVal = itemVal*1.0+taxVal+shipVal;
	console.log(typeof taxVal);
	$("#itemVal").replaceWith('<td class="itemVal">$'+(itemVal*1.0).toFixed(2)+'</td>');
	$("#shipVal").replaceWith('<td class="shipVal">$'+(shipVal).toFixed(2)+'</td>');
	$("#taxVal").replaceWith('<td class="taxVal">$'+(taxVal).toFixed(2)+'</td>');
	$("#totalVal").replaceWith('<td class="totalVal">$'+(totalVal).toFixed(2)+'</td>');

	//go to next panel (review panel) once it is ready
	clickNext(event);
}


function clickPrev(event) {
	//let speed = 500;

	//hide current card
	let section = $(event.target).parents("section");
	section.hide(speed);
	let parentDiv = section.parent("div");
	let nextParent = parentDiv.prev();
	let nextSection = nextParent.find("section");
	//show next card
	nextSection.show(speed);
}


const router = useRouter();
const db = getFirestore();
let auth = getAuth();

//GET INFO FOR EACH ITEM IN USER'S CART
onAuthStateChanged(auth,async (user)=>{
	if(user)
	{
	const docRef = doc(db, "user", user.uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists())
	{
		if(docSnap.data().cart.length === 0){			
			$(".checkout-form").replaceWith('<div class="checkout-form"><div class="card mb-5"><header class="card-header"><p class="card-header-title">Please add at least 1 item to your cart to check out.<button class="button is-warning" id="browseButton">Browse Products</button></p></header></div></div>')

			$("#browseButton").click(function(){
				window.open("/home", "_self");
			});

			$("#browseButton").css({"margin-left": "15px"});
			$(".checkout-form").css({"padding-bottom": "300px"});
		}
		$(".checkout-form").show(speed);
		for( var i =0; i<docSnap.data().cart.length;i++)
		{
			const docRef2 = doc(db, "Items", docSnap.data().cart[i]);
			const docSnap2 = await getDoc(docRef2);
			if (docSnap2.exists())
			{
				//console.log("docSnap2.data().title", docSnap2.data().title);
				products.push(docSnap2.data());

			}
		
			
		}
		
	}
	}
	});


const clear_cart = () => {
    auth=getAuth();

    onAuthStateChanged(auth,async (user)=>{
		if(user)
		{
		const docRef = doc(db, "user", user.uid);
		
            await updateDoc(docRef, {
            cart:[]
          });
		

		

		}
		alert ("Order Confirmed");
		router.push('/');

    });
};

</script>

<style>

.itemTotal {
	text-align: right !important;
}

.checkout-form {
	text-align: left;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

/* Added CSS Styling */
.background {
  padding-bottom: 70px;

	display: flex;
	flex-flow: column; 
	height: 100%;
}
</style>
