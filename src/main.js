import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import {Button, Row, Col, Search, Swipe, SwipeItem, Lazyload} from 'vant'

Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
