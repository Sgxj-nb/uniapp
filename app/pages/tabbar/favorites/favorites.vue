<template>
	<view class="page tabbar">
		<u-navbar :is-fixed="true" :is-back="false" title="Favorites"></u-navbar>
		
		<view>收藏</view>
		
		<h-navigation></h-navigation>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
</style>
