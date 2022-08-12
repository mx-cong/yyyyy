<template>
  <!-- <h2>这是注册</h2> -->
  <div class="box">
    <div class="top">
      <span>
        <router-link to="/index">
          <img src="images/back.png" alt="" /></router-link
      ></span>
      <span>注册360账号</span>
      <span></span>
    </div>
    <div class="inp">
      <form action="">
        <p>
          <span><img src="images/account.png.png" alt="" id="phone" /></span
          ><input type="text" placeholder="请输入您的手机号码" />
        </p>
        <p>
          <span><img src="images/xianyan.png" alt="" /></span
          ><input type="text" placeholder="请输入校验码" /><button
            v-on:click="check()"
          >
            获取校验码
          </button>
        </p>
        <p>
          <span><img src="images/password.png" alt="" /></span
          ><input type="password" placeholder="请输入8~20位的密码" />
        </p>
        <p>
          <label for="u"
            ><input
              type="checkbox"
              id="u"
            />阅读并同意“360用户协议”和“360用户隐私政策”</label
          >
        </p>
        <p>
          <input type="submit" value="注册" />
        </p>
      </form>
    </div>
    <div class="login">
      <router-link to="/s360login">已有360账号</router-link>
    </div>
    <div class="ts">请输入有效手机号！</div>
  </div>
</template>
<style scoped>
.ts {
  width: 80%;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #eee;
  background: url("../assets/images/ten.png") no-repeat 40px, rgb(24, 24, 24);
  background-size: 30px;
  border-radius: 9px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 60px;
  padding: 10px;
  display: none;
}
.login a{
  color: #4b93ff;
}
.login {
  color: #4b93ff;
  font-size: 14px;
  text-align: right;
  margin-top: 10px;
}
.inp p:last-of-type input {
  width: 100%;
  background: #93beff;
  border-color: rgb(147, 190, 255);
  color: white;
  font-size: 18px;
}
.inp p:last-of-type {
  margin-top: 20px;
}
.inp p:nth-of-type(4) {
  background: transparent;
  border: none;
  color: #9b9b9b;
  font-size: 14px;
}
.inp p:nth-of-type(4) input {
  width: 5%;
}
.inp p:nth-of-type(2) button {
  width: 30%;
  line-height: 44px;
  border: none;
  background: transparent;
  text-align: center;
  color: #4b93ff;
  font-size: 16px;
}
.inp p:nth-of-type(2) input {
  width: 62%;
}
.inp span > img {
  width: 70%;
  vertical-align: middle;
  padding-left: 10px;
  padding-bottom: 3px;
}
.inp span {
  display: inline-block;
  width: 8%;
}
.inp input {
  width: 92%;
  line-height: 44px;
  border: none;
  outline: none;
  background: transparent;
  text-indent: 0.5em;
}
.inp p {
  border: 1px solid #eee;
  overflow: hidden;
  background: #fafafa;
  float: left;
  width: 100%;
  margin-top: 15px;
}
.inp {
  width: 100%;
  margin-top: 15px;
  overflow: hidden;
}
.top img {
  width: 20%;
  vertical-align: middle;
}
.top span {
  width: 33%;
  font-size: 18px;
}
.top {
  width: 100%;
  line-height: 45px;
  display: flex;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.box {
  padding: 0 1.4rem;
}
</style>>

<script>
import $ from "jquery";
export default {
  methods: {
    check: function () {
      if ($("#phone").val() == "") {
        $(".ts").css("display", "block");
        var num = 0;
        var timer = setInterval(function () {
          num++;
          if (num == 2) {
            clearInterval(timer);
            $(".ts").css("display", "none");
          }
        },1500);
      }
    },
  },
};
</script>