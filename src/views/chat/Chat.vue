<template>
  <div class="chat">
    
  </div>
</template>
<script>

export default {
  name: "child",
  data() {
    return {
      message: "Hello world",
      people: {
        name: "jack",
        age: 20
      }
    };
  },
  components: {
    // login
  },
  methods: {
    changeMessage() {
      // 在dom更新完成后执行回调
      // this.$nextTick(() => {
      //   // console.log("1--" + this.message);
      // });
      this.message = "jack";
      // this.people.name = "hello wolrd";
    },
    getChange() {
      console.log("update", this.message);
    }
  },

  watch: {
    message(news, old) {
      console.log(news, old);
    },

    people: {
      handler(val) {
        console.log(val.name, val.age);
      },
      immediate: true
      // deep: true
    }

    // "people.name": val => {
    //   console.log(val);
    // }
    // deep: true
  },
  beforeUpdated() {
    console.log("this.date");
  },
  updated() {
    this.getChange();
    console.log(this.message);
  }
  // mounted() {
  //   console.log("sdf");
  // },
  // created() {
  //   console.log("sdfsfsdf");
  // }
};
</script>
<style lang="scss" scoped>
.chat {
  overflow: hidden;
}
</style>


