<template>
  <div class="carousel">
    <div class="slide-list">
      <ul :style="'left: '+left + 'px'" class="moved">
        <li v-for="(item,index) in banners" :key="index">
          <a href="#">
            <img :src="item" alt="baidu" class="img-size">
          </a>
        </li>
      </ul>
    </div>
    <div class="slide-dots">
      <ul class="dots-pos">
        <li
          v-for="(item,index) in 5"
          :key="index"
          :class="['dots-style',selected === index? 'selected':'']"
          @click="switchSlide(index)"
        ></li>
        <!-- <li :class="['dots-style',selected === 1? 'selected':'']"></li> -->
        <!-- <li :class="['dots-style',selected === 2? 'selected':'']"></li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "carousel",
  data() {
    return {
      selected: 0,
      left: 0,
      ismove: false,
      timer: null,
      timeout: null,
      banners: [
        "http://t16img.yangkeduo.com/pdd_oms/2019-05-05/fb23680a31aab00691bb772e07dc037e.jpg?imageMogr2/format/webp/quality/50",
        "http://t00img.yangkeduo.com/goods/images/2019-06-13/4aad05f1649635a549a35b556a65f7cc.jpeg?imageMogr2/format/webp/quality/50",
        "http://t00img.yangkeduo.com/goods/images/2019-06-12/744dc44bce6c40097c9e1693ac40183c.jpeg?imageMogr2/format/webp/quality/50",
        "http://t16img.yangkeduo.com/pdd_oms/2019-02-01/5c9476b93b15a1d003f53dbb14e81fcc.jpg?imageMogr2/format/webp/quality/50",
        "http://t16img.yangkeduo.com/pdd_oms/2019-05-05/fb23680a31aab00691bb772e07dc037e.jpg?imageMogr2/format/webp/quality/50"

        // require("@/assets/carousel/01.jpg"),
        // require("@/assets/carousel/02.jpg"),
        // require("@/assets/carousel/03.jpg"),

        // require("@/assets/carousel/02.jpg"),
        // require("@/assets/carousel/03.jpg")
      ]
    };
  },
  computed: {},
  methods: {
    switchSlide(id) {
      clearTimeout(this.timeout);
      clearInterval(this.timer);
      this.selected = id;
      this.left = -(id * 375);
      this.ismove = !this.ismove;
      // console.log(this.left);
      this.timeout = setTimeout(() => {
        this.setTime();
      }, 1000);
    },
    setTime() {
      clearTimeout(this.timeout);
      this.timer = setInterval(() => {
        this.selected = this.selected + 1;
        if (this.selected > 4) {
          this.selected = 0;
        }
        this.left = -(this.selected * 375);
      }, 2000);
    }
  },
  mounted() {
    this.setTime();
  }
};
</script>
<style lang="scss" scoped>
$size: 8rem;
.carousel {
  position: relative;
  width: 100%;
  height: $size;
  line-height: $size;
  text-align: center;
  .slide-dots {
    position: absolute;
    bottom: 0.6rem;
    right: 1rem;
    .dots-pos {
      display: flex;
      .dots-style {
        width: 0.4rem;
        height: 0.4rem;
        margin: 0.2rem;
        background: white;
        // border: 1px solid white;
        border-radius: 50%;
      }
      .selected {
        background: red;
      }
    }
  }

  .slide-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .moved {
      transition: 0.6s;
    }
    ul {
      height: $size;
      width: 1200%;
      position: absolute;
      li {
        width: 23.5rem;
        float: left;
        // display: inline-block;
        a {
          .img-size {
            width: 100%;
            height: $size;
          }
        }
      }
    }
  }
}
</style>

