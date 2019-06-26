<template>
  <div class="address">
    <div class="main">
      <i class="iconfont">&#xe64e;</i>
      <span>暂无收货地址</span>
      <button class="addAddress">手动添加</button>
      <button @click="$router.go(-1)">BACK</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "consignee"
};
</script>
<style lang="scss" scoped>
.address {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: absolute;
  z-index: 3333;
  top: 0;

  .main {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      font-size: 4rem;
      color: #ccc;
    }
    span {
      margin-top: 2rem;
    }
    button.addAddress {
      margin: 0 auto;
      margin: 3rem 0 0.9rem 0;
      background: #e02e24;
    }
    button {
      width: 90%;
      background: #e02e2487;
      color: white;
      border-radius: 3px;
      padding: 0.6rem 0.2rem;
      border: none;
      outline: none;
      font-size: 1rem;
    }
  }
}
</style>
