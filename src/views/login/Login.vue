<template>
  <div class="login">
    <div class="login-btn" :style="`opacity:${distance}`">
      <div>
        <span>选择登录方式</span>
        <button class="btn" @click="login">手机登录</button>
      </div>
    </div>
    <div class="login-pages" :style="'top:'+distance+'%'">
      <form>
        <!-- <label for></label> -->
        <div style="display: flex;justify-content: center;align-items: center;">
          <i class="iconfont" style="font-size:2.2rem;">&#xe610;</i>
          <input
            type="text"
            v-model="phoneNumber"
            placeholder="手机号码"
            id="phone"
            style="padding-left: 1.2rem;"
          />
        </div>
        <!-- <i class="iconfont" style>&#xe610;</i> -->
        <div class="line"></div>
        <div style="display: flex;justify-content: center;align-items: center;">
          <i class="iconfont" style="font-size:1.5rem;">&#xe666;</i>
          <input
            type="text"
            v-model="code"
            placeholder="验证码"
            id="code"
            style="padding-left: 1.2rem;width: 47.8%;"
          />
          <span :id="isvalid?'get-code':''" @click="sendCode">发送验证码</span>
        </div>
      </form>
      <div class="operate">
        <button @click="agreeLogin">同意协议并登录</button>
        <button @click="back">返回</button>
      </div>
      <div class="rules">
        <span>我已经阅读并同意</span>
        <span>服务协议与隐私政策</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      islogin: false,
      distance: 100,
      phoneNumber: "",
      code: "",
      isvalid: false
    };
  },
  watch: {
    phoneNumber(val) {
      const pattern = /^1[3456789]\d{9}$/;
      this.isvalid = pattern.test(val);
    }
  },
  methods: {
    ...mapActions(["setUserName", "setUserCode"]),
    login() {
      this.islogin = true;
      this.distance = 0;
    },
    back() {
      this.distance = 100;
    },
    agreeLogin() {
      // console.log(this.$router);
      if (this.phoneNumber === "" || this.code === "") alert("error");
      else {
        this.setUserName(this.phoneNumber);
        this.setUserCode(this.code);
        //save in localstorage
        localStorage.setItem("username", this.phoneNumber);
        this.$router.replace({ name: "mine" });
      }
    },
    sendCode() {
      this.code = "263122";
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 1000;
  .login-btn {
    height: 100%;
    width: 100%;
    overflow: hidden;

    background: white;

    div {
      position: relative;
      top: 27%;
      width: 100%;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      height: auto;
      span {
        display: block;
        padding: 2rem 0;
        font-size: 1.5rem;
      }
      .btn {
        width: 80%;
        font-size: 1rem;
        color: white;
        background: #f6a622;
        outline: none;
        margin: 0 auto;
        border: none;
        padding: 0.8rem 0;
        border-radius: 0.3rem;
      }
    }
  }
  .login-pages {
    transition: 0.3s;
    top: 100%;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: fixed;
    z-index: 1000;
    background: white;
    margin: 1rem 0;
    // padding: 1rem 0.7rem;
    form {
      margin-left: 0.1rem;
      // border: 0.1rem solid #7676763d;
      border-top: 0.1rem solid #7676763d;
      border-bottom: 0.1rem solid #7676763d;
      span {
        display: inline-block;
        border: 0.07rem solid rgb(107, 107, 107);
        padding: 0.6rem 0.8rem;
        color: rgb(107, 107, 107);
        font-size: 0.9rem;
        position: relative;
        right: 2%;
      }
      #get-code {
        border-color: red;
        color: red;
      }

      .line {
        width: 85%;
        height: 0.05rem;
        background: gainsboro;
        margin-left: 13%;
      }
      input {
        width: 80%;
        margin: 0.2rem 0;
        border-radius: 0.4rem;
        border: none;
        color: #4a4a4a;
        // border: 0.09rem solid;
        outline: none;
        font-size: 1rem;
        // border-color: orangered;
        padding: 0.9rem 2rem;
      }
      #code {
        width: 45%;
      }
    }

    .operate {
      button {
        display: block;
        width: 94%;
        padding: 0.8rem 0;
        margin: 0.6rem auto;
        border-radius: 0.2rem;
        background: none;
        border: 0.05rem solid red;
        font-size: 0.92rem;
        &:nth-child(1) {
          color: #e89a9ae8;
          background: #de3025;
        }
        &:nth-child(2) {
          color: red;
        }
      }
    }

    .rules {
      width: 94%;
      margin: 0 auto;

      span {
        color: #58595b;
        display: inline-block;
        font-size: 0.8rem;
        &:nth-child(1) {
        }
        &:nth-child(2) {
          margin-left: 0.4rem;
          color: rgb(62, 166, 250);
        }
      }
    }
  }
}
</style>
