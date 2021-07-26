<template>
	<view class="content">
		<!-- 商品导航 使用两个实现吸顶效果-->
		<tab-control :itemList="['流行','新款','精选']" ref="tabControl2" @clickItem="clickItem" class="tab-control2"
			v-show="isShowTabControl"></tab-control>
		<!-- 滚动区域 -->

		<scroll-view class="index-scroll" :scroll-top="scrollTop" scroll-y=true @scrolltolower="lowerLoadData"
			lower-threshold=50 @scroll="scroll" scroll-with-animation=true>
			<!-- 头部轮播 -->
			<index-swiper class="index-swiper" :banners="banners" />
			<!-- 优惠信息 -->
			<recommend-info :recommends="recommends" />
			<!-- 本周流行 -->
			<popular-info />

			<!-- 商品导航 -->
			<tab-control id="tab-control" :itemList="['流行','新款','精选']" ref="tabControl1" @clickItem="clickItem"></tab-control>
			<!-- 商品组件 -->
			<goods-list :goods="goods" />

		</scroll-view>

		<!-- 回到顶部 -->
		<back-top @click.native="backTop" v-if="isShowBackTop" />
	</view>
</template>

<script>
	//头部轮播组件
	import IndexSwiper from './childComps/IndexSwiper.vue'
	//优惠信息组件
	import RecommendInfo from './childComps/RecommendInfo.vue'
	//本周流行组件
	import PopularInfo from './childComps/PopularInfo.vue'
	//商品导航组件
	import TabControl from '../../components/content/tabControl/TabControl.vue'
	//商品组件
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	//回到顶部组件
	import BackTop from '../../components/common/backTop/BackTop.vue'

	//网路请求方法
	import {
		getHomeMultidata,
		getGoods
	} from '../../network/request.js'
	export default {
		data() {
			return {
				scrollTop: 0,
				oldScrollTop: 0,
				banners: [],
				recommends: [],
				goodsList: {
					'pop': {
						list: [],
						page: 0
					},
					'sell': {
						list: [],
						page: 0
					},
					'new': {
						list: [],
						page: 0
					}
				},
				type: 'pop',
				isShowTabControl: false,
				isShowBackTop: false,
				tabControlTop:0,
				isLowerLoad:false
				

			}
		},
		onLoad() {
			this.getHomeMultidata()
			this.getGoods('pop')
			this.getGoods('sell')
			this.getGoods('new')

		},
		computed: {
			goods() {
				return this.goodsList[this.type].list
			}
		},
		components: {
			IndexSwiper,
			RecommendInfo,
			PopularInfo,
			TabControl,
			GoodsList,
			BackTop
		},
		
		methods: {
			//网路请求数据
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					if (res.success) {
						this.banners = res.data.banner.list
						this.recommends = res.data.recommend.list
					}
				}).catch(err => {
					console.log(err)
				})
			},
			//获取商品信息
			getGoods(type) {
				const page = ++this.goodsList[type].page
				getGoods(type, page).then(res => {
					if (res.success) {
						this.goodsList[type].list.push(...res.data.list)
						this.isLowerLoad = true
					}

				}).catch(err => {
					console.log(err);
				})
			},

			//监听导航的点击
			clickItem(index) {
				switch (index) {
					case 0:
						this.type = 'pop'
						break
					case 1:
						this.type = 'sell'
						break
					case 2:
						this.type = 'new'
						break
				}

				//保持2个商品导航选中的一样		
				this.$refs.tabControl1.clickNumber = index
				this.$refs.tabControl2.clickNumber = index

			},

			//滚动到底部加载下一页数据
			lowerLoadData() {
				//防止多次触发
				if(this.isLowerLoad){
					this.getGoods(this.type)
					this.isLowerLoad = false
				}
				
			},

			//监听滚动
			scroll(event) {

				//判断商品导航2是否显示 h5可以使用 app 小程序中无法使用this.$refs.tabControl1.$el.offsetTop获取高度
				// this.isShowTabControl = event.detail.scrollTop >= this.$refs.tabControl1.$el.offsetTop

				//解决app中如法获取高度问题 h5中也可以使用
				
				//解决app中如法获取高度问题 h5中也可以使用
				const query = uni.createSelectorQuery().in(this);
				query.select("#tab-control").boundingClientRect(data => {  
					this.isShowTabControl = data.top<=0
				}).exec();

				//判断回到顶部按钮是否显示
				this.isShowBackTop = event.detail.scrollTop >= 100
				this.oldScrollTop = event.detail.scrollTop

			},

			//回到顶部 
			backTop() {
				this.scrollTop = this.oldScrollTop
				//视图渲染结束
				this.$nextTick(() => {
					this.scrollTop = 0
				});
			}




		}
	}
</script>

<style lang="scss">
	.content {

		.index-scroll {
			height: 100vh;
			.index-swiper{
				height: 360rpx;
			}
		}

		.tab-control2 {
			position: fixed;
			width: 100%;
			left: 0;
			right: 0;
			//#ifndef H5
			top: 88rpx;
			//#endif
			//#ifdef APP-PLUS
			top: 0;
			//#endif
			z-index: 1;
		}

	}
</style>
