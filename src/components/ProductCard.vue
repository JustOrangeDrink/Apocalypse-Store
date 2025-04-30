<script setup>
defineProps({
  product: Object,
});
</script>

<template>
  <section class="mb-3 space-y-1 h-full border-4 border-amber-100">
    <RouterLink :to="`/catalog/${product.type}/${product.id}`">
      <div class="h-auto m-auto w-30">
        <img src="@/assets/logo.svg" />
      </div>
      <p class="text-center font-[Verdana] font-bold">{{ product.title }}</p>
      <p class="text-center font-[Verdana]">{{ product.description }}</p>
      <p class="text-center font-[Verdana]">{{ product.price }}</p>
    </RouterLink>
    <RouterLink to="">
      <div class="p-10 py-2 text-center rounded-4xl bg-amber-50">Buy!</div>
    </RouterLink>
  </section>
</template>
