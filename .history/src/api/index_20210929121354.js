import {
  get,
  post,
  postByUrl
} from "./request";

export default {
  login: {
    getCode: (data) => get("/cart/list", data),
    loginWidthCode: (data) => postByUrl("/auth/mobile/token/sms", data),
    loginWidthPassword: () => post("/login?userName=mumu4&password=112345678"),
    //获取个人信息,里面有个人积分
    getUserInfo: () => get("/mall/userinfo?login=true"),
    vipEndTime: () => get("/mall/userinfoVipEndTime"),
  },
  home: {
    ProductList: () => get(`./mockData.json`)
  }
};