<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import HomeCatalogCards from "@/components/HomeCatalogCards.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <HomeCatalogCards />
    </div>
    <Footer />
  </div>
</template>
