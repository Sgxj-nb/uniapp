import App from './App';

// #ifndef VUE3
import Vue from 'vue';
import store from '@/store';
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
  ...App,
  store
});
app.$mount();
// #endif

/***
 * @记住不要把全局挂在的放在这里面
 * */
// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
  const app = createSSRApp(App);
  return {
    app
  };
}
// #endif
