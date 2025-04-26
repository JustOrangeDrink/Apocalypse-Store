<script setup>
defineProps({
  display: String,
});
</script>

<template>
  <footer :class="`${display} bg-neutral-400 h-fit bottom-0 w-full`">
    <p class="text-center">
      Made in Vue by Amir Islamov in educational purposes
    </p>
  </footer>
</template>
