<template>
	<div class="login background">

		<div class="columns is-centered">
			<form class="box mt-5 title-is-5" @submit.prevent="sign_in">
			<h1 class="title is-5">Login</h1>

			<div class="field">
				<label class="label">Email: </label>
				<div class="control">
					<input type="email" placeholder="Email address" v-model="email"/>
				</div>
			</div>


			<div class="field">
				<label class="label">Password: </label>
				<div class="control">
					<input type="Password" placeholder="Password" v-model="password"/>
				</div>
			</div>



			<div>
				<button class="button" @click="submit">Login</button>
			</div>
				<p v-if="sign_in_error">{{sign_in_error}}</p>
			</form>
		</div>        
	</div>
		
		<div id="remaining-height">
			Remaining height
		</div>
    
</template>

<script setup>
    
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import {ref} from "vue"
    import{useRouter} from 'vue-router'

    const router =useRouter();
    const email =ref("");
    const password =ref("");
    
    const sign_in_error = ref();

    const sign_in =() =>
    {
        signInWithEmailAndPassword(getAuth(),email.value,password.value)
        .then(()=>{
            console.log("Sucessful Sign in")
            
            router.push('/')
        })
        .catch((error)=>
        {
            console.log(error.code)
            switch (error.code) {
                case "auth/invalid-email":
                    sign_in_error.value= "Invalid email"
                    break;

                case "auth/user-not-found":
                    sign_in_error.value= "No account with that email was found "
                    break;

                case "auth/wrong-password":
                    sign_in_error.value= "Wrong password"
                    break;
        
                default:
                sign_in_error.value= "Email or Password Incorrect"
                    break;
            }

        });
   
    };


   
 

    
</script>



<style scoped>
/* @import "~bulma/css/bulma.css" */

#remaining-height {
	background-color: #d9deda;
	position: sticky;
	/* top: 100px; */
	bottom: 0;
	width: 100%;
}
/* static
relative
fixed
absolute
sticky */
</style>
