<template>
  <div class="mainbox">
    <!-- 头部 -->
    <div class="top">
      <div class="topimg">
        <router-link to="/index"
          ><img src="images/back.png" alt=""
        /></router-link>
      </div>
      <div class="topinp"><input type="text" placeholder="搜索商品" /></div>
      <div class="topser"><button>搜索</button></div>
    </div>
    <!-- 分类搜索 -->
    <div class="fl">
      <div class="mr" @click="chang()">
        <button>默认</button>
      </div>
      <div class="jg" @click="chang()">
        <button>价格</button>
      </div>
      <div class="xh" @click="chang()">
        <button><input type="checkbox" id="check" />只看有货</button>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="product-list">
      <div class="product">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <router-link to="/detail">
              <p class="p-img"><img :src="item.src" alt="" /></p>
              <p class="p-name">{{ item.pname }}</p>
              <p class="p-price">{{ item.price }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.p-price {
  color: red;
  text-align: center;
}
.p-name {
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.p-img img {
  width: 80%;
}
.product li {
  background: #fff;
  overflow: hidden;
  width: 48.5%;
  margin-top: 10px;
  margin-bottom: 5px;
}
.product ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product p {
  margin: 10px;
}
.product {
  padding: 0 0.5rem;
}
.product-list {
  overflow: hidden;
}
.xh button {
  font-size: 18px;
  border: none;
  background: transparent;
  width: 100%;
}
.jg button {
  border: none;
  background: transparent;
  font-size: 18px;
  width: 100%;
}
.mr button {
  border: none;
  background: transparent;
  font-size: 18px;
  width: 100%;
}
.mr {
  color: #1bd61b;
}
.fl div {
  width: 32.9%;
  background: #fff;
  text-align: center;
  padding: 15px 0px;
}
.fl {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 10px; */
  border-top: 1px solid #ddd;
}
.topser button {
  width: 100%;
  border: none;
  margin-left: 5px;
  background: transparent;
  font-size: 18px;
}
.topser {
  width: 15%;
}
.topinp input {
  width: 100%;
  height: 8vw;
  border: 0.1rem solid #fff;
  outline: none;
  text-indent: 0.5em;
  border-radius: 5px;
}
.topinp {
  width: 70%;
}
.topimg img {
  width: 40%;
}
.topimg {
  width: 15%;
}
.top {
  display: flex;
  padding: 0px 0.5rem;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #f7f7f7;
}
.mainbox {
  background: #f0f0f0;
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
          src: "images/t01480f118d233044a6.webp",
          pname: "360 可视门铃 5Pro AR1C",
          price: "￥399",
        },
        {
          src: "images/t01f2f47a37b4c5a5d6.webp",
          pname: "360 行车记录仪 K980 4K",
          price: "￥649",
        },
        {
          src: "images/t01302f09dd5f95f197.webp",
          pname: "360 儿童手表9X 云霞紫",
          price: "￥359",
        },
        {
          src: "images/t014d03700630fb2687.webp",
          pname: "360 儿童手表9X 星空蓝",
          price: "￥359",
        },
        {
          src: "images/t0129e27f9e80b61214.webp",
          pname: "360行车记录仪 隐藏式G300 3K",
          price: "￥429",
        },
        {
          src: "images/t01494d399a571fa489.webp",
          pname: "360 行车记录仪G600 4G",
          price: "￥449",
        },
        {
          src: "images/t01192edc41a78ee2ac.webp",
          pname: "360智能摄像机小水滴5C 2K高清版AC1P",
          price: "￥149",
        },
        {
          src: "images/t0137f6f23e234057d6.webp",
          pname: "360智能摄像机云台7P超清版  AP1PA3",
          price: "￥249",
        },
        {
          src: "images/t01c508154ffa9b9e76.webp",
          pname: "360 WiFi6 路由器V6G",
          price: "￥249",
        },
        {
          src: "images/t012e56acec4dba8ef1.webp",
          pname: "360 智能摄像机云台5P触联2K版 AP1PA2",
          price: "￥179",
        },
        {
          src: "images/t011c40a654ea1d09d9.webp",
          pname: "360 儿童手表Kido S2 琥珀黄 WA12",
          price: "￥999",
        },
        {
          src: "images/t01b628752cf47c996e.webp",
          pname: "360可视门铃5C",
          price: "￥299",
        },
        {
          src: "images/t01ef40a65dc6d3759e.webp",
          pname: "360 车载充电器C6",
          price: "￥59",
        },
        {
          src: "images/t0144063bdbbd730288.webp",
          pname: "360 TF存储卡 64GB  V30  TF64",
          price: "￥69",
        },
        {
          src: "images/t01fb9e1ad211458bb2.webp",
          pname: "【配件】360 扫地机器人X90/X95 通用尘盒过滤网 2只装",
          price: "￥59",
        },
      ],
    };
  },
  methods: {
    chang() {
      $(".fl button").click(function () {
        $(".fl button").css("color", "black");
        $(this).css("color", "#1bd61b");
        // console.log($(this).text());
        if ($(this).text() == "只看有货") {
          $("#check").prop("checked", "checked");
        } else {
          $("#check").prop("checked", "");
        }
      });
    },
  },
};
</script>