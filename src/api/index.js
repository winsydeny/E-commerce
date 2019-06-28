const axios = require("axios");
const instance = axios.create({
  baseURL: "http://119.23.252.65:3000/api/",
  timeout: 9000
});

const getGoodsList = () => {
  return instance.get("goods?pid=00000");
};
const getGoodsPid = (pid) => {
  return instance.get(pid);
  // return instance;
};

export { getGoodsList, getGoodsPid };
