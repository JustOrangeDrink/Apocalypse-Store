<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActiveRoute = (exampleRoute) => {
  const route = useRoute();
  return route.path == exampleRoute;
};
</script>

<template>
  <nav
    class="flex items-center justify-center w-full h-10 border-b-4 bg-amber-100 border-b-amber-300"
  >
    <div
      class="flex items-center justify-center w-full h-full space-x-3 sm:justify-between sm:px-5"
    >
      <RouterLink to="/">
        <div class="flex items-center justify-center">
          <div class="flex h-auto w-9">
            <img src="@/assets/logo.svg" />
          </div>
          <span class="max-sm:hidden font-[Verdana] ml-1 font-extrabold"
            >Post-Apocalyptic prices as well!</span
          >
        </div>
      </RouterLink>
      <ul class="flex space-x-3">
        <li>
          <RouterLink
            to="/"
            :class="
              isActiveRoute('/')
                ? 'font-[Verdana] bg-amber-300 rounded-lg p-1 hover:bg-amber-400'
                : 'font-[Verdana] p-1 rounded-lg hover:bg-black hover:text-white'
            "
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/catalog"
            :class="
              useRoute().path.match('catalog')
                ? 'font-[Verdana] bg-amber-300 rounded-lg p-1 hover:bg-amber-400'
                : 'font-[Verdana] p-1 rounded-lg hover:bg-black hover:text-white'
            "
            >Catalog</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/add-product"
            :class="
              isActiveRoute('/add-product')
                ? 'font-[Verdana] bg-amber-300 rounded-lg p-1 hover:bg-amber-400'
                : 'font-[Verdana] p-1 rounded-lg hover:bg-black hover:text-white'
            "
            >Add Product</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
