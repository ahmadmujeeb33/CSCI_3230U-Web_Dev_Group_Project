import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< Updated upstream
=======
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CheckoutView from '../components/CheckoutPage.vue'
import ProductView from '../components/ProductsPage.vue'
import AddProductView from '../components/AddProduct.vue'
>>>>>>> Stashed changes


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
<<<<<<< Updated upstream
   
    component: () => import('../views/AboutView.vue')
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
>>>>>>> Stashed changes
  },
  {
    path: '/login',
    name: 'login',
<<<<<<< Updated upstream
   
    component: () => import('../views/LoginView.vue')
=======
    component: LoginView
>>>>>>> Stashed changes
  },
  {
    path: '/register',
    name: 'register',
<<<<<<< Updated upstream
   
    component: () => import('../views/RegisterView.vue')
  },

  {
    path: '/cart',
    name: 'cart',
   
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
   
    component: () => import('../views/ProfileView.vue')
  },

=======
    component: RegisterView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: AddProductView
  }
  
>>>>>>> Stashed changes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
