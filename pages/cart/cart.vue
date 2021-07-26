<template>
	<view class="cart">
		<view class="cart-center" v-if="isShow">
			<u-empty class="u-empty" text="购物车为空" mode="car" :show='true'></u-empty>
		</view>
	
		<cart-list class="cart-list"/>
		<cart-bottom/>
	</view>
</template>

<script>
	//商品
	import CartList from './childComps/CartList.vue'
	//计算
	import CartBottom from './childComps/CartBottom.vue'
	//引入mapAction 用于使用action中定义的方法
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			isShow(){
				return !this.cartList().length > 0
			}
		},
		components:{
			CartList,
			CartBottom
		},
		methods:{
			...mapGetters(['cartList']),
		}
		
	}
</script>

<style lang="scss">
	.cart {
		
		.cart-list{
			padding-bottom: 88rpx;
		}
		.cart-center{
			display: flex;
			align-items: center;
			height: 500rpx;
			.u-empty{
				flex: 1;
			}
		}
	}
</style>
