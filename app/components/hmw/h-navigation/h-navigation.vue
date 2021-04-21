<template>
	<view class="footer_box">
		<view v-for="(item, index) of navigationList" :key="index" class="footer_item" @click="item.emit?emit(item.emit):onPageJump(item.pagePath)">
			<view v-if="item.raised" class="footer_raised_item">
				<image v-if="item.pagePath == path" class="footer_raised_item_image" :src="'/' + item.selectedIconPath" mode="aspectFit"></image>
				<image v-else class="footer_raised_item_image" :src="'/' + item.iconPath" mode="aspectFit"></image>
				<text class="footer_nav_item_text" :class="[item.pagePath == path ? 'footer_nav_item_text_active' : '']" style="position: relative; top: 20rpx;">{{ item.text }}</text>
			</view>
			<view v-else class="footer_nav_item">
				<image v-if="item.pagePath == path" class="footer_nav_item_image" :src="'/' + item.selectedIconPath" mode="aspectFit"></image>
				<image v-else class="footer_nav_item_image" :class="item.class" :src="'/' + item.iconPath" mode="aspectFit"></image>
				<text class="footer_nav_item_text" :class="[item.pagePath == path ? 'footer_nav_item_text_active' : '']">{{ item.text }}</text>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			path: '',
			navigationList: [
				{
					pagePath: 'pages/tabbar/home/home',
					iconPath: 'static/navigation/home.png',
					selectedIconPath: 'static/navigation/home_selected.png',
					text: 'HOME'
				},
				{
					pagePath: 'pages/tabbar/favorites/favorites',
					iconPath: 'static/navigation/favorites.png',
					selectedIconPath: 'static/navigation/favorites_selected.png',
					text: 'FAVORITES'
				},
				{
					pagePath: 'pages/tabbar/profile/profile',
					iconPath: 'static/navigation/profile.png',
					selectedIconPath: 'static/navigation/profile_selected.png',
					text: 'PROFILE'
				}
			]
		};
	},
	created() {
		uni.hideTabBar();
		//获取所有页面
		let currentPages = getCurrentPages();
		let page = currentPages[currentPages.length - 1];
		this.path = page.route;
	},
	methods: {
		onPageJump(url) {
			if (this.path !== url) {
				uni.switchTab({
					url: '/' + url
				});
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.footer_station {
	height: 100rpx;
}
.footer_box {
	height: 100rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	z-index: 502;
	background-color: #fff;
	box-shadow: 0 -2rpx 10rpx #ddd;
}
.footer_item {
	position: relative;
	flex: 1;
}
.footer_nav_item {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
}
.footer_nav_item:active {
	background-color: rgba($color: #fff, $alpha: 0.1);
}
.footer_nav_item_text {
	font-size: 24rpx;
	color: #B6B6B6;
	margin-top: 6rpx;
}
.footer_nav_item_text_active {
	color: #f9a633;
}
.footer_nav_item_image {
	width: 40rpx;
	height: 40rpx;
}
.footer_raised_item {
	position: absolute;
	top: -40rpx;
	left: 50%;
	transform: translateX(-50%);
	width: 120rpx;
	height: 120rpx;
	background-color: #FFF;
	border-radius: 50%;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.footer_raised_item_image {
	width: 60rpx;
	height: 60rpx;
}
.popup_content {
	background-color: #FFF;
	padding: 30rpx;
}

.jiahao {
	width: 60rpx;
	height: 60rpx;
}
</style>
