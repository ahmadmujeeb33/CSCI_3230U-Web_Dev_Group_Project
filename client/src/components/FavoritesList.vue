<template >
  <div class="FavoriteContainer">
    <p style="padding-top:30px;font-size: 40px;padding-bottom:20px">My Favorites</p>

    <!-- <h1>{{allitems.name}}</h1> -->

    <div class="title">
      <p id = "titleText" @click="changeModel(item.id)"  v-for="item in allitems" :key="item.id">{{item.title}}  </p>
      <!-- <h3>Hockey</h3>
      <h3>Football</h3> -->
    </div>


    <!-- <div class="ItemsContainer" v-for="item in allitems" :key="item.id">
      <div class="Items" v-if="currentID ===  item.id ">
        <img :src="item.url" width="300" height="200" />

        
        <div>
          <h3>{{item.title}}</h3>
          <h3>{{item.price}}</h3>
          <div class="linkContainer">
            <a href="#" class="btn btn-primary" id="link">Click for More details</a>
          </div>
        </div>
      </div>
    </div> -->

    <div class="ItemsContainer" v-for="item in allitems" :key="item.id">
      <div class="Items container" v-if="currentID ===  item.id ">
        <div class="card">
          <header class="card-header">
              <p class="card-header-title">
                  {{item.title}}
              </p>
          </header>
          <div class="card-image">
              <figure class="image is-4by3">
                  <img :src="item.url" width="300" height="200" />
              </figure>
          </div>
          <footer class="card-footer">
              <a style="cursor:pointer" @click="sendInfo" class="card-footer-item">Click for more details</a>
          </footer>
        </div>
      </div>
    </div>





  </div>
</template>

<script>

import axios from 'axios';
import { getAuth,onAuthStateChanged, } from "firebase/auth";
import store from "../store"



export default {
  name: 'FavoritesList',
  data() {
    return {
      currentID:0,     
      allitems:[]

    }


  },


  async created() {

    let auth=getAuth();

    onAuthStateChanged(auth,async (user)=>{
      let response = await axios.get(`/api/get_favorites/${user.uid}`)
      this.allitems = response.data

    });


   
  },

  methods: {
    changeModel(newID) {
      this.currentID = newID
      
    },
    sendInfo(){
      store.commit('updateProduct', this.currentID);
      window.open("/InformationPage", "_self");


    }
  }


  
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Items{
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 2px solid black;
  border-radius: 50px; */
  gap:30px;

}

.ItemsContainer{
    display: flex;
    justify-content: center;

}

.FavoriteContainer{
  background-color: antiquewhite;
  height: 100vh;
}


.title{
  display: flex;
  gap:30px;
  justify-content: center;
}

#link{
  text-decoration: none;
  color:black;
  font-weight: bold;

}

.linkContainer{
  width: 10vw;
  height: 5vh;
  background-color: #caf0f8;
}

#titleText{
  font-size: 20px;
	cursor: pointer;
}

.container {
	display: grid;
	grid-template-columns: 300px;
	grid-gap: 0.5em;
	justify-content: center;
}
.card {
	height: max-content;
}

.card * {
		background: rgb(232, 104, 25);
}

a:link, a:visited, a:active, a {
	color: #FFDAB3;
}

a:hover {
	color: white;
}
</style>
 