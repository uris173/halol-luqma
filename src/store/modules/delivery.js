import axios from "axios"

export const delivery = {
  state: () =>({
    delivery: [],
    price: 0
  }),
  getters: {
    getDelivery(state) {
      return state.delivery
    },
    getPrice(state) {
      return state.price
    }
  },
  mutations: {
    setDeliery(state, payload) {
      state.delivery = payload
    },
    setPrice(state, payload) {
      state.price = payload
    }
  },
  actions: {
    async apiAllDelivery({getters, commit}) {
      let res = await axios(`${getters.url}/api/delivery/delivery`)
      if (res.status === 200) {
        commit('setDeliery', res.data)
      }
    },
    async apiDeliveryRegion({getters, commit}, payload) {
      let res = await axios(`${getters.url}/api/delivery/delivery/${payload}`)
      if (res.status === 200) {
        commit('setPrice', res.data)
        commit('totalPrice', res.data)
      }
    }
  }
}