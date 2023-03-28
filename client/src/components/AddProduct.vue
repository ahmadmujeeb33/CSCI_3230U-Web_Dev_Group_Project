

<template >
  <div>
    <input type="file" @change="onFileSelected">
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
   import axios from 'axios';

export default {
  name: 'AddProduct',
  data (){
      return{
         selectedFile:null
      }
  },
  methods:{
      onFileSelected(event){
          this.selectedFile = event.target.files[0]
          console.log(this.selectedFile)
      },

      async onUpload(event){
        console.log(event)
        const formData = new FormData()
        formData.append('file',this.selectedFile)
        await axios.post("/api/upload",formData)
        // let ans = await axios.get("/api")
        // console.log(ans)
      }
  }

  
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
 