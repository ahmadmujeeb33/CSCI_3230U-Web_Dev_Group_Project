<template>
    <div class="columns is-centered">
        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Phones')">
            <a>
                Phones
                <img src="../assets/categories/phones.jpg">
            </a>
        </div>

        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Watches')">
            <a>
                Watches
                <img src="../assets/categories/watches.jpg">
            </a>
        </div>

        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Sports')">
            <a>
                Sports
                <img src="../assets/categories/sports.jpg">
            </a>
        </div>

        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Clothes')">
            <a>
                Clothes
                <img src="../assets/categories/clothes.jpg">
            </a>
        </div>
    </div>


    <div class="columns is-centered">
        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Laptops')">
            <a>
                Laptops
                <img src="../assets/categories/laptops.jpg">
            </a>
        </div>

        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Bikes')">
            <a>
                Bikes
                <img src="../assets/categories/bikes.jpg">
            </a>
        </div>

        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Furniture')">
            <a>
                Furniture
                <img src="../assets/categories/furniture.jpg">
            </a>
        </div>
        <div class="column is-one-fifth-desktop is-2-tablet" @click="goToCategory('Other')">
            <a>
                Other
            </a>
        </div>
    </div>
</template>



    <!-- <div class="columns is-desktop">
        <div class="column">
            Phones
        </div>
        <div class="column">
            Watches
            <img src="../assets/categories/watches.jpg">
        </div>
        <div class="column">
            Sports
        </div>
        <div class="column">
            Clothes
        </div>
    </div> -->


<script>
import axios from 'axios'

export default {
    name: "CategoriesPage",

    methods: {
        async goToCategory(category) {
            try {
                let response = await axios.post('/api/category', { "category": category });
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

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding-bottom: 30px;
}

.column {
    background-color: coral;
    margin: 20px;
    height: 250px;

    /* display: inline-flex; */
}
</style>
