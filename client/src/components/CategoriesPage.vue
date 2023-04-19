<template>
    <div class="body">
        <div class="category_tiles">
        <div class="column" @click="goToCategory('Animal')">
            <a>
                Animals
                <img src="../assets/categories/animal.jpg">
            </a>
        </div>

        <div class="column" @click="goToCategory('Cinema')">
            <a>
                Cinema
                <img src="../assets/categories/cinema.jpg">
            </a>
        </div>

        <div class="column" @click="goToCategory('Food')">
            <a>
                Food
                <img src="../assets/categories/food.jpg">
            </a>
        </div>

        <div class="column" @click="goToCategory('Gaming')">
            <a>
                Gaming
                <img src="../assets/categories/gaming.jpg">
            </a>
        </div>

        <div class="column" @click="goToCategory('Robot')">
            <a>
                Robot
                <img src="../assets/categories/robot.jpg">
            </a>
        </div>

        <!-- <div class="column " @click="goToCategory('Phones')">
            <a>
                Phones
                <img src="../assets/categories/phones.jpg">
            </a>
        </div>

        <div class="column " @click="goToCategory('Watches')">
            <a>
                Watches
                <img src="../assets/categories/watches.jpg">
            </a>
        </div>

        <div class="column " @click="goToCategory('Sports')">
            <a>
                Sports
                <img src="../assets/categories/sports.jpg">
            </a>
        </div>

        <div class="column " @click="goToCategory('Clothes')">
            <a>
                Clothes
                <img src="../assets/categories/clothes.jpg">
            </a>
        </div>

        <div class="column" @click="goToCategory('Laptops')">
            <a>
                Laptops
                <img src="../assets/categories/laptops.jpg">
            </a>
        </div>

        <div class="column" @click="goToCategory('Bikes')">
            <a>
                Bikes
                <img src="../assets/categories/bikes.jpg">
            </a>
        </div>

        <div class="column" @click="goToCategory('Furniture')">
            <a>
                Furniture
                <img src="../assets/categories/furniture.jpg">
            </a>
        </div> -->

        <div class="column" @click="goToCategory('Other')">
            <a>
                Other
                <img src="../assets/categories/other.jpg">
            </a>
        </div>
    </div>

    </div>
</template>


<script>
import axios from 'axios'
import store from '../store'

export default {
    name: "CategoriesPage",

    methods: {
        async goToCategory(category) {
            try {
                let response = await axios.post("/api/category", { "category": category });
                console.log(response);
                store.commit("updateMessage", response.data);
                window.open("/Products", "_self");
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
</script>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.body {
    background-color: antiquewhite;
}

.category_tiles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding-bottom: 30px;
}

.column {
    background-color: coral;
    margin: 20px;
    height: 350px
}
</style>
