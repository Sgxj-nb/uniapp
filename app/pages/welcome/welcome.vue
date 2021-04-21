<template>
	<view class="page">
		<view class="title">
			<view>Hello.</view>
			<view>Welcome Back</view>
		</view>
		
		<view class="subtitle">
			<view>每天为你推荐最热门的商品</view>
			<view>Recommend hot products for you every day</view>
		</view>
		
		<view class="imgs">
			<view>
				<u-icon name="red-packet"></u-icon>
				<u-icon name="order"></u-icon>
			</view>
			<u-icon name="backspace"></u-icon>
			<u-icon name="photo"></u-icon>
			<u-icon name="plus-circle"></u-icon>
		</view>
		
		<view class="lang">
			<u-radio-group v-model="lang">
				<u-radio v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled" active-color="orange">{{item.name}}</u-radio>
			</u-radio-group>
		</view>
		
		<view class="footer">
			<view>
				<u-button type="warning" shape="circle" @click="start">Start</u-button>
			</view>
		</view>
		
		<aui-loading ref="auiLoading" :show="auiLoading.show" :type="auiLoading.type" :direction="auiLoading.row" :msg="auiLoading.msg" :mask="auiLoading.mask"></aui-loading>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: 'English',
						disabled: false
					},
					{
						name: '简体中文',
						disabled: false
					}
				],
				lang: 'English',
				
				auiLoading: {
					show: false,
					type: 4,
					direction: 'col',
					msg: '加载中',
					mask: false,
				},
				
			};
		},
		onShow() {
			this.$nextTick(() => {
				// 显示loading
				this.$refs.auiLoading.show();
				
				setTimeout(() => {
					if (this.$store.state.currentLanguage) {
						uni.switchTab({
							url: '/pages/tabbar/home/home'
						})
					}
					// 隐藏loading
					this.$refs.auiLoading.hide();
				}, 1000)
			})
		},
		methods: {
			start() {
				this.$store.commit('changeLanguage', this.lang=='English'?'en':'zh-CN')
				
				uni.switchTab({
					url: '/pages/tabbar/home/home'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

page {
}

.page {
	display: flex;
	flex-direction: column;
	// justify-content: space-around;
	padding: 0 60rpx;
	box-sizing: border-box;
	
	& > view {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.title {
		flex: 2;
		& > view {
			font-size: 50rpx;
			font-weight: bold;
		}
	}
	
	.subtitle {
		flex: 1;
	}
	
	.imgs {
		flex: 3;
		align-items: center;
	}
	
	.lang {
		flex: 1;
		/deep/ .u-radio {
			flex: 1 !important;
			justify-content: center;
		}
	}
	
	.footer {
		flex: 1;
		display: block;
	}
}

</style>
