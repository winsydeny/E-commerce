<template>
  <div class="recommend">
    <div class="goods-list">
      <div
        class="goods left"
        v-for="(item,index) in goodsList"
        :key="index"
        @click="$router.push(`/goods_detail/${item.goods_id}`)"
      >
        <img :src="item.img" alt>
        <div class="goods-info">
          <p>{{item.title}}</p>
          <p>{{item.service}}</p>
          <div class="prices">
            <span>￥</span>
            <span>{{item.price}}</span>
          </div>
          <div class="numbers">{{item.info}}</div>
        </div>
      </div>

      <!-- <div class="goods right">
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
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      goodsList: [
        {
          img:
            "http://t00img.yangkeduo.com/goods/images/2019-03-12/8f1c0a8449b35616b0d144957f0a9966.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          title: "无线蓝牙耳机迷你双耳入耳式 支持所有手机通用苹果oppo华为vivo",
          service: "急速退款",
          price: "12.9",
          info: "已拼2.5万件",
          goods_id: 65212
        },
        {
          img:
            "http://t00img.yangkeduo.com/goods/images/2019-05-13/dfa6fe6eefb86f3778d1c7826ed84fbd.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          title: "【匹族】中国风套装男夏季纯棉短袖唐装刺绣男士休闲汉服大码T恤",
          service: "急速退款",
          price: "33.9",
          info: "已拼25万件",
          goods_id: 65213
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recommend {
  height: 92%;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .goods-list {
    display: flex;
    // margin: 0.2rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods {
      width: 49.6%;
      display: flex;
      flex-direction: column;
      background: white;
      margin: 0.2rem 0;
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
</style>
