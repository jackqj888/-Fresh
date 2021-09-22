import {
  get,
  post,
  postByUrl
} from "./request";

export default {
  login: {
    getCode: (data) => post("/mall/register/verify", data),
    loginWidthCode: (data) => postByUrl("/auth/mobile/token/sms", data),
    loginWidthPassword: (data) => post("/auth/oauth/token", data),
    //获取个人信息,里面有个人积分
    getUserInfo: () => get("/mall/userinfo?login=true"),
    vipEndTime: () => get("/mall/userinfoVipEndTime"),
  }
};