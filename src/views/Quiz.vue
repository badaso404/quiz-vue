<script setup>
import QuizBar from "../components/QuizBar.vue";
import QuizContent from "../components/QuizContent.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";
import QuizResult from "../components/QuizResult.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberCorrectAnswers = ref(0);
const showResult = ref(false);

const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  return `${
    ((currentQuestionIndex.value + 1) / quiz.questions.length) * 100
  }% `;
});
// const questionPage = ref(
//   `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`
// );

// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionPage.value = `${currentQuestionIndex.value + 1} / ${
//       quiz.questions.length
//     }`;
//   }
// );

function handlerSelectOption(option) {
  if (option.correct) {
    numberCorrectAnswers.value++;
  }
  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }
  currentQuestionIndex.value++;
}
</script>

<template>
  <QuizBar :questionPage="questionPage" :barPercentage="barPercentage" />
  <QuizContent
    v-if="!showResult"
    :question="quiz.questions[currentQuestionIndex]"
    @selectOption="handlerSelectOption"
  />
  <QuizResult
    v-else
    :quizLength="quiz.questions.length"
    :numberCorrectAnswers="numberCorrectAnswers"
  />
</template>

<style scoped>
button {
  bottom: 20px;
  right: 20px;
  padding: 8px 15px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
