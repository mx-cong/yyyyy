<template>
  <div class="box">
    <!-- <h3>这是360账号登录</h3> -->
    <div class="top">
      <span
        ><router-link to="/index"
          ><img src="images/back.png" alt="" /></router-link></span
      ><span>360账号登录</span><span></span>
    </div>
    <div class="inp">
      <form action="">
        <ul class="inpbox">
          <li>
            <span><img src="images/account.png" alt="" /></span
            ><input type="text" placeholder="手机号/用户名/邮箱" />
          </li>
          <li>
            <span><img src="images/password.png" alt="" /></span
            ><input type="text" placeholder="密码/账号卫士APP动态码" />
          </li>
          <li><input type="submit" value="登录" /></li>
          <li>
            <router-link to="/phonelogin">短信登录</router-link
            ><router-link to="/">忘记密码</router-link>
          </li>
        </ul>
      </form>
    </div>
    <div class="reg">
      <router-link to="/register"><button>手机号快速注册</button></router-link>
    </div>
  </div>
</template>
<style scoped>
.reg button {
  width: 100%;
  height: 44px;
  border: 1px solid #4b93ff;
  background: transparent;
  color: #4b93ff;
  font-size: 18px;
  margin: 0px auto;
}
.reg a {
  color: #4b93ff;
}
.reg {
  width: 100%;
  overflow: hidden;
  background: #fafafa;
  margin-top: 35px;
}
.inpbox li:nth-of-type(4) a {
  font-size: 14px;
  color: #4b93ff;
  width: 18%;
}
.inpbox li:nth-of-type(4) {
  margin-top: 8px;
  background: #fff;
  border: none;
  display: flex;
  justify-content: space-between;
}
.inpbox li:nth-of-type(3) input {
  width: 100%;
  color: white;
  font-size: 18px;
  background: #93beff;
  text-align: center;
}
.inpbox span > img {
  width: 70%;
  padding-left: 8px;
  vertical-align: middle;
}
.inpbox span {
  display: inline-block;
  width: 8%;
}
.inpbox input {
  width: 92%;
  height: 44px;
  border: none;
  outline: none;
  text-indent: 1em;
  background: #fafafa;
}
.inpbox li:nth-of-type(5) {
  /* background: #fafafa; */
  margin-top: 5px;
}
.inpbox li {
  background: #fafafa;
  overflow: hidden;
  margin-top: 15px;
  border: 1px solid #eee;
}
.inpbox {
  width: 100%;
}
.inp {
  width: 100%;
  margin-top: 30px;
}
.top img {
  width: 20%;
  /* margin-top: 10px; */
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
  font-size: 18px;
  /* justify-items: flex-start; */
}
.box {
  padding: 0 1rem;
}
</style>