<template>
	<view class="content">
		<view>
			<u-button type="warning" shape="circle" size="medium">测试i18n按钮==={{i18n.login}}</u-button>
		</view>
		
		<view>
			<text class="iconfont icongouwuche"></text>
		</view>
		
		<view>
			<view>点下面三个点触发popover弹出选择框，可能这个插件不好用</view>
			
			<deanPopover :btnList='btnList' @select="select">
				<u-icon name="more-dot-fill"></u-icon>
			</deanPopover>
		</view>
		
		<view style="margin-top: 150rpx;">
			<u-button type="warning" shape="circle" size="medium" @click="toPopover">点击尝试另一个</u-button>
		</view>
		
		<view style="margin-top: 20rpx;">
			<u-button shape="circle" size="medium" plain>
				<u-icon name="mic"></u-icon>
				<text>语音输入</text>
			</u-button>
		</view>
		
		<view style="margin-top: 20rpx;">
			<u-input v-model="title" :type="'text'" :border="true" style="border-radius: 100rpx;" />
		</view>
		
		<view style="margin-top: 20rpx;">
			<u-form-item label="Code:" :border-bottom="false" style="border-radius: 100rpx; border: 1rpx solid #ddd; padding: 10rpx 30rpx;">
				<u-input v-model="title" :type="'text'" :border="false" />
				<slot name="right">
					<u-icon name="minus" style="transform: rotate(90deg); padding: 0 20rpx;"></u-icon>
					<view style="padding-right: 20rpx;">59s</view>
				</slot>
			</u-form-item>
		</view>
		
		<view style="margin-top: 20rpx;">
			<u-radio-group v-model="radioValue" @change="radioGroupChange">
				<u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled" active-color="orange">{{item.name}}</u-radio>
			</u-radio-group>
		</view>
		
		<view style="margin-top: 20rpx;">
			<view>底部tabbar还没做完</view>
		</view>
		
		<view style="margin-top: 20rpx; display: flex; justify-content: space-around;">
			<u-avatar :size="160"></u-avatar>
			<u-avatar src="https://img1.baidu.com/it/u=2062164223,3783917881&fm=26&fmt=auto&gp=0.jpg" :size="160" :show-sex="true" :sex-icon="'checkmark'" :sex-bg-color="'orange'" style="border: 1rpx solid orange"></u-avatar>
		</view>

		<aui-loading ref="auiLoading" :show="auiLoading.show" :type="auiLoading.type" :direction="auiLoading.row" :msg="auiLoading.msg" :mask="auiLoading.mask"></aui-loading>
		
		<h-navigation></h-navigation>
	</view>
</template>

<script>
	import deanPopover from '@/components/dean-popover/dean-popover.vue';
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";

	export default {
		components: {
			deanPopover,
			chunLeiPopups
		},
		data() {
			return {
				title: 'Hello',
				
				btnList: ['哈哈哈','嘿嘿嘿'],
				
				auiLoading: {
					show: false,
					type: 4,
					direction: 'col',
					msg: '加载中',
					mask: false,
				},
				
				list: [
					{
						name: 'apple',
						disabled: false
					},
					{
						name: 'banner',
						disabled: false
					},
					{
						name: 'orange',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radioValue: 'orange',
			}
		},
		computed: {
			i18n() {
				return this.$t('pages.login_reg')
			}
		},
		onLoad() {
		},
		mounted() {
			this.$api.guestReplyCount().then(({
				data
			}) => {
				console.log(data);
			})
			this.$api.queryByPage1({
				params: {
					page: 1,
					size: 10
				}
			}).then(({
				data
			}) => {
				console.log(data);
			})
		},
		methods: {
			select(e) {
				console.log(e);
			},
			toPopover() {
				uni.navigateTo({
					url: '/pages/example/popover/popover'
				})
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
