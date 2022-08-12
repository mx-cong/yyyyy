
<template>
  <div class="box">
    <!-- <h3>这是登录</h3> -->
    <div class="top">
      <span
        ><router-link to="/index"
          ><img src="images/back.png" alt="" /></router-link></span
      ><span>短信登录</span><span></span>
    </div>
    <div class="inp">
      <form action="">
        <p>
          <span><router-link to="/select">+86 ∨ </router-link></span
          ><input id="phone" type="text" placeholder="请输入手机号" />
        </p>
        <p>
          <input type="text" id="jycode" placeholder="请输入校验码" /><button
            id="btn"
            v-on:click="check()"
          >
            获取验证码
          </button>
        </p>
        <p>
          <input type="submit" id="sub" v-on:click="check2()" value="登录" />
        </p>
      </form>
      <div class="phonets">请输入手机号!</div>
      <div class="jyts">请输入校验码!</div>
      <div class="jyandphone">请输入手机号或者校验码!</div>
    </div>
    <div class="chang">
      <router-link to="/s360login">账号登录</router-link><span></span>
    </div>
    <div class="reg">
      <router-link to="/register"><button>手机号快速注册</button></router-link>
    </div>
  </div>
</template>
<style scoped>
.top img {
  width: 20%;
  vertical-align: middle;
}
.box {
  padding: 0 1.25rem;
}
.reg a {
  margin: 0px auto;
}
.reg button {
  width: 100%;
  height: 44px;
  border: 1px solid #4b93ff;
  background: transparent;
  color: #4b93ff;
  font-size: 18px;
  margin: 0px auto;
}
.reg {
  width: 100%;
  overflow: hidden;
  margin-top: 35px;
}
.chang a {
  width: 30%;
  font-size: 14px;
  color: #4b93ff;
}
.chang span {
  display: inline-block;
  width: 70%;
  font-size: 18px;
}
.chang {
  width: 100%;
  margin: 5px auto;
  overflow: hidden;
}
.inp p:nth-of-type(3) input {
  width: 100%;
  background: skyblue;
  color: white;
  font-size: 18px;
}
.jyandphone {
  width: 80%;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #eee;
  background: url("../assets/images/ten.png") no-repeat 15px, rgb(24, 24, 24);
  background-size: 30px;
  border-radius: 9px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 60px;
  padding: 10px;
  display: none;
}
.jyts {
  width: 80%;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #eee;
  background: url("../assets/images/ten.png") no-repeat 60px, rgb(24, 24, 24);
  background-size: 30px;
  border-radius: 9px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 60px;
  padding: 10px;
  display: none;
}
.phonets {
  width: 80%;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #eee;
  background: url("../assets/images/ten.png") no-repeat 60px, rgb(24, 24, 24);
  background-size: 30px;
  border-radius: 9px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 60px;
  padding: 10px;
  display: none;
}
.inp button {
  width: 25%;
  text-align: center;
  border: none;
  line-height: 44px;
  color: #4b93ff;
  margin-top: 2px;
  background: transparent;
}
.inp ::-webkit-input-placeholder {
  text-indent: 1em;
}
.inp input {
  height: 44px;
  border: none;
  outline: none;
  background: #fafafa;
  width: 75%;
  text-indent: 1em;
}
.inp span {
  display: inline-block;
  width: 15%;
  height: 44px;
  margin-left: 10px;
}
.inp {
  margin-top: 30px;
}
.inp p {
  border: 1px solid #eee;
  width: 100%;
  text-align: left;
  overflow: hidden;
  line-height: 44px;
  margin-top: 15px;
  background: #fafafa;
}

.top {
  width: 100%;
  /* height: 44px; */
  display: flex;
  line-height: 45px;
  /* justify-content: start; */
  background: #fff;
  border-bottom: 1px solid #eee;
  /* overflow: hidden; */
  /* align-items: center; */
  /* margin: 5px; */
}
.top span {
  font-size: 20px;
  /* font-weight: 400; */
  width: 33%;
}
</style>>

<script>
import $ from "jquery";
export default {
  methods: {
    check: function () {
      if ($("#phone").val() == "") {
        $(".phonets").css("display", "block");
        // ts[0].style.display = "block";
        $("#btn").disabled = true;
        var num = 0;
        var timer = setInterval(function () {
          num++;
          if (num == 2) {
            $(".phonets").css("display", "none");
            // ts[0].style.display = "none";
            $("#btn").disabled = false;
            clearInterval(timer);
          }
        }, 1500);
      }
    },
    check2: function () {
      if ($("#phone").val() == "" && $("#jycode").val() == "") {
        $(".jyandphone").css("display", "block");
        $("#sub").disabled = true;
        var num2 = 0;
        var timer2 = setInterval(function () {
          num2++;
          if (num2 == 2) {
            $(".jyandphone").css("display", "none");
            $("#sub").disabled = false;
            clearInterval(timer2);
          }
        }, 1500);
      } else if ($("#jycode").val() == "") {
        $(".jyts").css("display", "block");
        $("#sub").disabled = true;
        var num3 = 0;
        var timer3 = setInterval(() => {
          num3++;
          if (num3 == 2) {
            $(".jyts").css("display", "none");
            $("#sub").disabled = false;
            clearInterval(timer3);
          }
        }, 1500);
      } else {
        this.check();
      }
    },
  },
};
</script>