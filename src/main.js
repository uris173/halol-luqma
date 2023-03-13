import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';
import VueCookies from 'vue-cookies'
import io from 'socket.io-client'

const app = createApp(App)

app.config.globalProperties.$socketio = io('http://5.182.26.89:5000')
app.use(store)
.use(router)
.use(VueSplide)
.use(VueCookies, { expires: '1m'})
.mount('#app')
