import ajax from '../../utils/request';
import { setToken } from '../../utils/token-util';

// 登陆
export async function login(data) {
  const res = await ajax.request('api/v1/manage/user/login', data, 'post');
  if (res.data.code == 0) {
    setToken(res.data.data.token);
    return '成功';
  }
  return Promise.reject(new Error(res.data.errMsg));
}
