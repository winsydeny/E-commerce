<template>
  <div class="popular">
    <!-- <h1>popular</h1> -->
    <carousel></carousel>
    <quickEnter></quickEnter>

    <div class="categroy-list">
      <div class="title-list">
        <span>新人专享</span>
        <span>|</span>
        <span>券</span>
        <span>爆款热卖 包邮到家</span>
        <span>查看更多</span>
      </div>
      <div class="content-list">
        <div class="content-gift">
          <img
            src="http://pinduoduoimg.yangkeduo.com/app/lego/dynamic_view/fresh_user_hongbao_word.png@1300w_1l_70Q_50sh.webp"
            alt="hongbao"
          >
        </div>
        <div class="content-box">
          <img
            src="http://images.pinduoduo.com/mrk/2019-03-07/23baeb9b-f3d8-467e-bc34-e656f3f38220.jpg"
            alt
          >
          <div class="name-prices">
            <p>新品夏威夷果</p>
            <div class="style-prices">
              <span>新人价</span>
              <div class="prices">
                <span>￥</span>
                <span>5.2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="content-box">
          <img
            src="http://images.pinduoduo.com/mrk/2019-03-07/6a9b2107-3fb2-40a9-be7f-295b8b9e524d.jpg"
            alt
          >
          <div class="name-prices">
            <p>宜马高级餐具合金筷子防滑不发霉耐高温</p>
            <div class="style-prices">
              <span>新人价</span>
              <div class="prices">
                <span>￥</span>
                <span>5.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ad">
      <img
        src="http://t00img.yangkeduo.com/goods/images/2019-06-09/363c9df7ea1d9979f2be3685e1cfa4da.gif?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        alt
      >
    </div>

    <!-- 热购区 -->
    <div class="things" v-for="(item,index) in 3" :key="index">
      <div class="things-left">
        <img
          src="http://t00img.yangkeduo.com/goods/images/2018-11-28/8a965dacf5947f778fe134fd5b160289.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/300/q/70/format/webp"
          alt
        >
      </div>
      <div class="things-right">
        <p>【999元抢2869件，抢完恢复1108元】加粗加厚实木子母床双层床两层上下床成人高低床儿童床成人母子床</p>
        <div class="things-info">
          <div class="prices">
            <span>￥</span>
            <span>999</span>
          </div>
          <div class="numbers">已拼2.5万件</div>
          <div class="avatar">
            <img
              src="http://t20img.yangkeduo.com/a/25073bdb0f58b031ca2e7de372c9a249735ad0de-1527913306?imageMogr2/sharpen/1%7CimageView2/2/w/50/q/70/format/webp"
              alt
            >
            <img
              src="http://t20img.yangkeduo.com/a/d10c7605269f987ff9ac09ee78d49d584ed8895a-1560436902?imageMogr2/sharpen/1%7CimageView2/2/w/50/q/70/format/webp"
              alt
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from "@/components/Carousel";
import quickEnter from "@/components/QuickEnter";
export default {
  name: "popular",
  components: {
    carousel,
    quickEnter
  }
};
</script>
<style lang="scss" scoped>
$fontColor: #151516;
$priceColor: #e02e24;

.popular {
  padding-top: 3rem;
  .prices {
    display: inline-block;
    span {
      color: $priceColor;
      background: none;
      font-size: 0.8rem;
      &:nth-child(2) {
        font-size: 1.3rem;
        font-weight: 700;
      }
    }
  }

  .ad {
    img {
      width: 100%;
    }
  }
  .categroy-list {
    background: white;
    width: 100%;
    // height: 10rem;
    padding-bottom: 0.5rem;
    margin: 0.6rem 0;
    // background: cadetblue;
    .title-list {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      height: 2rem;
      line-height: 2rem;
      padding: 0 0.6rem;
      span {
        display: block;
        width: 20%;
        text-align: center;
        // display: inline-block;
        &:nth-child(1) {
          color: #151516;
          font-size: 1rem;
          font-weight: 700;
        }
        &:nth-child(2) {
          width: 5%;
        }

        &:nth-child(3) {
          background: red;
          height: 1rem;
          // margin: 0 0.5rem;
          // padding: 0 -0.3rem;
          line-height: 1rem;
          margin-top: 0.5rem;
          border-radius: 0.2rem;
          color: white;
          width: 7%;
          font-size: 0.7rem;
          &::before {
            content: "";
            display: inline-block;
            position: relative;
            left: -0.2rem;
            bottom: 0.15rem;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 0.1rem;
            line-height: 1.1rem;
            background: white;
          }
          &:after {
            content: "";
            display: inline-block;
            position: relative;
            right: -0.2rem;
            bottom: 0.15rem;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 0.1rem;
            line-height: 1.1rem;
            background: white;
          }
        }
        &:nth-child(4) {
          width: 43%;
          text-align: left;
          text-indent: 0.5rem;
          font-size: 0.8rem;
          color: gray;
        }
        &:nth-child(5) {
          width: 25%;
          color: gray;
          // text-align: left;
          font-size: 0.9rem;
          font-weight: 500;
          &::after {
            content: ">";
            margin-left: 0.2rem;
            display: inline-block;
          }
        }
      }
      // span:nth-child(1) {
      //   width: 18%;
      // }
    }

    .content-list {
      padding: 0 0.6rem;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      .content-gift {
        margin: 0 0.2rem 0 0;
        width: 33%;
        img {
          width: 100%;
          height: auto;
        }
      }
      .content-box {
        margin: 0 0.2rem;
        width: 33%;
        img {
          width: 100%;
          // height: auto;
          height: 70%;
        }
        .name-prices {
          p {
            color: #151516;
            font-size: 0.89em;
            line-height: 1.6rem;
            font-weight: 200;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .style-prices {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            > span {
              display: inline-block;
              background: $priceColor;
              color: white;
              padding: 0.1rem 0.1rem;
              border-radius: 0.1rem;
            }
            span {
              display: inline-block;
              font-size: 0.9rem;
            }
            .prices {
              display: inline-block;
              padding-top: 0.2rem;

              span {
                color: $priceColor;
                background: none;
                font-size: 0.8rem;
                &:nth-child(2) {
                  font-size: 1.1rem;
                  font-weight: 700;
                }
              }
            }

            // .prices {
            //   display: inline-block;
            //   span {
            //     color: red;
            //     background: none;
            //     font-size: 0.8rem;
            //     &:nth-child(2) {
            //       font-size: 1rem;
            //     }
            //   }
            // }
          }
        }
      }
    }
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
      width: 40%;
      img {
        margin: 0.3rem 0;
        border-radius: 0.2rem;
        width: 100%;
      }
    }
    .things-right {
      width: 60%;
      position: relative;
      p {
        padding: 0.3rem;
        color: $fontColor;
        width: 90%;
        font-size: 0.9rem;
        line-height: 1.4rem;
        max-height: 2.5rem;
        overflow: hidden;
      }
      .things-info {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        bottom: 0.3rem;
        width: 100%;
        div {
          &:nth-child(1) {
            // margin-left: 0.7rem;
            width: 25%;
            text-indent: 0.6rem;
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


