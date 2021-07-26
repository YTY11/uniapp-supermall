<template>
	<view class="detail-goods">
		<view class="detail-goods-title">{{goods.title}}</view>
		<view class="detail-goods-price">
			<view :style="{color:goods.discountBgColor}" class="detail-new-price">{{goods.newPrice}}</view>
			<view class="detail-old-price">{{goods.oldPrice}}</view>
			<view class="detail-preferential" :style="{background:goods.discountBgColor}">
				<text>{{goods.discountDesc}}</text>
			</view>
		</view>
		<view class="detail-columns" v-if="goods.columns">
			<view>{{goods.columns[0]}}</view>
			<view>{{goods.columns[1]}}</view>
			<view>{{goods.columns[2]}}</view>
		</view>
		<view class="detail-bottom">
			<view v-for="(item,index) in goods.services" :key="index" v-if="item.icon">
			<image :src="item.icon"></image>{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'DetailGoods',
		props:{
			goods:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style lang="scss">
	.detail-goods{
		.detail-goods-title{
			font-size: 32rpx;
		}
		
		.detail-goods-price{
			display: flex;
			align-items: flex-end;
			margin-top: 20rpx;
			.detail-new-price{
				font-size: 50rpx;
			}
			.detail-old-price{
				color: #ccc;
				text-decoration: line-through;
				margin-left: 10rpx;
			}
			.detail-preferential{
				font-size: 25rpx;
				color: #fff;
				border-radius: 14rpx;
				margin-bottom: 20rpx;
				margin-left: 10rpx;
				padding: 6rpx;
			}
			
		}
	
		.detail-columns{
			display: flex;
			justify-content: space-between;	
			font-size: 32rpx;
			margin-top: 30rpx;
		}
		
		.detail-bottom{
			font-size: 26rpx;
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			margin-top: 20rpx;
			border-top: 1px solid rgba(0,0,0,0.05);
			border-bottom: 3px solid rgba(0,0,0,0.05);
			padding: 20rpx 0;
			image{
				width: 32rpx;
				height: 32rpx;
				margin-left: 10rpx;
				vertical-align: bottom
			}
		}
	}
</style>
