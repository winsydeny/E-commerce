<template>
  <div class="setting">
    <div class="funcs">
      <ul>
        <li @click="signout">退出</li>
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
  width: 100%;
  height: 100vh;
  background: rgba(192, 191, 191, 0.288);
  position: fixed;
  z-index: 1000;
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
