import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'

Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(LayoutPlugin)
// Vue.use(ModalPlugin)
// Vue.use(CardPlugin)
// Vue.use(VBScrollspyPlugin)
// Vue.use(DropdownPlugin)
// Vue.use(TablePlugin)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
