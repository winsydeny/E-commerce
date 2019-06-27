<template>
  <div class="cart">
    <div class="address">
      <div class="address-info">
        <p>xijia,123123123</p>
        <p>甘肃省 白银市 平川区 1024</p>
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
          <img
            src="http://t00img.yangkeduo.com/goods/images/2019-03-21/1596fdeb-60c1-4d49-872c-a23ee3e9f50c.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/300/q/70/format/webp"
            alt
          >
          <div class="or-goods-info-detail">
            <span>【买一送一】中老年男士短裤爸爸装大码宽松中年休闲五分裤大裤衩</span>
            <div class="or-goods-spec">
              <span>颜色分类</span>
              <span>尺码</span>
            </div>
            <span>￥35/件</span>
          </div>
        </div>
      </div>
      <div class="or-goods-number">
        <!-- <span>购买数量</span> -->
        <p>购买数量</p>
        <div class="calcu">
          <button @click="sub" :class="notSub?'notsub':''">-</button>
          <span>0</span>
          <button @click="add">+</button>
        </div>
      </div>
    </div>

    <div class="or-payment">
      <div class="alipay">微信支付</div>
      <div class="wechatpay">支付宝</div>
    </div>

    <div class="bottom-bar">
      <div>
        <span>实付款:</span>
        <span>￥35</span>
        <span>免运费</span>
      </div>
      <div>立即支付</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shoppingcart",
  data() {
    return {
      notSub: false
    };
  },
  methods: {
    sub() {},
    add() {}
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
  .address {
    background: white;
    .address-info {
      padding: 1rem 1.2rem;
      p {
        padding: 0.3rem 0;
        &:nth-child(1) {
          font-weight: 600;
        }
        &:nth-child(2) {
          font-size: 0.81rem;
        }
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
        }
      }
      img {
        width: 5.4rem;
        height: auto;
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
          color: gray;
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
    .alipay {
      border-bottom: 1px solid rgba(128, 128, 128, 0.137);
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

        // &::before {
        //   content: "实付款:";
        //   font-size: 0.82rem;
        //   color: black;
        // }
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
