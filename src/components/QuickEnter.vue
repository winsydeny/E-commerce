<template>
  <div class="enter">
    <div class="quick-list" ref="quickList">
      <ul :style="`left:${movedist}px`">
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.src" alt="clock" @click="toPage">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </div>
    <div class="scroll-bar" ref="scrollBar">
      <div class="scroll-bar-length"></div>
    </div>
  </div>
</template>
<script>
import Tomove from "@/utils/TouchMove.js";
export default {
  name: "quickEnter",
  data() {
    return {
      movedist: 0,
      list: [
        {
          src: require("@/assets/categories/clock.webp"),
          text: "限时秒杀"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50",
          text: "断码清仓"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-06-10/a718b630dc09ebc625d8b663ad6cb941.jpeg?imageMogr2/format/webp/quality/50",
          text: "品牌馆"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50",
          text: "多多果园"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/format/webp/quality/50",
          text: "9元9特卖"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-02-15/b329c4673337e18030f1211df38a543b.png?imageMogr2/format/webp/quality/50",
          text: "助力享免单"
        },
        {
          src:
            "http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png?imageMogr2/format/webp/quality/50",
          text: "天天领现金"
        },
        {
          src:
            "http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png?imageMogr2/format/webp/quality/50",
          text: "1分抽大奖"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-01-27/76826abcd09fe76657f07a901db83698.png?imageMogr2/format/webp/quality/50",
          text: "省钱月卡"
        },

        {
          src: require("@/assets/categories/clock.webp"),
          text: "限时秒杀"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50",
          text: "断码清仓"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-06-10/a718b630dc09ebc625d8b663ad6cb941.jpeg?imageMogr2/format/webp/quality/50",
          text: "品牌馆"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50",
          text: "多多果园"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/format/webp/quality/50",
          text: "9元9特卖"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-02-15/b329c4673337e18030f1211df38a543b.png?imageMogr2/format/webp/quality/50",
          text: "助力享免单"
        },
        {
          src:
            "http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png?imageMogr2/format/webp/quality/50",
          text: "天天领现金"
        },
        {
          src:
            "http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png?imageMogr2/format/webp/quality/50",
          text: "1分抽大奖"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-01-27/76826abcd09fe76657f07a901db83698.png?imageMogr2/format/webp/quality/50",
          text: "省钱月卡"
        },
        {
          src:
            "http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png?imageMogr2/format/webp/quality/50",
          text: "1分抽大奖"
        },
        {
          src:
            "http://t00img.yangkeduo.com/goods/images/2019-01-27/76826abcd09fe76657f07a901db83698.png?imageMogr2/format/webp/quality/50",
          text: "省钱月卡"
        }
      ]
    };
  },
  methods: {
    toPage() {
      alert("slected");
    }
  },
  mounted() {
    // console.log(this.$refs);
    Tomove(this.$refs.quickList, this.$refs.scrollBar);
  }
};
</script>
<style lang="scss" scoped>
$borderRadius: 0.2rem;
.enter {
  background: white;
  overflow: hidden;

  padding-bottom: 0.4rem;
  .scroll-bar {
    width: 30%;
    height: 0.13rem;
    margin: 0 auto;
    background: rgba(202, 200, 200, 0.589);
    border-radius: $borderRadius;
    margin-top: -0.3rem;
    position: relative;
    overflow: hidden;
    .scroll-bar-length {
      position: absolute;
      width: 54%;
      height: 100%;
      background: red;
      border-radius: $borderRadius;
    }
  }
  .quick-list {
    overflow: -moz-scrollbars-none;
    position: relative;
    width: 200%;
    height: 10rem;
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      // width: 200%;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      li {
        width: 10%;
        display: flex;
        align-items: center;
        flex-direction: column;
        span {
          margin-top: 0.3rem;
          font-size: 0.78rem;
        }
        img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }
}

.animate-move {
  transition: 0.5s;
}
</style>
