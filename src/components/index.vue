<template>
  <div class="mainbox">
    <header class="topbar">
      <div class="top">
        <div class="logo">
          <router-link to="/index"
            ><img id="imgtop" src="images/t016efe5c126dfb6cf1.png" alt=""
          /></router-link>
        </div>
        <div class="ser">
          <input type="text" placeholder="请输入目标产品..." /><router-link
            to="/list"
            ><img src="images/serach.png" alt=""
          /></router-link>
        </div>
      </div>
      <div class="nav">
        <ul class="navbox">
          <li>推荐</li>
          <li>家庭安防</li>
          <li>汽车用品</li>
          <li>扫地机器人</li>
          <li>智能手表</li>
          <li>安全路由</li>
          <li>智慧生活</li>
        </ul>
      </div>
    </header>
    <div class="loop">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="images/t01eb03a0e52f563209.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t01f38cd0762bbb3c94.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t01f06391ab584fc26a.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t0131fd78092c9f0068.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t0155b38888ffcf3f87.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t013385031e489acd31.png" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="fl">
      <ul>
        <li>
          <p><img src="images/t01e4c99574c875bbd0.png" alt="" /></p>
          <p>每日签到</p>
        </li>
        <li>
          <p><img src="images/t017ffb41f4e13b83f7.png" alt="" /></p>
          <p>新品上市</p>
        </li>
        <li>
          <p><img src="images/t01306e2367f82e165b.gif" alt="" /></p>
          <p>热卖榜</p>
        </li>
        <li>
          <p><img src="images/t01abcd538c2205a355.png" alt="" /></p>
          <p>生活馆</p>
        </li>
        <li>
          <p><img src="images/t013f15cd6c265a1f09.png" alt="" /></p>
          <p>家庭安防</p>
        </li>
      </ul>
    </div>
    <!-- 爆款推荐 -->
    <div class="box1">
      <div class="box1top">爆款推荐</div>
      <div class="detl">
        <ul>
          <li>
            <router-link to="/detail">
              <p class="img">
                <img src="images/t01480f118d233044a6.png" alt="" />
              </p>
              <span class="sp">166°超广视角</span>
              <p class="name">可视门铃5Pro</p></router-link
            >
          </li>
          <li>
            <p class="img">
              <img src="images/t01655ce7a93e27eff0.png" alt="" />
            </p>
            <span class="sp">自动洗拖布并风干</span>
            <p class="name">小章鱼拖地机器人</p>
          </li>
          <li>
            <p class="img">
              <img src="images/t0137f6f23e234057d6.png" alt="" />
            </p>
            <span class="sp">400万超清选景</span>
            <p class="name">云台7P超清版</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 大盒子 -->
    <div class="bigbox">
      <!-- 明星单品 -->
      <div class="box2">
        <div class="box2top">明星单品</div>
        <div class="con">
          <ul>
            <li>
              <p><img src="images/t0175716f0fe2cb8442.png" alt="" /></p>
              <p>手持洗地机</p>
              <p>￥1690</p>
            </li>
            <li>
              <p><img src="images/t01192edc41a78ee2ac.png" alt="" /></p>
              <p>小水滴5C</p>
              <p>￥149</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 每日精选 -->
      <div class="box2">
        <div class="box2top">每日精选</div>
        <div class="con">
          <ul>
            <li>
              <p><img src="images/t01ac6e4c68cc3f6050.png" alt="" /></p>
              <p>智享科技</p>
              <p class="space">&nbsp;</p>
            </li>
            <li>
              <p><img src="images/t01192edc41a78ee2ac.png" alt="" /></p>
              <p>360生活馆</p>
              <p class="space">&nbsp;</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商城快报 -->
    <div class="box3">
      <div class="information">
        <p><img src="images/download.png" alt="" /></p>
      </div>
      <div class="message">
        <van-notice-bar left-icon="volume-o" :scrollable="false">
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
          >
            <van-swipe-item
              ><span class="bk">【爆款】</span
              ><span class="msg"
                >360可视门铃5Pro，166°超广视角</span
              ></van-swipe-item
            >
            <van-swipe-item
              ><span class="bk">【爆款】</span
              ><span class="msg"
                >400万超清全景 一键呼叫家人 微光全彩夜视</span
              ></van-swipe-item
            >
            <van-swipe-item
              ><span class="bk">【爆款】</span
              ><span class="msg"
                >家居小帮手，吸拖洗消4合1洗地机</span
              ></van-swipe-item
            >
            <van-swipe-item
              ><span class="bk">【爆款】</span
              ><span class="msg">2K高清画质，记录美好生活</span></van-swipe-item
            >
          </van-swipe>
        </van-notice-bar>
      </div>
    </div>
    <!-- 广告 -->
    <div class="back-img"></div>
    <!-- 360智选 -->
    <div class="smartsel">
      <div class="smart-top">360智选</div>
      <div class="smart-con">
        <ul>
          <li><img src="images/t01c6cbfb499a29c978.png" alt="" /></li>
          <li><img src="images/t01e3ef204a6e8b9951.png" alt="" /></li>
          <li><img src="images/t01d4d81013be978829.png" alt="" /></li>
          <li><img src="images/t01894bf357e4cca9f0.png" alt="" /></li>
        </ul>
      </div>
      <div class="smart-product">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="smart-box">
              <p class="s-img"><img :src="item.src" alt="" /></p>
              <p class="s-name">{{ item.proname }}</p>
              <p class="s-jj">{{ item.projj }}</p>
              <p class="s-sp">{{ item.soldprice }}</p>
              <p class="s-p">{{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="twoback"></div>
    </div>
    <!-- 省略... -->
    <div class="next"></div>
  </div>
</template>
<style scoped>
.next {
  height: 62px;
}
.twoback {
  height: 94px;
  background: url("../assets/images/t01a9e4777ac393aa7b.png") no-repeat;
  background-size: 100%;
}
.s-p {
  color: #999;
  font-size: 13px;
  text-decoration: line-through;
}
.s-sp {
  color: red;
  font-size: 14px;
}
.s-jj {
  font-size: 12px;
  color: #999;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.s-name {
  font-size: 14px;
}
.s-img img {
  width: 80%;
}
.smart-box p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}
.smart-box {
  padding-left: 0.5rem;
}
.smart-product li {
  width: 33%;
  overflow: hidden;
  padding-top: 0.5rem;
}
.smart-product ul {
  display: flex;
  background: #fff;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
  padding-bottom: 5px;
}
.smart-product {
  overflow: hidden;
}
.smart-con ul li > img {
  width: 100%;
}
.smart-con ul li {
  width: 49.5%;
  overflow: hidden;
}
.smart-con ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /*内容两端对齐 */
  overflow: hidden;
}
.smart-con {
  padding: 0px 0.5rem;
  overflow: hidden;
  background: #fff;
}
.smart-top {
  padding: 5px 0px 10px 10px;
  background: #fff;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}
.smartsel {
  padding: 0px 0.5rem;
  overflow: hidden;
  margin-top: 5px;
}
.two {
  color: black;
}
.one {
  background: #fff;
  position: fixed;
  z-index: 1;
}
.van-swipe-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
}
.message {
  width: 100%;
  background: #fff;
}
.van-notice-bar {
  background: #fff;
}
.bk {
  color: red;
}
.notice-swipe {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.information img {
  width: 80%;
  /* padding-top: 5px;
  padding-bottom: 5px; */
}
.information p {
  width: 100%;
  text-align: center;
  line-height: 40px;
}
.information {
  /* display: flex; */
  width: 20%;
  background: #fff;
  border-right: 1px solid #f4f1f2;
}
.box3 {
  padding: 0px 0.5rem;
  overflow: hidden;
  margin-top: 2px;
  display: flex;
}
.space {
  padding-bottom: 1px;
}
.back-img {
  width: 100%;
  height: 94px;
  background: url("../assets/images/t019f28e4ca0f3ddb51.png");
  background-size: 100%;
}
.bigbox {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0px 0.5rem;
  margin-top: 1px;
}
.con li p:nth-of-type(3) {
  color: red;
}
.con p {
  font-size: 12px;
  text-align: center;
}
.con img {
  width: 80%;
}
.con li {
  width: 50%;
}
.con ul {
  overflow: hidden;
  display: flex;
}
.con {
  overflow: hidden;
  background: #fff;
  padding-top: 5px;
}
.box2top {
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 5px;
  background: #fff;
}
.box2 {
  overflow: hidden;
  width: 49.5%;
}
.detl ul {
  display: flex;
}
.img img {
  width: 100%;
}
.img {
  width: 100%;
  text-align: center;
  background: #edf1f2;
}
.sp {
  display: block;
  background: #92b9bd;
  border-radius: 30px;
  width: 80%;
  color: white;
  position: absolute;
  left: 10%;
  bottom: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
}
.name {
  background: url("../assets/images/t010e221ce46dbb73d4.png") no-repeat;
  background-size: 100%;
  height: 48px;
  line-height: 48px;
}
.detl li {
  width: 33%;
  text-align: center;
  font-size: 12px;
  position: relative;
  padding: 0 5px;
}
.detl {
  padding: 10px 5px 5px 5px;
  background: #fff;
  border-bottom: 1px solid #efefef;
}
.box1top {
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 5px;
  background: #fff;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}
.box1 {
  padding: 0px 0.5rem;
  overflow: hidden;
}
.fl ul {
  display: flex;
}
.fl img {
  width: 66%;
}
.fl li {
  width: 20%;
  text-align: center;
  font-size: 12px;
}
.fl {
  padding: 5px 0.5rem;
}
.van-swipe-item img {
  width: 100%;
  margin-top: -10%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  background-color: transparent;
}
.loop {
  width: 100%;
  overflow: hidden;
  /* padding: 0px 1rem; */
}
.navbox li:nth-of-type(1) {
  font-weight: bold;
  background: linear-gradient(270deg, rgba(243, 102, 54, 0), #f36636);
}
.navbox li {
  overflow: hidden;
  font-size: 4vw;
  color: white;
  margin-left: 15px;
}
.navbox {
  width: 140vw;
  /* padding: 0 1rem 0 1rem; */
  display: flex;
}
/*隐藏滚动条 */
.nav::-webkit-scrollbar {
  width: 0 !important;
}
.nav {
  width: 100vw;
  overflow: auto;
}
.ser img {
  width: 5vw;
  position: absolute;
  right: 3%;
  top: 13%;
}
.ser input {
  width: 100%;
  height: 7vw;
  border-radius: 30px;
  outline: none;
  border: 1px solid #f4f1f2;
  text-indent: 0.5em;
}
.ser {
  width: 88%;
  position: relative;
}
.logo img {
  width: 80%;
}
.logo {
  width: 12%;
}
.topbar {
  overflow: hidden;
  background: transparent;
  position: absolute;
  z-index: 1;
}
.top {
  display: flex;
  padding: 15px 1rem 10px 1rem;
  /* background: gray; */
  overflow: hidden;
}
.mainbox {
  background: #f4f1f2;
  overflow: hidden;
}
</style>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      list: [
        {
          src: "images/t014b7bc6024c76b8ee.png",
          proname: "360智能摄像机室外球机5C",
          projj: "2K超清画质 双向云台旋转",
          soldprice: "￥269 ",
          price: "￥299 ",
        },
        {
          src: "images/t01c508154ffa9b9e76.png",
          proname: "360 WiFi6 路由器V6G",
          projj: "AX1800跑满千兆宽带",
          soldprice: " ¥249 ",
          price: " ¥269 ",
        },
        {
          src: "images/t01480f118d233044a6.png",
          proname: "360 可视门铃 5Pro",
          projj: "2K超清画质 166°超广视角",
          soldprice: " ¥399 ",
          price: " ¥429 ",
        },
        {
          src: "images/t0129e27f9e80b61214.png",
          proname: "360行车记录仪 隐藏式G300 3K",
          projj: "2K超清画质 双向云台旋转",
          soldprice: " ¥429 ",
          price: " ¥449 ",
        },
        {
          src: "images/t01b4964c8568fe0e18.png",
          proname: "360扫地机器人 S8 Plus集尘版",
          projj: "会自动倒垃圾的扫拖机器人",
          soldprice: " ¥1499 ",
          price: " ¥2699 ",
        },
        {
          src: "images/t01b9d21e5df924ae5c.png",
          proname: "360 TF存储卡 32GB  Class10  TF32",
          projj: "360摄像机及行车记录仪适用",
          soldprice: " ¥49 ",
          price: " ¥69 ",
        },
      ],
    };
  },
  // window窗口   scroll滚动   实现窗口监听
  methdos: $(window).scroll(function () {
    // 每滚动一次，执行一次
    // console.log($(window).scrollTop());
    // $(window).scrollTop()滚动距离
    if ($(window).scrollTop() > 284) {
      $("header").removeClass("topbar");
      $("header").addClass("one"); //修改定位方式
      $("header .navbox li").css("color", "black"); //改变文字颜色
      $("#imgtop").attr("src", "images/t016efe5c126dfb6cf2.png"); //更换图片，两种方法可用
      // $("#imgtop").prop("src","images/t016efe5c126dfb6cf2.png");//更换图片
    } else {
      $("header").removeClass("one");
      $("header .navbox li").css("color", "white");
      $("header").addClass("topbar");
      $("#imgtop").attr("src", "images/t016efe5c126dfb6cf1.png"); //更换图片，两种方法可用
      // $("#imgtop").prop("src","images/t016efe5c126dfb6cf1.png");//更换图片
    }
  }),
};
</script>