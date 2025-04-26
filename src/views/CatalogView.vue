<script setup>
import Navbar from "@/components/Navbar.vue";
import CatalogList from "@/components/CatalogList.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div>
      <Navbar />
      <CatalogList />
    </div>
    <Footer />
  </div>
</template>
