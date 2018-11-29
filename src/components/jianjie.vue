<template>
	<div class="jianjie">
		<div class="contentWarp">
			<p id="left">场馆简介</p>
			<p id="right">了解更多</p>
			<div class="detil">
				{{detil}}<li></li>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				detil:'P标签是默认是自动换行的，因此设置好宽度之后，能够较好的实现效果，但是最近的项目中发现，使用ajax加载数据之后，p标签内的内容没有换行，导致布局错乱，于是尝试着使用换行样式，虽然解决了问题，但是并没有发现本质原因，本质在于，我当时获取的数据是一长串的数字，浏览器应该是对数字和英文单词处理方式相近，不会截断。'
			}
		},
		created(){
			
		},
		methods:{
			
			
			
			
		}
	}
</script>

<style scoped>
	.jianjie{
		padding: 0 10px;
	}
	.contentWarp{
		overflow: hidden;
		padding: 20px;
		background: #FFFFFF;
		border-radius: 8px;
		box-sizing: border-box;
		vertical-align: baseline;
	}
	#left{
		float: left;
		font-size: 18px;
		color: #333;
		font-weight: bold;
		
	}
	#right{
		float: right;
		font-size: 15px;
		color:#7ECEF4;
	}
	.detil{
		word-wrap: break-word;
		text-indent: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
		text-align: justify;
		width: 100%;
		height: 58px;
		margin-top: 38px;
		font: "微软雅黑" 13px #99999;
	}
	.detil li{
		display: inline-block;
		width: 100%;
	}
</style>