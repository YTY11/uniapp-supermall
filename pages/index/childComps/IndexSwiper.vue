<template>
	<swiper class="index-swiper"
	indicator-dots=true 
	indicator-active-color=#fff autoplay=true interval=3000 circular=true>
		<swiper-item v-for="(item,index) in banners" :key="index">
			<u-lazy-load :image="item.image" @click="goToNewPage(item.link)" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
			
			<!-- <image :src="item.image" @click="goToNewPage(item.link)"></image> -->
		</swiper-item>
	</swiper>
</template>

<script>
		
	export default{
		name:'IndexSwiper',
		props:{
			banners:{
				type:Array,
				default(){
					return[]
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
	.index-swiper{
			
		u-lazy-load{
			width: 100%;
			height: 360rpx;
		}
	}
</style>
