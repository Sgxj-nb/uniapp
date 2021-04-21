import Vue from "vue";
import http from '../http/http.js'
Vue.prototype.$http = http

const files = require.context("./modules", false, /\.js$/)

let api = {}

files.keys().forEach((key) => {
  Object.assign(api, files(key)["default"]);
});

export default api

