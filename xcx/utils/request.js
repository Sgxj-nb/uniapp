/***
 * @请求实例
 * */
import { gettoken } from './token-util';
const baseAll = {
  url: 'http://dashan.api.jlwl100.com/', // 接口请求地址
  key: 'xxxx', // 全局加密唯一key
  ajax: {}
};
// 暂时先废弃(但是留着不要删除)后期如果局部引入用着不好我就会改成全局调用
// baseAll.ajax.install = function (Vue) {
//   Vue.prototype.$ajax = function () {
//     uni.request({
//       url: baseAll.url,
//       data: {},
//       header: {},
//       success: (res) => {}
//     });
//   };
// };

export default {
  request(url, data, methods) {
    console.log(baseAll.url + url);
    return new Promise((resolve, reject) => {
      uni.request({
        url: baseAll.url + url,
        method: methods ? methods : 'get',
        data: data,
        header: {
          Authorization: gettoken()
        },
        success: (res) => {
          resolve(res);
        },
        fail(error) {
          reject(error);
        }
      });
    });
  }
};
