<script setup>
import { onMounted, useTemplateRef, ref, computed } from "vue";

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
    <ul
      ref="wrapper"
      class="space-y-3 *:border-b-2 *:text-center *:hover:cursor-pointer *:hover:text-gray-500"
    >
      <li>Survival Equipment</li>
      <li>Food Supplies</li>
      <li>Weaponry</li>
      <li>Armory</li>
      <li>Circuitry</li>
      <li>Medicaments</li>
      <li>Food</li>
    </ul>
  </section>
  <div v-if="overflow">hiii</div>
</template>

<style scoped></style>
