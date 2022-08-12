<template>
  <div class="box">
    <div class="top">
      <span
        ><router-link to="/phonelogin"
          ><img src="images/back.png" alt="" /></router-link></span
      ><span>选择国家或地区</span><span></span>
    </div>
    <van-index-bar>
      <van-index-anchor index="常用" />
      <van-cell title="中国大陆" />
      <van-cell title="中国台湾" />
      <van-cell title="中国香港" />
      <van-cell title="中国澳门" />

      <van-index-anchor index="A" />
      <van-cell title="阿尔巴尼亚" />
      <van-cell title="阿富汗" />
      <van-cell title="阿根廷" />

      <van-index-anchor index="B" />
      <van-cell title="巴马哈" />
      <van-cell title="巴基斯坦" />
      <van-cell title="白俄罗斯" />
      <van-cell title="巴勒斯坦" />
      <van-cell title="巴拿马" />

      <van-index-anchor index="C" />
      <van-cell title="朝鲜" />

      <van-index-anchor index="D" />
      <van-cell title="丹麦" />
      <van-cell title="德国" />
      <van-cell title="多米尼亚共和国" />
    </van-index-bar>
  </div>
</template>
<style scoped>
.top img {
  width: 20%;
  vertical-align: middle;
}
.top span:nth-of-type(2) {
  width: 45%;
  font-size: 22px;
}
.top span:nth-of-type(1) {
  width: 30%;
}
.top {
  display: flex;
  line-height: 45px;
  border-bottom: 1px solid #eee;
}
.box {
  padding: 0px 1rem;
}
</style>


