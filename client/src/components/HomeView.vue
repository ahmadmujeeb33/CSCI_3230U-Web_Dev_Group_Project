<template>
    <div>  
      <!-- Carousel with rotating links -->
      <section>
        <carousel :items-to-show="1.5" :wrap-around="true" :autoplay="6000">
         <slide v-for="(image, index) in images" :key="index">
           <img :src="image.src" :alt="'Carousel Images' + (index + 1)">
         </slide>

         <template #addons>
           <navigation />
           <pagination />
         </template>
        </carousel>
      </section>

      <!-- Main homepage content -->
      <section class="section">
          <h1 class="title">Welcome to NFTees!</h1>
          <p class="subtitle">
            We are your go-to source for high-quality t-shirts featuring your favorite NFTs. Whether you're an avid collector or just a fan of this exciting new world of digital art, we've got the perfect shirt for you. Our designs feature stunning graphics of some of the most popular NFTs out there, making them the perfect addition to any wardrobe. With our commitment to using only the best materials and printing techniques, you can rest assured that your NFTees shirt will look great and last for years to come. So why wait? Browse our selection today and show your love for NFTs in style!
          </p>
      </section>
  
      <!-- Grid of additional links to popular searches -->
      <section>
        <div class="container">

          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                      Go bananas for these latest Exhausted Ape NFTs!
                  </p>
              </header>
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="../assets/ads/monkey.png">
                  </figure>
              </div>
              <footer class="card-footer">
                  <a @click="handleSearch('ape')" class="card-footer-item">Check it out!</a>
              </footer>
          </div>
          
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                      The truth is out there! So is the Sasquatch NFT line!
                  </p>
              </header>
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="../assets/ads/sasquatch.png">
                  </figure>
              </div>
              <footer class="card-footer">
                  <a @click="handleSearch('squatch')" class="card-footer-item">Check it out!</a>
              </footer>
          </div>
           
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                      Feel the freedom with the President Gaming collection!
                  </p>
              </header>
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="../assets/ads/president.png">
                  </figure>
              </div>
              <footer class="card-footer">
                  <a @click="handleSearch('president')" class="card-footer-item">Check it out!</a>
              </footer>
          </div>
           
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                      Consume! Check out Murval Studios' latest cash grab!
                  </p>
              </header>
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="../assets/ads/morval.png">
                  </figure>
              </div>
              <footer class="card-footer">
                  <a @click="handleSearch('grout')" class="card-footer-item">Check it out!</a>
              </footer>
          </div>
           
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                      Ever wanted an octopus on your shirt? Now's your chance!
                  </p>
              </header>
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="../assets/ads/octopus.png">
                  </figure>
              </div>
              <footer class="card-footer">
                  <a @click="handleSearch('octopus')" class="card-footer-item">Check it out!</a>
              </footer>
          </div>
           
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                      The robots are taking over, and so's this NFT!
                  </p>
              </header>
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="../assets/ads/bender.png">
                  </figure>
              </div>
              <footer class="card-footer">
                  <a @click="handleSearch('robot')" class="card-footer-item">Check it out!</a>
              </footer>
          </div>
           
          <div class="card">
              <header class="card-header">
                  <p class="card-header-title">
                      You won't believe what these trolls are doing!!!
                  </p>
              </header>
              <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="../assets/ads/troll.png">
                  </figure>
              </div>
              <footer class="card-footer">
                  <a @click="handleSearch('troll')" class="card-footer-item">Check it out!</a>
              </footer>
          </div>

        </div>
      </section>
  
      <!-- Bottom of page information -->
    </div>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import axios from 'axios'
  import store from '../store'

  export default {
    name: 'HomepageView',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        images: [
          { src: require('@/assets/carousel/Hottest_NFTees.png') },
          { src: require('@/assets/carousel/Monkey_Madness.png') },
          { src: require('@/assets/carousel/Great_Deals.png') },
        ],
      };
    },
    methods: {
      async handleSearch(term) {
        try {
          let response = await axios.post('/api/search', { "value": term });
          store.commit('updateMessage', response.data);

          console.log(response);
          console.log("message", store.state.message);
          window.open("/Products", "_self");
        }
        catch (error) {
          console.log(error);
        }

      },
    },
  };
  </script>
  
  <style scoped>
    .homepage {
      text-align: center;
      margin-top: 60px;
    }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 0.5em;
    }
    .card {
      height: max-content;
    }

    section {
        background-color: antiquewhite;
    }

    .card * {
        background: rgb(232, 104, 25);
    }

    a:link, a:visited, a:active, a {
        color: #FFDAB3;
    }

    a:hover {
        color: white;
    }

    * {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    }
  </style>