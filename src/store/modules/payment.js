import axios from "axios";

export const payment = {
  state: () =>({
    payment: []
  }),
  getters: {
    getPayment(state) {
      return state.payment
    }
  },
  mutations: {
    setPayment(state, payload) {
      state.payment = payload
    }
  },
  actions: {
    async apiPaymentMethods({getters, commit}) {
      let res = await axios.get(`${getters.url}/api/payment/payment`)
      if (res.status === 200) {
        // console.log(res.data);
        commit('setPayment', res.data)
      }
    }
  }
}