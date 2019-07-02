<template>
  <div class="order-list">
    <div v-if="isShow">
      <div class="things" v-for="(item,index) in orders" :key="index">
        <div class="things-left">
          <img :src="item.img" alt />
        </div>
        <div class="things-right">
          <p>{{item.title}}</p>
          <div class="things-info">
            <div class="prices">
              <span>￥</span>
              <span>{{item.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <back style="position:absolute;bottom:3rem;right:1rem;" name="返回"></back>
    <div class="info" v-if="!isShow">您还没有订单</div>
  </div>
</template>
<script>
import { getOrders } from "@/api/index";
import back from "@/components/Back.vue";

export default {
  name: "myorder_list",
  components: {
    back
  },
  data() {
    return {
      orders: [],
      isShow: true
    };
  },
  props: ["tab"],
  watch: {
    tab: function(val) {
      //   console.log(val);
      if (val == 0 || val == 4) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  methods: {
    async _initData() {
      const { data } = await getOrders(this.$store.getters.getUser);
      this.orders = data;
    },
    backToTop() {
      this.$router.replace({ name: "mine" });
    }
  },
  mounted() {
    this._initData();
  }
};
</script>
<style lang="scss" scoped>
$fontColor: #151516;
$priceColor: #e02e24;
.order-list {
  .info {
    width: 100%;
    height: 20rem;
    text-align: center;
    line-height: 20rem;
  }
  .things {
    display: flex;
    box-sizing: border-box;
    width: 96%;
    border-radius: 0.2rem;
    margin: 0.6rem auto;
    background: white;
    padding: 0 0.3rem;
    .things-left {
      width: 25%;
      img {
        margin: 0.3rem 0;
        border-radius: 0.2rem;
        width: 100%;
      }
    }
    .things-right {
      width: 75%;
      position: relative;
      p {
        padding: 0.3rem;
        color: $fontColor;
        // width: 90%;
        font-size: 0.9rem;
        line-height: 1.4rem;
        max-height: 2.5rem;
        overflow: hidden;
      }
      .things-info {
        display: flex;
        position: absolute;
        // justify-content: center;
        align-items: center;
        bottom: 0.3rem;
        width: 100%;
        div {
          &:nth-child(1) {
            margin-left: 0.2rem;
            // width: 25%;
            color: #e02e24;

            // text-indent: 0.6rem;
          }
        }
        .numbers {
          color: #58595b;
          width: 55%;
          text-indent: 0.6rem;
          font-size: 0.8rem;
          text-align: left;
        }
        .avatar {
          width: 20%;
          position: relative;
          // width: 3rem;
          img {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            border: 0.1rem solid white;
            &:nth-child(2) {
              position: absolute;
              left: 1rem;
              border: 0.1rem solid white;
            }
          }
        }
      }
    }
  }
}
</style>
