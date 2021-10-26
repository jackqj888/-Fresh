import {
  get,
  post,
  del,
  postByUrl
} from "./request";

export default {
  login: {
    getCode: (params) => get(`/health/mp-smt/sms/send/`+ params ),
    getlogin:(data)=>post(`/auth/mobile/token/sms?scope=server&grant_type=mobile&mobile=SMS@`+data.mobile+`&code=`+data.code),
    getCheck: (params) => get(`/kaopei/mp/sms/check/`+ params ),
    changePassword:(data)=>post(`/admin/profile/external/update`, data),
    goLogin:(data)=>postByUrl(`/auth/oauth/token`, data),
  },
  logout: {
    getLogout:() =>del(`/auth/token/logout`)
  },
  home: {
    HomeList:()=> get(`/portal/mp/index/index`)
  },
};