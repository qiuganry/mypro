<template>
  <div class="hello">
  	<banner></banner>
  	<fendian></fendian>
  	<test class="footer" :page="1"></test>
  	<jianjie id='jianjie'></jianjie>
  	<onlineServer></onlineServer>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	position: fixed;
	bottom: 0;
}
#jianjie{
	margin-top: 10px;
}
</style>
