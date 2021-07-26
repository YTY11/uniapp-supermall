<template>
	<view class="cart-bottom">
		<view class="cart-bottom-active">
			<check-button :is-show="isShow" @click.native="isAllShow" />
			<view>全选</view>
		</view>
		<view class="cart-all-price">
			<text>总计：</text>
			<text>{{allPrice}}</text>
		</view>
		<view class="cart-account">结算({{shopNum}})</view>
	</view>
</template>

<script>
	//选中组件
	import CheckButton from "../../../components/content/checkButton/CheckButton.vue";

	//vuex getters 方法
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: 'CartBottom',
		components: {
			CheckButton
		},
		computed: {
			...mapGetters(['cartList']),
			//判断全选是否选中
			isShow() {
				if (this.cartList.length == 0) return false

				return !this.cartList.find(item => !item.checked)
			},
			//总价格
			allPrice() {
				//1.先通过filter将选中的商品删选出来
				//2.通过reduce将商品价格和对应数量 相乘 计算出总价格返回
				return '￥' + this.cartList.filter(item =>
					item.checked
				).reduce((befor, after) => {
					return befor + parseFloat(after.price.substr(1)) * after.count
				}, 0).toFixed(2)

			},

			//商品数量
			shopNum() {
				return this.cartList.filter(item => item.checked).length
			}
		},
		methods: {
			//全选或全不选
			isAllShow() {
				if (this.isShow) {
					this.cartList.forEach(item => item.checked = false)
				} else {
					this.cartList.forEach(item => item.checked = true)
				}
			}
		}
	}
</script>

<style lang="scss">
	.cart-bottom {
		position: fixed;
		left: 0;
		right: 0;
		//#ifdef H5
		bottom: 100rpx;
		//#endif
		//#ifdef APP-PLUS
		bottom: 0;
		//#endif
		height: 88rpx;
		width: 100%;
		display: flex;
		align-items: center;

		.cart-bottom-active {
			display: flex;
			background-color: #F2F2EE;
			width: 150rpx;
			height: 100%;
			align-items: center;
			padding-left: 20rpx;

			text {
				font-size: 28rpx;
				margin-left: 16rpx;
			}
		}

		.cart-all-price {
			background-color: #F2F2EE;
			height: 100%;
			flex: 1;
			font-size: 28rpx;
			padding: 0 0 0 40rpx;
			display: flex;
			align-items: center;
		}

		.cart-account {
			color: #fff;
			width: 180rpx;
			background-color: #ff8198;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

		}
	}
</style>
