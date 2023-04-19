import { createStore } from 'vuex'


import createPersistedState from 'vuex-persistedstate';


let store =  createStore({
    state: {
        message: {},
				product: {},
        uid:"",
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
      updateUid(state, uid){
        state.uid = uid
      }
    },
 
  plugins: [createPersistedState()]

})
export default store