import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Root",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resume.vue"),
  },
  {
    path: "/game-projects",
    name: "Game Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameProjects.vue"),
  },
  {
    path: "/other-projects",
    name: "Other Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OtherProjects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "hash", // Використовуємо hash mode для роботи на GitHub Pages
  base: process.env.BASE_URL,
  routes,
});

export default router;
