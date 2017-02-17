<template>
  <div id="app">
    <router-view></router-view>
    <div class="foot">
      <a href="#/"><img src="./assets/l1.jpg"><p>夺宝</p></a>
      <a href="#/Yi"><img src="./assets/l2.jpg"><p>易商场</p></a>
      <a href="#/Seek"><img src="./assets/l3.jpg"><p>分类搜索</p></a>
      <a href="#/Find"><img src="./assets/l4.jpg"><p>发现</p></a>
      <a href="#/Car"><img src="./assets/l5.jpg"><p>购物车</p></a>
      <a href="#/Mine"><img src="./assets/l6.jpg"><p>我的</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
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
  .foot{
  width:100%;
  position:fixed;
  bottom:0;
  left:0;
  overflow:hidden;
  height:1.96rem;
  border-top:0.1rem solid #eee;
  }
  .foot>a{
  float:left;
  width:16.66%;
  text-align:center;
  font-size:0.3rem;
  }
  .foot>a>img{
  width:50%;
  }
</style>
