<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar();
			// console.log('App Launch')
			
			// 除开vue部分的国际化参考：https://ask.dcloud.net.cn/article/35872
			// 默认选择的语言
			let currentLanguage = this.$store.state.currentLanguage
			if (!currentLanguage) {
				// uni.getSystemInfo({
				// 	success: res => {
				// 		this.$store.commit('changeLanguage', res.language)
				// 	}
				// })
			} else {
				this.$store.commit('changeLanguage', currentLanguage)
			}
		},
		onShow: function() {
			uni.hideTabBar();
			// console.log('App Show')
		},
		onHide: function() {
			uni.hideTabBar();
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("./common/aui/css/aui.css");
	@import url("./common/aui/css/aui.iconfont.css");
	
	/* uView UI */
	@import "uview-ui/index.scss";
	
	@import "common/css/global.scss";
	@import "common/css/iconfont.css";
</style>