<template>
	<div class="fendian">
		<div class="option">
			<select v-model="selected">
			  <option v-for="option in options" v-bind:value="option.address">
			    {{ option.store }}
			  </option>
			</select>
			<div class="locationInfo">
				<div class="locationIcon"><img src="../../static/images/location@2x.png"/></div>
				<div id="address">
		   			{{ selected }}
		   		</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				selected: '武汉市洪山区中南路群光大厦b座',
				options:[{store:'武昌店',address:'武汉市洪山区中南路群光大厦b座'},
						   {store:'汉口店',address:'武汉市硚口区王家湾商务CBD'}
				          ]
			}
		}
	}
</script>

<style>
	.fendian {
		padding: 0 10px;
	}
	
	.option {
		width: 100%;
		background: #FFFFFF;
		border-radius: 10px;
		margin-top: 10px;
		overflow: hidden;
	}
	
	.option select,
	option {
		margin: 14px 14px;
		width: 140px;
		height: 30px;
		color: #999;
		font-size: 15px;
		border-color: lightblue;
		border-radius: 5px;
		outline: none;
	}
	.locationInfo{
		margin-left: 14px;
	}
	.locationIcon img {
		width: 16px;
		float: left;
	}
	
	#address {
		font-size: 15px;
		color: #999;
		margin-left: 26px;
		width: 300px;
		margin-bottom: 14px;
	}
</style>