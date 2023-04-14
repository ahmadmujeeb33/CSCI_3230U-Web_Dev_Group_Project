import { createRouter, createWebHistory } from 'vue-router'
//import HelloWorld from '../components/HelloWorld.vue'
import FavoritesList from '../components/FavoritesList.vue'
import AddProduct from '../components/AddProduct.vue'
import ProductsPage from '../components/ProductsPage.vue'
import CheckoutPage from '../components/CheckoutPage.vue'
import Homepage from '../components/Homepage.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },

  // {
  //   path: '/Favorite',
  //   name: 'MyFavorites',
  //   component: MyFavorites
  // },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/FavoritesList',
    name: 'FavoritesList',
    component: FavoritesList
  },

	{
    path: '/ProductsPage',
    name: 'ProductsPage',
    component: ProductsPage
  },

	{
    path: '/CheckoutPage',
    name: 'CheckoutPage',
    component: CheckoutPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
