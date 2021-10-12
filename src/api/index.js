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
  logout: {
    getLogout:() =>post(`/user/logout`)
  },
  home: {
    ProductList: (id) => get(`/product/list?categoryId=`+id)
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