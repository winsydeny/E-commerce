<template>
  <div id="app">
    <router-view/>
    <!-- <login/> -->
    <navbar :navbars="bars"/>
  </div>
</template>

<script>
import store from "@/store/index.js";
// import login from "@/views/login/Login";
import navbar from "@/components/NavBar.vue";
export default {
  name: "app",
  data() {
    return {
      bars: [
        {
          name: "home",
          path: "/home",
          title: "首页",
          src: require("@/assets/navbar/home.webp"),
          ssrc: require("@/assets/navbar/home_tabs.webp")
        },
        {
          name: "recommend",
          path: "/recommend",
          title: "推荐",
          src: require("@/assets/navbar/recommend.webp"),
          ssrc: require("@/assets/navbar/recommend_tab.webp")
        },
        {
          name: "search",
          path: "/search",
          title: "搜索",
          src: require("@/assets/navbar/search.webp"),
          ssrc: require("@/assets/navbar/search_tab.webp")
        },

        {
          name: "chat",
          path: "/chat",
          title: "聊天",
          src: require("@/assets/navbar/chat.webp"),
          ssrc: require("@/assets/navbar/chat_tab.webp")
        },

        {
          name: "mine",
          path: "/mine",
          title: "个人中心",
          src: require("@/assets/navbar/mine.webp"),
          ssrc: require("@/assets/navbar/mine_tab.webp")
        }
      ]
    };
  },
  components: {
    navbar
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.$store.dispatch("setUserName", localStorage.getItem("username"));
    }
    if (localStorage.getItem("address")) {
      this.$store.dispatch(
        "setReceiver",
        JSON.parse(localStorage.getItem("address"))
      );
      // console.log(JSON.parse(localStorage.getItem("address")));
    }
  }
};
</script>
<style lang="scss">
#app {
  height: 100%;
  padding-bottom: 3rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f4f4f4;
  color: #2c3e50;

  &::-webkit-scrollbarf {
    display: none;
  }
  // margin-top: 60px;
}
</style>
