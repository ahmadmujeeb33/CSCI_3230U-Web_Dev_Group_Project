<template>
    <div class="register background">
       
        <div class="columns is-centered">
            <form class="box mt-5" @submit.prevent="register">
                <h2 class="title is-5">Register</h2>

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

                <div class="field">
                    <label class="label">First Name: </label>
                    <div class="control">
                        <input type="text" placeholder="First Name" v-model="f_name"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Last Name: </label>
                    <div class="control">
                        <input type="text" placeholder="Last Name" v-model="l_name"/> 
                    </div>
                </div>

                <div class="field">
                    <label class="label">City:</label>
                    <div class="control">
                        <input type="text" placeholder="City" v-model="city"/>
                    </div>
                </div>

                <div>
                    <button class="button" @click="submit">Register</button>
                </div>
        
        <p class="mt-3" v-if="register_error">{{register_error}}</p>
         
            
          </form>
        </div>
        
    </div>
    
</template>

<script setup>
    import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
    import { getFirestore, doc, setDoc } from "firebase/firestore";
    import {ref} from "vue"
    import{useRouter} from 'vue-router'


    const auth = getAuth();
    const router =useRouter();
    const db = getFirestore();
    


    const email =ref();
    const password =ref();
    const f_name= ref("");
    const l_name= ref("");
    const city= ref("");


    const register_error = ref();

    const register =() =>
    {
        
        createUserWithEmailAndPassword(auth,email.value,password.value)
        .then(()=>{
            
            onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                const docRef = doc(db, "user", user.uid);
                const data = {
                firstName: f_name.value,
                lastName:l_name.value,
                email: email.value,
                password: password.value,
                city: city.value,
                cart:[]
                
                };

                setDoc(docRef, data)
                    .then(() => {
                        console.log("Document has been added successfully, USER ADDED TO DB");
                    })
                    .catch(error => {
                        console.log(error);
                    })
                                
                
                
                console.log("Sucessful registration")
                
                router.push('/profile')
            }


            })
         })

        .catch((error)=>
        {
            console.log(error.code)
            switch (error.code) {
                case "auth/invalid-email":
                    register_error.value= "Invalid email"
                    break;

                case "auth/user-not-found":
                    register_error.value= "No account with that email was found"
                    break;

                case "auth/email-already-in-use":
                    register_error.value= "Email already in use, use another one"
                    break;
                case "auth/weak-password":
                    register_error.value= "Password must be at least 6 characters long."
                    break;
        
                default:
                    register_error.value= "Email or Password Incorrect"
                    break;
            }

        });

    };
</script>


<style scoped>

.background{
	display: flex;
	flex-flow: column; 
	height: 100%;
	padding-bottom: 90px;
}
</style>
