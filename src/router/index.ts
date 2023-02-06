import { createRouter, createWebHistory } from "vue-router";
import { useFirebase } from "@/hooks";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      redirect: "/home",
      beforeEnter: async (to, from, next) => {
        const { currentUser } = useFirebase();
        if (!(await currentUser())) next({ path: "/login" });
        else next();
      },
      component: () => import("@/layout/MainLayout/Index.vue"),
      children: [
        {
          path: "/home",
          name: "HomeView",
          component: () => import("@/views/App/Home/Index.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "AuthLayout",

      component: () => import("@/layout/AuthLayout/Index.vue"),
      children: [
        {
          path: "/login",
          name: "LoginView",
          component: () => import("@/views/Auth/Login.vue"),
        },
        {
          path: "/register",
          name: "RegisterView",
          component: () => import("@/views/Auth/Register.vue"),
        },
      ],
    },
  ],
});

export default router;
