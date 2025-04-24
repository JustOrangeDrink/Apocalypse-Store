<script setup>
import Card from "./Card.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="px-3 py-3 mx-4 mb-3 space-y-3 bg-emerald-100 rounded-xl">
    <h1 class="text-center font-[Verdana] font-black text-2xl">
      Catalog Overview
    </h1>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-3 group">
      <RouterLink to="">
        <Card
          bg="bg-blue-200"
          class="transition hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center">Survival Equipment</p>
        </Card>
      </RouterLink>

      <RouterLink to="">
        <Card
          bg="bg-blue-200"
          class="transition hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center">Food Supplies</p>
        </Card>
      </RouterLink>
      <RouterLink to="">
        <Card
          bg="bg-blue-200"
          class="transition hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center">Weaponry</p>
        </Card>
      </RouterLink>
      <RouterLink to="">
        <Card
          bg="bg-blue-200"
          class="transition hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center">Armory</p>
        </Card>
      </RouterLink>
      <RouterLink to="">
        <Card
          bg="bg-blue-200"
          class="transition hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center">Circuitry</p>
        </Card>
      </RouterLink>
      <RouterLink to="">
        <Card
          bg="bg-blue-200"
          class="transition hover:scale-110 group-hover:not-hover:scale-95"
        >
          <p class="text-center">Medicaments</p>
        </Card>
      </RouterLink>
    </div>
    <div class="flex justify-center w-full">
      <RouterLink to="/catalog">
        <h2
          class="px-2 pt-2 pb-3 text-white bg-black by-2 rounded-xl hover:bg-gray-700"
        >
          Browse Catalog
        </h2>
      </RouterLink>
    </div>
  </section>
</template>
