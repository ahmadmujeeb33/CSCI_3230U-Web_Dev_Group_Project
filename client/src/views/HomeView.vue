<template>
  <div>
      <!-- Main navbar for entire website -->
      

      <!-- Main homepage content -->
      <section class="section">
          <div class="container">
              <h1 class="title">Welcome to our Group Project Website</h1>
              <p class="subtitle">This is the homepage of our project.</p>
          </div>
      </section>

      <!-- Carousel with rotating links -->
      <section>
          <div id="slider" class="carousel">

              <div class="carousel-item">
                  <div class="card">
                      <div class="card-image">
                          <figure class="image is-covered">
                              <img src="../assets/Hottest_NFTees.png" alt="PICTURE TEXT" />
                          </figure>
                      </div>
                  </div>
              </div>

              <div class="carousel-item">
                  <div class="card">
                      <div class="card-image">
                          <figure class="image is-covered">
                              <img src="../assets/Monkey_Madness.png" alt="PICTURE TEXT" />
                          </figure>
                      </div>
                  </div>
              </div>

              <div class="carousel-item">
                  <div class="card">
                      <div class="card-image">
                          <figure class="image is-covered">
                              <img src="../assets/Great_Deals.png" alt="PICTURE TEXT" />
                          </figure>
                      </div>
                  </div>
              </div>

          </div>
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

          </div>
      </section>


      <!-- Bottom of page information -->
  </div>
</template>

<script>
  //import Navbar from '../components/Navbar.vue';
  import 'bulma-carousel/dist/css/bulma-carousel.min.css';
  import bulmaCarousel from 'bulma-carousel';
  
  export default {
      name: 'HomepageView',
      components: {
          
      },
      mounted() {
          new bulmaCarousel('#slider', {
              slidesToScroll: 1,
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 6000,
              infinite: true,
              pauseOnHover: true,
              pagination: true,
              navigation: true,
          });
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
</style>