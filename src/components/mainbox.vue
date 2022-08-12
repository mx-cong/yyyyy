<template>
  <main>
    <router-view></router-view>
    <div class="bot-nav">
      <ul>
        <li>
          <p><img src="images/inde.png" alt="" /></p>
          <p><router-link to="/index">首页</router-link></p>
        </li>
        <li>
          <p><img src="images/classify.png" alt="" /></p>
          <p><router-link to="/classify">分类</router-link></p>
        </li>
        <li><img class="imggif" src="images/shenhuo.gif" alt="" /></li>
        <li>
          <p><img src="images/shopcar.png" alt="" /></p>
          <p><router-link to="/shopcar">购物车</router-link></p>
        </li>
        <li>
          <p><img src="images/mine.png" alt="" /></p>
          <p><router-link to="/mine">我的</router-link></p>
        </li>
      </ul>
    </div>
  </main>
</template>
<style scoped>
.bot-nav li:nth-of-type(3) img {
  width: 75%;
}
.bot-nav {
  width: 100%;
  line-height: 20px;
  position: fixed;
  bottom: 1px;
  background: white;
  border-top: 1px solid pink;
}
.bot-nav ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bot-nav li {
  width: 25%;
  text-align: center;
}
.bot-nav li a {
  font-size: 14px;
  color: #4a4a4a;
}
.bot-nav li p {
  text-align: center;
}
.bot-nav li img {
  width: 25%;
  color: black;
}
</style>