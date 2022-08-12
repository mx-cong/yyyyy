<template>
  <div class="box">
    <div class="top">
      <span
        ><router-link to="/index"
          ><img src="images/back.png" alt="" /></router-link></span
      ><span>分类</span><span><img src="images/serach.png" alt="" /></span>
    </div>
    <div class="body">
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in list1"
            :key="index"
            v-bind:class="{ ck2: index == num }"
            @click="chang(index)"
          >
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <section class="right">
        <ul class="ck" v-if="num == 0">
          <li v-for="(item1, index1) in list2" :key="index1">
            <p><img :src="item1.src" alt="" /></p>
            <p>{{ item1.title }}</p>
          </li>
        </ul>
        <ul class="ck" v-else-if="num == 1">
          <li v-for="(item1, index1) in list3" :key="index1">
            <p><img :src="item1.src" alt="" /></p>
            <p>{{ item1.title }}</p>
          </li>
        </ul>
        <ul class="ck" v-else-if="num == 2">
          <div class="title">车载电器</div>
          <li v-for="(item1, index1) in list4" :key="index1">
            <p><img :src="item1.src" alt="" /></p>
            <p>{{ item1.title }}</p>
          </li>
        </ul>
        <ul class="ck" v-else-if="num == 3">
          <li v-for="(item1, index1) in list5" :key="index1">
            <p><img :src="item1.src" alt="" /></p>
            <p>{{ item1.title }}</p>
          </li>
        </ul>
        <ul class="ck" v-else-if="num == 4">
          <li v-for="(item1, index1) in list6" :key="index1">
            <p><img :src="item1.src" alt="" /></p>
            <p>{{ item1.title }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<style scoped>
.title {
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  margin-top: 8px;
  margin-left: 5px;
}
.ck2 {
  background: #f6f6f7;
}
.ck img {
  width: 100%;
}

.ck li {
  width: 32.7%;
  font-size: 12px;
  text-align: center;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
}
.ck {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;
}
.right {
  width: 70%;
  overflow: hidden;
  background: #ffffff;
  float: right;
  margin-top: 10px;
  margin-right: 8px;
}
.left li {
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
}
.left {
  width: 25%;
  height: 620px;
  overflow: hidden;
  background: white;
  font-size: 14px;
  position: fixed;
}
.body {
  width: 100%;
  height: 620px;
  background: #f6f6f7;
  overflow: hidden;
}
.top span img {
  width: 20%;
  vertical-align: middle;
}
.top span:nth-of-type(3) {
  text-align: right;
}
.top span:nth-of-type(2) {
  text-align: center;
}
.top a {
  width: 100%;
}
.top span {
  width: 33%;
  padding: 0 1rem;
}
.top {
  width: 100%;
  /* line-height: 45px; */
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  align-items: center;
  padding: 1rem 0;
}
</style>

<script>
export default {
  data() {
    return {
      num: 0,
      list1: ["家庭安防", "安全路由", "汽车用品", "智能手表", "扫地机器人"],
      list2: [
        {
          src: "images/t01c8169ecc14f6af6c.webp",
          title: "摄像机",
        },
        {
          src: "images/t0149703108b20ae37e.webp",
          title: "门铃",
        },
        {
          src: "images/t011dd90843ef0b64e9.webp",
          title: "云录卡",
        },
        {
          src: "images/t011aaa597207d8cfff.webp",
          title: "配件",
        },
      ],
      list3: [
        {
          src: "images/t01e77d5fbf93871692.webp",
          title: "路由器",
        },
      ],
      list4: [
        {
          src: "images/t01f1f520cf32f316c2.webp",
          title: "行车记录仪",
        },
        {
          src: "images/t014f7dd4c96b8de380.webp",
          title: "胎压监测",
        },
        {
          src: "images/t01123c58b88d77a1ce.webp",
          title: "安全座椅",
        },
        {
          src: "images/t01ef40a65dc6d3759e.webp",
          title: "车载配件",
        },
      ],
      list5: [
        {
          src: "images/t01302f09dd5f95f197.webp",
          title: "智能手表",
        },
      ],
      list6: [
        {
          src: "images/t01a9208771600b9495.webp",
          title: "扫地机器人",
        },
        {
          src: "images/t010ee72f206d28f80f.webp",
          title: "配件",
        },
      ],
    };
  },
  methods: {
    chang(a) {
      this.num = a;
    },
  },
};
</script>