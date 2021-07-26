<template>
	
	<swiper class="detail-swiper" indicator-dots=true indicator-active-color="#ffffff">
		<swiper-item v-for="(item,index) in topImages" :key="index">
			<u-lazy-load :image="item" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
			<!-- <image :src="item"></image> -->
		</swiper-item>
	</swiper>
	
</template>

<script>
	export default{
		name:'DetailSwiper',
		props:{
			topImages:{
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
		}
	}
</script>

<style lang="scss">
	
	.detail-swiper{
		height: 600rpx;
		overflow: hidden;
		u-lazy-load{
			width: 100%;
			height: 1000rpx;
		}
	}
</style>
