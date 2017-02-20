<template>
  <div class="find">
   		<nav>
   			<p>发现</p>
   		</nav>
   		<div id="fn-list">
   			<ul>
   				<li class="welfare">
   					<img src="../assets/fn1.png" alt="">
   					<div>
   						<p>优惠券兑换</p>
   						<p>优惠券兑换领取</p>
   					</div>
   					<a href="">&gt;</a>
   				</li>
   				<li class="welfare">
   					<img src="../assets/fn2.png" alt="">
   					<div>
   						<p>红包兑换</p>
   						<p>有优惠码来这换夺宝红包</p>
   					</div>
   					<a href="">&gt;</a>
   				</li>
   				<li class="welfare">
   					<img src="../assets/fn3.png" alt="">
   					<div>
   						<p>晒单分享</p>
   						<p>没错，就是我中的！来咬我...</p>
   					</div>
   					<a href="">&gt;</a>
   				</li>
   				<li class="welfare">
   					<img src="../assets/fn4.png" alt="">
   					<div>
   						<p>提车现场豪车秀</p>
   						<p>他们竟然只花10元就开走了...</p>
   					</div>
   					<a href="">&gt;</a>
   				</li>
   			</ul>
   		</div>
  </div>
</template>

<script>
export default {
  name: 'find'
}
</script>

<style lang="scss">
.find{
	nav{
		height:1.8rem;
		width:100%;
		position:fixed;
		top:0;
		left:0;
		background:#f7f7f7;
		border-bottom:1px solid #ccc;
	}
	nav>p{
		line-height:1.8rem;
		width:100%;
		text-align:center;
		font-size:0.65rem;
	}
	#fn-list{
		width:100%;
		background:rgb(241,238,236);
		height:1000px;
		margin-top:1.8rem;
	}
	#fn-list>ul{
		width:100%;
	}
	.welfare{
		width:100;
		overflow:hidden;
		margin-top:0.8rem;
		background:#fff;
		height:3.8rem;
	}
	.welfare>img{
		float:left;
		width:22%;
		margin-top:0.5rem;
	}
	.welfare>div{
		float:left;
		margin-left:1rem;
	}
	.welfare>div>p:nth-child(1){
		margin-top:1.3rem;
		font-size:0.7rem;
	}
	.welfare>div>p:nth-child(2){
		margin-top:0.2rem;
		font-size:0.45rem;
		color:#ccc;
	}
	.welfare>a{
		float:right;
		line-height:3.8rem;
	}
	

}
</style>
