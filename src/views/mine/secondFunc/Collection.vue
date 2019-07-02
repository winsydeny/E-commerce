<template>
  <div class="collection">
    <div class="sort">
      <ul>
        <i class="iconfont back-route" @click="$router.replace({name:'mine'})">&#xe642;</i>
        <li :class="[selected === 0?'selected':'']" @click="choose(0)">按时间查看</li>
        <li :class="[selected === 1?'selected':'']" @click="choose(1)">按店铺查看</li>
      </ul>
    </div>
    <div v-if="selected === 0" class="time" v-loading="loading">
      <div v-if="noCollection" class="info">您还没有收藏过商品</div>
      <div class="things" v-for="(item,index) in collection" :key="index">
        <div class="things-left">
          <img :src="item.detail_goods.img" alt />
        </div>
        <div class="things-right">
          <p>{{item.detail_goods.title}}</p>
          <div class="things-info">
            <div class="prices">
              <span style="color:#e02e24;">￥</span>
              <span style="color:#e02e24;">{{item.detail_goods.price.current}}</span>
            </div>
            <div class="numbers">已拼{{item.detail_goods.price.already}}万件</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selected === 1" class="shop">
      <div v-if="noCollection" class="info">您还没有收藏过商品</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getGoodsPid } from "@/api/index.js";
import { Loading } from "element-ui";
export default {
  name: "collection",
  data() {
    return {
      selected: 0,
      noCollection: false,
      collection: [],
      loading: true
    };
  },
  methods: {
    ...mapGetters(["getCollection"]),
    choose(index) {
      this.selected = index;
    },
    getCollect() {
      //loading
      // let loadingInstance = Loading.service({ fullscreen: true });

      const collect = this.getCollection();
      console.log(collect);
      // debugger;
      if (collect.length === 0) {
        this.noCollection = true;
      } else {
        this.noCollection = false;
        collect.forEach(async element => {
          const { data } = await getGoodsPid(element);
          this.collection.push(data[0]);
        });
        console.log(this.collection);
        // close loading
        console.log(this.loading);
      }
      // close loading
      this.loading = false;
    },
    back() {
      // this.$router.go(-1);
    }
  },
  created() {
    // console.log(loadingInstance);

    this.getCollect();
  }
};
</script>
<style lang="scss" scoped>
$fontColor: #151516;
$priceColor: #e02e24;
.collection {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: absolute;
  z-index: 3333;
  top: 0;
  .sort {
    ul {
      position: relative;
      .back {
        // height: 100%;
        width: 2rem;
        height: 100%;
        display: block;
        line-height: 3rem;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        padding-left: 0.4rem;
        &:active {
          background: #dbdbdb5d;
        }
      }
      display: flex;
      justify-content: center;
      border-bottom: 0.8px solid rgba(128, 128, 128, 0.24);
      li {
        padding: 1.3rem 0.2rem 0.7rem 0.2rem;
        margin: 0 1rem;
        font-size: 1.1rem;
      }
      .selected {
        border-bottom: 1.9px solid red;
        color: red;
      }
    }
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }
  .time,
  .shop {
    height: 95%;
    overflow-y: scroll;
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
            // width: 25%;
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
