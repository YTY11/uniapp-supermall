<template>
	<view class="category-sub-item" @click="goToNewPage(categorySubItem.link)">
		<image :src="categorySubItem.image" ></image>
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
		},
		methods:{
			goToNewPage(url){
				url =url.substr(0,url.indexOf("&"))
				url = encodeURIComponent(url)
						
				uni.navigateTo({
					url: "/components/content/webPage/webPage?url="+url,
				})
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
