<template>
  <view>
    <!-- 登陆组件 -->
    <Wxmodel :showname="true" custom :show.sync="show"> </Wxmodel>
    <button @click="add">登陆</button>
  </view>
</template>

<script>
import Wxmodel from '@/components/wxmodel.vue';
export default {
  components: {
    Wxmodel
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    add() {
      this.show = true;
    }
  }
};
</script>

<style scoped></style>
