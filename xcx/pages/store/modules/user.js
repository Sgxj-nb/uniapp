/***
 * @登陆状态管理
 * */

import { getUserInfo } from '../../api';

export default {
  namespaced: true,
  state: {
    info: null
  },
  mutations: {
    setUserInfo(state, info) {
      state.info = info;
    }
  },
  actions: {
    // 用户信息
    fetchUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            commit('setUserInfo', res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  }
};
