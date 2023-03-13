import axios from "axios";
import cookies from 'vue-cookies'


export const cart = {
  state: () =>({
    cart: [],
    total: 0,
  }),
  getters: {
    getCart(state) {
      return state.cart
    },
    getTotalItemPrices(state) {
      let sum = 0
      state.cart.forEach(element => {
        sum += element.data[0].price * element.count
      });
      return sum
    },
    getTotalPrice(state) {
      let sum = 0
      state.cart.forEach(element => {
        sum += element.data[0].price * element.count 
      });
      sum += state.total
      return sum
    },
  },
  mutations: {
    setCart(state, payload) {
      state.cart = payload
    },
    calcFood(state, payload) {
      let index = state.cart.findIndex(food => food._id === payload._id)
      if (index !== -1) {
        if (state.cart[index].count == 1 && payload.val == -1) {
          state.cart.splice(index, 1)
        } else {
          state.cart[index].count += payload.val
        }
      }
      let arr = []
      if (cookies.isKey('cart')) {
        arr = cookies.get('cart')
        let findIndex = arr.findIndex(el => el._id === payload._id)
        if (findIndex !== -1) {
          if (arr[findIndex].count == 1 && payload.val === -1) {
            arr.splice(findIndex, 1)
          } else {
            arr[findIndex].count += payload.val
          }
        }
      }
      cookies.set('cart', JSON.stringify(arr))
    },
    totalPrice(state, payload) {
      state.total = payload
    },
    remove(state, payload) {
      let index = state.cart.findIndex(food => food._id === payload)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
      // let arr = []
      if (cookies.isKey('cart')) {
        let cart = cookies.get('cart')
        let findIndex = cart.findIndex(food => food._id === payload)
        if (findIndex !== -1) {
          cart.splice(findIndex, 1)
        }
        cookies.set('cart', JSON.stringify(cart))
      }
    },
  },
  actions: {
    async apiGetCartFoods({getters, commit}) {
      if (cookies.isKey('cart')) {
        let arr = []
        let cart = cookies.get('cart')
        let res = await axios(`${getters.url}/api/all/foods/food`)
        if (res.data.length > 0) {
          res.data = res.data.map(data =>{
            let obj = cart.find(food => food._id === data._id)
            if (obj) {
              data.count = obj.count
              arr.push(data)
            } else {
              data.count = 1
            }
            return data
          })
          commit('setCart', arr)
        }
      }
    },
    async apiOrder({getters}, payload) {
      let res = await axios.post(`${getters.url}/api/order`, payload)
      if (res.status === 200) {
        axios({
          url: `${getters.url}/${res.data}`,
          method: 'GET',
          responseType: 'blob'
        })
        .then((response) => {
          let fileURL = window.URL.createObjectURL(new Blob([response.data]));
          let fileLink = document.createElement('a');
          fileLink.href = fileURL;
          res.data = res.data.slice(13)
          fileLink.setAttribute('download', `${res.data}`);
          document.body.appendChild(fileLink);
          fileLink.click();
        })
      }
    },
  }
};