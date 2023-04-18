<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png"
                    alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleBurger()">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>


        <div id="navbarBasicExample" class="navbar-menu">
            <!-- nav-Start -->
            <div class="navbar-start">
                <!-- search bar -->
                <div class="field">
                    <div class="control has-icons-left">
                        <input id="search" class="input" type="text" placeholder="Search" v-model="value"
                            @keyup.enter="handleSearch">
                        <span class="icon is-small is-left">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                </div>

                <!-- Item : landingpage -->
                <router-link class="navbar-item" to="/"></router-link>

                <!-- Item : Home -->
                <router-link class="navbar-item" to="/home">
                    Home
                </router-link>

                <!-- Item : Categories -->
                <router-link class="navbar-item" to="/Categories">
                    Categories
                </router-link>

                  <!-- Item : products -->
                  <!-- <router-link class="navbar-item" to="/products">
                    Products
                </router-link> -->

                <!-- Item : Add Product -->
                <router-link class="navbar-item" to="/AddProduct" v-if="logged_in">
                    Post an Item
                </router-link>

                <!-- Item : Favourites -->
                <router-link class="navbar-item" to="/FavoritesList" v-if="logged_in">
                    Favourites
                </router-link>

                <!-- Item : Checkout -->
                <router-link class="navbar-item" to="/checkout" v-if="logged_in">
                    Checkout
                </router-link>

                

                

               
                <!-- LOG OUT BUTTON MOVE AFER -->
                <button @click="sign_out" v-if="logged_in">Logout</button>
            </div>

            <!-- nav-End -->
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fas fa-user"></i>
                                </span>
                                <span><router-link to="/login" v-if="!logged_in">Login</router-link></span>
                                <span><router-link to="/profile" v-if="logged_in">My Account</router-link></span>
                            </span>
                        </a>

                        <a class="button">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </span>
                                <span><router-link to="/register" v-if="!logged_in">Register</router-link></span>
                                <span><router-link to="/cart" v-if="logged_in">Cart</router-link> </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>



<script>
import axios from 'axios'
import store from '../store'
// import matchedItems from './../../../controllers/Search.js'

export default {
    name: "NavigationBar",

    methods: {
        toggleBurger() {
            let burger = document.querySelector('.navbar-burger');
            let menu = document.querySelector('.navbar-menu');
            menu.classList.toggle('is-active');
            burger.classList.toggle('is-active');
        },

        async handleSearch() {
            try {
                let values = this.value.split(/\s+/);
                let valuesCombinedWithPlus = values.join('+');
                // console.log(valuesCombinedWithPlus);
                // let response = await axios.get(`/api/search/${valuesCombinedWithPlus}`);
                let response = await axios.post('/api/search', { "value": valuesCombinedWithPlus });
								store.commit('updateMessage', response.data);

                console.log(response);
								console.log("message",store.state.message);
								window.open("/Products", "_self");
            } catch (error) {
                console.log(error);
            }

        }
    }
}
</script>

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
      router.push('/products')

    });
  };

</script>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import "~@fortawesome/fontawesome-free/css/all.css";

/* add media queries */

.navbar {
    background-color: lightblue;
}

.field {
    margin: 10px;
}
</style>


