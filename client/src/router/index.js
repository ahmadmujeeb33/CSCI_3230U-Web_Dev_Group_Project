import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import FavoritesList from '../components/FavoritesList.vue'
import AddProduct from '../components/AddProduct.vue'
import CategoriesPage from '../components/CategoriesPage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import CheckoutPage from '../components/CheckoutPage.vue'
import InformationPage from '../components/InformationPage.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/InformationPage',
    name: 'InformationPage',
    component: InformationPage
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
    path: '/Categories',
    name: '/Categories',
    component: CategoriesPage
  },

	{
    path: '/Products',
    name: '/Products',
    component: ProductsPage
  },
	
	{
    path: '/Checkout',
    name: '/Checkout',
    component: CheckoutPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
