import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/login",
},
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
    },
  
            {
                path: "/index",
                name: "home",
                meta: {
                    title: '首页',
                    headerType: 'normal'
                },
                component: () => import("@/views/home/index.vue"),
            },
            {
                path: "/productlist",
                name: "productlist",
                meta: {
                    title: '商品列表',
                    headerType: 'normal'
                },
                component: () => import("@/views/productlist/index.vue"),
            },
            {
                path: "/details?id=:id",
                name: "details",
                meta: {
                    title: '商品详情',
                    headerType: 'normal'
                },
                component: () => import("@/views/details/index.vue"),
            },
            {
                path: "/shoppingcart",
                name: "shoppingcart",
                meta: {
                    title: '购物车',
                    headerType: 'normal'
                },
                component: () => import("@/views/shoppingcart/index.vue"),
            },
            
            
        
    
];

const router = new VueRouter({
    mode: "history",
    base: process.env.VUE_APP_PUBLIC_PATH,
    routes,
    // 指定该钩子函数，返回坐标值即可
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {
            x: 0,
            y: 0
        }
    }
});

export default router;