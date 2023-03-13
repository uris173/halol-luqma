export const foodView = {
  state: () =>({
    modal: false,
  }),
  getters: {
    getModal(state) {
      return state.modal
    },
  },
  mutations: {
    setModal(state, payload) {
      state.modal = payload
    },
  }, 
  actions: {
    modalAction(context, payload) {
      context.commit('setModal', payload)
    },
  }
}