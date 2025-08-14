<script setup>
// import { defineProps } from "vue";

const emit = defineEmits(["selectOption"]);
const { question } = defineProps(["question"]);

function emitSelectOption(option) {
  emit("selectOption", option);
}
</script>

<template>
  <section id="question-cointainer">
    <h2 class="question-title">{{ question.text }}</h2>
  </section>
  <section id="option-container">
    <div
      class="option"
      v-for="option in question.answers"
      :key="option.id"
      @click="emitSelectOption(option)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </section>
</template>

<style scoped>
#question-cointainer {
  margin-bottom: 20px;
}
.question-title {
  font-size: 20px;
  color: #333;
}
#option-container {
  display: flex;
  flex-direction: column;
}
.option {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
}
.option:hover {
  background-color: #f0f0f0;
}
.option-label {
  font-size: 14px;
  margin-right: 10px;
  margin-left: 10px;
  color: #555;
}
.option-value {
  font-size: 14px;
  color: #333;
}
</style>
