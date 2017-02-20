<template>
  <div class="mine">
    <nav>
	  	<a href="#/">&lt;</a>
	  	<span>用户登录</span>
	  	<span></span>
	 </nav>
	 <div id="wrap">
	 	<ul>
	 		<li>
	 			<img src="../assets/use.jpg" alt="">
	 			<input type="text" placeholder="请输入网易邮箱账号">
	 		</li>
	 		<li>
	 			<img src="../assets/password.jpg" alt="">
	 			<input type="text" placeholder="请输入密码">
	 		</li>
	 	</ul>
	 	<button id="btn">登录</button>
	 	<p>
	 		<a href="">忘记密码？</a>
	 		<a href="">去注册</a>
	 	</p>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'mine'
}
</script>

<style lang="scss">
.mine{
	nav{
		width:100%;
		height:1.8rem;
		position:fixed;
		top:0;
		left:0;
		display:flex;
		line-height:1.8rem;
		border-bottom:1px solid #ccc;
		background:#f1f1f1;
	}
	nav>a{
		flex:1;
		text-align:center;
	}
	nav>span:nth-child(2){
		flex:10;
		text-align:center;
		font-size:0.6rem;
	}
	nav>span:nth-child(3){
		flex:1;
	}
	#wrap{
		margin-top:1.8rem;
		background:#f1f1f1;
		height:1000px;
	}
	#wrap>ul{
		width:90%;
		margin:0 auto;
		padding:1rem 0;
	}
	#wrap>ul>li{
		border:1px solid #eee;
		box-sizing:border-box;
		background:#fff;
		height:1.7rem;
		overflow:hidden;
	}
	#wrap>ul>li>img{
		width:8%;
		float:left;
		margin-top:0.35rem;
		padding:0 3%;
	}
	#wrap>ul>li>input{
		height:1.7rem;
		border:none;
		float:left;
		font-size:0.6rem;
		width:86%;
	}
	#btn{
		width:90%;
		margin:0 auto;
		display:block;
		height:1.5rem;
		background:rgb(221,52,79);
		border:none;
		border:1px solid gray;
		border-radius:3px;
		font-size:0.8rem;
		line-height:1.5rem;
		color:#fff;
	}
	#wrap>p{
		width:90%;
		margin:0.5rem auto;
		font-size:0.6rem;

	}
	#wrap>p>a:nth-child(1){
		color:gray;
	}
	#wrap>p>a:nth-child(2){
		color:gray;
		display:inline-block;
		float:right;
	}
}
</style>
