<template>
	<div class="onlineServer">
		<div class="contentWarp">
			<p>在线功能</p>
			<div class="servers">
				<ul>
					<li id="buyTickte">
						<div id="box1">
							<img src="../../static/images/chargeIn@2x.png"/>
						</div>
						<p>在线购票</p>
					</li>
					<li id="buyClass">
						<div id="box2">
							<img src="../../static/images/yuyue@2x.png"/>
						</div>
						<p>在线报班</p>
					</li>
					<li id="peopleNum">
						<div id="box3">
							<img src="../../static/images/sijiao@2x.png"/>
						</div>
						<p>人数控制</p>
					</li>
					<li id="more">
						<div id="box4">
							<img src="../../static/images/more.png"/>
						</div>
						<p>敬请期待...</p>
					</li>
				</ul>
			</div>
		</div>
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

<style scoped>
	.onlineServer{
		padding: 0 10px;
	}
	.contentWarp{
		margin-top: 10px;
		padding:20px;
		background: #FFFFFF;
		border-radius: 8px;
		
	}
	.contentWarp p{
		color: #333333;
		font-size: 18px;
		font-weight: bold;
		
	}
	.servers ul{
		display: flex;
		justify-content: space-around;
		
	}
	.servers li{
		text-align: center;
		float: left;
		width: 57px;
		height: 57px;
		
		
	}
	.servers li div{
		width: 35px;
		height: 35px;
		text-align: center;
		
		
	}
	#box1,#box2,#box3,#box4{
		

	}
	#buyTickte img{
		width: 36px;
	#buyClass img{
		width: 31px;
	}
	#peopleNum img{
		width: 33px;
	}
	#more img{
		width: 35px;
	}
	.servers p{
		margin-top: 8px;
		font-weight: normal;
		font-size: 12px;
		color: #999;
	}
</style>