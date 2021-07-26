
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	.uni-table .uni-table-tr:hover{
		background-color: #fff!important;
	}
	.amap-logo{
	       display: none;
	       opacity:0 !important;
	       }
	       .amap-copyright {
	           opacity:0;
	       }
</style>
