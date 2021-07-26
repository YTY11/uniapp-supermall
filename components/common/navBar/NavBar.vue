<template>
	<view class="nav-bar">
		<view class="nav-bar-left">
			<slot name="left"></slot>
		</view>
		<view class="nav-bar-center">
			<slot name="center"></slot>
		</view>
		<view class="nav-bar-right">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default{
		name:'NavBar'
	}
</script>

<style lang="scss">
	.nav-bar{
		display: flex;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 32rpx;
		.nav-bar-left,.nav-bar-right{
			width: 120rpx;
		}
		.nav-bar-center{
			flex: 1;
		}
			
	}
</style>
