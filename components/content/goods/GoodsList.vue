<template>
	<view class="goods-list">
		<goods-list-item v-for="(item ,index) in goods" :key="index" :goods-item="item"></goods-list-item>
	</view>
</template>

<script>
	//商品子组件
	import GoodsListItem from './GoodsListItem.vue'
	
	export default{
		name:'GoodsList',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsListItem
		}
		
	}
</script>

<style>
	.goods-list{
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 10rpx;
		flex-wrap: wrap;
	}
</style>
