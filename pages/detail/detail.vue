<template>
	<view class="detail" v-cloak>

		<!-- 头部导航 -->
		<detail-nav-bar ref="navBar" @clickDetailNav="clickDetailNav" class="detail-nav-bar-top" />
		<scroll-view scroll-with-animation=true class="detail-scroll" scroll-y=true @scroll="detailScroll"
			:scroll-top='scrollTop' refresher-triggered="triggered" @refresherrefresh="refresherrefresh"
			@refresherrestore="refresherrestore" @refresherabort="refresherabort">
			<!-- 头部轮播图 -->
			<detail-swiper id="detailSwiper" :topImages="topImages" />

			<view class="detail-msg">
				<!-- 价格等数据 -->
				<detail-goods :goods="goods" />
				<!-- 商家信息 -->
				<detail-shops :shops='shops' />
				<!-- 详情信息 -->
				<detail-info :detailInfo="detailInfo" />
				<!-- 参数信息 -->
				<detail-params id="params" :detail-params='goodsParams' />
				<!-- 评论信息 -->
				<detail-comment id="comment" :detail-comment='commentInfo' />
				<!-- 推荐信息 -->
				<goods-list id="bottom" class="detail-bottom" :goods='recommend' />
			</view>

		</scroll-view>
		<!-- 底部导航 -->
		<uni-goods-nav class="uni-goods-nav" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" />
		<!-- 回到顶部 -->
		<back-top class="detail-back-top" @click.native="backTop" v-if="isShowBackTop" />

	</view>
</template>

<script>
	//头部导航组件
	import DetailNavBar from './childComps/DetailNavBar.vue'
	//头部轮播图组件
	import DetailSwiper from './childComps/DetailSwiper.vue'
	//价格等数据
	import DetailGoods from './childComps/DetailGoods.vue'
	//商家信息组件
	import DetailShops from './childComps/DetailShops.vue'
	//详情组件
	import DetailInfo from './childComps/DetailInfo.vue'
	//参数组件
	import DetailParams from './childComps/DetailParams.vue'
	//评论组件
	import DetailComment from './childComps/DetailComment.vue'
	//推荐商品组件
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	//回到顶部
	import BackTop from '../../components/common/backTop/BackTop.vue'


	//引入mapAction 用于使用action中定义的方法
	import {
		mapActions,mapGetters
	} from 'vuex'
	//网络请求数据
	import {
		getDetail,
		Goods,
		Shops,
		GoodsParams,
		getRecommend
	} from '../../network/request.js'
	//防抖函数
	import {
		debounce
	} from '../../utils/utils.js'

	export default {
		data() {
			return {
				_freshing: false,
				triggered: false,
				iid: '',
				topImages: [],
				goods: {},
				shops: {},
				detailInfo: {},
				goodsParams: {},
				commentInfo: {},
				recommend: [],
				oldScrollTop: 0,
				scrollTop: 0,
				paramsTop: 0,
				commentTop: 0,
				bottomTop: 0,
				isShowBackTop: false,
				options: [{
						icon: 'headphones',
						text: '客服'
					},
					{
						icon: 'shop',
						text: '店铺',
						info: 0,
						infoBackgroundColor: '#007aff',
						infoColor: "red"
					},
					{
						icon: 'cart',
						text: '购物车',
						info: 0
					}
				],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(option) {
			this.iid = option.iid
			this.getDetail(this.iid)
			this.getRecommend()

		},
		onReady() {
			
			
		this.options[2].info =	this.cartLength()
		},
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailGoods,
			DetailShops,
			DetailInfo,
			DetailParams,
			DetailComment,
			GoodsList,
			BackTop
		},

		methods: {
			...mapGetters(["cartLength"]),
			//下拉刷新
			refresherrefresh() {

			},
			//下拉复位
			refresherrestore() {

			},
			//下拉中止
			refresherabort() {

			},
			//头部导航点击
			clickDetailNav(index) {
				//获取每一个组件距离顶部的距离
				const query = uni.createSelectorQuery();
				//跳转指定位置
				switch (index) {
					case 0:
						this.scrollTop = 0
						break
					case 1:
						uni.createSelectorQuery().select("#params").boundingClientRect(data => {
							uni.createSelectorQuery().select("#detailSwiper").boundingClientRect((
								res) => { //最外层盒子节点
								this.scrollTop = -(res.top - data.top)
							}).exec()
						}).exec();
						break
					case 2:
						uni.createSelectorQuery().select("#comment").boundingClientRect(data => {
							uni.createSelectorQuery().select("#detailSwiper").boundingClientRect((
								res) => { //最外层盒子节点
								this.scrollTop = -(res.top - data.top)
							}).exec()
						}).exec();
						break
					case 3:
						uni.createSelectorQuery().select("#bottom").boundingClientRect(data => {
							uni.createSelectorQuery().select("#detailSwiper").boundingClientRect((
								res) => { //最外层盒子节点
								this.scrollTop = -(res.top - data.top)
							}).exec()
						}).exec();
						break
				}
			},

			//网路请求数据
			//根据iid获取详情数据
			async getDetail(iid) {
				await getDetail(iid).then(res => {
					const data = res.result
					//头部轮播数据
					this.topImages = data.itemInfo.topImages
					//2.获取价格活动等信息
					this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
					//3.获取商家信息
					this.shops = new Shops(data.shopInfo)
					//4.获取详情信息
					this.detailInfo = data.detailInfo
					//5.获取参数信息
					this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
					//6.获取评论信息
					if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0]
				}).catch(err => {
					console.log(err);
				})
			},

			//获取商品数据
			async getRecommend() {
				await getRecommend().then(res => {
					this.recommend = res.data.list

				}).catch(err => {
					console.log(err);
				})
			},

			//监听scroll-view 滚动
			detailScroll(event) {
				this.oldScrollTop = event.detail.scrollTop
				this.isShowBackTop = this.oldScrollTop >= 100
				//获取每一个组件距离顶部的距离
				const query = uni.createSelectorQuery().in(this);
				query.select("#params").boundingClientRect(data => {
					if (data.top <= 44) {
						this.$refs.navBar.clickNum = 1
					} else {
						this.$refs.navBar.clickNum = 0
					}
				}).exec();
				query.select("#comment").boundingClientRect(data => {
					if (data.top <= 44) {
						this.$refs.navBar.clickNum = 2
					}
				}).exec();
				query.select("#bottom").boundingClientRect(data => {
					if (data.top <= 44) {
						this.$refs.navBar.clickNum = 3
					}
				}).exec();
			},



			//回到顶部
			backTop() {
				this.scrollTop = this.oldScrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				})
			},
			//导入Vuex中加入购物方法
			...mapActions(['addCar']),
			//加入购物车
			onClick(e) {
				if (e.content.text == '购物车') {
					uni.switchTab({
						url: "/pages/cart/cart"
					})

				}
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},

			buttonClick(e) {
				console.log(this.iid);
				console.log(e);
				if (e.index == 0) {
					const shopMsg = {}
					shopMsg.img = this.topImages[0]
					shopMsg.title = this.goods.title
					shopMsg.price = this.goods.newPrice
					shopMsg.iid = this.iid
					//将商品交给Vuex管理
					this.addCar(shopMsg).then(res => {
						this.options[2].info =	this.cartLength()
						uni.showToast({
							title: `${res}`,
							icon: 'none'
						})
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		.detail-nav-bar-top {
			z-index: 1;
			position: sticky;
			//#ifdef H5
			top: 88rpx;
			//#endif

			//#ifdef APP-PLUS
			top: 0;
			//#endif
			background-color: #fff;
		}

		.detail-scroll {
			//#ifdef APP-PLUS
			height: calc(100vh - 88rpx - 50px);
			//#endif
			//#ifdef H5
			height: calc(100vh - 88rpx - 50px - 44px);

			//#endif
			.detail-msg {
				padding: 10rpx 20rpx;
			}

			.detail-bottom {
				margin: 30rpx 0;
			}
		}

		.detail-back-top {
			margin-bottom: 50px;
		}


	}
</style>
