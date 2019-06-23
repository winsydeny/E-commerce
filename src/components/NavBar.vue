  <template>
  <div class="nav" style="height:8%">
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
          >
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
  props: {
    navbars: Array
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

