import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import {Button, Row, Col, Swipe, SwipeItem} from 'vant'

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem)
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
