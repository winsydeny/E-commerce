<template>
  <div class="my-order">
    <div class="search-order">
      <form>
        <input type="text" placeholder="搜索" style="text-align:center;">
      </form>
    </div>
    <div style="height:4rem;">
      <tab-bar
        :tablist="tablist"
        bground="white"
        style="width:96%;transform: translate(-50%,0);left:50%;border-radius:3px;"
      />
    </div>
    <div class="info">您还没有订单</div>

    <router-view/>
  </div>
</template>
<script>
import tabBar from "@/components/TabBar";
export default {
  name: "myorder",
  data() {
    return {
      tablist: [
        { title: "全部", path: "" },
        { title: "待付款", path: "" },
        { title: "待分享", path: "" },
        { title: "待发货", path: "" },
        { title: "待收货", path: "" },
        { title: "待评价", path: "" }
      ]
    };
  },
  components: {
    tabBar
  }
};
</script>
<style lang="scss" scoped>
.my-order {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: absolute;
  z-index: 3333;
  top: 0;
  .info {
    width: 100%;
    height: 20rem;
    text-align: center;
    line-height: 20rem;
  }
  .search-order {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f4f4;
    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        border: none;
        outline: none;
        padding: 0.4rem 0.4rem;
        background: #ffffff;
        width: 90%;
        border-radius: 4px;
        font-size: 1rem;
      }
    }
  }
}
</style>
