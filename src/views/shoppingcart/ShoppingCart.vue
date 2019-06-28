<template>
  <div class="cart">
    <div class="mask" v-if="isShow" @click="isShow = false"></div>
    <ipay v-if="isShow" class="ipay"></ipay>

    <div class="address" @click="$router.push({name:'consignee'})">
      <div class="address-info">
        <i class="iconfont">&#xe64e;</i>
        <div>
          <p>
            {{address.name}}
            <span>{{address.phone}}</span>
          </p>
          <p>{{address.address.province.value}} {{address.address.city.value}} {{address.address.area.value}}</p>
        </div>
        <i class="iconfont more">&#xe733;</i>
      </div>

      <div class="address-bottom"></div>
    </div>
    <div class="or-goods">
      <div class="or-goods-mall">
        <img
          src="http://omsproductionimg.yangkeduo.com/images/2018-05-09/bdcc0337772d22eb21ba70aaf46cf85e.png@80w_1l_80Q"
          alt
        >
        <!-- 蒙福科技 -->
        <span>蒙福科技</span>
      </div>
      <div class="or-goods-info">
        <div class="or-goods-info-mask">
          <img :src="order_goods.img" alt>
          <div class="or-goods-info-detail">
            <span>{{order_goods.title}}</span>
            <div class="or-goods-spec">
              <span>颜色分类:{{order_goods.specfic.color}}</span>
              <span>尺码:{{order_goods.specfic.size}}</span>
            </div>
            <span>￥{{order_goods.specfic.price}}/件</span>
            <span class="tag">极速退款</span>
          </div>
        </div>
      </div>
      <div class="or-goods-number">
        <!-- <span>购买数量</span> -->
        <p>购买数量</p>
        <div class="calcu">
          <button @click="sub" :class="notSub?'notsub':''">-</button>
          <span>{{goodsNumber}}</span>
          <button @click="add">+</button>
        </div>
      </div>
    </div>

    <div class="or-payment">
      <div class="wechatpay" @click="pay('wechat')">
        <i class="iconfont" style="color:#13ae12;">&#xe607;</i>微信支付
        <i class="iconfont choose" v-if="Object.is(paymentType,'wechat')">&#xe674;</i>
      </div>
      <div class="alipay" @click="pay('ali')">
        <i class="iconfont" style="color:#1db5f0;">&#xe60a;</i>支付宝
        <i class="iconfont choose" v-if="Object.is(paymentType,'ali')">&#xe674;</i>
      </div>
    </div>

    <div class="bottom-bar">
      <div>
        <span>实付款:</span>
        <span>￥{{finalAmount}}</span>
        <span>免运费</span>
      </div>
      <div @click="isShow = true">立即支付</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ipay from "@/components/Pay";
export default {
  name: "shoppingcart",
  components: {
    ipay
  },
  computed: {
    finalAmount() {
      return this.goodsNumber * this.order_goods.specfic.price;
    }
  },
  data() {
    return {
      isShow: false,
      notSub: true,
      paymentType: "wechat",
      goodsNumber: 1,
      order_goods: {
        img:
          "http://t00img.yangkeduo.com/goods/images/2019-03-21/1596fdeb-60c1-4d49-872c-a23ee3e9f50c.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/300/q/70/format/webp",
        title: "【买一送一】中老年男士短裤爸爸装大码宽松中年休闲五分裤大裤衩",
        specfic: {
          color: "褐色 + 灰色",
          size: "3XL",
          price: "35"
        }
      }
    };
  },
  methods: {
    ...mapGetters(["getPayment"]),
    getOrder() {
      const { icolor, isize, pid, sNumber } = this.getPayment();
      this.order_goods.specfic = {
        color: icolor,
        size: isize,
        price: 25
      };
      this.goodsNumber = sNumber;
    },
    add() {
      this.goodsNumber++;
      this.notSub = false;
    },
    sub() {
      if (this.notSub) {
      } else {
        this.goodsNumber--;
        if (this.goodsNumber === 1) {
          this.notSub = true;
        }
      }
    },
    pay(type) {
      this.paymentType = type;
    },
    close() {
      console.log("11");
      this.isShow = true;
    }
  },
  watch: {
    goodsNumber: function(val) {
      // console.log(this);
      if (val === 1) {
      } else {
        this.notSub = false;
      }
    }
  },
  created() {
    this.address = this.$store.getters.getReceiver;
    this.getOrder();
    console.log(this.address);
  }
};
</script>
<style lang="scss" scoped>
.cart {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: absolute;
  z-index: 3333;
  top: 0;
  .ipay {
    position: absolute;
    bottom: 0;
    z-index: 3333;
  }
  .mask {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2221;
  }

  .address {
    &:active {
      background: rgba(172, 172, 172, 0.116);
    }
    background: white;
    .address-info {
      padding: 0.9rem 0.6rem;
      display: flex;
      align-items: center;
      i {
        margin-right: 0.3rem;
      }
      p {
        padding: 0.3rem 0;
        &:nth-child(1) {
          font-weight: 600;
        }
        &:nth-child(2) {
          font-size: 0.77rem;
        }
        span {
          font-weight: 300;
        }
      }
      .more {
        position: absolute;
        right: 0;
        font-size: 0.9rem;
        color: #9c9c9c;
        // margin-left: 20px;
      }
    }
    .address-bottom {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAAAGCAMAAABdG9OLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURf///xWn1tojP+2Rn4rT6zXCHwQAAABPSURBVFjD7dDBCQAhAAPBeNp/zZZwIgR8TAoIw2b8bOVo87vZPDtf42bk5ORPyCM+OTl5VR7xycnJq/KIT05OXpVHfHJy8qo84pOTk1flG/eHGIuy2bRIAAAAAElFTkSuQmCC);
      background-size: 100%;
      height: 0.13rem;
    }
  }
  .or-goods {
    margin-top: 0.5rem;
    background: white;
    // padding: 0 0.7rem;
    .or-goods-mall {
      display: flex;
      align-items: center;
      padding: 0 0.7rem;

      //   justify-content: space-between;
      img {
        width: 1.6rem;
        height: auto;
        margin: 0.8rem 0.8rem 0.8rem 0;
      }
      span {
        font-size: 0.8rem;
      }
    }

    .or-goods-info {
      .or-goods-info-mask {
        background: #f5f5f5;
        padding: 0.4rem 0.7rem;
        display: flex;

        // height: 2rem;
        .or-goods-info-detail {
          margin-left: 0.5rem;
          span {
            font-size: 0.8rem;
          }
          .or-goods-spec {
            span {
              font-size: 0.7rem;
              color: #9c9c9c;
              display: block;
              padding: 0.2rem 0;
              //   line-height: 1rem;
            }
          }
          .tag {
            display: inline-block;
            border: 1px solid #339b29;
            padding: 0.16rem 0.2rem;
            // line-height: 0.6rem;
            border-radius: 1.8px;
            font-size: 0.5rem;
            color: #339b29;
            margin-left: 0.5rem;
          }
        }
      }
      img {
        width: 5.4rem;
        // height: auto;
        height: 5.4rem;
      }
    }

    .or-goods-number {
      padding: 0.7rem 0.7rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .calcu {
        // float: right;
        button {
          background: #e0e0e0;
          border-radius: 3px;
          color: #0c0c0cc5;
          border: none;
          outline: none;
          width: 2rem;
          height: 1.5rem;
          line-height: 0.5rem;
          font-size: 1.4rem;
          //   margin: 0 0.6rem;
          // color: #9c9c9c;
          &:nth-child(1) {
            margin-right: 0.6rem;
          }
          &:nth-child(2) {
            margin-left: 0.6rem;
          }
        }
        span {
          display: inline-block;
          margin-right: 0.6rem;
        }
        .notsub {
          color: rgba(83, 83, 83, 0.425);
          background: rgba(220, 220, 220, 0.747);
        }
      }
    }
  }
  .or-payment {
    margin-top: 0.6rem;
    background: white;
    div {
      padding: 0.87rem 0.7rem;
    }
    .alipay,
    .wechatpay {
      &:active {
        background: rgba(172, 172, 172, 0.116);
      }
      position: relative;
      border-bottom: 1px solid rgba(128, 128, 128, 0.137);
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      i {
        margin-right: 0.5rem;
      }
      .choose {
        position: absolute;
        right: 0;
      }
    }
  }

  .bottom-bar {
    position: fixed;
    bottom: 0;
    display: flex;
    // align-items: center;
    width: 100%;
    div {
      background: white;
      padding: 1.1rem 0;
      &:nth-child(1) {
        width: 56%;
        text-align: right;
        padding: 1.1rem 0.7rem;
        font-size: 1.3rem;
        color: #e02e24;

        span {
          font-size: 0.82rem;
          &:nth-child(1) {
            color: black;
          }
          &:nth-child(2) {
            font-size: 1.2rem;
          }
          &:nth-child(3) {
          }
        }
      }
      &:nth-child(2) {
        background: #e02e24;
        flex: 1;
        text-align: center;
        font-size: 1.2rem;
        color: white;
        font-weight: 100;
      }
    }
  }
}
</style>
