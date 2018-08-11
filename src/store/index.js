import Vue from 'vue';
import Vuex from 'vuex';

import MoreList from './modules/more-list';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MoreList,
  },

});
