import Vue from 'vue'
import vuescroll from 'vue-scroll'
import { sync } from 'vuex-router-sync'

Vue.use(vuescroll)
if (process.env.NODE_ENV === 'development') {
  require('vue-clicky')
}

export default ({app: {router, store}}) => {
  sync(store, router)
}
