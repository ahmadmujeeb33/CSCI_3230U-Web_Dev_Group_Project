<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <svg width="100" height="39" viewBox="0 0 1813 704" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden">
                    <defs>
                        <clipPath id="clip0">
                            <rect x="209" y="1030" width="1813" height="704"/>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#clip0)" transform="translate(-209 -1030)">
                        <path d="M1557.39 1033.5 1557.97 1038.56C1567.91 1081.51 1610.89 1113.81 1662.41 1113.81 1713.93 1113.81 1756.91 1081.51 1766.85 1038.56L1767.22 1035.37 2018.5 1089.58 1985.18 1275.93 1833.74 1275.93 1833.74 1728.5 1479.37 1728.5 1479.37 1275.93 1315.82 1275.93 1282.5 1077.75Z" stroke="#000000" stroke-width="4.58333" stroke-miterlimit="8" fill-rule="evenodd"/>
                        <path d="M1573.12 1034.5 1741.74 1034.5 1749.5 1036.08 1749.19 1038.62C1740.81 1072.79 1704.55 1098.5 1661.09 1098.5 1617.63 1098.5 1581.37 1072.79 1572.99 1038.62L1572.5 1034.59Z" stroke="#000000" stroke-width="4.58333" stroke-miterlimit="8" fill-rule="evenodd"/>
                        <path d="M209 1077 399.365 1077 552.249 1317.64C582.699 1365.46 605.769 1407.5 621.458 1443.76 611.202 1387.61 606.075 1330.17 606.075 1271.45L606.075 1077 770 1077 770 1734 606.075 1734 426.361 1443.71C403.296 1406.49 380.036 1361.26 356.581 1308.03 367.157 1350.39 372.445 1386.33 372.445 1415.85L372.445 1734 209 1734 209 1077Z" fill-rule="evenodd"/>
                        <path d="M788 1077 1263 1077 1263 1233.43 984.352 1233.43 984.352 1340.28 1198.51 1340.28 1198.51 1488.05 984.352 1488.05 984.352 1734 788 1734 788 1077Z" fill-rule="evenodd"/>
                    </g>
                </svg>
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


