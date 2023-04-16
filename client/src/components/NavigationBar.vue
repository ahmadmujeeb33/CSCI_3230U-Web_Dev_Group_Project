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

                <!-- Item 1: Home -->
                <router-link class="navbar-item" to="/Home">
                    Home
                </router-link>

                <!-- Item 2: Categories -->
                <router-link class="navbar-item" to="/Categories">
                    Categories
                </router-link>

                <!-- Item 3: Add Product -->
                <router-link class="navbar-item" to="/AddProduct">
                    Post an Item
                </router-link>

                <!-- Item 4: Favourites -->
                <router-link class="navbar-item" to="/FavoritesList">
                    Favourites
                </router-link>
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
                                <span>My Account</span>
                            </span>
                        </a>

                        <a class="button">
                            <span class="icon-text">
                                <span class="icon">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </span>
                                <span>Cart</span>
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
                console.log(response);
            } catch (error) {
                console.log(error);
            }

        }
    }
}
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


