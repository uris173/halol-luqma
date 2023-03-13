import axios from "axios"


export const foods = {
  state: () =>({
    all_foods: [],
    one_food: {},
    category__foods: [],
    category_title: []
  }),
  getters: {
    getFoodsAll(state) {
      return state.all_foods
    },
    getOneFood(state) {
      return state.one_food
    },
    getCategoryFoods(state) {
      return state.category__foods
    },
    getCategoryTitle(state) {
      return state.category__title
    }
  },
  mutations: {
    setFoodsAll(state, payload) {
      state.all_foods = payload
    },
    setOneFood(state, payload) {
      state.one_food = payload
    },
    setCategoryFoods(state, payload) {
      state.category__foods = payload
    },
    setCategoryTitle(state, payload) {
      state.category__title = payload
    }
  },
  actions: {
    apiAllFoods(context) {
      axios.get(`${context.getters.url}/api/all/foods/food`)
      .then(res =>{
        context.commit('setFoodsAll', res.data)
      })
    },
    async apiOneFood({getters,commit}, payload) {
      let res = await axios.get(`${getters.url}/api/one/food/${payload}`)
      if (res.status == 200){        
        commit('setOneFood', res.data)
        commit('setModal',true)
      }
    },
    apiCategoryFoods(context, payload) {
      axios.get(`${context.getters.url}/api/category/${payload}/food`)
      .then(res =>{
        context.commit('setCategoryFoods', res.data.contents)
        context.commit('setCategoryTitle', res.data.title)
      })
    }
  }
}