<template>
  <div class="car">
	  <nav>
	  	<a href="#/">&lt;</a>
	  	<span>购物车</span>
	  </nav>
  </div>
</template>

<script>
export default {
  name: 'car'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.car{
	nav{
		width:100%;
		height:1.8rem;
		position:fixed;
		top:0;
		left:0;
		display:flex;
		line-height:1.8rem;
	}
	nav>a{
		flex:1;
		text-align:center;
	}
	nav>span{
		flex:5;
		text-align:center;
	}
}
</style>
