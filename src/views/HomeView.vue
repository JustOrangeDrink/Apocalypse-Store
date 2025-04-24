<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import CatalogCards from "@/components/CatalogCards.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <CatalogCards />
    </div>
    <Footer />
  </div>
</template>
