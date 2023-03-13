export const helper = {
  state: () => ({
    bar: {
      status: false,
      kind: 0,
    },
    msg: {
      status: false,
      title: ''
    }
  }),
  getters: {
    getBar(state) {
      return state.bar
    },
    getMsg(state) {
      return state.msg
    }
  }, 
  mutations: {
    setBar(state, payload) {
      state.bar.status = payload.status
      state.bar.kind = payload.kind
    },
    setMsg(state, payload) {
      state.msg.status = payload.status
      state.msg.title = payload.title
      setTimeout(() =>{
        state.msg = {
          status: false,
          title: ''
        }
      }, 3000)
    }
  },
  actions: {
    barAction(context, payload) {
      context.commit('setBar', payload)
    },
    msgAction({commit}, payload) {
      commit('setMsg', payload)
    }
  }
}