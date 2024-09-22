import { createMemoryHistory, createRouter } from "vue-router";

const Layouts = () => import("../layouts/AppMain.vue");

const routes = [
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("../views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      },
      {
        path: "login",
        component: () => import("../views/login/index.vue"),
        name: "Login",
        meta: {
          title: "登陆",
          svgIcon: "login",
          affix: true
        }
      }
    ]
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
