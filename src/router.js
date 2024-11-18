import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
];


const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
