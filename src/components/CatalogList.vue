<script setup>
import { onMounted, useTemplateRef, ref, computed } from "vue";
import { RouterLink } from "vue-router";

const wrapper = useTemplateRef("section");
let overflow = ref(false);

onMounted(() => {
  overflow.value =
    wrapper.value.scrollHeight > wrapper.value.clientHeight ? true : false;
});
</script>

<template>
  <section
    ref="section"
    class="bg-amber-100 my-8 w-fit h-fit max-h-[80vh] overflow-y-scroll scrollbar-hide py-3 px-10 border-t-4 border-r-4 border-b-4 border-amber-300"
  >
    <ul ref="wrapper" class="*:hover:cursor-pointer *:hover:text-gray-500">
      <RouterLink to="/catalog/survival">
        <li class="mb-3 text-center border-b-2">Survival Equipment</li>
      </RouterLink>
      <RouterLink to="/catalog/food">
        <li class="my-3 text-center border-b-2">Food Supplies</li>
      </RouterLink>
      <RouterLink to="/catalog/weaponry">
        <li class="my-3 text-center border-b-2">Weaponry</li>
      </RouterLink>
      <RouterLink to="/catalog/armory">
        <li class="my-3 text-center border-b-2">Armory</li>
      </RouterLink>
      <RouterLink to="/catalog/circuitry">
        <li class="my-3 text-center border-b-2">Circuitry</li>
      </RouterLink>
      <RouterLink to="/catalog/medicaments">
        <li class="my-3 text-center border-b-2">Medicaments</li>
      </RouterLink>
      <RouterLink to="/catalog/wildlife">
        <li class="my-3 text-center border-b-2">WildLife Equipment</li>
      </RouterLink>
      <RouterLink to="/catalog/construction">
        <li class="my-3 text-center border-b-2">Construction Supplies</li>
      </RouterLink>
      <RouterLink to="/catalog/household">
        <li class="my-3 text-center border-b-2">Household Goods</li>
      </RouterLink>
      <RouterLink to="/catalog/transport">
        <li class="my-3 text-center border-b-2">Transport</li>
      </RouterLink>
      <RouterLink to="/catalog/games">
        <li class="my-3 text-center border-b-2">Games</li>
      </RouterLink>
      <RouterLink to="/catalog/sports">
        <li class="my-3 text-center border-b-2">Sports Equipment</li>
      </RouterLink>
      <RouterLink to="/catalog/pets">
        <li class="my-3 text-center border-b-2">Pets</li>
      </RouterLink>
      <RouterLink to="/catalog/other">
        <li class="my-3 text-center border-b-2">Other</li>
      </RouterLink>
    </ul>
  </section>
</template>

<style scoped></style>
