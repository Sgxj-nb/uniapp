<template>
	<button
		class="h-btn"
		:class="[
			type ? 'h-btn-type-' + type: '',
			shape ? 'h-btn-shape-' + shape: ''
		]"
		:hover-class="getHoverClass(disabled, type, plain)"
		:style="{ width: width, height: height, lineHeight: height, fontSize: size + 'rpx', margin: margin }"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'hButton',
	props: {
		// 按钮类型
		type: {
			type: String,
			default: 'primary'
		},
		// 形状 circle(圆角), square(默认方形)，rightAngle(平角)
		shape: {
			type: String,
			default: 'circle'
		},
		// 宽度 rpx或 %
		width: {
			type: String,
			default: '100%'
		},
		// 高度 rpx
		height: {
			type: String,
			default: '96rpx'
		},
		// 字体大小 rpx
		size: {
			type: Number,
			default: 32
		},
		// 边距
		margin: {
			type: String,
			default: '0'
		},
		plain: {
			type: Boolean,
			default: false
		},
		// 是否禁用
		disabled: {
			type: Boolean,
			default: false
		},
	},
	methods: {
		getHoverClass: function(disabled, type, plain) {
			let className = '';
			if (!disabled) {
				className = plain ? 'h-btn-outline-hover' : 'h-btn-type-' + (type || 'primary') + '-hover';
			}
			return className;
		}
	}
}
</script>

<style lang="scss" scoped>

.h-btn {
	width: 100%;
	position: relative;
	border: 0 !important;
	border-radius: 6rpx;
	padding: 0 50rpx;
	overflow: visible;
	display: inline-block;
	outline: none;
	
	&::after {
		border: none;
	}
	
	&-outline-hover {
		opacity: 0.5 !important;
	}
	
	&-type {
		&-primary {
			color: #fff;
			background-color: #FFB500;
			
			&-hover {
				background-color: #dea007 !important;
			}
		}
	}
	
	&-shape {
		&-circle {
			border-radius: 500rpx;
		}
	}
	
	
}

</style>
