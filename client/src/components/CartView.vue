<template>
  <!DOCTYPE html>
  <html lang="en">
  
  <body>
      <div class="title has-background-primary">Cart </div>
  
      <div id="list" class=" pad columns is-two-fifths">
          <div id="cart" class="column is-two-fifths">
              
              
              </div>
          </div>
  
  
      
  
  </body>
  
  </html>
  </template>
  
  
  <script>

  export default {
    name: 'CartPage',

    methods: {
      remove(){

      }
    
    }
  }

  </script>




  <script setup>
import{onMounted,} from "vue"
import { getAuth,onAuthStateChanged, } from "firebase/auth";
import { getFirestore,getDoc,doc,updateDoc, arrayUnion} from "firebase/firestore";
import $ from "jquery";
//import jquery from "jquery";


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

          let cartIDs =  docSnap.data().cart
          console.log(cartIDs)
          
          cartIDs.forEach(i => {
            onAuthStateChanged(auth,async (user)=>{
              let docRef2 = doc(db, "Items", i)
              let docSnap2 = await getDoc(docRef2);
              if (docSnap2.exists()){
                console.log(docSnap2.data().id)
                let image = docSnap2.data().url
                let name = docSnap2.data().name
                let price = docSnap2.data().price
                let id = i
                

                let item = $('<div>').attr('class','columns item mb-2 box is-half pad has-background-grey-lighter')
                    item.attr('id',id)
                let imgDiv = $('<div>').attr('class','column item is-two-fifths')
                let img = $("<img>").attr("src",image)
                    img = img.attr("width",200)
                    img = img.attr("height",200)
                    img = img.attr("class", 'image')
                    imgDiv.append(img)
                let infodiv = $('<div>').attr('class','column item is-two-fifths')    
                let priceDiv= $('<div>').text("Price:  $"+price).attr('class','item pad')
                let nameDiv = $('<div>').text(name).attr('class','item pad')
                  infodiv.append(nameDiv)
                  infodiv.append(priceDiv)
                let removed = $('<div>').attr('class','column button') 
                  removed.text("Remove")
                  removed.attr("id",id)
                  removed.on("click", removeFromcart);
                  


                item.append(imgDiv)
                item.append(infodiv)
                item.append(removed)
                $("#cart").append(item)
                

              }

            })
            
          });

         
          
          
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


  const removeFromcart = (event) => {
    const db = getFirestore();
    const auth = getAuth();
    let id = event.target.id
    console.log(id)
    
        
            onAuthStateChanged(auth, async (user) => {
                if(user){
                  const docRef = doc(db,"Items",id)
                  const docRef2 = doc(db,"user",user.uid)
                  const docSnap = await getDoc(docRef);
                  const docSnap2 = await getDoc(docRef2);
                  
                  console.log(docSnap2.data())
                  let cart = docSnap2.data().cart
                  console.log(cart)
                  
                  let index = cart.indexOf(id.toString())
                  cart.splice(index,1)
                  //console.log(cart)

                  await updateDoc(docRef2,{
                    cart: []
                  })
                  
                  cart.forEach(async item => {
                    await updateDoc(docRef2, {
                        cart:arrayUnion(item)
                    })
                   
                  });
                                      
                }
              $("#"+id).remove()
                
                
            });

  }



</script>
  
  <style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  .item{
      text-size-adjust: 20;
      justify-content: left;
      display: flex;
      
  }
  .image{
    justify-content: left;
      display: flex;

      max-width: 200;
      max-height: 200;
  }
  .pad{
    padding:2%;
  }
  .title{
      size: 900;
      justify-content: left;
      border-bottom-style: solid;
      text-align: left;
      padding: 1%;
  }
  
  
  </style>