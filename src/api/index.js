import {
  get,
  post,
  del,
  postByUrl  
} from "./request";

export default {
  login: {
    getCode: (params) => get(`/health/mp-smt/sms/send/`+ params ),
    getLogin:(data)=>post(`/auth/mobile/token/sms?scope=server&grant_type=mobile&mobile=SMS@`+data.mobile+`&code=`+data.code),
    getCheck: (params) => get(`/portal/mp/sms/check/`+ params.mobile+`/`+params.code ),
    changePassword:(data)=>post(`/admin/profile/external/update`, data),
    goLogin:(data)=>postByUrl(`/auth/oauth/token`, data),
  },
  logout: {
    getLogout:() =>del(`/auth/token/logout`)
    
  },
  home: {
    ProductList: (id) => get(`/product/list?categoryId=`+id),
    HomeList:()=> get(`/portal/mp/index/index`)
  },
};