<template>
	<view class="detail-params" >
		<view class="detail-params-name">{{detailParams.infoKey}}</view>
		<uni-table class="detail-params-infoKey" v-if="detailParams.infos">
			<uni-tr v-for="(item,index) in detailParams.infos" :key="index">
				<uni-td class="detail-params-key">{{item.key}}</uni-td>
				<uni-td class="detail-params-value">{{item.value}}</uni-td>
			</uni-tr>
		</uni-table>
		<view class="detail-params-name">{{detailParams.ruleKey}}</view>
		<view class="detail-params-disclaimer">{{detailParams.disclaimer}}</view>
		<uni-table class="detail-params-infoKey" v-if="detailParams.sizes">
			<uni-tr v-for="(item,index) in detailParams.sizes[0]" :key="index">
				<uni-td v-for="(data,indey) in item" :key="indey">{{data}}</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default{
		name:'DetailParams',
		props:{
			detailParams:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style lang="scss">
	.detail-params{
		font-size: 32rpx;
		.detail-params-name{
			font-size: 38rpx;
			width: 100%;
			text-align: center;
		}
		.detail-params-disclaimer{
			margin: 20rpx 0;
		}
		.detail-params-infoKey{
			margin-bottom: 30rpx;
		}
		.detail-params-key{
			white-space: nowrap;
		}
		.detail-params-value{
			color: #ff8198;
		}
		
	}
</style>
