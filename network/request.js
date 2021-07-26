//封装网络请求
const BASE_URL = "http://152.136.185.210:7878" //接口地址
const TIME_OUT = 5000 //超时时间

//首页头部轮播等相关数据
export function getHomeMultidata(){
	return new Promise((resole,reject)=>{
		uni.request({
			url:BASE_URL+'/api/m5/home/multidata',
			timeout:TIME_OUT,
			success: (res) => {
				resole(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

//首页商品数据
export function getGoods(type,page){
  return new Promise((resolve,reject)=>{
	  uni.request({
	  	url:BASE_URL + '/api/m5/home/data',
		thimeout:TIME_OUT,
		data:{
			type,
			page
		},
		success: (res)=>{
			resolve(res.data)
		},
		fail: (err) => {
			reject(err)
		}
		
	  })
  })
  
}


//详情页根据iid查询的数据
export function getDetail(iid){
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL+'/api/m5/detail',
			timeout:TIME_OUT,
			data:{
				iid
			},
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
//推荐商品数据
export function getRecommend(){
  return new Promise((resolve,reject)=>{
	  uni.request({
	  	url:BASE_URL + '/api/m5/recommend',
		timeout:TIME_OUT,
		success:(res)=>{
			resolve(res.data)
		},
		fail:(err)=>{
			reject(err)
		}
	  })
  })
}

//后台返回的数据过于凌乱，通过定义对象整合前端展示所需要的数据，便于使用
//商品信息
export class Goods{
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title //标题
    this.newPrice = itemInfo.price //新的价格
    this.oldPrice = itemInfo.oldPrice //旧的价格
    this.discountDesc = itemInfo.discountDesc //优惠名称
    this.discountBgColor = itemInfo.discountBgColor //优惠名称背景色
    this.columns = columns //销量&收藏&默认快递
    this.services = services //购买商品享受的政策（7天无理由退货等）
  }
}
//商家信息
export class Shops{
  constructor(shopInfo){
    this.name = shopInfo.name // 商家名
    this.shopLogo = shopInfo.shopLogo // logo
    this.cGoods = shopInfo.cGoods // 商品数
    this.cSells = shopInfo.cSells // 销量
    this.score = shopInfo.score // 店铺评价信息

  }
}
//参数
export class GoodsParams{
  constructor(info,rule){
    //images可能没有值（某些商品有值，某些没有）
    this.image = info.images ? info.images[0] : "";//图片
    this.infoKey = info.key //"参数说明"title
    this.infos = info.set; //参数信息

    this.ruleKey = rule.key //"尺码说明"title
    this.disclaimer = rule.disclaimer //尺码解释
    this.sizes = rule.tables;//尺码信息
  }
}



//获取分类数据
export function getCategory() {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + '/api/m5/category',
			timeout:TIME_OUT,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

//根据选中的分类获取对应数据
export function getCategorySub(maitKey) {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + '/api/m5/subcategory',
			timeout:TIME_OUT,
			data:{
				maitKey
			},
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
