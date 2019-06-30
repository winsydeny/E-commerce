<template>
  <div class="my-order">
    <div class="search-order">
      <form>
        <input type="text" placeholder="搜索" style="text-align:center;" />
      </form>
    </div>
    <div style="height:4rem;" @click="tabs" ref="tabbar">
      <tab-bar
        :tablist="tablist"
        bground="white"
        style="width:96%;transform: translate(-50%,0);left:50%;border-radius:3px;"
      />
    </div>
    <myOrderList :tab="tab"></myOrderList>
    <!-- <div class="info">您还没有订单</div> -->
  </div>
</template>
<script>
import tabBar from "@/components/TabBar";
import MyOrderList from "./MyOrderList";
import { getOrders } from "@/api/index";
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
      ],
      tab: ""
    };
  },
  components: {
    tabBar,
    MyOrderList
  },
  methods: {
    async _initData() {
      const orders = await getOrders(this.$store.getters.getUser);
      this.order = orders.data;
    },
    tabs(e) {
      const id = e.srcElement.getAttribute("tab_id");
      this.tab = id;
      this.moveTab();
    },
    moveTab() {
      const tabselected = this.$refs.tabbar.children[0].children[0].children[0]
        .children;
      Array.from(tabselected).forEach(el => {
        // console.log(el);
        if (el.classList) el.classList.remove("tab-selected");
      });
      tabselected[this.tab].classList.add("tab-selected");
    }
  },
  mounted() {
    this.tab = this.$route.params.tag;
    this.moveTab();
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
