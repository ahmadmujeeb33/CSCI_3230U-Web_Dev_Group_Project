

<template >
  <!-- https://bulma.io/documentation/components/menu/ -->
	<aside class="menu">
  <p class="menu-label">
    Category
  </p>
  <ul class="menu-list">
    <li><a>Sample Category 1</a></li>
    <li><a>Sample Category 2</a></li>
		<li><a>Should these Categories by Dynamically Generated?</a></li>
  </ul>
  
  <p class="menu-label">
    Rating
  </p>
  <ul class="menu-list">
    <li><a>1 Star and Above</a></li>
    <li><a>2 Star and Above</a></li>
    <li><a>3 Star and Above</a></li>
		<li><a>4 Star and Above</a></li>
  </ul>

	<p class="menu-label">
    Nested Menu Example
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
  </ul>
</aside>


</template>

<script>

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
      }
  }

  
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../node_modules/bulma/css/bulma.css";

  /* .titleContainer{
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

  .upload{
    width: 60%;
    display: flex;
    justify-content: flex-end;
    gap:40px;
    padding-top: 30px;
  } */
  
	.menu {
		position: sticky;
		display: inline-block;
		vertical-align: top;
		max-height: 100%;
		overflow: hidden;
		top: 0;
		bottom: 0;
		/* padding: 30px;
		width: 200px; */
	}

</style>
 