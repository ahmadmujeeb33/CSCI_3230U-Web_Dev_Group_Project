import { createRouter, createWebHistory } from 'vue-router'
//import HelloWorld from '../components/HelloWorld.vue'
import FavoritesList from '../components/FavoritesList.vue'
import AddProduct from '../components/AddProduct.vue'
import CategoriesPage from '../components/CategoriesPage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import CheckoutPage from '../components/CheckoutPage.vue'
import InformationPage from '../components/InformationPage.vue'
import LoginView from '../components/LoginView.vue'
import RegisterView from '../components/RegisterView.vue'
import CartView from '../components/CartView.vue'
import ProfileView from '../components/ProfileView.vue'
import HomeView from '../components/HomeView.vue'
import HomeView2 from '../components/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home2',
    component: HomeView2
  },
  {
    path: '/InformationPage',
    name: 'InformationPage',
    component: InformationPage
  },


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
    name: 'Categories',
    component: CategoriesPage
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
