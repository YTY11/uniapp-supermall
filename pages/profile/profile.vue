<!-- <template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="map1" style="width: 100%; height: 100vh;" :latitude="latitude" :longitude="longitude"
					:markers="markers">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: '',
				longitude: '',
				markers: []
			};
		},
		onShow() {
			var that = this
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					that.latitude = res.latitude
					that.longitude = res.longitude
					let arr = [{
						id: 0,
						longitude: res.longitude,
						latitude: res.latitude,
						name: res.address
					}]
					let markers = []
					for (var i = 0; i < arr.length; i++) {
						markers = markers.concat({
							id: arr[i].id,
							latitude: arr[i].latitude, //纬度
							longitude: arr[i].longitude, //经度
						width:20,
						height:20,
							iconPath: '/static/img/localtionIcon3.png',
							
							callout: { //自定义标记点上方的气泡窗口 点击有效
								content: arr[i].name, //文本
								color: '#ffffff', //文字颜色
								fontSize: 10, //文本大小
								borderRadius: 2, //边框圆角
								bgColor: '#00c16f', //背景颜色
								display: 'ALWAYS', //常显
							},
						})
					}
					that.markers = markers
					console.log(that.markers)
				}
			})
		},
		onReady() {

			// this.moveToLocation()
		},
		methods: {
			moveToLocation() {

			},
			getLocation() {
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						this.longitude = res.longitude
						this.latitude = res.latitude

						const mapContext = uni.createMapContext("map1")

						mapContext.moveToLocation({
							longitude: this.longitude,
							latitude: this.latitude,
							success: res => {
								this.covers = []
								this.covers.push({
									latitude: this.latitude,
									longitude: this.longitude,
									iconPath: '/static/img/locationIcon.png',
									width: 20,
									height: 20
								})
								console.log(res)
							}
						})
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					}
				});
			},

		}
	}
</script>

<style lang="scss">

</style> -->





<template>
    <view class="content">
       <!-- <button @click="fenXiang">分享</button>
	   <button @click="saoMa">扫一扫</button>
	   <button @click="login">一键登陆</button> -->
	   
	   
	    <!-- 用户信息 -->
	       <user-info/>
	   
	       <!-- 余额积分优惠券 -->
	       <section class="section">
	         <view>
	           <text>0.00</text>元
	           <view>我的余额</view>
	         </view>
	         <view>
	           <text>0</text>个
	           <view>优惠券</view>
	         </view>
	         <view>
	           <text>0</text>个
	           <view>积分</view>
	         </view>
	       </section>
	   
	       <!-- 消息 -->
	       <list-view/>
       <!-- <mi-map 
           
            ref="miMap"
            tipText="mi-Map"
            @updateAddress="updateAddress"
        >
        </mi-map> -->
    </view>
</template>
<script>
    import miMap from '../../components/mi-map/mi-map.vue'
	
	
	
	//用户信息
	import UserInfo from "./childComps/UserInfo.vue";
	//消息组件
	import ListView from "./childComps/ListView.vue";
    export default {
        components: {miMap,ListView,UserInfo},
        data() {
            return {
              
                positionObj: {},
            }
        },
        methods: {
            // 更新地址并关闭地图
            updateAddress(addressObj) {
				console.log(addressObj);
                
                this.positionObj = addressObj
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
			saoMa(){
				// 只允许通过相机扫码
				uni.scanCode({
				    onlyFromCamera: true,
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			login(){
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    console.log(loginRes.authResult);
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: function (infoRes) {
						   
				        console.log('用户昵称为：' + infoRes.userInfo.nickName);
				      }
				    });
				  }
				});
			}
        }
    }
</script>

<style>
   /* .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .address{
        margin-top: 1rem;
    } */
	
	.profile{
	
	}
	.profile-nav-bar{
	  background-color: var(--color-tint);
	  color: #fff;
	}
	.section{
	  display: flex;
	  align-items: center;
	  justify-content: space-around;
	  padding: 40rpx 0;
	  border-bottom: 5px solid rgba(168,167,166,0.1);
	  font-size: 24rpx;
	}
	.section > view{
	  flex: 1;
	  text-align: center;
	}
	.section view text{
	  font-size: 40rpx;
	  color: #ff8198;
	}
	.section view view{
	  margin-top: 18rpx;
	}
</style>