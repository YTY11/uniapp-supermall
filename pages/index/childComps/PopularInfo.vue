<template>
	
	<view class="popular-info" @click="goToNewPage('https://act.mogujie.com/zzlx67')">
		<image src="../../../static/img/home/recommend_bg.jpg" />
		</image>
	</view>
</template>

<script>
	export default {
		name: "PopularInfo",
		methods: {
			goToNewPage(url) {
			
				url = encodeURIComponent(url)
			
				uni.navigateTo({
					url: "/components/content/webPage/webPage?url="+url,
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.popular-info {
		image {
			width: 100%;
			// height: 100%;
		}
	}
</style>
