<template>
    <div class="login">
        
        <div class="columns is-centered">
        <form class="box" @submit.prevent="sign_in">
            <h1> Sign IN</h1>

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
                <button class="button" @click="submit">Sign in</button>
            </div>
            <p v-if="sign_in_error">{{sign_in_error}}</p>
        </form>
    </div>
    
        
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
            
            router.push('/products')
        })
        .catch((error)=>
        {
            console.log(error.code)
            switch (error.code) {
                case "auth/invalid-email":
                    sign_in_error.value= " invalid email"
                    break;

                case "auth/user-not-found":
                    sign_in_error.value= "No account with that email was found "
                    break;

                case "auth/wrong-password":
                    sign_in_error.value= "wrong password"
                    break;
        
                default:
                sign_in_error.value= "Email or Password Incorrect"
                    break;
            }

        });
   
    };


   
 

    
</script>



<style lang="scss" scoped>
    @import "~bulma/css/bulma.css"
</style>
