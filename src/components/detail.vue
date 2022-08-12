<template>
  <div class="mainbox">
    <!-- 头部返回 -->
    <div>
      <div class="top">
        <p>
          <router-link to="/index"
            ><img src="images/t01e482bed5ede65fdb.png" alt=""
          /></router-link>
        </p>
        <p>
          <router-link to="#"
            ><img src="images/t01698c29b9340d0be4.png" alt=""
          /></router-link>
        </p>
      </div>
      <div class="bar">
        <ul>
          <li>
            <router-link to="/index"
              ><p><img src="images/back.png" alt="" /></p
            ></router-link>
          </li>
          <li><span class="pro">商品</span></li>
          <li><span class="eva">评价</span></li>
          <li><span class="det">详情</span></li>
          <li><span class="num">参数</span></li>
          <li>
            <p class="share">
              <img src="images/t01e9f138242a398a44.png" alt="" />
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!--参考图片 -->
    <div class="loop">
      <van-swipe @change="onChange">
        <van-swipe-item
          ><img src="images/t01480f118d233044a6.webp" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t014ca330e316acc971.webp" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t017532cbf0a9195be3.webp" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t01a94dcf7501a7114c.webp" alt=""
        /></van-swipe-item>

        <van-swipe-item
          ><img src="images/t01c79a7f4b7718f849.webp" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t01b00b910bd99cd9c3.webp" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t01ffb9567c38a68bf5.webp" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="images/t0147a9928d66164f96.webp" alt=""
        /></van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/8</div>
        </template>
      </van-swipe>
    </div>
    <!-- 价格及介绍 -->
    <div class="price-detail">
      <p class="price"><span>￥399.00</span><span>￥429</span></p>
      <p class="product-name">360可视门铃5Pro AR1C</p>
      <p class="product-jj">2K超清画质 166°超广视角</p>
      <p class="more">
        <router-link to="#">更多摄像机、存储卡等商品，点击查看>></router-link>
      </p>
    </div>
    <!-- 公告 -->
    <div class="info">
      <van-notice-bar
        wrapable
        :scrollable="false"
        text="物流公告：受疫情影响，部分地区发货时效延滞，上海仓暂缓发货，部分订单时效将受到影响，造成不便敬请谅解。"
      />
    </div>
    <!-- 规格 -->
    <div class="youhui">
      <van-cell title="领券 满99立减10.00元" @click="showShare1 = true" />
      <van-cell title="促销 直降 立减30.00元" @click="showShare2 = true" />
      <van-cell title="积分 购买可的399积分" @click="showShare3 = true" />
      <van-cell title="已选 AR1C x1" @click="showShare4 = true" />
      <van-share-sheet v-model="showShare1" :options="options1" />
      <van-share-sheet v-model="showShare2" :options="options2" />
      <van-share-sheet v-model="showShare3" :options="options3" />
      <van-share-sheet v-model="showShare4" :options="options4" />
    </div>
    <!-- 简介 -->
    <div class="serve">
      <span>
        <img src="images/t014f3c7cc8304a06c2.png" alt="" />360商城发货&售后
      </span>

      <span>
        <img src="images/t014f3c7cc8304a06c2.png" alt="" />满99元包邮
      </span>

      <span>
        <img src="images/t014f3c7cc8304a06c2.png" alt="" />7天无理由退货
      </span>

      <span>
        <img src="images/t014f3c7cc8304a06c2.png" alt="" />15天免费换货
      </span>
    </div>
    <!-- 广告 -->
    <div class="pic">
      <router-link to="#">
        <img src="images/t01a89a3221b2e2adee.jpg" alt="" />
      </router-link>
      <router-link to="#">
        <img src="images/t0132837d193526a3a3.jpg" alt="" />
      </router-link>
    </div>
    <!-- 评价 -->
    <div class="evaluate">
      <div class="e-top">评价</div>
      <div class="e-con">
        <div class="c-top">
          <p><span>评价（10+）</span><span>></span></p>
        </div>
        <div class="photo-font">
          <span><img src="images/t0103a59ac2f85d789a.png" alt="" /></span
          ><span><img src="images/t014cfa6ed19a1a1ef5.png" alt="" />青铜</span>
        </div>
        <div class="start-time">
          <span></span><span>2022-06-29 07:08:30</span>
        </div>
        <div class="con">此用户没有填写评价</div>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div class="introduce">
      <div class="i-top">商品介绍</div>
      <div class="video-pic">
        <p class="video">
          <video
            src="video/TL5698587cc8253244683b53ffe0b68b5d.mp4"
            controls
            autoplay
          ></video>
        </p>
        <p class="pic" v-for="(item, index1) in list" :key="index1">
          <img :src="item.src" alt="" />
        </p>
      </div>
    </div>
    <!-- 参数 -->
    <div class="par">
      <div class="p-top">
        规格参数
        <p>暂无规格参数</p>
      </div>
      <div class="p-pro">常见问题</div>
      <div class="p-con">
        <dl>
          <dt>
            <i></i>
            <h5>订单提交成功后还可以修改收货信息吗？</h5>
          </dt>
          <dd>
            订单付款之前，您可以进入“我的订单”，在订单详情页内修改收货信息。付款之后将不可修改收货信息。
          </dd>
        </dl>
      </div>
      <div class="p-con">
        <dl>
          <dt>
            <i></i>
            <h5>订单取消后还能恢复吗？</h5>
          </dt>
          <dd>订单一旦取消将无法恢复，请您慎重操作。</dd>
        </dl>
      </div>
      <div class="p-con">
        <dl>
          <dt>
            <i></i>
            <h5>订单取消成功后退款如何返还？</h5>
          </dt>
          <dd>
            订单取消后，退款会按照您购买时的支付方式原路返回到您的银行卡。
          </dd>
        </dl>
      </div>
      <div class="p-con">
        <dl>
          <dt>
            <i></i>
            <h5>对商品不满意可以申请退换货吗？如何操作？</h5>
          </dt>
          <dd>
            在确认收货后，7天之内可以申请退货。15天之内可以进行换货，具体操作如下:
            <br />
            退货：进入“我的订单”，在操作区域中点击申请退货，填写问题描述，提交服务单即可申请退货。
            <br />
            换货：请拨打我们的客服热线400-1555-360，在客服的指导下完成换货。
          </dd>
        </dl>
      </div>
      <div class="p-con">
        <dl>
          <dt>
            <i></i>
            <h5>为什么我的订单总是无法提交成功？</h5>
          </dt>
          <dd>
            可能存在以下几种情况：
            <br />
            （1）订单信息填写不完整；
            <br />
            （2）订单商品库存不足或者库存无货；
            <br />
            （3）网络延时及以上各种情况都会在页面中弹出提示信息，可以通过修改订单信息（提示信息）或者稍后再试，即可成功提交订单。
          </dd>
        </dl>
      </div>
      <div class="p-con">
        <dl>
          <dt>
            <i></i>
            <h5>订单已提交成功，如何付款？</h5>
          </dt>
          <dd>
            您好，360商城目前支持的支付方式分为支付宝和微信。请在订单提交后30分钟内完成付款。
          </dd>
        </dl>
      </div>
      <div class="p-con">
        <dl>
          <dt>
            <i></i>
            <h5>订单已支付成功，什么时候可以发货？</h5>
          </dt>
          <dd>
            您好，360商城会在48小时内安排发货。物流信息您可进入“我的订单”实时查看。
          </dd>
        </dl>
      </div>
    </div>
    <!-- 撑高 -->
    <div class="height"></div>
    <!-- 商品操作按钮 -->
    <div class="product-button">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="star" text="收藏" color="#ff5000" />
        <van-goods-action-icon icon="cart-o" text="购物车" id="shopcar" />
        <van-goods-action-button type="danger" text="立即购买" />
        <van-goods-action-button type="warning" text="加入购物车" />
      </van-goods-action>
    </div>
  </div>
</template>
<style scoped>
.youhui {
  height: 200px;
  background: #fff;
  margin-top: 10px;
}
.van-cell {
  margin-top: 1.5%;
  border: 1px solid #ddd;
}
.p-con dd {
  font-size: 12px;
  color: #999;
  margin-left: 2rem;
  padding: 5px 0;
}
.p-con i {
  display: inline-block;
  width: 14px;
  background: url("../assets/images/wen.png") no-repeat 0 8px;
  background-size: 14px;
  line-height: 2rem;
}
.p-con dt {
  margin-left: 2rem;
  display: flex;
}
.p-con dl {
  line-height: 2rem;
}
.p-con {
  margin-top: 5px;
  padding: 5px 1rem;
  overflow: hidden;
  background: #fff;
}
.p-pro {
  padding: 5px 1rem;
  background: #fff;
  margin-top: 5px;
  font-size: 13px;
  text-align: center;
  background: url("../assets/images/toright.png") no-repeat 30% 50%,
    url("../assets/images/toleft.png") no-repeat 70% 50%, #fff;
}
.p-top p {
  font-size: 12px;
  margin-top: 3px;
  text-align: left;
}
.p-top {
  font-size: 13px;
  background: url("../assets/images/toright.png") no-repeat 30% 30%,
    url("../assets/images/toleft.png") no-repeat 70% 30%, #fff;
  text-align: center;
  padding: 5px 1rem;
}
.par {
  margin-top: 5px;
  overflow: hidden;
}
.share {
  text-align: center;
}
.bar p:nth-of-type(1) img {
  width: 40%;
  vertical-align: middle;
}
.bar span {
  display: block;
  text-align: center;
}
.bar li:nth-of-type(6) img {
  width: 25%;
  vertical-align: middle;
}
.bar li:nth-of-type(6) {
  width: 25%;
}
.bar li:nth-of-type(1) {
  width: 15%;
}
.bar li {
  width: 15%;
}
.bar ul {
  display: flex;
  overflow: hidden;
  align-items: center;
}
.bar {
  width: 100%;
  padding: 0px 1rem;
  background: #fafafa;
  opacity: 0.8;
  position: fixed;
  z-index: 1;
  display: none;
  overflow: hidden;
}
.pic {
  margin-top: 10px;
}
.video video {
  width: 100%;
}
.video {
  width: 100%;
  height: 210px;
}

.i-top {
  padding: 10px 1rem;
  background: url("../assets/images/toright.png") no-repeat 30% 50%,
    url("../assets/images/toleft.png") no-repeat 70% 50%, #fafafa;
  text-align: center;
  font-size: 13px;
}
.introduce {
  margin-top: 10px;
}
.con {
  padding: 7px 1rem 1.5rem 1rem;
  font-size: 14px;
  background: #fff;
}
.start-time span:nth-of-type(2) {
  float: right;
  text-align: right;
  width: 70%;
}
.start-time span:nth-of-type(1) {
  width: 30%;
  background: url("../assets/images/star.png");
  background-size: 20%;
  float: left;
}
.start-time span {
  display: block;
  height: 4vw;
  font-size: 12px;
  color: #999;
}
.start-time {
  padding: 5px 1rem;
  overflow: hidden;
}
.photo-font span:nth-of-type(2) img {
  width: 45%;
  vertical-align: middle;
}
.photo-font span:nth-of-type(2) {
  display: inline-block;
  width: 14%;
  background: #4444448c;
  color: white;
  font-size: 12px;
  float: left;
  border-radius: 5px;
  margin-top: 10px;
}
.photo-font span:nth-of-type(1) img {
  width: 100%;
}
.photo-font span:nth-of-type(1) {
  display: inline-block;
  width: 10%;
  float: left;
}
.photo-font {
  padding: 5px 1rem;
  background: #fff;
  overflow: hidden;
}
.c-top p span:nth-of-type(2) {
  float: right;
}
.c-top p span:nth-of-type(1) {
  float: left;
}
.c-top {
  font-size: 14px;
  padding: 10px 1rem;
  background: #fff;
  border-top: 2px solid #ddd;
  overflow: hidden;
}
.e-con {
  background: #fff;
}
.e-top {
  text-align: center;
  background: url("../assets/images/toright.png") no-repeat 35% 50%,
    url("../assets/images/toleft.png") no-repeat 65% 50%, #fff;
  margin-top: 5px;
  font-size: 14px;
}
.evaluate {
  overflow: hidden;
  margin-top: 5px;
}
.pic img {
  width: 100%;
}
.pic a {
  width: 100%;
}
.pic {
  margin-top: 5px;
}
/* 撑高 */
.height {
  height: 50px;
}
.serve span > img {
  width: 15%;
  vertical-align: middle;
}
.serve span:nth-of-type(4) {
  text-align: left;
}
.serve span {
  width: 33.3%;
  color: #999;
  font-size: 12px;
  text-align: center;
}
.serve {
  padding: 10px;
  background: #fafafa;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.van-notice-bar {
  margin: 0 0.5rem;
  background: #ffebc6;
  border-radius: 9px;
}
.info {
  height: 47.5px;
  overflow: auto;
  margin-top: 3px;
  background: transparent;
  padding-bottom: 3px;
}
.more a {
  color: #2661b2;
  font-size: 13px;
  text-decoration: underline;
}
.product-jj {
  font-size: 13px;
  color: #999;
}
.product-name {
  font-size: 15px;
}
.price span:nth-of-type(2) {
  color: #999;
  font-size: 13px;
  text-decoration: line-through;
}
.price span:nth-of-type(1) {
  color: red;
  font-size: 20px;
  font-weight: bold;
}
.price-detail p {
  margin-top: 7px;
}
.price-detail {
  padding: 1.5rem 1rem 0.5rem 1rem;
  background: #fff;
}
.van-swipe-item img {
  width: 100vw;
}
.top img {
  width: 80%;
}
.top a {
  display: inline-block;
  background: #0000004d;
  overflow: hidden;
  /* height: 10px; */
  width: 20%;
  border-radius: 50%;
  text-align: center;
}
.top p:nth-of-type(2) {
  text-align: right;
}
.top p {
  width: 50%;
  padding: 7px 0.5rem;
}
.top {
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  display: flex;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.mainbox {
  width: 100%;
  overflow: hidden;
  background: #f6f6f7;
  position: relative;
  margin-bottom: 10px;
}
</style>
<script>
import $ from "jquery";
import { Toast } from "vant";
import Vue from "vue";
// $(window).scroll(function () {
//   // 每滚动一次，执行一次
//   // console.log($(window).scrollTop());
//   // $(window).scrollTop(); 滚动距离

//   //商品
//   if ($(window).scrollTop() >= 200 && $(window).scrollTop() < 1130) {
//     $(".bar").css("display", "block");
//     $(".pro").css("border-bottom", "3px solid red");
//   } else {
//     $(".bar").css("display", "none");
//     $(".pro").css("border-bottom", "none");
//   }
//   //评价
//   if ($(window).scrollTop() >= 1130 && $(window).scrollTop() < 1320) {
//     $(".bar").css("display", "block");
//     $(".eva").css("border-bottom", "3px solid red");
//   } else {
//     $(".eva").css("border-bottom", "none");
//   }
//   //详情
//   if ($(window).scrollTop() >= 1320 && $(window).scrollTop() < 16360) {
//     $(".det").css("border-bottom", "3px solid red");
//     $(".bar").css("display", "block");
//   } else {
//     $(".det").css("border-bottom", "none");
//   }
//   //参数
//   if ($(window).scrollTop() >= 16360) {
//     $(".bar").css("display", "block");
//     $(".num").css("border-bottom", "3px solid red");
//   } else {
//     $(".num").css("border-bottom", "none");
//   }
// });
// $(document).ready(function () {
//   $(".bar span").click(function () {
//     if ($(this).html() == "商品") {
//       console.log("商品");
//       $("html,body").animate({ scrollTop: 0 });
//     } else if ($(this).html() == "评价") {
//       console.log("评价");
//       $("html,body").animate({ scrollTop: 1130 });
//     } else if ($(this).html() == "详情") {
//       console.log("详情");
//       $("html,body").animate({ scrollTop: 1320 });
//     } else {
//       console.log("参数");
//       $("html,body").animate({ scrollTop: 16360 });
//     }
//   });
// });
Vue.use(Toast);
export default {
  data() {
    return {
      current: 0,
      showShare1: false,
      showShare2: false,
      showShare3: false,
      showShare4: false,
      list: [
        {
          src: "images/t01a74bfeaae33c4494.jpg",
        },
        {
          src: "images/t0135cfa2a416da1edd.jpg",
        },
        {
          src: "images/t0161452d944d0926c1.jpg",
        },
        {
          src: "images/t01306e30de1f66bbf3.jpg",
        },
        {
          src: "images/t0168bec43b0517eb62.jpg",
        },
        {
          src: "images/t017b751cd96f74c287.jpg",
        },
        {
          src: "images/t017fb2ac38180e5e52.jpg",
        },
        {
          src: "images/t01526c1a371fb69d3d.jpg",
        },
        {
          src: "images/t01d7d2d233688c43e5.jpg",
        },
        {
          src: "images/t0125971c59e319f531.jpg",
        },
        {
          src: "images/t0120daebf5d4be73fe.jpg",
        },
        {
          src: "images/t01f7fff3ecbac89b7c.jpg",
        },
        {
          src: "images/t0131d0eb70094417e2.jpg",
        },
        {
          src: "images/t01a75522d3da07b535.jpg",
        },
        {
          src: "images/t0162e1a858d021d47e.jpg",
        },
        {
          src: "images/t0159f0195c74901ec0.jpg",
        },
        {
          src: "images/t01784922ec56309cda.jpg",
        },
        {
          src: "images/t01f9bebe81a86e7f8f.jpg",
        },
        {
          src: "images/t0189333a4aeb057f80.jpg",
        },
        {
          src: "images/t01ccea2c1a5acdad6b.jpg",
        },
        {
          src: "images/t01f18689aa76dab29b.jpg",
        },
        {
          src: "images/t01d3bfcf1bb585b26f.jpg",
        },
        {
          src: "images/t01a1e63a0a1116eaa7.jpg",
        },
        {
          src: "images/t01ecdfb514aebd52fa.jpg",
        },
      ],
      options1: [
        {
          name: "高级优惠劵",
          icon: "images/youhui.jpeg",
        },
        {
          name: "中级优惠劵",
          icon: "images/youhui2.jpeg",
        },
        {
          name: "初级优惠劵",
          icon: "images/youhui3.jpeg",
        },
        {
          name: "小小优惠劵",
          icon: "images/youhui4.jpeg",
        },
      ],
      options2: [
        {
          name: "劲爆促销价",
          icon: "images/jinbaochuxiao.webp",
        },
      ],
      options3: [
        {
          name: "新人积分133",
          icon: "images/xinrenjifen.jpeg",
        },
        {
          name: "购物积分133",
          icon: "images/gouwujifen.jpeg",
        },
        {
          name: "会员积分133",
          icon: "images/vip.jpeg",
        },
      ],
      options4: [
        {
          name: "AR1C一个",
          icon: "images/AR1C.jpg",
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
  mounted() {
    $(window).scroll(function () {
      // 每滚动一次，执行一次
      // console.log($(window).scrollTop());
      // $(window).scrollTop(); 滚动距离
      //商品
      if ($(window).scrollTop() >= 200 && $(window).scrollTop() < 1130) {
        $(".bar").css("display", "block");
        $(".pro").css("border-bottom", "3px solid red");
      } else {
        $(".bar").css("display", "none");
        $(".pro").css("border-bottom", "none");
      }
      //评价
      if ($(window).scrollTop() >= 1130 && $(window).scrollTop() < 1320) {
        $(".bar").css("display", "block");
        $(".eva").css("border-bottom", "3px solid red");
      } else {
        $(".eva").css("border-bottom", "none");
      }
      //详情
      if ($(window).scrollTop() >= 1320 && $(window).scrollTop() < 16360) {
        $(".det").css("border-bottom", "3px solid red");
        $(".bar").css("display", "block");
      } else {
        $(".det").css("border-bottom", "none");
      }
      //参数
      if ($(window).scrollTop() >= 16360) {
        $(".bar").css("display", "block");
        $(".num").css("border-bottom", "3px solid red");
      } else {
        $(".num").css("border-bottom", "none");
      }
    });
    $(document).ready(function () {
      $(".bar span").click(function () {
        if ($(this).html() == "商品") {
          console.log("商品");
          $("html,body").animate({ scrollTop: 0 });
        } else if ($(this).html() == "评价") {
          console.log("评价");
          $("html,body").animate({ scrollTop: 1130 });
        } else if ($(this).html() == "详情") {
          console.log("详情");
          $("html,body").animate({ scrollTop: 1320 });
        } else {
          console.log("参数");
          $("html,body").animate({ scrollTop: 16360 });
        }
      });
    });

    //购物车
    $("#shopcar").click(function () {
      $(location).prop('href', '/#/shopcar')
    });
  },
};
</script>
