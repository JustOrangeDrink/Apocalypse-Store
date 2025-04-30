<script setup>
import { RouterLink, useRoute } from "vue-router";
const currentRoute = useRoute();
function isActiveRoute(route) {
  return route == currentRoute.path;
}
const categories = [
  "Survival Equipment",
  "Food Supplies",
  "Weaponry",
  "Armory",
  "Circuitry",
  "Medicaments",
  "WildLife Equipment",
  "Construction Supplies",
  "Household Goods",
  "Transport",
  "Games",
  "Sports Equipment",
  "Pets",
  "Other",
];
</script>

<template>
  <section
    class="bg-amber-100 my-8 w-fit h-fit max-h-[80vh] overflow-y-scroll scrollbar-hide py-3 px-10 border-t-4 border-r-4 border-b-4 border-amber-300"
  >
    <ul ref="wrapper" class="*:hover:cursor-pointer *:hover:text-amber-700">
      <RouterLink
        v-for="category in categories"
        key="category_id"
        :to="`/catalog/${category.toLowerCase().replace(' ', '_')}`"
        :class="
          isActiveRoute(`/catalog/${category.toLowerCase().replace(' ', '_')}`)
            ? `mb-3 text-center border-b-2 text-blue-700`
            : `mb-3 text-center border-b-2 text-black`
        "
      >
        <li class="mb-3 text-center border-b-2">{{ category }}</li>
      </RouterLink>
    </ul>
  </section>
</template>

<style scoped></style>
