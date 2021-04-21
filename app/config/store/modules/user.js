import Vue from "vue";

export const state = {
	userInfo: {
		"id": -1,
		"email": "",
		"avatar": "",
		"nickname": "",
		"gender": 0,
		"age": "",
		"location": "",
		"hobby_type": [],
		"language": 1,
		"status": 1,
		"like": [],
		"favorTotal": 0,
		"buyTotal": 0,
		"commentTotal": 0
	},
	tempUserInfo: {},
	orderData: {},
	token: '',
};
export const mutations = {
	//储存用户信息
	setUserInfo(state, { userInfo, token }) {
		if (userInfo) {
			state.userInfo = Object.assign({}, state.userInfo, userInfo);
		}
		if (token) {
			state.token = token
		}
	},
	setTempUserInfo(state, userInfo) {
		if (userInfo) {
			state.tempUserInfo = Object.assign({}, state.tempUserInfo, userInfo);
		}
	},
	// 退出APP
	emptyUserInfo(state) {
		state.userInfo = {};
		state.tempUserInfo = {};
		state.token = "";
	},
};
export const actions = {

};
