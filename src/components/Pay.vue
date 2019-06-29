<template>
  <div class="pay">
    <div class="show-code">
      <input
        type="password"
        maxlength="1"
        autofocus="autofocus"
        ref="code"
        readonly="true"
        v-for="(item,index) in 6"
        :key="index"
      />
    </div>

    <div class="less">
      <span>
        <i style="color:rgb(29, 181, 240);font-weight:600;">余额</i>:12000
      </span>
    </div>
    <div class="enter-code">
      <div v-for="(item,index) in enter" :key="index" @click="enterInput(index+1)">{{item}}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { postOrder } from "@/api/index.js";
export default {
  name: "pay",
  props: {
    order: {
      type: Object
    }
  },
  data() {
    return {
      codelenght: 0,
      enter: [1, 2, 3, 4, 5, 6, 7, 8, 9, "完成", 0, "删除"],
      code: ""
    };
  },
  methods: {
    ...mapGetters(["getPaycode"]),
    enterInput(num) {
      let codeInput = this.$refs.code;
      let code = num;
      if (num === 10) return;
      if (num === 11) code = 0;
      if (num === 12) {
        if (this.codelenght > 0) {
          codeInput[this.codelenght - 1].value = "";
          this.codelenght = this.codelenght - 1;
        }
        return;
      }
      codeInput[this.codelenght].value = code;
      this.code += code;
      this.codelenght++;
    }
  },
  watch: {
    codelenght: function(val) {
      if (val === 6) {
        setTimeout(() => {
          console.log(this.code);
          if (Object.is(this.code, this.getPaycode())) {
            // submit order to 119.23.252.65/api/order;

            const { img, specfic, username, title, pid } = this.order;
            const endorder = {
              img: img,
              username: username,
              title: title,
              size: specfic.size,
              color: specfic.color,
              price: specfic.price,
              pid: pid
            };

            postOrder(endorder)
              .then(res => {
                console.log("success");
                alert("支付成功");
                this.$router.replace({ name: "mine" });
              })
              .catch(e => {
                console.log("failed");
              });
          } else {
            alert("支付密码错误");
            let codeInput = Array.from(this.$refs.code);
            codeInput.forEach(el => {
              el.value = "";
            });
            this.codelenght = 0;
            this.code = "";
          }
        }, 70);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pay {
  width: 100%;
  //   height: 20rem;
  background: white;
  .less {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 2rem;
    padding: 0.9rem 0;
    margin-bottom: 0.4rem;
  }
  .show-code {
    display: flex;
    padding-top: 0.9rem;
    input {
      width: 33.3%;
      font-size: 2rem;
      //   padding: 0.5rem 0;
      text-align: center;
      outline: none;
    }
  }
  .enter-code {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    div {
      width: 33.3%;
      padding: 1rem 0;
      text-align: center;
      box-sizing: border-box;
      border: 0.6px solid #cccccc;
      &:active {
        background: #cacaca81;
      }
    }
  }
}
</style>
