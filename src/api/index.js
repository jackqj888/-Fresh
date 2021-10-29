import {
  get,
  post,
  del
} from "./request";

export default {
  login: {
    getCode: (params) => get(`/health/mp-smt/sms/send/`+ params ),
    getlogin:(data)=>post(`/auth/mobile/token/sms?scope=server&grant_type=mobile&mobile=SMS@`+data.mobile+`&code=`+data.code),
  },
  logout: {
    getLogout:() =>del(`/auth/token/logout`)
  },
  home: {
    ProductList: (id) => get(`/product/list?categoryId=`+id),
    HomeList:()=> get(`/portal/mp/index/index`)
  },
};