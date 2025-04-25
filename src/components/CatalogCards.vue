<script setup>
import Card from "./Card.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="px-3 py-3 mx-4 mb-3 space-y-3 bg-emerald-100 rounded-xl drop-shadow-2xl"
  >
    <h1 class="text-center font-[Verdana] font-black text-2xl">
      Catalog Overview
    </h1>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-3 group">
      <RouterLink to="/catalog/survival">
        <Card
          bg="bg-emerald-300"
          class="transition drop-shadow-xl hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center font-[Georgia]">Survival Equipment</p>
        </Card>
      </RouterLink>

      <RouterLink to="/catalog/food">
        <Card
          bg="bg-emerald-300"
          class="transition drop-shadow-xl hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center font-[Georgia]">Food Supplies</p>
        </Card>
      </RouterLink>
      <RouterLink to="/catalog/weaponry">
        <Card
          bg="bg-emerald-300"
          class="transition drop-shadow-xl hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center font-[Georgia]">Weaponry</p>
        </Card>
      </RouterLink>
      <RouterLink to="/catalog/armory">
        <Card
          bg="bg-emerald-300"
          class="transition drop-shadow-xl hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center font-[Georgia]">Armory</p>
        </Card>
      </RouterLink>
      <RouterLink to="/catalog/circuitry">
        <Card
          bg="bg-emerald-300"
          class="transition drop-shadow-xl hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center font-[Georgia]">Circuitry</p>
        </Card>
      </RouterLink>
      <RouterLink to="/catalog/medicaments">
        <Card
          bg="bg-emerald-300"
          class="transition drop-shadow-xl hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center font-[Georgia]">Medicaments</p>
        </Card>
      </RouterLink>
    </div>
    <div class="flex justify-center w-full">
      <RouterLink to="/catalog">
        <h2
          class="px-2 pt-2 pb-3 text-white bg-green-500 by-2 rounded-xl hover:bg-green-800"
        >
          Browse Catalog
        </h2>
      </RouterLink>
    </div>
  </section>
</template>
