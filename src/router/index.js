import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "../Views/HomeView.vue";

const routes = [
  {
    path:"/",
    name: "Homeview",
    component: HomeView,
  },
  {
    path:"/dragons/:id",
    name:"singleDragon",
    component: () => import("../views/singleDragonView.vue")
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("../views/404View.vue") },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes:routes,
});

export default router;
