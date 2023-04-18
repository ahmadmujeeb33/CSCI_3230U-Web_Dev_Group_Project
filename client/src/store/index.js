import { createStore } from 'vuex'


import createPersistedState from 'vuex-persistedstate';


let store =  createStore({
    state: {
        message: {},
				product: {},
    },
     getters: {
    },
    mutations: {
      updateMessage(state, newMessage) {
        state.message = newMessage;
      },
			updateProduct(state, newProduct) {
        state.product = newProduct;
      },
    },
 
  plugins: [createPersistedState()]

})
export default store