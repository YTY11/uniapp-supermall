<template>
<view class="user-info">
  <slot name="user-icon">
	  <image v-if="user.avatarUrl==''" class="icon privateImage-svg left"  src="../../../static/img/tabbar/profile.png"></image>
	<image class="avatarUrl"  v-else :src="user.avatarUrl"></image>
  </slot>
  
  <u-button type="warning" @click="login" v-if="user.avatarUrl==''">一键登陆</u-button>
  <view class="login" v-if="user.name!=''">
    <slot name="login-or-register">
		
     <text>{{user.name}}</text>
    </slot>

    <view class="phone">
      <text>{{user.country}} {{user.province}} {{user.city}}</text>
     
    </view>

  </view>
  <svg t="1619341923729" class="arrow-svg right" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2990" width="200" height="200"><path d="M699.733333 448L456.533333 202.666667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l245.333334 245.333333c10.666667 10.666667 17.066667 25.6 17.066666 40.533333s-6.4 29.866667-17.066666 40.533334L409.6 817.066667c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333L699.733333 618.666667c23.466667-23.466667 36.266667-53.333333 36.266667-85.333334s-12.8-61.866667-36.266667-85.333333z" p-id="2991" fill="#ffffff"></path></svg>
</view>
</template>

<script>
export default {
  name: "UserInfo",
  data(){
	  return{
		  user:{name:'',
		  avatarUrl:'',
		  country:'',
		  province:'',
		  city:''}
	  }
  },
  methods:{
	  login(){
	  	uni.login({
	  	  provider: 'weixin',
	  	  success:  (loginRes)=> {
	  	    console.log(loginRes.authResult);
	  	    // 获取用户信息
	  	    uni.getUserInfo({
	  	      provider: 'weixin',
	  	      success: (infoRes) =>{
				  
				  this.user.name = infoRes.userInfo.nickName
				  this.user.avatarUrl = infoRes.userInfo.avatarUrl
				  this.user.country = infoRes.userInfo.country
				  this.user.province = infoRes.userInfo.province
				  this.user.city = infoRes.userInfo.city
				 
	  	      }
	  	    });
	  	  }
	  	});
	  }
  }
}
</script>

<style scoped>
.user-info{
  padding: 0 20rpx;
  height: 180rpx;
  width: 100%;
  background-color: #ff8198;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 32rpx;
}
.user-info .privateImage-svg{
  width: 120rpx;
  height: 120rpx;
  border: 1px solid #cccccc;
  border-radius: 50%;
  background-color: #fff;
}
.avatarUrl{
	width: 120rpx;
	height: 120rpx;
	border: 1px solid #cccccc;
	border-radius: 50%;
	background-color: #fff;
}
.login{
  padding: 0 20rpx;
}
.icon-mobile{
  width: 30rpx;
  height: 30rpx;
}
.phone{
  margin-top: 16rpx;
}
.arrow-svg{
  width: 50rpx;
  height: 50rpx;
  margin-left: auto;
}
</style>
