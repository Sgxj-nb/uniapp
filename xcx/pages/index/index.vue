<template>
  <view class="content">
    <view>
      <input placeholder="aaaa" v-model="form.user_name" type="text" />
    </view>
    <view>
      <input placeholder="bbbb" v-model="form.user_password" type="text" />
    </view>
    <button @click="add">登陆</button>
    <button @click="adds">获取</button>
    <button @click="addsq">跳转</button>
  </view>
</template>

<script>
import { login } from '../api/login';
export default {
  data() {
    return {
      form: {
        user_name: '',
        user_password: ''
      }
    };
  },
  onLoad() {},
  methods: {
    add() {
      login(this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((errror) => {
          console.log(errror);
        });
    },
    adds() {
      this.$store
        .dispatch('user/fetchUserInfo')
        .then((res) => {
          console.log('我对了', res);
        })
        .catch((error) => {
          console.log('我错了', error);
        });
    },
    addsq() {
      uni.navigateTo({
        url: '/pages/views/index'
      });
    }
  }
};
</script>

<style scoped>
.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
