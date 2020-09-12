import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// rem手淘适配
import 'lib-flexible'
createApp(App).use(store).use(router).mount('#app')
