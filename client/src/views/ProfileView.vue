<template>
    <form @submit.prevent="update_password">
        <h3>Enter New Password -</h3>
            <input type="Password" placeholder="Password" v-model="password"/>

            <button @click="update_password">Update Password</button>
    </form>
  </template>


<script setup>
//import{useRouter} from 'vue-router'
import{onMounted,ref} from "vue"
import { getAuth,onAuthStateChanged, } from "firebase/auth";
import { getFirestore,doc} from "firebase/firestore";

const db = getFirestore();




//const router =useRouter();
let auth = getAuth();
let newPassword=ref();

onMounted(()=>
  {
    auth=getAuth();

    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        console.log(user)
        const docRef=doc(db,"user",user)
        //let docSnap = getDoc(docRef)

       
        console.log("Document data:", docRef.data()) 
        console.log(user.uid)
    
        
       
      }
      else
      {
        console.log("null")
      }

    });

  });



const update_password=() =>
{ 

    console.log(newPassword)
    
}




</script>
