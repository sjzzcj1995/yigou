<template>
  <div class="seek">
		<nav>
			<div>
				<img src="../assets/yifang.jpg">
				<input type="text" placeholder="搜索">
			</div>
		</nav>
		<div id="seek-list">
			<ul>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk1.jpg" alt="">
						<p>全部商品</p>
					</a>
				</li>
				 <li class="seekList-table">
					<a href="">
						<img src="../assets/sk2.jpg" alt="">
						<p>优选商品</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk3.jpg" alt="">
						<p>手机平板</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk4.jpg" alt="">
						<p>电脑办公</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk5.jpg" alt="">
						<p>数码影音</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk6.jpg" alt="">
						<p>女性时尚</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk7.jpg" alt="">
						<p>美食天地</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk8.jpg" alt="">
						<p>潮流新品</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk9.jpg" alt="">
						<p>网易周边</p>
					</a>
				</li>
				<li class="seekList-table">
					<a href="">
						<img src="../assets/sk10.jpg" alt="">
						<p>其他商品</p>
					</a>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'seek'
}
</script>

<style lang="scss">
.seek{
	nav{
		width:100%;
		height:1.8rem;
		background:#f1eeec;
		position:fixed;
		top:0;
		left:0;
	}
	nav>div{
		width:90%;
		margin:0.4rem auto;
		border:1px solid #ccc;;
		border-radius:3px;
		height:1rem;
		background:#fff;
		overflow:hidden;
	}
	nav>div>img{
		width:5%;
		float:left;
		margin-left:3%;
		margin-top:0.3rem;
	}
	nav>div>input{
		float:left;
		margin-left:3%;
		width:89%;
		border:none;
		line-height:1rem;
		font-size:0.7rem;
	}
	#seek-list{
		margin-top:1.8rem;
		width:100%;
	}
	#seek-list>ul{
		width:100%;
		overflow:hidden;
	}
	.seekList-table{
		width:33.3%;
		float:left;
		border:1px solid #eee;
		box-sizing:border-box;
		font-size:0.5rem;
	}
	.seekList-table>a{
		width:100%;
		display:block;
		text-align:center;
		padding:1.2rem 0;
	}
	.seekList-table>a>img{
		width:30%;
	}
}
</style>
