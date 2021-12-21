import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    setovj: {
      show: false
    }
  },
  mutations: {
    setinfoput(state, value) {
      state.setovj = value;
    }
  },
  actions: {
    getinfoput({ commit }) {
      commit('setinfoput');
    }
  },
  modules: {
    user
  },
  getters
});
