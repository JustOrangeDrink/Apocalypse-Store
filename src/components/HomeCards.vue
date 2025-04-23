<script setup>
import Card from "./Card.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-4 md:grid-cols-2">
    <Card>
      <h1 class="font-[Verdana] font-bold text-xl">For Buyer</h1>
      <p class="font-[Verdana] text-sm mt-2 mb-4">
        Check our catalog and prepare for apocalypse today!
      </p>
      <RouterLink to="/catalog">
        <a
          class="inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700"
          >Browse Catalog</a
        >
      </RouterLink>
    </Card>
    <Card bg="bg-red-100">
      <h1 class="font-[Verdana] font-bold text-xl">For Seller</h1>
      <p class="font-[Verdana] text-sm mt-2 mb-4">
        Got a spare chainsaw in your garage? Feel free to sell it!
      </p>
      <RouterLink to="/add-product">
        <a
          class="inline-block px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
          >Add Product</a
        >
      </RouterLink>
    </Card>
  </div>
</template>
