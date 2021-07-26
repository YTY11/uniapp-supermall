import {ADD_TO_CAR,ADD_COUNTER} from "./mutation-type";

export default {
  //加入购物车方法
  addCar(context, payload){
    return new Promise((resolve,reject)=>{
      //查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //判断oldProduct 是否有值
      if(oldProduct){
        //有值，原商品数量加1
        context.commit(ADD_COUNTER,oldProduct)
        resolve("商品数量加1")
      }
      else{
        //无值，添加该商品
        payload.count = 1
        context.commit(ADD_TO_CAR,payload)
        resolve("成功添加新商品")
      }
    })
  }
}
