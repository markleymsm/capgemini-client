import Vue from "vue"
import Vuex from "vuex"

import conta from './conta'

window.axios = require('axios')
window.axios.defaults.baseURL = 'http://127.0.0.1:8000'
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  modules:{
    conta: conta
  }
}

Vue.use(Vuex)
export default new Vuex.Store(config)
