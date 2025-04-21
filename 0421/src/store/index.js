import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    token (state) {
      return state.token.user.userInfo.token
    }
  },
  modules: {
  }
})
