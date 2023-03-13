import axios from "axios";
import io from 'socket.io-client'

export const chat = {
  state: () => ({
    messages: []
  }),
  getters: {
    getMessages(state) {
      return state.messages
    }
  },
  mutations: {
    setMessages(state, payload) {
      payload.messages = payload.messages.map(message => {
        message.class = message.who === 0 ? 'user' : 'admin'
        message.date = message.date.substr(0, 10)
        message.sender = message.who === 0 ? 'Вы' : 'Администратор'
        return message
      })
      state.messages = payload
    },
    setSokcetMessage(state, payload) {
      // console.log(payload, 'mutation====');
      state.messages.messages.push(payload)
      state.messages.messages = state.messages.messages.map(message => {
        message.class = message.who === 0 ? 'user' : 'admin'
        message.date = message.date.substr(0, 10)
        message.sender = message.who === 0 ? 'Вы' : 'Администратор'
        return message
      })
      // payload.messages = payload.messages.map(message => {
      //   message.class = message.who === 0 ? 'user' : 'admin'
      //   message.date = message.date.substr(0, 10)
      //   message.sender = message.who === 0 ? 'Вы' : 'Администратор'
      //   return message
      // })
      // state.messages = payload
    }
  },
  actions: {
    async apiGetChat({getters, commit}, payload) {
      let res = await axios.get(`${getters.url}/chat/user/chat/${payload}`)
      if (res.status === 200) {
        // console.log(res.data);
        commit('setMessages', res.data)
      }
    },
    async apiCreateChatUser({getters}, payload) {
      return axios.post(`${getters.url}/chat/create/user/for_chat`, payload)
    },
    async apiMsgUser({getters}, payload) {
      // console.log(payload, 'api-----');
      let socket = io('http://5.182.26.89:5000')
      let res = await axios.post(`${getters.url}/chat/user/msg/front`, payload) 
      if (res.status === 201) {
        // console.log(res.data);
        socket.emit('message', res.data.chat)
        // commit('setSokcetMessage', res.data.chat)
      }
    }
  }
}