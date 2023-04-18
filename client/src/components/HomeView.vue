<template>
    <div>
      <!-- Main navbar for entire website -->
  
      <!-- Main homepage content -->
      <section class="section">
        <div class="container">
          <h1 class="title">Welcome to NFTees</h1>
          <p class="subtitle">The premier NFT Tee-shirt acquisition hub</p>
        </div>
      </section>
  
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
  
      <!-- Grid of additional links to popular searches -->
      <section>
        <div class="container">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                This is a generic card in a grid
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/WIP.png">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Check it out!</a>
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
          { src: require('@/assets/Hottest_NFTees.png') },
          { src: require('@/assets/Monkey_Madness.png') },
          { src: require('@/assets/Great_Deals.png') },
        ],
      };
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

    a:link, a:visited, a:active {
        color: #FFDAB3;
    }

    a:hover {
        color: white;
    }

    * {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    }
  </style>