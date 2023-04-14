import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import FavoritesList from '../components/FavoritesList.vue'
import AddProduct from '../components/AddProduct.vue'
import ProductsPage from '../components/ProductsPage.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
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
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
