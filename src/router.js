import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./views/home"),
    redirect: `${adminRoot}/dashboards`
  },
  {
    path: adminRoot,
    component: () => import("./views/app"),
    redirect: `${adminRoot}/dashboards`,
    meta: { loginRequired: true },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */
    children: [
      {
        path: "dashboards",
        component: () => import("./views/app/dashboards"),
        redirect: `${adminRoot}/dashboards/start`,
        children: [
          {
            path: "start",
            component: () => import("./views/app/dashboards/Start")
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }
        ]
      },
      {
        path: "admissions",
        component: () => import("./views/app/admissions"),
        // redirect: `${adminRoot}/admissions/inscriptions`,
        children: [
          {
            path: "inscriptions",
            component: () => import("./views/app/admissions/inscriptions"),
            redirect: `${adminRoot}/admissions/inscriptions/select`,
            children: [
              {
                path: "select",
                component: () =>
                  import("./views/app/admissions/inscriptions/select")
              },
              {
                path: "add",
                component: () =>
                  import("./views/app/admissions/inscriptions/add")
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      }
    ]
  },
  {
    path: "*",
    component: () => import("./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});
router.beforeEach(AuthGuard);
export default router;
