import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import Accueil from "@/views/Accueil.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: Accueil },
    { path: "/home", component: Accueil },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
