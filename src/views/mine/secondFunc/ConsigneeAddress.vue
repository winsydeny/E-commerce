<template>
  <div class="address">
    <div class="main">
      <i class="iconfont" v-if="hasaddress">&#xe64e;</i>
      <span v-if="hasaddress">暂无收货地址</span>
      <div class="address-list" v-if="!hasaddress">
        <div class="address-item">
          <p>{{receiver.name}},{{receiver.phone}}</p>
          <p>{{receiver.address.province.value}}.{{receiver.address.city.value}}.{{receiver.address.area.value}}</p>
        </div>
        <div class="address-choose">
          <span class="defaults">
            <i class="iconfont" style="font-size:1rem;margin-right:.3rem;color:red">&#xe66f;</i>已设为默认
          </span>
          <div>
            <span @click="addAddress">编辑</span>
            <span>置顶</span>
          </div>
        </div>
      </div>
      <button class="addAddress" @click="addAddress">手动添加</button>
      <button @click="$router.go(-1)">BACK</button>
    </div>

    <div class="areaSelector" :style="`bottom:${bottom}%`">
      <div>
        <v-distpicker
          class="picker"
          type="mobile"
          @province="onChangeProvince"
          @city="onChangeCity"
          @area="onChangeArea"
        ></v-distpicker>
      </div>

      <div class="submit-address" v-if="isShow">
        <button class="addAddress" @click="submitAddress">添加</button>
      </div>
    </div>

    <div class="reveicer" :style="`bottom:${receiverBottom}%`">
      <input type="text" placeholder="收件人" v-model="receiver.name" />
      <input type="text" placeholder="电话" v-model="receiver.phone" />
      <button class="addAddress" @click="finalSubmit">完成</button>
    </div>
  </div>
</template>
<script>
// date picker
import VDistpicker from "v-distpicker";
import { mapActions, mapGetters } from "vuex";
import { localDB } from "@/utils/db";

export default {
  name: "consignee",
  components: {
    VDistpicker
  },
  data() {
    return {
      bottom: -100,
      receiverBottom: -100,
      isShow: false,
      hasaddress: true, //是否有地址
      receiver: {
        name: "",
        phone: "",
        address: {
          province: "",
          city: "",
          area: ""
        }
      }
    };
  },
  methods: {
    ...mapActions(["setReceiver"]),
    ...mapGetters(["getReceiver"]),
    addAddress() {
      this.bottom = 0;
    },
    onChangeProvince(a) {
      this.receiver.address.province = a;
    },
    onChangeCity(a) {
      this.receiver.address.city = a;
    },
    onChangeArea(a) {
      this.receiver.address.area = a;
    },
    submitAddress() {
      // console.log(this.address);
      // 提交到vuex
      // this.setAddress(this.receiver.address);
      // 打开收件人信息
      this.receiverBottom = 0;
      // 关闭地区选择器
      // this.bottom = -100;
      //隐藏没有地址提示
      this.hasaddress = false;
    },
    finalSubmit() {
      if (this.receiver.name === "" || this.receiver.phone === "") {
        alert("error");
      } else {
        this.bottom = -100;
        // 关闭收件人信息
        this.receiverBottom = -100;
        this.setReceiver(this.receiver);
        // save in local
        localDB(JSON.stringify(this.receiver));
      }
    }
  },

  watch: {
    receiver: {
      handler(newValue, oldValue) {
        // console.log(newValue);
        if (newValue.address.area === "") {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      },
      deep: true
    }
    // receiver: {
    //   handler(newValue, oldValue) {
    //     if (newValue.name === null || newValue.phone === null) {
    //     } else {

    //     }
    //   }
    // }
  },
  mounted() {
    const as = this.getReceiver();
    if (as === null) {
      console.log("nothing");
    } else {
      // this.address = as;
      this.hasaddress = false;
      this.receiver = as;
    }
  }
};
</script>
<style lang="scss" scoped>
.address {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  position: absolute;
  z-index: 3333;
  top: 0;

  button.addAddress {
    margin: 0 auto;
    margin: 3rem 0 0.9rem 0;
    background: #e02e24;
  }
  button {
    width: 90%;
    background: #e02e2487;
    color: white;
    border-radius: 3px;
    padding: 0.6rem 0.2rem;
    border: none;
    outline: none;
    font-size: 1rem;
  }

  .main {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .address-list {
      position: absolute;
      background: white;
      width: 90%;
      top: 0;
      padding: 0.9rem 0.5rem 0 0.5rem;
      .address-item {
        border-bottom: 0.8px solid rgba(128, 128, 128, 0.24);

        p {
          padding: 0.4rem 0;
        }
      }
      .address-choose {
        padding: 0.6rem 0;
        height: 1rem;
        .defaults {
          color: red;
          font-size: 0.79rem;
        }
        div {
          float: right;
          color: rgb(145, 141, 141);
          // font-size: 0.9;
          span {
            font-size: 0.8rem;
            margin: 0 0.4rem;
          }
        }
      }
    }
    i {
      font-size: 4rem;
      color: #ccc;
    }
    span {
      margin-top: 2rem;
    }
    button.addAddress {
      margin: 0 auto;
      margin: 3rem 0 0.9rem 0;
      background: #e02e24;
    }
    button {
      width: 90%;
      background: #e02e2487;
      color: white;
      border-radius: 3px;
      padding: 0.6rem 0.2rem;
      border: none;
      outline: none;
      font-size: 1rem;
    }
  }

  .areaSelector {
    overflow-y: auto;
    height: 100%;
    width: 100%;
    background: rgb(255, 255, 255);
    position: absolute;
    bottom: 0;
    transition: 0.3s;
    .picker {
      margin: 10px;
    }
    .submit-address {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .reveicer {
    overflow-y: auto;
    height: 100%;
    width: 100%;
    background: rgb(255, 255, 255);
    position: absolute;
    bottom: 0;
    transition: 0.3s;

    input {
      width: 86%;
      margin: 1rem auto;
      display: block;
      border: none;
      outline: none;
      border-radius: 0.2rem;
      background: rgba(204, 204, 204, 0.281);
      padding: 0.9rem 0.7rem;
    }
    button {
      position: relative;
      margin: 0 auto;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
</style>
