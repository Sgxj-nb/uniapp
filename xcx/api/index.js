import ajax from '@/utils/request';

// 用户信息接口
export async function getUserInfo() {
  const res = await ajax.request('api/v1/manage/sys/userInfo');
  if (res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject(new Error('失败'));
}
