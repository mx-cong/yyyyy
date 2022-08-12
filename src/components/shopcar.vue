<template>
  <main>
    <!-- 头部背景 -->
    <div class="back"></div>
    <!-- 头部 -->
    <div class="header">
      <h3>购物车</h3>
      <span id="edi">编辑 </span>
    </div>
    <!-- 列表 -->
    <div class="car-list">
      <ul id="li">
        <li class="list" v-for="(item, index) in list" :key="index">
          <div class="fl">
            <div class="check"><input type="checkbox" :index="index" /></div>
            <div class="imgbox">
              <img :src="item.src" alt="" />
            </div>
            <div class="font">
              <h5>{{ item.pname }}</h5>
              <p>{{ item.fl }}</p>
            </div>
          </div>
          <div class="price-num">
            <p>
              ￥<span class="soldprice">{{ item.soldprice }}</span
              ><span class="p"
                >￥<span class="price">{{ item.price }}</span></span
              >
            </p>
            <div><span>x</span><span class="num2">1</span></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="foot">
      <div>
        <label for="inp" id="label"
          ><input type="checkbox" id="inp" />全选</label
        >
      </div>
      <div>
        合计：￥
        <span id="price">0.00</span>
      </div>
      <div><button id="btn">提交订单</button></div>
    </div>
    <!-- 移出 -->
    <div class="del">
      <div>
        <label for="inp2" id="label2">
          <input type="checkbox" id="inp2" />全选
        </label>
      </div>
      <div><button id="btn2">移出购物车</button></div>
    </div>
  </main>
</template>
<style scoped>
.del button {
  width: 85%;
  border: none;
  border-radius: 35px;
  background: linear-gradient(to right, #ff6034, #ee0a24);
  color: #fff;
}
.del div {
  width: 50%;
}
.del {
  width: 100%;
  line-height: 50px;
  padding: 5px 1rem;
  display: none;
  background: #fff;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid fuchsia;
}
.foot button {
  width: 85%;
  border: none;
  border-radius: 35px;
  background: linear-gradient(to right, #ff6034, #ee0a24);
  color: #fff;
}
.foot div:nth-of-type(2) {
  font-size: 14px;
  color: #9b9b9b;
}
.foot span {
  color: red;
  font-size: 24px;
}
.foot div {
  width: 33.3%;
}
.foot {
  width: 100%;
  line-height: 50px;
  padding: 5px 1rem;
  display: flex;
  background: #fff;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid fuchsia;
}

.p {
  color: #9b9b9b;
  font-size: 14px;
  text-decoration: line-through;
}
.soldprice {
  font-size: 18px;
  color: red;
}
.price-num {
  overflow: hidden;
  padding: 10px 1.5rem;
  display: flex;
  justify-content: space-between;
}
.list {
  margin: 5px 1rem;
  background: #fff;
  border-radius: 10px;
}
.font p {
  font-size: 13px;
  color: #9b9b9b;
}
.font h5 {
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}
.font {
  padding-left: 10px;
  width: 70%;
}
.fl {
  display: flex;
  align-items: center;
  padding-top: 10px;
}
.check input {
  border-radius: 50%;
}
.check {
  width: 10%;
  text-align: center;
}
.imgbox img {
  width: 100%;
}
.imgbox {
  width: 25%;
  border: 1px solid #ddd;
}
.car-list {
  overflow: hidden;
  background: transparent;
}
.header span {
  color: #fff;
  position: absolute;
  right: 1rem;
}
h3 {
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.header {
  display: flex;
  overflow: hidden;
  line-height: 66px;
  margin-top: -170px;
}
.back {
  width: 100%;
  height: 169px;
  /* position: absolute;
  z-index: -1; */
  background: linear-gradient(-100deg, #fd5050 0, #d74787 100%);
}
main {
  /* overflow: hidden; */
  height: 100vh;
  background: #9b9b9b30;
}
</style>>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      list: [
        {
          src: "images/t011010d9778a047bef.png",
          pname: "【配件】360 可视门铃专用上墙底座",
          soldprice: "19.00",
          price: "39.00",
        },
        {
          src: "images/t0137f6f23e234057d6.png",
          pname: "【成像】360智能摄像机云台7P超清版  AP1PA3",
          soldprice: "249.00",
          price: "299",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    // $("main").mousemove(function () {
    //   if ($(".list").length == 0) {
    //     $("#label").html("没有选择");
    //     $("#label").unbind("click"); //取消鼠标点击事件
    //   } else {
    // }
    //});

    //订单界面全选
    let sumprices = 0;
    $("#label").click(function () {
      if ($("#label").text() == "全选") {
        for (let n = 0; n < $(".list").length; n++) {
          $(".fl input").eq(n).prop("checked", "checked");
          sumprices +=
            parseInt($(".soldprice").eq(n).text()) *
            parseInt($(".num2").eq(n).text());
        }
        $("#price").html(sumprices);
        $("#label").html("<input type='checkbox' id='inp' checked/>取消");
      } else {
        for (let n = 0; n < $(".list").length; n++) {
          $(".fl input").eq(n).prop("checked", "");
        }
        sumprices = 0;
        $("#price").html("0.00");
        $("#label").html("<input type='checkbox' id='inp'/>全选");
      }
    });
    //选择物品时判断是不是选完了，当所有的物品被选中就够选全选
    let sumprice = 0;
    $(".check input").click(function () {
      let sum = [];
      let k = $(".check input").index(this);
      for (let i = 0; i < $(".list").length; i++) {
        if ($(".fl input").eq(i).prop("checked") == false) {
          sum += $(this).index();
        }
      }
      if (sum.length == 0) {
        $("#label input").prop("checked", "checked");
        $("#label").html("<input type='checkbox' id='inp' checked>取消");
      } else {
        $("#label input").prop("checked", "");
        $("#label").html("<input type='checkbox' id='inp'>全选");
      }
      let price = parseInt($("#price").text());
      // console.log(price)
      if (!$(".check input").eq(k).prop("checked")) {
        sumprice -=
          parseInt($(".soldprice").eq(k).text()) *
          parseInt($(".num2").eq(k).text());
        $("#price").text(sumprice);
        console.log(sumprice);
      } else {
        sumprice =
          parseInt($(".soldprice").eq(k).text()) *
            parseInt($(".num2").eq(k).text()) +
          price;
        $("#price").text(sumprice);
        // console.log(sumprice);
      }
    });

    $("#label2").click(function () {
      if ($(".list").length == 0) {
        $("#label2").unbind("click"); //取消鼠标点击事件
      } else {
        if ($("#label2").text() == "全选") {
          for (let n = 0; n < $(".list").length; n++) {
            $(".fl input").eq(n).prop("checked", "checked");
          }
          $("#label2").html("<input type='checkbox' id='inp2' checked/>取消");
        } else {
          for (let n = 0; n < $(".list").length; n++) {
            $(".fl input").eq(n).prop("checked", "");
          }
          $("#label2").html("<input type='checkbox' id='inp2'/>全选");
        }
      }
    });

    //编辑界面
    //选择物品时判断是不是选完了，当所有的物品被选中就够选全选
    $(".fl input").click(function () {
      let sum = [];
      for (let i = 0; i < $(".list").length; i++) {
        if ($(".fl input").eq(i).prop("checked") == false) {
          sum += $(this).index();
        }
      }
      if (sum.length == 0) {
        $("#label2 input").prop("checked", "checked");
        $("#label2").html("<input type='checkbox' id='inp2' checked>取消");
      } else {
        $("#label2 input").prop("checked", "");
        $("#label2").html("<input type='checkbox' id='inp2'>全选");
      }
    });
    //删除
    $("#btn2").click(function () {
      for (let i = 0; i < $(".list").length; i++) {
        // console.log($(".fl input").eq(i).prop("checked"));
        if ($(".fl input").eq(i).prop("checked") == true) {
          $(".list").eq(i).remove();
          i--;
        }
      }
      if ($(".list").length == 0) {
        $("#label2").html("没有选择");
        $("#label2").unbind("click"); //取消鼠标点击事件
      }
    });

    //编辑
    $("#edi").click(function () {
      if ($("#edi").text() == "编辑") {
        $("#edi").text("完成");
        $(".del").css("display", "flex");
        $(".foot").css("display", "none");
        let sum = [];
        for (let i = 0; i < $(".list").length; i++) {
          if ($(".fl input").eq(i).prop("checked") == false) {
            sum += $(this).index();
          }
        }
        if (sum.length == 0) {
          $("#label2 input").prop("checked", "checked");
          $("#label2").html("<input type='checkbox' id='inp2' checked>取消");
        } else {
          $("#label2 input").prop("checked", "");
          $("#label2").html("<input type='checkbox' id='inp2'>全选");
        }
        if ($(".list").length == 0) {
          $("#label2").html("没有选择");
        }
      } else {
        $("#edi").text("编辑");
        $(".del").css("display", "none");
        $(".foot").css("display", "flex");
        let sum = [];
        for (let i = 0; i < $(".list").length; i++) {
          if ($(".fl input").eq(i).prop("checked") == false) {
            sum += $(this).index();
          }
        }
        if (sum.length == 0) {
          $("#label2 input").prop("checked", "checked");
          $("#label2").html("<input type='checkbox' id='inp2' checked>取消");
        } else {
          $("#label2 input").prop("checked", "");
          $("#label2").html("<input type='checkbox' id='inp2'>全选");
          $("#price").html("0.00");
        }
        if ($(".list").length == 0) {
          $("#label").html("没有选择");
          $("#price").html("0.00");
        }
      }
    });

    // //订单界面全选
    // $("#label").click(function () {
    //   if ($(".list").length == 0) {
    //     $("#label").html("没有选择");
    //     $("#label").unbind("click");
    //     return;
    //   } else {
    //     if ($("#label").text() == "全选") {
    //       for (let n = 0; n < $(".list").length; n++) {
    //         $(".fl input").eq(n).prop("checked", "checked");
    //       }
    //       $("#label").html("<input type='checkbox' id='inp' checked/>取消");
    //     } else {
    //       for (let n = 0; n < $(".list").length; n++) {
    //         $(".fl input").eq(n).prop("checked", "");
    //       }
    //       $("#label").html("<input type='checkbox' id='inp'/>全选");
    //     }
    //   }
    // });

    // //选择物品时判断是不是选完了，当所有的物品被选中就够选全选
    // $(".fl input").click(function () {
    //   let sum = [];
    //   for (let i = 0; i < $(".list").length; i++) {
    //     if ($(".fl input").eq(i).prop("checked") == false) {
    //       sum += $(this).index();
    //     }
    //   }
    //   if (sum.length == 0) {
    //     $("#label input").prop("checked", "checked");
    //     $("#label").html("<input type='checkbox' id='inp' checked>取消");
    //   } else {
    //     $("#label input").prop("checked", "");
    //     $("#label").html("<input type='checkbox' id='inp'>全选");
    //   }
    // });
    // //编辑
    // $("#edi").click(function () {
    //   if ($("#edi").text() == "编辑") {
    //     $("#edi").text("完成");
    //     $(".del").css("display", "flex");
    //     $(".foot").css("display", "none");
    //   } else {
    //     $("#edi").text("编辑");
    //     $(".del").css("display", "none");
    //     $(".foot").css("display", "flex");
    //   }
    // });
    //编辑界面全选
  },
};
</script>