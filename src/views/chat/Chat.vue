<template>
  <div class="chat">
    <div class="chat-info">
      <span>还没有聊天消息哦</span>
      <span>与商家、官方客服的聊天会显示在这里</span>
      <span>联系官方客服</span>
    </div>

    <div class="chat-recommend">
      <div class="re-title">  
        <img :src="require('@/assets/navbar/chat_tab.webp')" alt>
        精选推荐
      </div>
      <div class="goods-list" v-for="(item,index) in 5" :key="index">
        <div class="goods left">
          <img
            src="http://t00img.yangkeduo.com/goods/images/2019-03-12/8f1c0a8449b35616b0d144957f0a9966.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
            alt
          >
          <div class="goods-info">
            <p>无线蓝牙耳机迷你双耳入耳式 支持所有手机通用苹果oppo华为vivo</p>
            <p>急速退款</p>
            <div class="prices">
              <span>￥</span>
              <span>12.9</span>
            </div>
            <div class="numbers">已拼2.5万件</div>
          </div>
        </div>
        <div class="goods right">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "child",
  data() {
    return {};
  },
  components: {},
  methods: {
    changeMessage() {},
    getChange() {
      console.log("update", this.message);
    }
  }
};
</script>
<style lang="scss" scoped>
.chat {
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 92%;
  .chat-info {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f4f4f4;
    span {
      font-size: 1rem;
      padding: 0.5rem 0;
      &:nth-child(2) {
        font-size: 0.9rem;
        color: #58595b;
      }
      &:nth-child(3) {
        color: rgb(0, 81, 255);
        font-size: 0.8rem;
      }
    }
  }
  .chat-recommend {
    .re-title {
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      width: 100%;
      color: red;
      background: white;
      img {
        width: 1.1rem;
        height: 1.1rem;
        vertical-align: text-bottom;
        margin-right: 0.2rem;
      }
    }
    .goods-list {
      display: flex;
      margin: 0.2rem 0;
      // background: white;
      .goods {
        width: 49.6%;
        display: flex;
        flex-direction: column;
        background: white;
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
}
</style>


