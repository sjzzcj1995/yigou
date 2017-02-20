<template>
  <div class="yi">
   	<nav>
   		<img src="../assets/yifang.jpg">
   		<img src="../assets/yi.jpg">
   	</nav>
  </div>
</template>

<script>
export default {
  name: 'yi'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.yi{
	nav{
		display:flex;
		width:100%;
		height:1.8rem;
		border:1px solid red;
	}
	nav>img{
		display:block;
	}
	nav>img:nth-child(1){
		flex:1;
	}
	nav>img:nth-child(1){
		flex:10;
	}
}
</style>
