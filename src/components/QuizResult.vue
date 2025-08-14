<script setup>
import { RouterLink } from "vue-router";

const { quizLength, numberCorrectAnswers } = defineProps([
  "quizLength",
  "numberCorrectAnswers",
]);
</script>

<template>
  <section class="result">
    <p>Score:</p>
    <h1>{{ numberCorrectAnswers }}/{{ quizLength }}</h1>
    <RouterLink to="/"> Back to Home</RouterLink>
  </section>
</template>
