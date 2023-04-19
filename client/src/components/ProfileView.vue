<template>
  
  <div class="profile mt-5">
    <div class="columns is-centered">
      <div class="box">
        <div id="profile_table">
          <h1 class="title is-5"> My Information</h1>

        </div>
      </div>

    </div>

  </div>

  </template>


<script setup>
//import{useRouter} from 'vue-router'
import{onMounted,} from "vue"
import { getAuth,onAuthStateChanged, } from "firebase/auth";
import { getFirestore,getDoc,doc} from "firebase/firestore";
import $ from "jquery";


const db = getFirestore();




//const router =useRouter();
let auth = getAuth();


onMounted(()=>
  {
    auth=getAuth();

    onAuthStateChanged(auth,async (user)=>{
      if(user)
      {

        const docRef = doc(db, "user", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists())
        {

          console.log("Document data:", docSnap.data());

          let profile_table = $('<table>').attr('class','table is-hoverable is-bordered mx-auto')
          let tbl_body= $('<tbody>')
          let row=$('<tr>')

          row.append($("<td>").text("Email: "))
          row.append($("<td>").text(docSnap.data().email))
          tbl_body.append(row)

          row=$('<tr>')
          row.append($("<td>").text("First Name: "))
          row.append($("<td>").text(docSnap.data().firstName))
          tbl_body.append(row)

          row=$('<tr>')
          row.append($("<td>").text("Last Name: "))
          row.append($("<td>").text(docSnap.data().lastName))
          tbl_body.append(row)


          row=$('<tr>')
          row.append($("<td>").text("City: "))
          row.append($("<td>").text(docSnap.data().city))
          tbl_body.append(row)

         
          
          profile_table.append(tbl_body)
          $('#profile_table').append(profile_table)
        } 
        else 
        {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
                
        
      

        
      }
      else
      {
        console.log("null")
      }

    });

  });

</script>
