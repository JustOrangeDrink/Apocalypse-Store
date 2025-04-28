<script setup>
import Navbar from "@/components/Navbar.vue";
import CatalogList from "@/components/CatalogList.vue";
import Footer from "@/components/Footer.vue";
import ProductList from "@/components/ProductList.vue";
</script>

<template>
  <div class="flex flex-col justify-around min-h-screen">
    <Navbar />
    <div class="flex">
      <CatalogList />
      <ProductList />
    </div>
    <Footer />
  </div>
</template>
