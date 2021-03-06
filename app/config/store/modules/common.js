import Vue from "vue";
import i18n from '@/lang/index'

export const state = {
	// webView地址
	webViewUrl: "",
	loadingShow: false,
	// 微信场景参数
	chatScenesInfo: {},
	// 登录弹窗状态
	loginPopupShow: false,
	// 当前位置
	currentAddress: {
		areaName: "请选择",
		areaId: ''
	},
	// 当前语言
	currentLanguage: ''
};
//缓存浏览器的数据名称
const cacheNameList = ["userInfo", "webViewUrl"];
let clearTime;

export const mutations = {
	//取出缓存数据（打开APP就取出）
	setCacheData(state) {
		for (let name of cacheNameList) {
			let data;
			// #ifndef H5
			data = uni.getStorageSync(name);
			// #endif
			// #ifdef H5
			data = sessionStorage.getItem(name) || localStorage.getItem(name);
			// #endif
			if (data) {
				// #ifdef H5
				try {
					data = JSON.parse(data);
				} catch (e) {}
				// #endif
				state[name] = data;
			}
		}
	},
	//WebView地址
	setWebViewUrl(state, data) {
		if (data) {
			state.webViewUrl = data;
			// #ifdef H5
			window.sessionStorage.setItem('webViewUrl', data);
			// #endif
		}
	},
	//数据加载状态
	setLoadingShow(state, data) {
		if (state.loadingShow) {
			clearTime && clearTimeout(clearTime);
			clearTime = setTimeout(function() {
				state.loadingShow = data;
			}, 300);
		} else {
			state.loadingShow = data;
		}
	},
	//微信场景参数
	setChatScenesInfo(state, data) {
		if (data) {
			state.chatScenesInfo = data;
		}
	},
	//登录弹窗状态
	setLoginPopupShow(state, data) {
		state.loginPopupShow = data;
	},
	//当前地址
	setCurrentAddress(state, data) {
		if (data) {
			state.currentAddress = Object.assign(state.currentAddress, data);
			let addressInfo = {
				"provinceId": state.currentAddress.provinceId,
				"provinceName": state.currentAddress.provinceName,
				"cityId": state.currentAddress.cityId,
				"cityName": state.currentAddress.cityName,
				"areaId": state.currentAddress.areaId,
				"areaName": state.currentAddress.areaName,
			};
			uni.setStorageSync('currentAddress', addressInfo);
		}
	},
	changeLanguage(state, lang) {
		// console.log('语言切换', lang)
		let language = state.currentLanguage
		
		if (lang) {
			language = i18n.locale = lang
		} else {
			if (language === 'en') {
				language = i18n.locale = 'zh-CN'
			} else {
				language = i18n.locale = 'en'
			}
		}
		
		state.currentLanguage = language
		
		// 可以选择重启到首页
		// uni.reLaunch({
		//   url: '/pages/index/index'
		// })
	}
};

export const actions = {

};
