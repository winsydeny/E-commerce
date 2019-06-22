  <template>
  <div class="home">
    <!-- 导航栏 -->
    <tabbar/>
    <!-- 路由层 -->
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from "@/components/TabBar";
export default {
  name: "home",
  components: {
    tabbar
  },
  mounted() {
    this.$router.replace({ path: "/home/popular" });
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 92%;
  overflow-y: scroll;
}

.home::-webkit-scrollbar {
  display: none;
}
</style>

