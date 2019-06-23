<template>
  <div class="tabbar">
    <div class="tabbar-list">
      <ul ref="scroll">
        <li
          v-for="(item,index) in tablist"
          :key="index"
          :class="[{'tab-selected':Object.is(index,selectdId)}]"
          @click="selected"
        >
          <span :tab_id="index" :route_path="item.path">{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="tab-edge"></div>
  </div>
</template>
<script>
import animateScroll from "@/utils/AnimateScroll.js";
export default {
  name: "tabbar",
  data() {
    return {
      selectdId: 0,
      tablist: [
        { title: "热门", path: "/home/popular" },
        { title: "女装", path: "/home/women_clothe" },
        { title: "百货", path: "/home/categroies" },
        { title: "鞋包", path: "/home/shoes" },
        { title: "母婴", path: "/home/child" },
        { title: "手机", path: "/home/phones" },
        { title: "食品", path: "/home/foods" },
        { title: "日用", path: "/home/days" },
        { title: "家具", path: "/home/furniture" },
        { title: "电脑", path: "/home/computers" }
      ]
    };
  },
  methods: {
    // 判断当期li距离左边的位置来确定是否在中央
    // center ：171
    selected(e) {
      let scroll = this.$refs.scroll;
      // 中心位置
      console.log(e);
      let c_postion =
        window.document.body.offsetWidth / 2 - e.target.offsetWidth / 2;
      if (e.target.nodeName === "SPAN") {
        // 获取当前点击的是第几个元素
        const id = parseInt(e.target.getAttribute("tab_id"));
        //即将要移动的距离，(e.clientx-e.offsetx)是距离视口左边的距离，在减去中心位置距离左边视口的位置就是当前点击元素即将要移动的距离
        const distance = e.clientX - e.offsetX - c_postion;
        //
        animateScroll(scroll, distance);
        this.selectdId = id;
      }

      // const route_path = e.target.getAttribute("BAse");
      this.navigateTo(e.target.getAttribute("route_path"));
      console.log(e);
    },
    navigateTo(path) {
      console.log();
      this.$router.push({ path });
    }
  }
};
</script>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 3rem;
  line-height: 2rem;
  opacity: 0.99;
  .tab-edge {
    width: 100%;
    height: 0.1rem;
    background: rgba(31, 32, 32, 0.26);
    // position: relative;
    // z-index: -1;
    // bottom: 0rem;
  }
  .tabbar-list {
    height: 100%;
    background: #f4f4f4;
    white-space: nowrap;

    ul {
      overflow-x: auto;
      overflow: -moz-scrollbars-none; //firefox

      li {
        display: inline-block;
        width: 2rem;
        line-height: 3rem;
        margin: 0 0.67rem;
        padding: 0 0 0.86rem 0;
        height: 2.1rem;
      }
      .tab-selected {
        color: red;
        font-weight: bold;
        border-bottom: 0.12rem solid red;
      }
    }

    // chrome safire
    ul::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>


