<template>
  <div class="mine" @scroll="calcScroll">
    <section class="personal-section">
      <div class="personal-header">
        <div class="info">
          <div class="avatar">
            <img src="http://pinduoduoimg.yangkeduo.com/avatar/default/1.png@750w_1l_50Q.webp" alt>
          </div>
          <div class="username">
            <p>{{user|formateUser}}</p>
            <p>勋章墙></p>
          </div>
          <div class="cards">
            <div>拼单返现</div>
            <div>省钱月卡</div>
          </div>
        </div>
      </div>
      <div class="sell">
        <div class="ad">
          品牌特卖
          <span class="btn">匹克3折抢</span>
          <i class="more">></i>
        </div>
      </div>

      <div class="my-orders">
        <div class="order-title">
          <span>我的订单</span>
          <span>查看全部></span>
        </div>
        <div class="order-list">
          <ul>
            <li>待付款</li>
            <li>待付款</li>
            <li>待付款</li>
            <li>待付款</li>
            <li>待付款</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="functions">
      <ul>
        <li>优惠券</li>
        <li>商品收藏</li>
        <li>店铺收藏</li>
        <li>历史浏览</li>
        <li>退款售后</li>
      </ul>
    </div>

    <div class="functions-second">
      <ul>
        <li>新人红包</li>
        <li>邀请好友</li>
        <li>收货地址</li>
        <li>我的评价</li>
        <li>官方客服</li>
        <li @click="go">设置</li>
      </ul>
    </div>
    <div class="recommend">
      <div class="re-title">
        <img :src="testimg" alt>
        精选推荐
      </div>
      <div class="re-content">
        <div class="goods-list" v-for="(item,index) in 5" :key="index">
          <div class="goods left">
            <img
              src="http://t00img.yangkeduo.com/goods/images/2019-03-12/8f1c0a8449b35616b0d144957f0a9966.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
              alt
            >
            <div class="goods-info">
              <p>无线蓝牙耳机迷你双耳入耳式 支持所有手机通用苹果oppo华为vivo</p>
              <p>急速退款</p>
              <div class="prices">
                <span>￥</span>
                <span>12.9</span>
              </div>
              <div class="numbers">已拼2.5万件</div>
            </div>
          </div>
          <div class="goods right">
            <img
              src="http://t00img.yangkeduo.com/goods/images/2019-05-13/dfa6fe6eefb86f3778d1c7826ed84fbd.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
              alt
            >
            <div class="goods-info">
              <p>【匹族】中国风套装男夏季纯棉短袖唐装刺绣男士休闲汉服大码T恤</p>
              <p>急速退款</p>
              <div class="prices">
                <span>￥</span>
                <span>12.9</span>
              </div>
              <div class="numbers">已拼2.5万件</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <back :style="'position:fixed;z-index:20;right:1rem;transition:0.7s;bottom:'+dist+'rem'"></back>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import back from "@/components/Back.vue";
export default {
  name: "mine",
  components: {
    back
  },
  data() {
    return {
      user: null,
      dist: 0,
      testimg: require("@/assets/navbar/chat_tab.webp")
    };
  },
  filters: {
    formateUser(val) {
      if (val !== null) return val.slice(0, 3) + "****" + val.slice(7, 11);
      else return null;
    }
  },
  methods: {
    ...mapGetters(["getUser"]),
    go() {
      console.log("s");
      this.$router.push({ name: "setting" });
    },
    calcScroll(e) {
      const total = e.srcElement.scrollHeight;
      const top = e.srcElement.scrollTop;
      if (top / total > 0.4) {
        this.dist = 4;
      } else {
        this.dist = 0;
      }
    }
  },
  mounted() {
    this.user = this.getUser();
  }
};
</script>
<style lang="scss" scoped>
.mine {
  overflow-y: scroll;
  height: 92%;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    font-size: 0.88rem;
  }
  .personal-section {
    background: white;
    .personal-header {
      .info {
        display: flex;
        width: 90%;
        height: 6rem;
        margin: 0 auto;
        // justify-content: center; // justify-items: center;
        align-items: center;

        .avatar {
          width: 20%;
          img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
          }
        }
        .username {
          width: 45%;
          margin-left: 0.4rem;
          p {
            padding: 0.26rem 0;
            &:nth-child(1) {
              font-size: 1.2rem;
              &::after {
                content: "H";
                display: inline-block;
                margin-left: 0.5rem;
                color: rgb(11, 167, 240);
              }
            }
            &:nth-child(2) {
              font-size: 0.8rem;
              color: gray;
            }
          }
        }
        .cards {
          // height: 100%;
          width: 35%;
          display: flex;
          align-items: flex-end;
          flex-direction: column;
          div {
            margin: 0.2rem 0;
            border-radius: 0.9rem;
            border: 0.06rem solid rgb(80, 80, 80);
            width: 76%;
            padding: 0.3rem 0.1rem;
            height: 1rem;
            font-size: 0.8rem;
            line-height: 1rem;
            text-align: center;

            &::before {
              content: "C";
              color: red;
            }
            &:nth-child(1) {
            }
            &:nth-child(2) {
              position: relative;
              &::after {
                content: "";
                display: inline-block;
                width: 0.55rem;
                position: absolute;
                right: -0.1rem;
                bottom: 1.2rem;
                height: 0.55rem;
                border-radius: 50%;
                background: red;
              }
            }
          }
        }
      }
    }
    .sell {
      // background: white;

      height: 2.8rem;
      background: url(https://pinduoduoimg.yangkeduo.com/personal/personal-entry-bg4.png),
        linear-gradient(#625e70, #4f4c5b);
      margin: 0 0.8rem;
      border-radius: 0.6rem 0.6rem 0 0;
      position: relative;
      .ad {
        width: 90%;
        height: 100%;
        line-height: 2.8rem;
        margin: 0 auto;
        color: #ffe2c0;
        .btn {
          // width: 30%;
          padding: 0 0.7rem;
          display: inline-block;
          height: 1.6rem;
          line-height: 1.6rem;
          top: 50%;
          margin-top: -0.8rem;
          font-size: 0.77rem;
          border-radius: 0.9rem;
          background: #ffe2c0;
          color: black;
          position: absolute;
          right: 2rem;
          // float: right;
        }
        .more {
          position: absolute;
          right: 0.8rem;
          color: #ffe2c0;
          font-size: 1.2rem;
        }
      }
    }
    .my-orders {
      background: white;

      height: auto;
      .order-title {
        margin: 1rem 0.7rem;

        display: flex;
        justify-content: space-between;
        span {
          font-size: 1.2rem;
          &:nth-child(2) {
            color: gray;
            font-size: 0.8rem;
          }
        }
      }
      .order-list {
        ul {
          display: flex;
          justify-content: space-around;
          li {
            &:nth-child(1) {
            }
          }
        }
      }
    }
  }

  .functions,
  .functions-second {
    background: white;
    margin-top: 0.55rem;
    padding: 0.6rem 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      // justify-content: center;
      align-content: center;
      li {
        width: 20%;
        text-align: center;
        padding: 0.2rem 0;
      }
    }
  }

  .recommend {
    margin-top: 0.55rem;
    // height: 10rem;
    width: 100%;
    background: white;
    .re-title {
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      width: 100%;
      color: red;
      img {
        width: 1.1rem;
        height: 1.1rem;
        vertical-align: text-bottom;
        margin-right: 0.2rem;
      }
    }
    .re-content {
      .goods-list {
        display: flex;
        margin: 0.2rem 0;
        // background: white;
        .goods {
          width: 49.6%;
          display: flex;
          flex-direction: column;
          background: white;
          img {
            width: 100%;
            height: auto;
          }
        }
        .right {
          // text-align: left;
          margin-left: 0.2rem;
        }

        .goods-info {
          p {
            font-size: 0.8rem;
            line-height: 1.5rem;
            margin-left: 0.6rem;
            &:nth-child(1) {
              width: 90%;
              white-space: nowrap;
              overflow: hidden;
              margin: 0 auto;
            }
            &:nth-child(2) {
              color: red;
              font-size: 0.7rem;
              font-weight: 600;
            }
          }

          .prices {
            margin-left: 0.5rem;

            display: inline-block;
            span {
              color: #e02e24;
              background: none;
              font-size: 0.8rem;
              &:nth-child(2) {
                font-size: 1rem;
                font-weight: 700;
              }
            }
          }

          .numbers {
            display: inline-block;
            color: #58595b;
            width: 55%;
            text-indent: 0.6rem;
            font-size: 0.8rem;
            text-align: left;
          }
        }
        .goods-right {
          width: 50%;
        }
      }
    }
  }
}
</style>



