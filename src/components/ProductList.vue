<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<template>
  <section
    class="w-full mx-4 my-8 bg-amber-300 max-h-[80vh] overflow-scroll scrollbar-hide"
  >
    <div
      class="grid *:flex *:items-center *:justify-center grid-cols-1 gap-5 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </section>
</template>
