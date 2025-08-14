<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="main-container">
    <RouterView />
  </main>
</template>

<style scoped>
.main-container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
