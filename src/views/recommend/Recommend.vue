<template>
  <div class="recommend" v-loading="loading">
    <div class="goods-list">
      <div
        class="goods left"
        v-for="(item,index) in goodsList"
        :key="index"
        @click="$router.push(`/goods_detail/${item.goods_id}`)"
      >
        <img :src="item.img" alt />
        <div class="goods-info">
          <p>{{item.title}}</p>
          <p>{{item.service}}</p>
          <div class="prices">
            <span>￥</span>
            <span>{{item.price}}</span>
          </div>
          <div class="numbers">已拼{{item.info}}万件</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsPid, getGoodsList } from "@/api/index.js";
// import { mapGetters } from "vuex";
import { mapActions } from "vuex";
// import { Loading } from "element-ui";
export default {
  name: "recommend",
  data() {
    return {
      goodsList: [],
      loading: true
    };
  },
  methods: {
    ...mapActions(["setGoodslist"]),
    async _initData() {
      // let loadingInstance = Loading.service({ fullscreen: true });
      const list = await getGoodsList();
      // format data show in recommend
      this.formatData(list.data);
      this.loading = false;
      // this.$nextTick(() => {
      //   // 以服务的方式调用的 Loading 需要异步关闭
      //   loadingInstance.close();
      // });
    },
    formatData(data) {
      data.forEach(({ detail_goods, pid }) => {
        const { img, title, price } = detail_goods;
        // console.log(price);
        const list = {
          img: img,
          title: title,
          price: price.del,
          service: "急速退款",
          info: price.already,
          goods_id: pid
        };
        this.goodsList.push(list);
      });
    }
  },
  created() {
    this._initData();
    // console.log(Loading);
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
        float: right;
      }
    }
    .goods-right {
      width: 50%;
    }
  }
}
</style>
