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
   		<img src="../assets/home_1.jpg">
   	</div>
   	<div id="pres">
   		<p>
   			<span>
   				最新揭晓
   			</span>
   			<a href="">
   				更多&gt;
   			</a>
   		</p>
   		<ul>
   			<li>
   				<img src="../assets/jie1.jpg">
   				<p>
   					恭喜<span>于海燕</span>获得
   				</p>
   			</li>
   			<li>
   				<img src="../assets/jie2.jpg">
   				<p>
   					恭喜<span>赵启红</span>获得
   				</p>
   			</li>
   			<li>
   				<img src="../assets/jie3.jpg">
   				<p>
   					恭喜<span>高佳鹏</span>获得
   				</p>
   			</li>
   		</ul>
   	</div>
   	<div id="packet">
   		<div>
   			<img src="../assets/fa1.jpg" alt="">
   		</div>
   		<div>
   			<img src="../assets/fa2.jpg" alt="">
   		</div>
   		<div>
   			<img src="../assets/fa3.jpg" alt="">
   		</div>
   	</div>
   	<div id="homeList">
   		<p>
   			<span>人气</span>
   			<span>最新</span>
   			<span>进度</span>
   			<span>总需人次</span>
   		</p>
   		<ul>
   			<li></li>
   		</ul>
   	</div>
  </div>
</template>

<script>
	const ERR_OK = 0;

export default {
  name: 'home',
  /*props: {
  	home: {
  		type: Object,
  	}
  },*/
  data() {
  	return {
  		homeli: []
  	};
  },
  created() {
  	this.$http.get('/api/hm').then((response) => {
  		response = response.body;
  		
  		if (response.errno === ERR_OK) {
  			this.home = response.data;
  			console.log(this.home);
  		}
  	});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home{
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
		border-bottom:0.6rem solid #eee;
	}
	#notice>img{
		width:100%;
		height:100%;
		display:block;
	}
	#pres{
		width:100%;
	}
	#pres>p{
		width:100%;
		height:1.2rem;
		font-size:0.45rem;
		line-height:1.2rem;
		border-bottom:1px solid #ccc;
	}
	#pres>p>span{
		display:inline-block;
		float:left;
		margin-left:0.3rem;
	}
	#pres>p>a{
		float:right;
		margin-right:0.3rem;
		color:#6c6c6c;
	}
	#pres>ul{
		width:100%;
		height:4.5rem;
		overflow:hidden;
	}
	#pres>ul>li{
		float:left;
		width:33.33%;
		text-align:center;
	}
	#pres>ul>li>img{
		width:80%;
	}
	#pres>ul>li>p{
		font-size:0.45rem;
	}
	#pres>ul>li>p>span{
		color:rgb(0,121,254);
	}
	#packet{
		width:100%;
		height:4.5rem;
		overflow:hidden;
		background:#eee;
	}
	#packet>div{
		float:left;
		width:30%;
		margin-top:0.3rem;
		margin-left:2.5%;
	}
	#packet>div>img{
		width:100%;
		height:100%;
		display:block;
	}
	#homeList{
		width:100%;
	}
	#homeList>p{
		display:flex;
		width:100%;
		height:1.2rem;
		line-height:1.2rem;
	}
	#homeList>p>span{
		flex:1;
		font-size:0.45rem;
		text-align:center;
	}

}
</style>
