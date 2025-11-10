import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Svgs from './assets/Svg/Svgs.vue'


createApp(App)
  .use(router)
  .mount('#app')
export default {
  components: {Svgs}
}