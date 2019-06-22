<template>
  <div class="search">
    <!-- <h1>{{this.$route.name}}</h1> -->
    <div class="search-page" v-if="!isShow">
      <div class="input">
        <form>
          <input type="text" placeholder="折叠屏">
        </form>
        <span @click="cancel">取消</span>
      </div>
      <div class="recently">
        <div class="title">最近搜索</div>
        <div class="search-list">
          <div class="pupple">水果</div>
          <div class="pupple">水果</div>
        </div>
      </div>
      <div class="more">
        <div class="title">更多搜索方式</div>
        <div class="search-list">
          <div class="pupple">搜索店铺</div>
        </div>
      </div>
      <div class="hot">
        <div class="title">热门搜索</div>
        <div class="search-list">
          <div class="pupple">电动车雨衣</div>
          <div class="pupple">网红阔腿裤套装</div>
          <div class="pupple">水龙头花洒</div>
          <div class="pupple">男袜子</div>
        </div>
      </div>
    </div>
    <div class="top-search" v-if="isShow">
      <div class="search-input" @click="search">搜索</div>
    </div>
    <div
      class="middle-search"
      v-if="isShow"
      style="position: relative;
    height: 92%;
    top: 8%;"
    >
      <div class="classify" @scroll="classifyScroll" ref="classify">
        <ul>
          <li
            v-for="(item,index) in classify"
            :key="index"
            :class="[index == selected?'selected':'not-selected']"
          >
            <div></div>
            <a href="#" :data-id="index" @click="chooseClassify(index)">{{item.title}}</a>
            <!-- <span></span> -->
          </li>
        </ul>
      </div>
      <!-- right categroies -->
      <div class="classify-content" ref="scroll" @scroll="scrollEvent">
        <div class="main-content" :style="`top:${distance}px`" ref="main">
          <div
            class="list-content"
            v-for="(item,index) in classify"
            :key="index"
            :ref="`cate-${index}`"
          >
            <div>
              <span>{{item.title}}</span>
              <img
                src="http://t13img.yangkeduo.com/cart/2019-05-20/2117ba388cc1f44ae8443d0c29a42b45.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
                alt
              >
              <span>查看更多></span>
            </div>
            <div class="classify-categroy">
              <ul>
                <li v-for="(cate,i) in 15" :key="i">
                  <!-- <div> -->
                  <img
                    src="http://t00img.yangkeduo.com/goods/images/2019-03-13/3a1ac479-1b87-417f-9f33-3abde48258fc.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
                    alt
                  >
                  <!-- </div> -->
                  <span>夏热卖</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setInterval, clearInterval } from "timers";
import { spread } from "q";
export default {
  name: "serarch",
  data() {
    return {
      selected: 0,
      distance: 0,
      scrollBar: null,
      cateArr: [],
      cateArrCurrent: [],
      bottomIndex: 0,
      lastOffsetTop: 0,
      isShow: true,
      classify: [
        { title: "女装", path: "/home/women_clothe" },
        { title: "百货", path: "/home/categroies" },
        { title: "鞋包", path: "/home/shoes" },
        { title: "母婴", path: "/home/child" },
        { title: "手机", path: "/home/phones" },
        { title: "食品", path: "/home/foods" },
        { title: "日用", path: "/home/days" },
        { title: "家具", path: "/home/furniture" },
        { title: "电脑", path: "/home/computers" },
        { title: "电脑", path: "/home/computers" },
        { title: "电脑", path: "/home/computers" },
        { title: "电脑", path: "/home/computers" },
        { title: "电脑", path: "/home/computers" },
        { title: "鞋包", path: "/home/shoes" },
        { title: "母婴", path: "/home/child" },
        { title: "手机", path: "/home/phones" },
        { title: "食品", path: "/home/foods" },
        { title: "日用", path: "/home/days" }
      ]
    };
  },
  methods: {
    search() {
      this.isShow = false;
    },
    cancel() {
      this.isShow = true;
    },

    chooseClassify(index) {
      this.moveTo(this.cateArr[index]);
      this.selected = index;
    },

    moveTo(dist) {
      this.scrollBar.scrollTo(0, dist);
    },
    scrollEvent(e) {
      const scrolltop = e.srcElement.scrollTop;
      //联动左边的分类
      this.cateArrCurrent.forEach((num, index) => {
        if (scrolltop > num) {
          this.selected = index;
        }
      });

      //确定可以显示的最后一个的位置
      if (this.selected > this.bottomIndex) {
        const dist = this.selected - this.bottomIndex;
        // alert(dist);
        this.$refs.classify.scrollTo(0, dist * 52);
      } else {
        this.$refs.classify.scrollTo(0, 0);
      }
    },
    classifyScroll(e) {
      // console.log(e);
    },
    init() {
      // iponex 可能有一点小问题
      let temp = 0;
      this.cateArr.push(temp);
      this.cateArrCurrent.push(temp);
      for (let i = 0; i < this.classify.length; i++) {
        const cate = this.$refs[`cate-${i}`];
        temp += cate[0].clientHeight;
        this.cateArr.push(temp);
      }
      for (let i = 0; i < this.cateArr.length - 1; i++) {
        const sum = (this.cateArr[i] + this.cateArr[i + 1]) / 2;
        this.cateArrCurrent.push(sum);
      }

      // init 左边联动时到最底下时的index
      const classifyHeight = this.$refs.classify.clientHeight;
      const classifyItemHeight = this.$refs.classify.children[0].children[0]
        .clientHeight;

      // alert(classifyHeight / classifyItemHeight);

      this.bottomIndex = Math.floor(classifyHeight / classifyItemHeight);

      let scroll = this.$refs.scroll;
      this.scrollBar = scroll;
    }
  },

  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.search {
  height: calc(100vh - 3rem);
  position: relative;
  overflow: hidden;
  background: white;
  .search-page {
    width: 92%;
    margin: 0 auto;
    .input {
      width: 100%;
      display: flex;
      justify-items: center;
      align-items: center;
      // height: 3rem;
      padding: 0.4rem 0.2rem;
      form {
        width: 85%;
        // position: relative;
        input {
          width: 100%;
          margin: 0 auto;
          display: block;
          padding: 0.6rem 0;
          border: none;
          background: #dcdcdc7a;
          border-radius: 0.6rem;
          outline: none;
          font-size: 1rem;
          text-indent: 1.4rem;
        }
        &::before {
          content: "@";
          left: 1.2rem;
          line-height: 2.4rem;
          position: absolute;
          display: inline-block;
          color: rgb(115, 117, 119);
        }
      }

      span {
        width: 15%;
        color: #969393ea;
        font-size: 1rem;
        text-align: center;
      }
    }
    .title {
      color: #9c9c9c;
      font-size: 1rem;
    }
    .search-list {
      // display: flex;
      margin: 1rem 0;
      .pupple {
        display: inline-block;
        margin: 0rem 0.6rem 0.7rem 0;
        text-align: center;
        padding: 0.4rem 0.6rem;
        border-radius: 1.2rem;
        font-size: 0.92rem;
        background: gainsboro;
        color: #1b1b1bea;
      }
    }

    .recently {
      margin-top: 1rem;
    }
    .more {
      margin-top: 1rem;
    }
    .hot {
      margin-top: 1rem;
    }
  }

  .classify-content {
    width: 76%;
    height: 100%;
    background: white;
    position: absolute;
    top: 0;
    left: 24%;
    overflow: hidden;
    z-index: 1;
    overflow: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    .main-content {
      overflow-y: auto;
      position: relative;
      // padding-bottom: 3.3rem;
      .list-content {
        width: 100%;
        height: auto;
        div {
          font-size: 0.92rem;
          // margin-top: 0.7rem;
          padding-top: 0.7rem;
          color: rgb(151, 148, 148);
          span {
            // display: inline-block;
            // margin-top: 0.2rem;
            &:nth-child(1) {
              margin-left: 1rem;
              float: left;
              color: black;
            }
            &:nth-child(3) {
              vertical-align: middle;
              margin-right: 0.8rem;
              float: right;
            }
          }
          img {
            margin-left: 0.8rem;
            width: 4.6rem;
            height: 1rem;
            vertical-align: middle;
            margin-top: 0.1rem;
          }
        }

        .classify-categroy {
          // margin-left: 1rem;
          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              width: 33%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 0.4rem 0;
              box-sizing: border-box;
              img {
                width: 3.2rem;
                height: auto;
                margin: 0 0 0.3rem 0;
                // height: 3rem;
              }

              p {
                color: black;
              }
            }
          }
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .classify {
    width: 24%;
    overflow: hidden;
    height: 100%;
    overflow: scroll;
    background: #faf8f879;
    // padding-top: 3.2rem;
    ul {
      // padding-bottom: 3.3rem;
      // overflow-y: auto;
      // height: 100%;
      // overflow-x: auto;

      .selected {
        div:nth-child(1) {
          width: 0.2rem;
          height: 1.6rem;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          background: red;
          display: block;
        }

        a {
          background: white;
          color: red;
        }
      }
      .not-selected {
        div {
          display: none;
        }
      }
      li {
        text-align: center;
        position: relative;
        a {
          display: block;
          padding: 1.16rem 0.8rem;
          color: rgb(90, 89, 89);
          text-decoration: none;
          font-size: 0.93rem;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .top-search {
    width: 100%;
    background: white;
    height: 7.8%;
    position: fixed;
    z-index: 999;
    border-bottom: 1px solid #ededed;
    .search-input {
      background: #ededed;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
      height: 2.3rem;
      border-radius: 0.4rem;
      text-align: center;
      line-height: 2rem;
      color: rgba(128, 128, 128, 0.514);
    }
  }
}
</style>

