<template>
	<view class="page tabbar">
		<u-navbar :is-fixed="true" :title-bold="true" :is-back="false">
				<view class="header">
					<view :class="tab==0?'checked':''" @click="tab=0">Quality</view>
					<view :class="tab==1?'checked':''" @click="tab=1">Recommend</view>
				</view>
		</u-navbar>
		
		<view v-if="tab==0">
			<view>优选</view>
		</view>
		<view v-else>
			<view>推荐</view>
		</view>
		
		<h-navigation></h-navigation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab: 0
			}
		},
		computed: {
			i18n() {
				return this.$t('pages.xxx')
			}
		},
		onLoad() {
		},
		mounted() {
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	
/deep/ .u-slot-content {
	height: 100% !important;
}

.header {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	text-align: center;
	
	& > view {
		flex: 1;
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		
		&.checked {
			&::after {
				content: '';
				width: 20%;
				height: 8rpx;
				display: block;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				background-color: #000;
			}
		}
	}
	
}
</style>
