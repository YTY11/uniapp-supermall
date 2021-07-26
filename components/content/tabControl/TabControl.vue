<template>
	<view class="tab-control" >
		<view v-for="(item,index) in itemList" 
		:key="index" 
		:class="{isActive:index==clickNumber}" @click="clickItem(index)"><text>{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			itemList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				clickNumber: 0
			}
		},
		methods:{
			//判断点击选项
			clickItem(index){
				this.clickNumber = index
				this.$emit('clickItem',index)
			}
		}
	}
</script>

<style lang="scss">
	.tab-control {
		display: flex;
		justify-content: center;
		text-align: center;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		font-size: 32rpx;
		padding: 20rpx 0;
		view {
			
			flex: 1;
		}
		.isActive {
			color: #ff8198;
			font-size: 34rpx;
			text {
				padding: 20rpx 10rpx;
				border-bottom: 1px solid #ff8198;
			}
		}
	}
</style>
