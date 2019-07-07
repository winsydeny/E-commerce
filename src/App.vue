<template>
  <div id="app">
    <router-view />
    <!-- <login/> -->
    <router-view name="navbar"></router-view>
  </div>
</template>

<script>
import store from "@/store/index.js";

import { getGoodsPid, getGoodsList } from "@/api/index.js";
import { mapActions } from "vuex";
// import { Loading } from "element-ui";
// import login from "@/views/login/Login";
import navbar from "@/components/NavBar.vue";
export default {
  name: "app",
  methods: {
    ...mapActions(["setGoodslist"]),
    async _initData() {
      if (localStorage.getItem("username")) {
        this.$store.dispatch("setUserName", localStorage.getItem("username"));
      }
      if (localStorage.getItem("address")) {
        this.$store.dispatch(
          "setReceiver",
          JSON.parse(localStorage.getItem("address"))
        );
      }
      if (localStorage.getItem("collection")) {
        this.$store.dispatch(
          "setCollection",
          JSON.parse(localStorage.getItem("collection"))
        );
      }
    }
  },
  mounted() {
    this._initData();
    // console.log(this.$store);
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
}
</style>
