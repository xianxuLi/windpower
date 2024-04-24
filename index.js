/*
 * @Date: 2023-11-09 09:21:31
 * @LastEditTime: 2023-11-10 14:26:43
 * @Description:
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 防止重复路由报错
const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/productionMonitoring/operationMonitoring",
    },
    {
      path: "/productionMonitoring",
      name: "productionMonitoring",
      redirect: "/operationMonitoring",
      meta: {
        title: "生产监测",
        index:"0"
      },
      component: () => import("../page/productionMonitoring/index.vue"),
      children: [
        {
          path: "operationMonitoring",
          name: "operationMonitoring",
          meta: {
            title: "生产监测",
            index:"0"
          },
          component: () => import("../page/productionMonitoring/operationMonitoring.vue"),
        },
        {
          path: "statisticAnalysis",
          name: "statisticAnalysis",
          meta: {
            title: "生产监测",
            index:"0"
          },
          component: () => import("../page/productionMonitoring/statisticAnalysis.vue"),
        },
      ]
    },
    {
      path: "/substationOperation",
      name: "substationOperation",
      meta: {
        title: "变电站运行",
        index:"1"
      },
      component: () => import("../page/substationOperation.vue"),
    },
    {
      path: "/wind",
      name: "wind",
      redirect: "/overview",
      meta: {
        title: "风机管理" ,
        index:"2"
      },
      component: () => import("../page/windManagement/index.vue"),
      children: [
        {
          path: "overview",
          name: "overview",
          meta: {
            title: "风机管理" ,
            index:"2"
          },
          component: () => import("../page/windManagement/Overview.vue"),
        },
        {
          path: "run",
          name: "run",
          meta: {
            title: "风机管理" ,
            index:"2"
          },
          component: () => import("../page/windManagement/run.vue"),
        },
        {
          path: "operations",
          name: "operations",
          meta: {
            title: "风机管理" ,
            index:"2"
          },
          component: () => import("../page/windManagement/operations.vue"),
        },
        {
          path: "diagnosis",
          name: "diagnosis",
          meta: {
            title: "风机管理" ,
            index:"2"
          },
          component: () => import("../page/windManagement/diagnosis.vue"),
        },
      ],
    } ,
    {
      path: "/safetyManagement",
      name: "safetyManagement",
      meta: {
        title: "安全管理",
        index:"3"
      },
      component: () => import("../page/safetyManagement.vue"),
    },
  ],
});
