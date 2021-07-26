<template>
	<view class="recommend-info">
		<view v-for="(item,index) in recommends" :key="index" @click="goToNewPage(item.link)">
			<image :src="item.image"></image>
			<view>{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'RecommendInfo',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
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
	.recommend-info{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 28rpx;
		padding: 20rpx 10rpx 30rpx 10rpx;
		border-bottom: 3px solid rgba(234,234,230,0.35);
		view{
			flex: 1;
			image{
				width: 140rpx;
				height: 140rpx;
			}
		}
	}
</style>
