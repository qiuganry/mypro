<template>
<div id="test">
	<div class="Warp">
		<router-link to='/HelloWorld'>
		<div class="footerItem">
			<div class="home" :class="{homeed:page=='1'}"></div>
			<p :class="{ped:page=='1'}">首页</p>
		</div>
		</router-link>
		<router-link to='/order'>
		<div class="footerItem">
			<div class="order" :class="{ordered:page=='2'}"></div>
			<p :class="{ped:page=='2'}">预约</p>
		</div>
		</router-link>
		<router-link to='/buyCard'>
		<div class="footerItem">
			<div class="buyCard" :class="{buyCarded:page=='3'}"></div>
			<p :class="{ped:page=='3'}">购卡</p>
		</div>
		</router-link>
		<router-link to='/my'>
		<div class="footerItem">
			<div class="my" :class="{myed:page=='4'}"></div>
			<p :class="{ped:page=='4'}">我的</p>
		</div>
		</router-link>
	</div>
</div>
</template>

<script>

export default {
	name: '',
	data () {
			return{
			}
	 },
	props:[
		'page'
	],
	methods:{
//		change:function(){
//			var ccc = document.getElementsByTagName('img');
//			for (var i=0;i<ccc.length;i++) {
//				console.log(ccc[i].src)
//				ccc[i].src = '../../static/images/logo-Gary.png';
//			};
//			
//		}
	 }
	
}
</script>

<style scoped>
#test{
	width: 100%;
}
.Warp{
	height: 60px;
	background: #FFFFFF;
	display: flex;
	justify-content: space-around;
	align-items: center;
	
}
.footerItem{
	
	text-align: center;
	width: 50px;
	height: 50px;
	background: #fff;
}
.footerItem p{
	margin-top: 4px;
}
.home{
	margin: 0 auto;
	width: 26px;
	height: 26px;
	background:url(../../static/images/home.png) no-repeat center/contain;
}
.order{
	margin: 0 auto;
	width: 26px;
	height: 26px;
	background:url(../../static/images/order.png) no-repeat center/contain;
}
.buyCard{
	margin: 0 auto;
	width: 26px;
	height: 26px;
	background:url(../../static/images/buyCard.png) no-repeat center/contain;
}
.my{
	margin: 0 auto;
	width: 26px;
	height: 26px;
	background:url(../../static/images/my.png) no-repeat center/contain;
}
.homeed{
	background-image:url(../../static/images/home2.png);
}
.ped{color: #7EC1FC;}
.ordered{
	background-image:url(../../static/images/order2.png);
}
.buyCarded{
	background-image:url(../../static/images/buyCard2.png);
}
.myed{
	background-image:url(../../static/images/my2.png);
}
</style>