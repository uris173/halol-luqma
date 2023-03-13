import axios from "axios"

export const news = {
  state: () =>({
    news: [],
    one_news: {}
  }),
  getters: {
    getNews(state) {
      return state.news
    },
    getOneNews(state) {
      return state.one_news
    }
  },
  mutations: {
    setNews(state, payload) {
      state.news = payload
    },
    setOneNews(state, payload) {
      state.one_news = payload
    }
  },
  actions: {
    async apiAllNews({getters, commit}) {
      let res = await axios.get(`${getters.url}/api/all/news/news`)
      if (res.status === 200) {
        commit('setNews', res.data)
      }
    },
    async apiOneNews({getters, commit}, payload) {
      let res = await axios(`${getters.url}/api/news/news/${payload}`)
      if (res.status === 200) {
        console.log(res.data);
        commit('setOneNews', res.data)
      }
    }
  }
}