<template>
  <div class="goods">
    <div class="mask" v-if="isShow"></div>
    <div class="goods-content">
      <div class="goods-img">
        <i class="iconfont back-route" @click="$router.go(-1);">&#xe642;</i>
        <img :src="goods_detail.img" alt />
      </div>
      <div class="goods-details">
        <div class="goods-price">
          <span>{{goods_detail.price.current}}</span>
          <del>￥{{goods_detail.price.del}}</del>
          <span>已拼{{goods_detail.price.already}}件</span>
        </div>
        <div class="goods-title">
          <span>{{goods_detail.title}}</span>
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
          <span>{{goods_detail.p_group.number}}人在拼单，可直接参与</span>
          <span>
            查看更多
            <i class="iconfont">&#xe733;</i>
          </span>
        </div>
        <div class="goods-groups-container">
          <div
            class="container-list"
            v-for="(item,index) in goods_detail.p_group.list"
            :key="index"
          >
            <div class="container-left">
              <span class="avatar"></span>
              <span>{{item.name}}</span>
            </div>
            <div class="container-right">
              <div class="order-info">
                <span>还差一人拼成</span>
                <span>剩余19:20:22:92</span>
              </div>
              <div class="order-btn">
                <button>去拼单</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="goods-reviews-module">
        <div class="goods-reviews-title">
          <div>
            <span>商品评价({{goods_detail.comments.number}})</span>
            <span>
              查看更多
              <i class="iconfont">&#xe733;</i>
            </span>
          </div>
        </div>

        <div class="goods-evaluation">
          <ul class="goods-evaluation-tag">
            <li>很舒服(320)</li>
            <li>质量很好(2220)</li>
          </ul>
          <div class="goods-evaluation-item">
            <div class="title">
              <span class="avatar"></span>
              <span>{{goods_detail.comments.p_random_comment.name}}</span>
            </div>
            <div class="content">{{goods_detail.comments.p_random_comment.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-bottom-bar">
      <div class="list-item">
        <i class="iconfont">&#xe64d;</i>
        <span class="item">更多</span>
      </div>
      <div class="list-item" @click="collect">
        <i :class="['iconfont',{'collection':collection}]">&#xe613;</i>
        <span class="item">{{collectCharacter}}</span>
      </div>
      <div class="list-item">
        <i class="iconfont">&#xe7f3;</i>
        <span class="item">客服</span>
      </div>

      <div class="buy-single" @click="Single">
        <span>￥{{goods_detail.price.current}}</span>
        <span>单独购买</span>
      </div>
      <div class="buy-share" @click="Single">
        <span>￥{{goods_detail.price.current}}</span>
        <span>发起拼单</span>
      </div>
    </div>
    <div class="user-selector-main" :style="`top:${userSelector}rem`" ref="userSelector">
      <div class="user-selector-head">
        <div class="item">
          <img :src="goods_detail.img" />
          <div class="price-selected">
            <span>￥{{goods_detail.price.current}}</span>
            <div class="choose">
              <span>已选:</span>
              <span class="choose-type">{{goodsInfo.icolor}}</span>
              <span class="choose-type">{{goodsInfo.isize}}</span>
            </div>
          </div>
          <span class="iconfont close" @click="closeUserSelector">&#xe60f;</span>
        </div>
      </div>
      <div class="user-selector-body">
        <div class="user-color">
          <p>颜色</p>
          <div class="list" @click="selector_color">
            <span
              v-for="(type,index) in goods_detail.detail.color"
              :key="index"
              :data-id="index"
              :class="Object.is(goodsInfo.sColor,index)?'selected':''"
            >{{type}}</span>
            <!-- <span :class="{}">漫画短袖+短裤（一套）</span>
            <span>漫画短袖+短裤+九分裤(三件套)</span>-->
          </div>
        </div>
        <div class="user-size">
          <p>尺码</p>
          <div class="list" @click="selector_size">
            <span
              v-for="(type,index) in goods_detail.detail.size"
              :key="index"
              :data-id="index"
              :class="Object.is(goodsInfo.sSize,index)?'selected':''"
            >{{type}}</span>
          </div>
        </div>
        <div class="user-number">
          <p>数量</p>
          <div class="calcu">
            <button @click="sub" :class="notSub?'notsub':''">-</button>
            <span>{{goodsInfo.sNumber}}</span>
            <button @click="add">+</button>
          </div>
        </div>
      </div>
      <div class="user-selctor-submit" @click="goodsSubmit">确定</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { getGoodsPid } from "@/api/index.js";
import { Loading } from "element-ui";
export default {
  name: "goodsDetail",
  data() {
    return {
      userSelector: 6, //选择面板移动高度 rem
      selectorHeight: 6,
      isShow: false, //遮罩
      notSub: true, //是否可以继续减
      collection: false, //收藏
      collectCharacter: "收藏",
      goodsInfo: {
        icolor: "",
        isize: "",
        price: null,
        sColor: null,
        sSize: null,
        sNumber: 1,
        pid: null
      },
      goods_detail: {
        img:
          "http://t00img.yangkeduo.com/goods/images/2019-06-12/e90f76e4-7563-46b2-a9b8-6c17ab69f583.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
        price: {
          current: 29.8,
          del: 79,
          already: 2606
        },
        title: "夏季网红ins爆款四件套仿棉床上用品床单被套学生宿舍床上4三件套",
        service: {},
        p_group: {
          number: 3,
          list: [{ name: "蜜儿" }, { name: "香蕉" }, { name: "苹果" }]
        },
        comments: {
          number: 200,
          p_random_comment: {
            name: "Strange",
            avatar: "",
            content:
              "质量很好，穿着也很舒服。很时尚，很社会，抓紧行动吧，亲们！"
          }
        },
        detail: {
          size: ["60斤以内", "70-80斤"],
          color: ["漫画短袖+短裤（一套）", "漫画短袖+短裤+九分裤(三件套)"]
        }
      }
      // goodsSize: ["60斤以内", "70-80斤"],
      // goodsColor: ["漫画短袖+短裤（一套）", "漫画短袖+短裤+九分裤(三件套)"]
    };
  },
  methods: {
    ...mapActions(["setCollection", "setPayment"]),
    ...mapGetters(["getCollection"]),
    async _initDetail() {
      //loading
      let loadingInstance = Loading.service({ fullscreen: true });

      const { goods_id } = this.$route.params;
      // axios => getGoodsInfomation
      // console.log(goods_id);
      this.goodsInfo.pid = Math.floor(this.$route.params.goods_id);

      // const goodsDetail = {
      //   img:
      //     "http://t00img.yangkeduo.com/goods/images/2019-06-12/e90f76e4-7563-46b2-a9b8-6c17ab69f583.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
      //   price: {
      //     current: 29.8,
      //     del: 79,
      //     already: 2606
      //   },
      //   title: "夏季网红ins爆款四件套仿棉床上用品床单被套学生宿舍床上4三件套",
      //   service: {},
      //   p_group: {
      //     number: 3,
      //     list: [{ name: "蜜儿" }, { name: "香蕉" }, { name: "苹果" }]
      //   },
      //   comments: {
      //     number: 200,
      //     p_random_comment: {
      //       name: "Strange",
      //       avatar: "",
      //       content:
      //         "质量很好，穿着也很舒服。很时尚，很社会，抓紧行动吧，亲们！"
      //     }
      //   },
      //   detail: {
      //     size: ["60斤以内", "70-80斤"],
      //     color: ["漫画短袖+短裤（一套）", "漫画短袖+短裤+九分裤(三件套)"]
      //   }
      // };
      const dd = await getGoodsPid(goods_id);
      const goodsDetail = dd.data[0].detail_goods;
      this.goods_detail = goodsDetail;

      // const dd = await getGoodsPid(goods_id);
      console.log(dd.data[0].detail_goods);
      // this.goods_detail = dd.data[0].detail_goods;

      // 收藏
      // console.log(this.getCollection());
      if (this.getCollection() === null) {
      } else {
        Array.from(this.getCollection()).forEach(el => {
          // console.log(el, goods_id);
          if (Object.is(el, Math.floor(goods_id))) this.collection = true;
        });
      }

      this.$nextTick(() => {
        // 以服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close();
      });
    },
    Single() {
      this.userSelector = -20.5;
      this.isShow = true;
    },
    closeUserSelector() {
      this.userSelector = 6;
      this.isShow = false;
    },
    selector_color(e) {
      this.goodsInfo.icolor = e.srcElement.innerHTML;
      this.goodsInfo.sColor = parseInt(e.srcElement.getAttribute("data-id"));
    },
    selector_size(e) {
      this.goodsInfo.isize = e.srcElement.innerHTML;
      this.goodsInfo.sSize = parseInt(e.srcElement.getAttribute("data-id"));
    },
    add() {
      this.goodsInfo.sNumber++;
      this.notSub = false;
    },
    sub(e) {
      if (this.notSub) {
      } else {
        this.goodsInfo.sNumber--;
        if (this.goodsInfo.sNumber === 1) {
          this.notSub = true;
        }
      }
    },
    goodsSubmit() {
      if (this.goodsInfo.icolor === "") {
        alert("请选择颜色");
      } else if (this.goodsInfo.isize === "") {
        alert("请选择尺码");
      } else {
        this.goodsInfo.price = this.goods_detail.price.current;
        this.goodsInfo.title = this.goods_detail.title;
        this.goodsInfo.img = this.goods_detail.img;
        this.setPayment(this.goodsInfo);
        // 跳转到支付界面
        this.$router.push({ name: "shoppingcart" });
        // console.log(this.goodsInfo);
      }
    },
    collect() {
      this.collection = !this.collection;
      if (this.collection) {
        this.collectCharacter = "已收藏";
        this.setCollection({ c: true, pid: this.goodsInfo.pid });
      } else {
        this.collectCharacter = "收藏";
        this.setCollection({ c: false, pid: this.goodsInfo.pid });
      }
    }
  },
  mounted() {
    // this.selectorHeight = this.$refs.userSelector.clientHeight;
  },
  created() {
    this._initDetail();
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
      background: white;

      .goods-groups-title {
        padding: 0 0.6rem;
        // background: white;
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
        padding: 0 0.6rem;
        .container-list {
          padding: 0.7rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 0.06rem solid #dfdfdf;
          .container-left {
            display: flex;
            align-items: center;
            .avatar {
              display: inline-block;
              height: 1.8rem;
              width: 1.8rem;
              background-image: url(//t20img.yangkeduo.com/a/122b19e1995e66c79f223dc347912679660bc627-1560431736?imageMogr2/thumbnail/100x);
              background-size: 100%;
              border-radius: 50%;
            }
            span {
              &:nth-child(2) {
                font-size: 0.9rem;
                margin-left: 0.4rem;
              }
            }
          }

          .container-right {
            display: flex;
            .order-info {
              display: flex;
              flex-direction: column;
              margin-right: 0.48rem;
              span {
                font-size: 0.77rem;
                text-align: right;
                padding: 0.2rem 0;
                &:nth-child(2) {
                  color: #9c9c9c;
                  font-size: 0.8rem;
                }
              }
            }
            .order-btn {
              display: flex;
              align-items: center;

              button {
                background: #e02e24;
                border-radius: 0.3rem;
                color: white;
                border: none;
                outline: none;
                padding: 0.4rem 0.7rem;
              }
            }
          }
        }
      }
    }

    #goods-reviews-module {
      margin-top: 0.6rem;
      padding-bottom: 0.8rem;
      background: white;
      .goods-reviews-title {
        width: 100%;
        // position: relative;
        border-bottom: 0.06rem solid #dfdfdf;
        div {
          padding: 0.6rem 0.6rem;

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
      }

      .goods-evaluation {
        padding: 0 0.6rem;
        .goods-evaluation-tag {
          li {
            display: inline-block;
            font-size: 0.87rem;
            background: rgba(255, 192, 203, 0.39);
            border-radius: 0.2rem;
            padding: 0.4rem 0.3rem;
            margin: 0.7rem 0.6rem 0.7rem 0;
          }
        }
        .goods-evaluation-item {
          .title {
            padding: 0 0 0.6rem 0;
            .avatar {
              display: inline-block;
              border-radius: 50%;
              height: 1.6rem;
              width: 1.6rem;
              background-image: url("//t20img.yangkeduo.com/a/db77c23165ca83f6b3f90f9789f3e1520faff0da-1559103691?imageMogr2/thumbnail/100x");
              background-size: 100%;
              vertical-align: middle;
            }
            span {
              &:nth-child(2) {
                margin-left: 0.4rem;
                // line-height: 1.6rem;
              }
            }
          }

          .content {
            font-size: 0.9rem;
            line-height: 1.4rem;
          }
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
      .collection {
        color: red;
      }
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
      color: rgb(252, 252, 252);
      span {
        display: block;
        &:nth-child(2) {
          margin-top: 0.4rem;
        }
      }
    }
  }
  .mask {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2221;
  }
  .user-selector-main {
    position: relative;
    transition: 0.2s;
    z-index: 2222;
    top: 6rem;
    background: white;

    .user-selector-head {
      border-bottom: 1px solid #f2f2f2;
      .item {
        // position: relative;

        padding: 0 0.8rem;
        height: 5rem;
        // transform: translate(0, -30%);

        img {
          position: absolute;
          top: -2rem;
          width: 6rem;
          height: auto;
          border: 1px solid white;
          border-radius: 0.2rem;
          // transform: translate(0, -30%);
        }
        .price-selected {
          margin-left: 6.5rem;
          height: 100%;
          span {
            display: block;
            padding-top: 0.6rem;
            font-size: 1.1rem;
            color: #e02e24;
          }
          .choose {
            font-size: 0.8rem;
            font-weight: 700;
            padding-top: 0;
            position: relative;
            left: 0.2rem;
            span {
              display: inline-block;

              font-size: 0.8rem;
              color: #151516;
            }
            p {
              // padding-top: 0.6rem;
              // padding-left: 0.2rem;
              // font-size: 0.8rem;
              // display: inline-block;
              // &:nth-child(3) {
              //   padding-left: 1rem;
              // }
            }
          }

          .choose-type {
            // display: inline-block;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
        .close {
          position: absolute;
          right: 0.6rem;
          top: 0.5rem;
          font-size: 1.1rem;
          color: #9c9c9c;
        }
      }
    }

    .user-selector-body {
      height: 15.8rem;
      overflow: hidden;
      overflow-y: auto;
      padding: 0.2rem 0.6rem;
      color: #151516;
      .list {
        .selected {
          background: #e02e24;
          color: white;
        }
        span {
          display: inline-block;
          background: #f5f5f5;
          color: #151516;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.4rem 0.5rem;
          border-radius: 0.2rem;
          margin: 0.3rem 0.4rem 0 0;
        }
      }
      .user-color {
        border-bottom: 1px solid #f2f2f2;
        padding: 0.7rem 0;
      }

      .user-size {
        border-bottom: 1px solid #f2f2f2;
        padding: 0.7rem 0;
      }

      .user-number {
        padding: 0.7rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          display: inline;
        }
        .calcu {
          float: right;
          button {
            background: #e0e0e0;
            border: none;
            outline: none;
            width: 2rem;
            height: 2rem;
            font-size: 1.4rem;
            margin: 0 0.6rem;
            // color: #9c9c9c;
          }
          .notsub {
            color: gray;
          }
        }
      }
    }

    .user-selctor-submit {
      width: 100%;
      color: white;
      background: #e02e24;
      height: 3rem;
      line-height: 3rem;
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
</style>

