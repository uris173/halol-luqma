import axios from "axios"


export const category = {
  state: () =>({
    all_category: []
  }),
  getters: {
    getCategoryAll(state) {
      return state.all_category
    }
  },
  mutations: {
    setCategoryAll(state, payload) {
      state.all_category = payload
    }
  },
  actions: {
    apiAllCategory(context) {
      axios.get(`${context.getters.url}/api/all/category/category`)
      .then(res =>{
        context.commit('setCategoryAll', res.data)
      })
    }
  }
}