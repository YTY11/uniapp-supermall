<template>
	<view class="category-menu">
		<view class="category-menu-item" v-for="(item,index) in categoryMenu" 
		:key="index" :class="{isActive:index==clickNum}" @click="clickItem(index,item.maitKey)">{{item.title}}</view>
	</view>
</template>

<script>
	export default {
		name:'CategoryMenu',
		props:{
			categoryMenu:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				clickNum:0
			}
		},
		methods:{
			//监听点击选项
			clickItem(index,maitKey){
				this.clickNum = index
				this.$emit('clickItem',maitKey)
			}
		}
		
	}
</script>

<style lang="scss">
	.category-menu{
		// display: flex;
		// flex-flow: column;
		width: 180rpx;
		background-color: #F8F8F8;
		font-size: 32rpx;
		box-sizing: border-box;
		.category-menu-item{
			padding: 0 10rpx;
			text-align: center;
			height: 100rpx;
			line-height: 100rpx;
			width: 100%;
			border-bottom: 1px solid rgba(0,0,0,0.15);
			border-right: 1px solid rgba(0,0,0,0.15);
		}
		.isActive{
			background-color: #FAC3CD;
			color: #fff;
		}
	}
</style>
