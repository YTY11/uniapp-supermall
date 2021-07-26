<template>
	<view class="detail-nav-bar">
		<nav-bar>
			<view slot="center" class="detail-nav-center">
				<view v-for="(item,index) in titles" 
				:key="index" 
				 @click="clickDetailNav(index)">
				<text :class="{isActive:index==clickNum}">{{item}}</text></view>
			</view>
		</nav-bar>
	</view>
</template>

<script>
	//头部导航
	import NavBar from '../../../components/common/navBar/NavBar.vue'
	export default{
		name:'DetailNavBar',
		data(){
			return{
				titles:['商品','参数','评论','推荐'],
				clickNum:0
			}
			
		},
		components:{
			NavBar
		},
		methods:{
			//监听点击的内容
			clickDetailNav(index){
				this.$emit('clickDetailNav',index)
			}
		}
	}
</script>

<style lang="scss">
	.detail-nav-bar{
		.detail-nav-center{
			display: flex;
			align-items: center;
			justify-content: space-around;
			.isActive{
				color: #ff8198;
				padding: 10rpx 14rpx;
				border-bottom: 1px solid #ff8198;
			}
		}
	}
</style>
