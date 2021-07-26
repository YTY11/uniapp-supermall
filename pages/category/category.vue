<template>
	<view class="category">

		<category-menu class="category-left" :category-menu="categoryMenu" @clickItem="clickItem" />

		<category-sub class="category-right" :category-sub="categorySub" />

	</view>
</template>

<script>
	//左边组件
	import CategoryMenu from './childComps/CategoryMenu.vue'
	//右边组件
	import CategorySub from './childComps/CategorySub.vue'

	//网络获取数据
	import {
		getCategory,
		getCategorySub
	} from '../../network/request.js'
	export default {
		name: 'category',
		data() {
			return {
				maitKey: '3627',
				categoryMenu: [],
				categorySub: []
			};
		},
		components: {
			CategoryMenu,
			CategorySub
		},
		onLoad() {
			this.getCategory()
			this.getCategorySub(this.maitKey)
		},
		methods: {
			//点击左侧选项获取对应id
			clickItem(maitKey) {
				this.categorySub = []
				this.getCategorySub(maitKey)
			},


			//网络数据
			//分类左侧数据
			getCategory() {
				getCategory().then(res => {
					this.categoryMenu = res.data.category.list
					console.log(this.categoryMenu);
				}).catch(err => {
					console.log(err);
				})
			},
			//右侧数据
			getCategorySub(maitKey) {
				getCategorySub(maitKey).then(res => {
					this.categorySub = res.data.list
					console.log(this.categorySub);
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style lang="scss">
	.category {
		display: flex;
		overflow: hidden;
		//#ifdef H5
		height: calc(100vh - 94px);
		//#endif
		//#ifdef APP-PLUS
		height: 100vh;
		//#endif
		.category-left {
			overflow-y: auto;

		}

		.category-right {
			flex: 1;
			overflow-y: auto;
			padding: 20rpx;
		}
	}
</style>
