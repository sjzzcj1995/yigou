<template>
  <div class="home">
  	<nav>
   		<div>
   			<a href=""><img src="../assets/homef.png"></a>
   		</div>
   		<div>
   			<img src="../assets/homedb.png">
   		</div>
   		<div>
   			<a href=""><img src="../assets/homex.png"></a>
   		</div>
   	</nav>
   	<div id="notice">
   		<a href=""><img src="../assets/home_1.jpg"></a>
   	</div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin:0;
	padding:0;
}
html{
	font-size:25px;
}
a{
	text-decoration:none;
}
nav{
	width:100%;
	height:1.8rem;
	background:rgb(219,54,82);
	position:fixed;
	left:0;
	top:0;
	display:flex;
}
nav>div{
	margin-top:0.4rem;
}
nav>div>a{
	display:line-block;
}
nav>div:nth-child(1){
	flex:1;
	margin-left:0.5rem;
}
nav>div:nth-child(1)>a>img{
	width:50%;
}
nav>div:nth-child(2){
	flex:4;
	text-align:center;
}
nav>div:nth-child(2)>img{
	width:50%;
}
nav>div:nth-child(3){
	flex:1;
	text-align:right;
	margin-right:0.5rem;
}
nav>div:nth-child(3)>a>img{
	width:50%;
}
#notice{
	width:100%;
	margin-top:1.8rem;
	border-bottom:0.3rem solid #ccc;
}
#notice>a{
	display:inline-block;
}
#notice>a>img{
	width:100%;
	height:100%;
}
</style>
