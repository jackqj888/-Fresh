import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/index",
  },
  {
    path: "/home",
    component: () => import("@/views/home/index.vue"),
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