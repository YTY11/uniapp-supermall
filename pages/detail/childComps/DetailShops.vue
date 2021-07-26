<template>
	<view class="detail-shops">
		<view class="detail-shops-name">
			<image :src="shops.shopLogo"></image>{{shops.name}}
		</view>
		<view class="detail-shops-msg">
			<view class="detail-shops-sells">
				<view>
					<view class="detail-shops-text">{{shops.cSells|filterSells}}</view>
					<view>总销量</view>
				</view>

				<view class="detail-shops-sells-right">
					<view class="detail-shops-text">{{shops.cGoods}}</view>
					<view>全部商品</view>
				</view>
			</view>
			<view class="detail-shops-goods" v-if="shops.score">
				<uni-table class="shops-goods-table">
					<uni-tr v-for="(item,index) in shops.score" :key="index">
						<uni-td>{{item.name}}</uni-td>
						<uni-td class="td-color" :class="{tdRed:item.isBetter}">{{item.score}}</uni-td>
						<uni-td class="td-color" :class="{tdRed:item.isBetter}">{{item.isBetter|filterMsg}}</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>
		<view class="detail-shops-bottom" >
			<text @click="goToNewPage('https://main.m.taobao.com/')">进店逛逛</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'DetailShops',
		props: {
			shops: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		filters: {
			//过滤销量数据
			filterSells(sells) {
				return sells >= 10000 ? (sells / 10000).toFixed(1) + '万' : sells
			},
			//过滤描述高低信息
			filterMsg(msg) {
				return msg ? '高' : '低'
			}
		},
		methods:{
			//跳转外部页面
			goToNewPage(url){
				url = encodeURIComponent(url)							
				uni.navigateTo({
					url: "/components/content/webPage/webPage?url="+url,
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.detail-shops {
		font-size: 32rpx;
		padding: 40rpx 0;
		.detail-shops-name {
			height: 80rpx;
			line-height: 80rpx;
			image {
				width: 80rpx;
				height: 80rpx;
				vertical-align: bottom;
				margin-right: 30rpx;
			}
		}
		.detail-shops-msg {
			margin-top: 30rpx;
			display: flex;
			justify-content: space-around;
			text-align: center;
			font-size: 28rpx;
			.detail-shops-sells {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding-right: 60rpx;
				border-right: 1rpx solid rgba(0, 0, 0, 0.15);
				view {
					justify-content: space-around;
					.detail-shops-text {
						font-size: 36rpx;
						margin-bottom: 10rpx;
					}
				}
				.detail-shops-sells-right {
					margin-left: 20rpx;
				}
			}
			.detail-shops-goods {
				.shops-goods-table {
					font-size: 28rpx !important;
					.td-color {
						color: green;
					}
					.tdRed {
						color: #ff8198
					}
					.uni-table-td{
						display: table-cell;
						padding: 10rpx 20rpx;
						font-size: 32rpx;
						border-bottom: 0px #EBEEF5 solid;
						font-weight: 400;
						line-height: auto;
						box-sizing: border-box;
					}
				}

			}
		}
		.detail-shops-bottom{
			width: 100%;
			text-align: center;
			margin-top: 60rpx;
			padding-bottom: 60rpx;
			border-bottom: 2px solid rgba(0,0,0,0.05);
			text{
				border-radius: 20rpx;
				background-color: #F2F5F8;
				padding: 10rpx 60rpx;
			}
			
			
		}
	}
</style>
