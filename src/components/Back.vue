<template>
  <div class="back" @click="toback">
    <div class="to-top">
      <span>顶部</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "back",
  methods: {
    toback() {
      this.$parent.backToTop();
    }
  },
  mounted() {
    // console.log(this.scroll);
  }
};
</script>
<style lang="scss" scoped>
.back {
  position: relative;
  .to-top {
    width: 2.5rem;
    height: 2.5rem;
    // background: rgb(255, 4, 4);
    border: 0.027rem solid gray;
    border-radius: 50%;
    line-height: 2.5rem;
    font-size: 0.7rem;
    background: white;
    text-align: center;
  }
}
</style>

