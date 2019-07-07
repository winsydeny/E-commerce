  <template>
  <div class="nav" style="height:3rem">
    <div
      v-for="(item,index) in navbars"
      :key="item.id"
      :class="['nav-item',{'selected':$route.path.includes(item.path)}]"
      @click="to(item.name,index)"
    >
      <div class="nav-item-btn">
        <div class="btn-img">
          <img
            :src="[$route.path.includes(item.path)?item.ssrc:item.src]"
            alt
            srcset
            class="bar-imgs"
          />
          <!-- <img src="../assets/navbar/home.webp" alt srcset class="bar-imgs"> -->
        </div>
        <div :class="['btn-font',{'selected-font':$route.path.includes(item.path)}]">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      navbars: [
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
  methods: {
    to(target_name, id) {
      this.$router.replace({ name: target_name });
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 999;
  background: white;
  justify-content: center;
  align-items: center;
  border-top: 0.07rem solid gainsboro;
  .nav-item {
    flex: 1;
    // border: 1px solid gold;
    // transition: 0.7s;
    height: 3rem;
    // background: gray;
    .nav-item-btn {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .bar-imgs {
        width: 1.4rem;
        height: auto;
      }
      .btn-font {
        margin-top: 0.2rem;
        font-size: 0.7rem;
      }
    }
  }
  .selected {
  }
  .selected-font {
    color: red;
  }
}
</style>

