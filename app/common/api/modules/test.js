import Vue from "vue";

const $http = Vue.prototype.$http

export default {
	guestReplyCount: options => $http.get('/guestbook/guestReplyCount', options),
	queryByPage1: options => $http.get('/guestbook/queryByPage1', options),
}