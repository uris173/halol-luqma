import axios from "axios"


export const main = {
  state: () =>({
    category: [],
    foods_today: [],
    main_foods: []
  }),
  getters: {
    getCategory(state) {
      return state.category
    },
    getFoodsToday(state) {
      return state.foods_today
    },
    getFoodsMain(state) {
      return state.main_foods
    }
  },
  mutations: {
    setCategory(state, payload) {
      state.category = payload
    },
    setFoodsToday(state, payload) {
      state.foods_today = payload
    },
    setFoodsMain(state, payload) {
      state.main_foods = payload
    }
  },
  actions: {
    apiMainCategory(context) {
      axios.get(`${context.getters.url}/api/main/category/category`)
      .then(res => {
        context.commit('setCategory', res.data)
      })
    },
    apiFoodsToday(context) {
      axios.get(`${context.getters.url}/api/today/foods/food`)
      .then(res =>{
        context.commit('setFoodsToday', res.data)
      })
    },
    apiMainFoods(context) {
      axios.get(`${context.getters.url}/api/main/foods/food`)
      .then(res =>{
        context.commit('setFoodsMain', res.data)
      })
    }
  }
}