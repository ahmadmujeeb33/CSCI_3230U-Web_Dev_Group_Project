<template>
    <div class="register">
       
<<<<<<< Updated upstream

        <form @submit.prevent="register">
            <h2>Register</h2>

            <div>
                <label>Email address</label>
                <input type="email" placeholder="Email address" v-model="email"/>

            </div>
           
            <div>
                <label>Password</label>
                <input type="Password" placeholder="Password" v-model="password"/> 
            </div>

            <div>
                <label>name</label>
                <input type="text" placeholder="First Name" v-model="f_name"/>
                <input type="text" placeholder="Last Name" v-model="l_name"/> 
            </div>

            <div>
                <label>City</label>
                <input type="text" placeholder="City" v-model="city"/>
                
            </div>
            


            <p v-if="register_error">{{register_error}}</p>
         
            <button @click="submit">Register</button>
          </form>
=======
        <div class="columns is-centered">
            <form class="box" @submit.prevent="register">
                <h2>Register</h2>

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
        
        <p v-if="register_error">{{register_error}}</p>
         
            
          </form>
        </div>
>>>>>>> Stashed changes
        
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
<<<<<<< Updated upstream
                        console.log("Document has been added successfully");
=======
                        console.log("Document has been added successfully, USER ADDED TO DB");
>>>>>>> Stashed changes
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
                    register_error.value= " invalid email"
                    break;

                case "auth/user-not-found":
                    register_error.value= "No account with that email was found "
                    break;

                case "auth/email-already-in-use":
<<<<<<< Updated upstream
                    register_error.value= "email already in use, use another 1"
=======
                    register_error.value= "email already in use, use another one"
>>>>>>> Stashed changes
                    break;
        
                default:
                    register_error.value= "Email or Password Incorrect"
                    break;
            }

        });

    };
<<<<<<< Updated upstream
</script>
=======
</script>


<style lang="scss" scoped>
    @import "~bulma/css/bulma.css"
</style>
>>>>>>> Stashed changes
