import axios from "axios"

export const auth = {
  state: () =>({
    auth_modal: false
  }),
  getters: {
    getAuthModal(state) {
      return state.auth_modal
    }
  },
  mutations: {
    setAuthModal(state, payload) {
      state.auth_modal = payload
    }
  },
  actions: {
    authModalAction({commit}, payload) {
      commit('setAuthModal', payload)
    },
    async apiAuthRegistration({getters}, payload) {
      return axios.post(`${getters.url}/auth/registration`, payload)
    },
    apiAuthSignin({getters}, payload) {
      return axios.post(`${getters.url}/auth/login`, payload)
    }
  }
}