import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
const firebaseConfig = {
    apiKey: "AIzaSyAjTD1JfZ7Jx7cT_89naKFgDeUL1nKr8LA",
    authDomain: "ecommerce-f0a2b.firebaseapp.com",
    projectId: "ecommerce-f0a2b",
    storageBucket: "ecommerce-f0a2b.appspot.com",
    messagingSenderId: "759495563326",
    appId: "1:759495563326:web:8d95853b1e11a395bdd96f",
    measurementId: "G-R7P5ZTXGXB"
  }
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes

createApp(App).use(store).use(router).mount('#app')
