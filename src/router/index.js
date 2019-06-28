import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// no finished when login from chat or mine
router.beforeEach(function (to, from, next) {
  // console.log(from, to);
  if (to.path === "/chat" || to.path === "/mine" || to.path === "/shoppingcart") {
    if (localStorage.getItem('username')) {
      next();
    } else {
      next("/login");
    }

  } else {}
  //其他
  next();
});
export default router;