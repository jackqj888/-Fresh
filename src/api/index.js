import {
  get,
  post,
  postByUrl
} from "./request";

export default {
  login: {
    getCode: (params) => get(`/health/mp-smt/sms/send/`+ params ),
    getlogin:(data)=>post(`/auth/mobile/token/sms?scope=server&grant_type=mobile&mobile=SMS@`+data.mobile+`&code=`+data.code),
    loginWidthCode: (data) => postByUrl("/auth/mobile/token/sms", data),
    loginWidthPassword: () => post("/login?userName=mumu4&password=112345678"),
    //获取个人信息,里面有个人积分
    getUserInfo: () => get("/mall/userinfo?login=true"),
    vipEndTime: () => get("/mall/userinfoVipEndTime"),
    
  },
  logout: {
    getLogout:() =>post(`/user/logout`)
  },
  home: {
    ProductList: (id) => get(`/product/list?categoryId=`+id),
    HomeList:()=> get(`/portal/mp/index/index`)
  },
  details:{
    GoodsInfo:(id) => get('/product/detail?id='+id),
    CartAdd:(data) => post(`/cart/add?productId=`+data.productId +`&count=`+data.count)
    
  },
  CategoryList:{
    CategoryList:() => get(`/category/list`)
  },

cart:{
  cartList:() => get(`/cart/list`),
  countUp:(data)=> post(`/cart/update?productId=`+data.productId +`&count=`+data.count)
}
};