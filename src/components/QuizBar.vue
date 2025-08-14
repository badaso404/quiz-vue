<script setup>
const { questionPage, barPercentage } = defineProps([
  "questionPage",
  "barPercentage",
]);
</script>

<template>
  <header>
    <h2>Question {{ questionPage }}</h2>
    <div class="bar">
      <div class="bar-progress" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 20px;
}
header h2 {
  font-size: 24px;
  color: black;
}
.bar {
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}
.bar-progress {
  width: 0%;
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s ease;
}
</style>
