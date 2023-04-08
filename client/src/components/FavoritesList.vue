

<template >
  <div class="FavoriteContainer">
    <h1 style="padding-top:30px">MyFavorites</h1>

    <!-- <h1>{{allitems.name}}</h1> -->

    <div class="title">
      <h3 @click="changeModel(item.id)"  v-for="item in allitems" :key="item.id">{{item.title}} </h3>
      <!-- <h3>Hockey</h3>
      <h3>Football</h3> -->
    </div>


    <div class="ItemsContainer" v-for="item in allitems" :key="item.id">
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
    </div>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'FavoritesList',
  data() {
    return {
      currentID:0,
      favoriteItems: [
        {
         id:1,
         currentImage:require('@/assets/capture.png'),
         title: "basketball",
         price: 70
        },
        {
         id:2,
         currentImage:require('@/assets/hockey.png'),
         title: "hockey",
         price: 50
        },
        {
         id:3,
         currentImage:require('@/assets/football.png'),
         title: "football",
         price: 80
        },

         {
         id:4,
         currentImage:require('@/assets/football.png'),
         title: "Lemon",
         price: 90
        }

        

      ],

      allitems:[]

    }


  },


  // created : function(){
  //   console.log("in this")
  //   axios.get('/api/get_favorites')
  //     .then((response) => {
  //       // this.results =  response.data
  //       console.log("------------------------------------")
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.log("!!!!!!!!!!!!!!!!!!!!!!!")
  //       console.log(error)
  //     }); 
  // },

  async created() {
    console.log("in this")
    let response = await axios.get("/api/get_favorites")
    console.log("data",response.data)
    this.allitems = response.data
    console.log(this.allitems[0])
  },

  methods: {
    changeModel(newID) {
      this.currentID = newID
      
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


</style>
 