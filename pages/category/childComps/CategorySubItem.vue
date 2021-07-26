<template>
	<view class="category-sub-item">
		<image :src="categorySubItem.image"></image>
		<view>{{categorySubItem.title}}</view>
	</view>
</template>

<script>

	export default{
		name:'CategorySubItem',
		props:{
			categorySubItem:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style lang="scss">
	.category-sub-item{
		text-align: center;
		font-size: 32rpx;
		image{
			width: 150rpx;
			height: 150rpx;
			margin: 10rpx 0;
			// border-radius: 10rpx;
		}
	}
</style>
