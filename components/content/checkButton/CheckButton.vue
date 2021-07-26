<template>
<view class="check-button" :class="{isActive:isShow}">
    <image src="../../../static/img/cart/tick.svg" alt="">
</view>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isShow:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style lang="scss">
.check-button{
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #F2F2EE;
  image{
  	width: 40rpx;
  	height: 40rpx;
  	border-radius: 50%;
  }
}
.isActive{
  background-color: #ff8198;
}

</style>
