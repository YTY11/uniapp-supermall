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
       
        <mi-map 
           
            ref="miMap"
            tipText="mi-Map"
            @updateAddress="updateAddress"
        >
        </mi-map>
    </view>
</template>
<script>
    import miMap from '../../components/mi-map/mi-map.vue'
    export default {
        components: {miMap},
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
        }
    }
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .address{
        margin-top: 1rem;
    }
</style>