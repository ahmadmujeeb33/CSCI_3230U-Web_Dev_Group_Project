

<template >
  <div class="pageContainer">
    <div class="titleContainer">
      <div class="field is-horizontal ">
        <div class="field-label is-normal">
          <label class="label">Title</label>
        </div>
        <div class="field-body" >
          <div class="inputBox">
            <div class="field">
              <div class="control">
                <textarea v-model="title" rows = "1" cols="55"  class="textarea" placeholder="Enter title"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div class="field is-horizontal  ">
        <div class="field-label is-normal">
          <label class="label">Description</label>
        </div>
        <div class="field-body ">
          <div class="inputBox">
            <div class="field ">
              <div class="control">
                <textarea v-model="description"  cols="50" rows="5"  class="textarea" placeholder="Enter description"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal  ">
        <div class="field-label is-normal">
          <label class="label">Catagories</label>
        </div>
        <div class="field-body ">
          <div class="inputBox">
            <div class="field ">
              <div class="control">
                <textarea v-model="catagories" cols="49" rows="1"  class="textarea" placeholder="Enter Catagory"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="field is-horizontal  ">
        <div class="field-label is-normal">
          <label class="label">Price</label>
        </div>
        <div class="field-body ">
          <div class="inputBox">
            <div class="field ">
              <div class="control">
                <textarea v-model="price"  cols="55" rows="1"  class="textarea" placeholder="Enter Price"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal  ">
        <div class="field-label is-normal">
          <label class="label">Name</label>
        </div>
        <div class="field-body ">
          <div class="inputBox">
            <div class="field ">
              <div class="control">
                <textarea v-model="name"  cols="55" rows="1"  class="textarea" placeholder="Enter Name"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <input type="file" @change="onFileSelected"> -->

     <!-- <input class="file-input" type="file" name="resume" @click="onFileSelected"> -->

    
    <div class="upload">
      <div class="file is-primary" >
        <label class="file-label">
          <input class="file-input" type="file" name="resume" @change="onFileSelected">
          <span class="file-cta">
            <!-- <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span> -->
            <span class="file-label">
              Choose File
            </span>
          </span>
        </label>      
      </div>
      <!-- <button @click="onUpload">Upload</button> -->
      <button  @click="onUpload" class="button is-danger">Upload</button>
    </div>

  </div>
</template>

<script>
   import axios from 'axios';

export default {
  name: 'AddProduct',
  data (){
      return{
        selectedFile:null,
        title:null,
        description:null,
        catagories:null,
        price:null,
        name:null
      }
  },
  methods:{
      onFileSelected(event){
        console.log(event)
          this.selectedFile = event.target.files[0]
          console.log(this.selectedFile)
      },

      async onUpload(event){
        console.log(event)
        const formData = new FormData()
        formData.append('file',this.selectedFile)
        formData.append('title',this.title)
        formData.append('description',this.description)
        formData.append('catagories',this.catagories)
        formData.append('price',this.price)
        formData.append('name',this.name)
        console.log(formData.get('name'))
        await axios.post("/api/upload",formData)
        // let ans = await axios.get("/api")
        // console.log(ans)
      }
  }

  
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../node_modules/bulma/css/bulma.css";

  .titleContainer{
    display: flex;
    justify-content: center;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
  }

  .pageContainer{
    background-color: antiquewhite;
    height: 100vh;
  }

  .inputBox{
    background-color: pink;
  }

  .upload{
    width: 60%;
    display: flex;
    justify-content: flex-end;
    gap:40px;
    padding-top: 30px;
  }
  

</style>
 