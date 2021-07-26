<template>
	<view class="category-sub">
		<category-sub-item v-for="(item,index) in categorySub" 
		:key="index" 
		:category-sub-item="item"/>
	</view>
</template>

<script>
	//子组件
	import CategorySubItem from './CategorySubItem.vue'
	export default{
		name:'CategorySub',
		props:{
			categorySub:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		components:{
			CategorySubItem
		}
	}
</script>

<style lang="scss">
	.category-sub{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
</style>
