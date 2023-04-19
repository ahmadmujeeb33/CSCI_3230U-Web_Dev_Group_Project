<template>
  <div >

    <img @click="unFavorite" class="starImage" v-if="favorites" src="../assets/starfilled.png" width="25" height="25">

    <img @click="toFavorite" class="starImage" v-else src="../assets/starEmpty.png" width="25" height="25">
</div>
</template>

 <script>
     
    import axios from 'axios'
    import store from "../store"


    
    export default {
      name: 'CreateFavorites',
      data() {
        return {
          favorites:false,     
          
        }
        
    
    
      },
    
      async created(){

        let data = {"itemId": store.state.product,"userId":store.state.uid}
        let results  = await axios.get(`/api/info/check_favorites/${data.userId}/${data.itemId}`)
        this.favorites = results.data
    
    },

   
    
      methods: {
        async toFavorite(){
            let data = {"itemId":store.state.product,"userId":store.state.uid}
            this.favorites = true
            await axios.post("/api/info/add_favorites",data)
    
      
        },
    
    
        async unFavorite(){
            let data = {"itemId":store.state.product,"userId":store.state.uid}
            this.favorites = false
            await axios.delete(`/api/info/delete_favorites/${data.userId}/${data.itemId}`)
    
       
        },
    
    }
    }
    </script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
