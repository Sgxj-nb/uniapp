/***
 * @token操作
 * */

import { TOKEN_STORE_NAME } from '../config/setting';

// 获取token
export function gettoken() {
  const token = uni.getStorageSync(TOKEN_STORE_NAME);
  if (token) {
    return token;
  } else {
    return '';
  }
}

// 缓存token
export function setToken(token) {
  removeToken();
  if (token) {
    uni.setStorageSync(TOKEN_STORE_NAME, token);
  }
}

// 移除token
export function removeToken() {
  uni.removeStorageSync('token');
}
