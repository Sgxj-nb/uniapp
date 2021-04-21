import Vue from 'vue'
import App from './App'

import uView from 'uview-ui';
Vue.use(uView);

// 数据管理中心
import store from './config/store'
Vue.prototype.$store = store;

// 多语言
import i18n from './lang/index'
// 兼容android平台
Vue.prototype._i18n = i18n

// api方法
import api from './common/api/index.js'
Vue.prototype.$api = api

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
