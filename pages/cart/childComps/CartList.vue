<template>
	<view class="cart-list">
		<cart-list-item v-for="(item,index) in cartList" :key="index" :cart-data='item'/>
	</view>
</template>

<script>
	//引入mapAction 用于使用action中定义的方法
	import {
		mapGetters
	} from 'vuex'
	
	//子组件
	import CartListItem from './CartListItem.vue'
	export default{
		name:'CartList',
		computed:{
			...mapGetters(['cartList'])
		},
		components:{
			CartListItem
		}
	}
</script>

<style lang="scss">
	.cart-list{
		
	}
</style>
