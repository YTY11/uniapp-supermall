<template>
	<web-view :src="url"> 
		
	</web-view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		onLoad(op) {
			console.log(op.url);
			this.url = decodeURIComponent(op.url)
			console.log(this.url)
		},
		onReady(){//改变标题
		            uni.setNavigationBarTitle({
		                title:'外部链接'
		            })
		        },

		methods: {
			
		}
	}
</script>

<style>

</style>
