<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login" v-if="!logged_in">Login</router-link> |
    <router-link to="/register" v-if="!logged_in">Register |</router-link> 
    <router-link to="/cart" v-if="logged_in">Cart |</router-link> 
    <router-link to="/profile" v-if="logged_in">Profile </router-link>
    <button @click="sign_out" v-if="logged_in">Logout</button>
  </nav>
  
</template>

<script setup>
  import{useRouter} from 'vue-router'
  import{onMounted , ref} from "vue"
  import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
  const router =useRouter();

  let auth;

  const logged_in= ref(false);
  onMounted(()=>
  {
    auth=getAuth();

    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        logged_in.value=true;
      }
      else
      {
        logged_in.value=false;
      }

    });

  });

  const sign_out =() =>
  {
    signOut(auth).then(()=>{
      router.push('/')

    });
  };

</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
