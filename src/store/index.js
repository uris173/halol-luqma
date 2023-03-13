import { createStore } from 'vuex'
import {modulesList} from './modules'

export default createStore({
  state: {
    url: 'http://5.182.26.89:5000'
  },
  getters: {
    url(state) {
      return state.url
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...modulesList,
  }
})