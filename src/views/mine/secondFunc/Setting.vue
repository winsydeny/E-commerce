<template>
  <div class="setting">
    <div class="funcs">
      <ul>
        <li>支付设置</li>
        <li>意见反馈</li>
        <li>关于</li>
        <li @click="signout" style="text-align:center;">退出登录</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "setting",
  data() {
    return {};
  },
  methods: {
    signout() {
      localStorage.removeItem("username");
      this.$router.replace({ name: "login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.setting {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: absolute;
  z-index: 3333;
  top: 0;

  // width: 100%;
  // height: 100vh;
  // background: rgba(192, 191, 191, 0.288);
  // position: fixed;
  // z-index: 1000;
  .funcs {
    width: 96%;
    margin: 0 auto;
    ul {
      li {
        display: block;
        background: white;
        border-radius: 0.2rem;
        margin: 0.5rem 0;
        padding: 1.1rem 0;
        text-indent: 1rem;
        &:hover {
          background: rgba(221, 212, 212, 0.425);
        }
      }
    }
  }
}
</style>
