<template>
  <div class="app">
    <router-view></router-view>
    <div class="foot">
      <a href="#/" v-on:click='num=0' v-bind:class="{active:num==0}">
        <img src="./assets/l1.jpg">
        <p>夺宝</p>
      </a>
      <a href="#/Yi" v-on:click='num=1' v-bind:class="{active:num==1}">
        <img src="./assets/l2.jpg">
        <p>易商场</p>
      </a>
      <a href="#/Seek" v-on:click='num=2' v-bind:class="{active:num==2}">
        <img src="./assets/l3.jpg">
        <p>分类搜索</p>
      </a>
      <a href="#/Find" v-on:click='num=3' v-bind:class="{active:num==3}">
        <img src="./assets/l4.jpg">
        <p>发现</p>
      </a>
      <a href="#/Mine" v-on:click='num=4' v-bind:class="{active:num==4}">
        <img src="./assets/l5.jpg">
        <p>购物车</p>
      </a>
      <a href="#/Mine" v-on:click='num=5' v-bind:class="{active:num==5}">
        <img src="./assets/l6.jpg">
        <p>我的</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      num: 0
    };
  }
};
</script>

<style lang="scss">
  .app{
    .foot{
      width:100%;
      background:#fff;
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
    .foot p{
      margin-top:0.1rem;
      color:#6c6c6c;
    }
    .active>p{
      color:red;
    }
  }
</style>
