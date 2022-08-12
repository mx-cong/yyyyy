<template>
  <div class="box">
    <div class="top">
      <p>
        <router-link to="#"><img src="images/seting.png" alt="" /></router-link>
      </p>
      <div class="login-register">
        <span>
          <img src="images/phont.png" alt="" />
        </span>
        <router-link to="/phonelogin">登录</router-link>
        <router-link to="/register">注册</router-link>
        <p></p>
      </div>
      <div class="space"></div>
    </div>
    <div class="vip">
      <div class="v-con">
        <p>
          <span class="vf">360黑金会员</span><span class="open">立即开通</span>
        </p>

        <p>开通黑金会员免费送智能设备</p>
      </div>
    </div>
    <div class="order">
      <div class="over">
        <p><span>我的订单</span><span>全部></span></p>
      </div>
      <div class="statue">
        <ul>
          <li>
            <div class="b1"></div>
            <p>待付款</p>
          </li>
          <li>
            <div class="b2"></div>
            <p>待发货</p>
          </li>
          <li>
            <div class="b3"></div>
            <p>待收货</p>
          </li>
          <li>
            <div class="b4"></div>
            <p>待评价</p>
          </li>
          <li>
            <div class="b5"></div>
            <p>退换货</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="operate">
      <div class="op">
        <ul>
          <li>
            <div><img src="images/t011292b0518f1e5143.png" alt="" /></div>
            <p><router-link to="#">我的收藏</router-link></p>
          </li>
          <li>
            <span>福利</span>
            <div>
              <img src="images/t01f6cc58503da6329e.png" alt="" />
            </div>
            <p><router-link to="#">我的优惠券</router-link></p>
          </li>
          <li>
            <div><img src="images/t01e0fd297d58a04847.png" alt="" /></div>
            <p><router-link to="#">我的积分</router-link></p>
          </li>
          <li>
            <div><img src="images/t01d5be07b4d61ac25e.png" alt="" /></div>
            <p><router-link to="#">地址管理</router-link></p>
          </li>
          <li>
            <div><img src="images/t0168244e4c84c9b7ee.png" alt="" /></div>
            <p><router-link to="#">意见反馈</router-link></p>
          </li>
          <li>
            <div><img src="images/t01265ba98a5717a1f1.png" alt="" /></div>
            <p><router-link to="#">资质</router-link></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.op a{
  color: #2b2929;
}
.op ul li img {
  width: 50%;
}
.op ul li:nth-of-type(5) img {
  width: 33%;
}
.op ul li:nth-of-type(4) img {
  width: 40%;
}
.op ul li {
  width: 25%;
  text-align: center;

  position: relative;
}
.op ul {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}
.op span {
  display: inline-block;
  width: 40%;
  font-size: 12px;
  background: red;
  border-top-left-radius: 9px;
  border-bottom-right-radius: 9px;
  color: #fff;
  position: absolute;
  left: 0;
}
.op div {
  height: 12vw;
  margin-top: 25%;
}
.operate p {
  font-size: 12px;
  text-align: center;
}
.op{
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding-bottom: 5%;
}
.operate {
  padding: 0 1rem;
  overflow: hidden;
  margin-top: 5px;
}
.b5 {
  height: 8vw;
  background: url("../assets/images/sprite.png") no-repeat 46% 70%;
  background-size: 45%;
}
.b4 {
  height: 8vw;
  background: url("../assets/images/sprite.png") no-repeat 46% 95%;
  background-size: 45%;
}
.b3 {
  height: 8vw;
  background: url("../assets/images/sprite.png") no-repeat 46% 45%;
  background-size: 45%;
}
.b2 {
  height: 8vw;
  background: url("../assets/images/sprite.png") no-repeat 46% 20%;
  background-size: 45%;
}
.b1 {
  height: 8vw;
  background: url("../assets/images/sprite.png") no-repeat 46% -5%;
  background-size: 45%;
}
.statue ul li {
  width: 20%;
  overflow: hidden;
}
.statue p {
  font-size: 12px;
  text-align: center;
}
.statue ul {
  display: flex;
  overflow: hidden;
}
.statue {
  overflow: hidden;
  padding: 0.5rem 1rem;
  background: #fff;
  border: 1px solid #ddd;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}
.over p {
  display: flex;
  justify-content: space-between;
}
.over p span {
  font-size: 14px;
}
.over {
  padding: 0.5rem;
  overflow: hidden;
  border: 1px solid #ddd;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background: #fff;
}
.order {
  padding: 0 1rem;
  margin-top: 20%;
  overflow: hidden;
}
.vip .open {
  display: inline-block;
  width: 25%;
  background: linear-gradient(-180deg, #ffd078 0, #cc9953 100%);
  color: #fff;
  border-radius: 9px;
  font-size: 14px;
  text-align: center;
}
.v-con {
  padding: 5% 8% 8% 8%;
  background: url("../assets/images/t012821afa8b0c61fdf.png") no-repeat;
  background-size: 20%;
}
.vip .vf {
  color: rgba(240, 192, 109, 1);
}
.vip p:nth-of-type(2) {
  font-size: 12px;
  color: #b29fb9;
  margin-top: 5px;
}
.vip p:first-of-type {
  display: flex;
  justify-content: space-between;
}
.vip {
  margin: -10% 1rem;
  background: linear-gradient(153deg, #54435c 20%, #2c2231 100%);

  border-radius: 9px;
  overflow: hidden;
}
.space {
  height: 10vw;
}
.login-register p {
  width: 45%;
}
.login-register a {
  display: block;
  width: 13%;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.login-register span img {
  width: 90%;
}
.login-register span {
  text-align: center;
  width: 20%;
  display: block;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 50%;
  background: #ddd;
}
.login-register {
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top p img {
  width: 8%;
}
.top p {
  overflow: hidden;
  text-align: right;
}
.top {
  overflow: hidden;
  padding: 0.5rem 1rem;
  background: url("../assets/images/t013dd875d303717d58.png") no-repeat;
  background-size: 100%;
}
.box {
  width: 100%;
  background: #f6f6f7;
  height: 100vh;
}
main {
  overflow: hidden;
}
</style>