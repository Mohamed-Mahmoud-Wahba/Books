import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import error from "../views/error.vue";
import Single from "../views/single.vue";
const routes: Array<RouteRecordRaw> = [

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/single/:id",
    name: "Single",
    component: Single,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  { path: "/404", component: error },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
