<template>
	<view class="detail-info">
		<view class="detail-info-topline"></view>
		<view class="detail-info-desc">{{detailInfo.desc}}</view>
		<view class="detail-info-bottomline"></view>
		<view class="detail-info-bottom" v-if="detailInfo.detailImage">
			<text>{{detailInfo.detailImage[0].key}}</text>
			<view v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
				<image  :src="item" mode="widthFix" :lazy-load='true' @load="imgLoad(item)"></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		name:'DetailInfo',
		props:{
			detailInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		data(){
			return {
				loadingImg:"/static/img/common/placeholder.png",
				errorImg:"/static/img/common/placeholderError.png"
			}
		},
		methods:{
			imgLoad(src){
				
				// this.imgLoad = src
				this.$emit('imgLoad')
			},
			
		}
	}
</script>

<style lang="scss">
	.detail-info{
		margin: 20rpx 0;
		font-size: 32rpx;
		.detail-info-topline{
			width: 150rpx;
			border-top: 1px solid rgba(0,0,0,0.15);
		}
		
		.detail-info-bottomline{
			text-align: end;
			margin-left: auto;
			width: 150rpx;
			border-top: 1px solid rgba(0,0,0,0.15);
		}
		.detail-info-topline::before,.detail-info-bottomline::after{
			width: 10rpx;
			height: 10rpx;
			border-radius: 50%;
			background: black;
			position: absolute;
			content: '';
			margin-top: -2px;
		}
		.detail-info-desc{
			padding: 20rpx 10rpx;
		}
		.detail-info-bottom{
			margin: 20rpx 0;
			image{
				width: 100%;
				height: 1000rpx;
				margin: 20rpx 0;
				border-radius: 10rpx;
			}
		}
	}
</style>
