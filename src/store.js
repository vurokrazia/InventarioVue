import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true    
  },
  mutations: {
    setDrawer: (state, drawer) => {
      state.drawer = drawer;
    }
  },
  actions: {

  }
})