import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/mod-admin'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    admin: admin

  }
})

export default store
