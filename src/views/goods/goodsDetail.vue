<template>
  <div class="goods">
    <div class="goods-content">
      <div class="goods-img">
        <img
          src="http://t00img.yangkeduo.com/goods/images/2019-06-12/e90f76e4-7563-46b2-a9b8-6c17ab69f583.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80"
          alt
        >
      </div>
      <div class="goods-details">
        <div class="goods-price">
          <span>29.8</span>
          <del>￥79</del>
          <span>已拼2606件</span>
        </div>
        <div class="goods-title">
          <span>夏季网红ins爆款四件套仿棉床上用品床单被套学生宿舍床上4三件套</span>
          <span>退货包运费</span>
        </div>
        <div class="goods-services">
          <span>全场包邮</span>
          <i></i>
          <span>7天退换</span>
          <i></i>
          <span>48小时发货</span>
          <span class="iconfont">&#xe733;</span>
        </div>
      </div>

      <div class="goods-groups">
        <div class="goods-groups-title">
          <span>7人在拼单，可直接参与</span>
          <span>
            查看更多
            <i class="iconfont">&#xe733;</i>
          </span>
        </div>
        <div class="goods-groups-container">
          <div class="container-list"></div>
          <div class="container-list"></div>
        </div>
      </div>
    </div>

    <div class="goods-bottom-bar">
      <div class="list-item">
        <i class="iconfont">&#xe64d;</i>
        <span class="item">更多</span>
      </div>
      <div class="list-item">
        <i class="iconfont">&#xe613;</i>
        <span class="item">收藏</span>
      </div>
      <div class="list-item">
        <i class="iconfont">&#xe7f3;</i>
        <span class="item">客服</span>
      </div>

      <div class="buy-single">
        <span>￥30.8</span>
        <span>单独购买</span>
      </div>
      <div class="buy-share">
        <span>￥29.8</span>
        <span>发起拼单</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsDetail",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.goods {
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 1.4rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  height: 100%;
  background: #f4f4f4;
  position: sticky;
  z-index: 1111;
  .goods-content {
    height: 91%;

    overflow-y: scroll;
    .goods-img {
      img {
        width: 100%;
        // height: 50%;
      }
    }
    .goods-details {
      padding: 0.8rem 0.6rem 0 0.6rem;
      background: white;
      .goods-price {
        // height: 2rem;
        span {
          display: inline-block;
          &:nth-child(1) {
            color: #e02e24;
            font-weight: 700;
            font-size: 1.6rem;
            &::before {
              content: "￥";
              font-size: 0.9rem;
              font-weight: 600;
            }
            &::after {
              content: "起";
              font-weight: 500;
              font-size: 0.8rem;
            }
          }
          &:nth-child(3) {
            float: right;
            font-size: 0.8rem;
            line-height: 1.6rem;
            // vertical-align: middle;
          }
        }
        del {
          font-size: 0.8rem;
          color: #666666;
          margin-left: 0.2rem;
        }
      }

      .goods-title {
        margin-top: 0.4rem;
        span {
          //   display: inline-block;

          &:nth-child(1) {
            font-size: 0.9rem;
            font-weight: 600;
            color: #151516;
            letter-spacing: 0.082rem;
            line-height: 1.4rem;
          }
          &:nth-child(2) {
            display: inline-block;
            font-size: 0.7rem;
            height: 0.8rem;
            line-height: 0.9rem;
            background: #25b513;
            padding: 0.1rem 0.1rem;
            border-radius: 0.2rem;
            text-align: center;
            font-weight: 400;
            color: #eaeaea;
            position: relative;
            bottom: 0.17rem;
            left: 0.2rem;
          }
        }
        .goods-service {
          font-size: 0.7rem;
          background: #25b513;
          padding: 0.1rem 0.1rem;
          border-radius: 0.2rem;
          text-align: center;
          font-weight: 400;
          color: #eaeaea;
          position: relative;
        }
      }

      .goods-services {
        font-size: 0.8rem;
        margin-top: 1.1rem;
        border-top: 1px solid #f2f2f2;
        height: 2.5rem;
        line-height: 2.5rem;
        span {
          &:nth-child(3) {
            margin-left: 0.5rem;
          }
          &:nth-child(5) {
            margin-left: 0.5rem;
          }
          &:nth-child(6) {
            float: right;
            font-size: 0.8rem;
            color: gray;
          }
        }
        i {
          display: inline-block;
          background: rgba(95, 94, 94, 0.938);
          width: 0.17rem;
          height: 0.17rem;
          vertical-align: middle;
          border-radius: 50%;
          margin-left: 0.4rem;
        }
      }
    }
    .goods-groups {
      .goods-groups-title {
        padding: 0 0.6rem;
        background: white;
        margin-top: 0.6rem;
        height: 2.2rem;
        line-height: 2.2rem;
        border-bottom: 0.06rem solid #dfdfdf;
        span {
          &:nth-child(2) {
            float: right;
            color: #9c9c9c;
            font-size: 0.8rem;
            i {
              color: gray;
              font-size: 0.8rem;
            }
          }
        }
      }
      .goods-groups-container {
        .container-list {
        }
      }
    }
  }

  .goods-bottom-bar {
    height: 9%;
    width: 100%;
    position: fixed;
    border: none;
    bottom: -1px;
    background: rgb(255, 254, 254);
    border: 1px solid #eaeaea;
    z-index: 1112;
    display: flex;

    .list-item {
      width: 14%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .item {
        font-size: 0.8rem;
        margin-top: 0.5rem;
      }
    }
    .buy-single {
      width: 30%;
      background: rgb(236, 109, 109);
    }
    .buy-share {
      width: 34%;
      background: red;
    }
    .buy-single,
    .buy-share {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      color: rgb(199, 181, 181);
      span {
        display: block;
        &:nth-child(2) {
          margin-top: 0.4rem;
        }
      }
    }
  }
}
</style>

