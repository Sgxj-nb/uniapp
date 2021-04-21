import Vue from "vue";

const state = {
	history: []
};
const mutations = {
  addHistory(state, key) {
	  // 加入历史
	  let index = state.history.indexOf(key)
	  if (~index) {
	  	state.history.splice(index, 1)
	  }
	  state.history.unshift(key)
  },
  clearHistory(state) {
	  state.history = []
  }
};
const actions = {
  
};

export { state, mutations, actions };
