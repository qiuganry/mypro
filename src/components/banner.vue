<template>
	<div class="content">
		<swipe class="my-swipe">
			<swipe-item class="slide1"></swipe-item>
			<swipe-item class="slide2"></swipe-item>
			<swipe-item class="slide3"></swipe-item>
		</swipe>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

			}
		}
	}
</script>

<style>
	@import 'vue-swipe/dist/vue-swipe.css';
	.content {
		padding: 0 10px;
		width: 100%;
		box-sizing: border-box;
	}
	
	.my-swipe {
		width: 100%;
		margin-top: 10px;
		color: #fff;
		font-size: 30px;
		text-align: center;
	}
	
	.mint-swipe-items-wrap {
		padding-bottom: 50.7%;
	}
	
	.slide1 {
		background: url(../assets/logo.png) no-repeat center/contain;
		color: #fff;
		border-radius: 10px;
	}
	
	.slide2 {
		background-color: #ffd705;
		color: #000;
		border-radius: 10px;
	}
	
	.slide3 {
		background-color: #ff2d4b;
		color: #fff;
		border-radius: 10px;
	}
</style>