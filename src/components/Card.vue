<script setup>
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>

<template>
  <section :class="` rounded-lg p-6 shadow-md ${bg}`">
    <slot>Empty Card!</slot>
  </section>
</template>
