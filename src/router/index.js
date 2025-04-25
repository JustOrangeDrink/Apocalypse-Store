import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CatalogView from "@/views/CatalogView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddProductView from "@/views/AddProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogView,
    },
    {
      path: "/add-product",
      name: "add-product",
      component: AddProductView,
    },
    {
      path: "/catalog/:id",
      name: "catalog-genre",
      component: CatalogView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
