<script setup>
import ProductCard from "./ProductCard.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const state = ref({});

const route = useRoute();
const currentCategory = ref(route.params.category);

watch(route, () => (currentCategory.value = route.params.category));

async function getProductsOfCategory() {
  try {
    const response = await fetch(`http://localhost:3000/products/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

getProductsOfCategory().then((data) => {
  for (let category in data) {
    state.value[category] = data[category];
  }
});
</script>

<template>
  <section
    class="w-full mx-4 my-8 bg-amber-300 max-h-[80vh] overflow-scroll scrollbar-hide"
  >
    <div
      class="grid *:items-center *:justify-center grid-cols-1 gap-1 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <ProductCard
        v-for="product in state[currentCategory]"
        :product="product"
      />
    </div>
  </section>
</template>
