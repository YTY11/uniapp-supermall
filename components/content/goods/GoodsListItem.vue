<template>
	<view v-if="goodsItem.iid" class="goods-list-item" @click="goDetail(goodsItem.iid)">
		<u-lazy-load :image="goodsItem.show.img" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
		
		<!-- <image :src="goodsItem.show.img"></image> -->
		<view class="goods-item-msg">
			<text class="item-msg">{{goodsItem.title}}</text>
			<view>
				<text class="item-price">{{goodsItem.orgPrice}}</text>
				<view class="item-cfav">
					<image src="../../../static/img/home/cfav.png"/>{{goodsItem.cfav}}
				</view>
			</view>
			
		</view>
	</view>
	
	<view v-else class="goods-list-item" @click="goDetail(goodsItem.item_id)">
		<u-lazy-load :image="goodsItem.image" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
		
		<!-- <image :src="goodsItem.image"></image> -->
		<view class="goods-item-msg">
			<text class="item-msg">{{goodsItem.title}}</text>
			<view>
				<text class="item-price">￥{{goodsItem.price}}</text>
				<view class="item-cfav">
					<image src="../../../static/img/home/cfav.png"/>{{goodsItem.cfav}}
				</view>
			</view>
			
		</view>
	</view>

</template>

<script>
	export default{
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				loadingImg:"/static/img/common/placeholder.png",
				errorImg:"/static/img/common/placeholderError.png"
			}
		},
		methods:{
			//跳转详情页
			goDetail(iid){
				uni.navigateTo({
					url:'/pages/detail/detail?iid='+iid,
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods-list-item{
		width: 48%;
		padding: 8rpx 0rpx;
		font-size: 28rpx;
		
		u-lazy-load{
			width: 100%;
			border-radius: 16rpx;
			
		}
		.goods-item-msg{
			padding: 0 20rpx;
			.item-msg{
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				/* 下方注释解决webkit-box-orient属性丢失问题 */
				/* autoprefixer: ignore next */
				-webkit-box-orient: vertical;
				margin-top: 3px;
				margin-bottom: 4px;
			}
			view{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx 0;
				.item-price{
					color:#ff8198
				}
				.item-cfav{
					image{
						width: 35rpx;
						height: 35rpx;
						vertical-align: bottom;
						margin-right: 8rpx;
					}
				}
				
			}
		}
		
	}
</style>
