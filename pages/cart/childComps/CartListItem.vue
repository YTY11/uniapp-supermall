<template>
	<view class="cart-list-item">
		<view class="active-item">
			<check-button :is-show="cartData.checked" @click.native="checkedClick" />
		</view>
		<view class="item-img">
			<image :src="cartData.img" />
		</view>
		<view class="item-msg">
			<view class="item-title">{{ cartData.title }}</view>
			<view class="item-title-litter">{{ cartData.title }}</view>
			<view class="item-price">
				<text class="cart-item-price">{{ cartData.price }}</text>
				<text class="cart-item-count">×{{ cartData.count }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	//选中组件
	import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
	export default {
		name: 'CartListItem',
		props: {
			cartData: {
				type: Object,
				default () {
					return []
				}
			}
		},
		components: {
			CheckButton
		},
		methods: {
			//选中与不选切换
			checkedClick() {
				this.cartData.checked = !this.cartData.checked
			}
		}
	}
</script>

<style lang="scss">
	.cart-list-item {
		width: 100%;
		display: flex;
		flex: 1;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		padding: 20rpx;

		.item-img {
			padding: 10rpx;

			image {
				width: 110rpx;
				height: 166rpx;
				border-radius: 16rpx;
			}
		}

		.item-msg {
			overflow: hidden;
			display: flex;
			justify-content: space-around;
			flex-flow: column;
			height: 100%;
			view{
				padding: 10rpx;
			}
			.item-title,
			.item-title-litter {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

		}

	

		.item-title {
			font-size: 40rpx;
		}

		.item-title-litter {
			font-size: 32rpx;
		}

		.cart-item-price {
			color: #ff8198;
			font-size: 32rpx;
		}

		.item-price {
			display: flex;
			justify-content: space-around;
		}

		.item-price text {
			flex: 1;
		}
	}
</style>
