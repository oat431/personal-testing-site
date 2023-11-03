<script setup lang="ts">
// import TestingSite from './components/TestAPI.vue'
import TestingSite2 from './components/TestAPIV2.vue'
</script>

<template>
  <!-- <TestingSite msg="Dynamic Cors Test site" /> -->
  <TestingSite2 msg="Test New Framework" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
