<template>
	<view class="detail-comment" v-if="detailComment">
		<view class="detail-comment-title">用户评论</view>
		<view class="detail-comment-user" v-if="detailComment.user">
			<image :src="detailComment.user.avatar"></image>
			<text>{{detailComment.user.uname}}</text>
		</view>
		<view>{{detailComment.content}}</view>
		<view class="detail-comment-msg">
			<text>{{detailComment.created|filterDate}} {{detailComment.style}}</text>
		</view>
	</view>
</template>

<script>
	//格式化时间
	import {dateFormat} from '../../../utils/utils.js'
	export default{
		name:'DetailComment',
		props:{
			detailComment:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			//格式化时间
			filterDate(time){
				return time && dateFormat("YYYY-MM-dd HH:mm:SS",new Date(time*1000))
			}
		}
	}
	
</script>

<style lang="scss">
	.detail-comment{
		font-size: 32rpx;
		.detail-comment-title{
			width: 100%;
			padding: 10rpx 0;
			border-bottom: 1rpx solid rgba(0,0,0,0.15);
		}
		.detail-comment-user{
			margin-top: 20rpx;
			height: 80rpx;
			line-height: 80rpx;
			image{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				vertical-align: bottom;
			}
			text{
				margin-left: 20rpx;
			}
		}
		.detail-comment-msg{
			margin-top: 20rpx;
		}
	}
</style>
