<template>
<view class="list-view">
  <view class="list-view-one">
    <view>
		<image class="news" src="../../../static/img/myMsg.png"></image>
      <view>我的消息</view>
    </view>
    <view>
		<image class="news" src="../../../static/img/jifen.png"></image>
      <view>积分商城</view>
    </view>
    <view>
		<image class="news" src="../../../static/img/vip.png"></image>
      <view>会员卡</view>
    </view>
  </view>
  <view class="list-view-two">
    <view @click="fenXiang">
		<image class="news" src="../../../static/img/fenX.png"></image>
      <view >分享</view>
    </view>
    <view>
		<image class="news" src="../../../static/img/tabbar/cart.png"></image>
      <view>下载购物车APP</view>
    </view>
  </view>
</view>
</template>

<script>
export default {
  name: "ListView",
  methods:{
    goCartPage(){
      this.$router.push('/cart')
    },
	fenXiang(){
		uni.share({
		    provider: "weixin",
		    scene: "WXSceneSession",
		    type: 0,
		    href: "http://uniapp.dcloud.io/",
		    title: "uni-app分享",
		    summary: "我正在使用HBuilderX开发uni-app！",
		    imageUrl: "../static/img/background.png",
		    success: function (res) {
		        console.log("success:" + JSON.stringify(res));
		    },
		    fail: function (err) {
		        console.log("fail:" + JSON.stringify(err));
		    }
		});
	},
  }
}
</script>

<style scoped>
.list-view{

}
.list-view-two image{
	width: 50rpx;
	height: 50rpx;
	margin: 24rpx;
}
.list-view-one > view , .list-view-two > view{
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(168,167,166,0.1);
}
.list-view-one view:nth-child(3){
  border-bottom: 5px solid rgba(168,167,166,0.1);
}
.news{
  width: 50rpx;
  height: 50rpx;
  margin: 24rpx;
}

.list-view-two{

}
</style>
