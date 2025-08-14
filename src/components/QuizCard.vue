<script setup>
// import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);

function goToQuiz() {
  router.push({ name: "quiz", params: { id: quiz.id } });
}
</script>

<template>
  <div class="card" @click="goToQuiz">
    <img :src="quiz.img" :alt="quiz.title" />
    <div class="card-body">
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  padding: 0 15px;
}
.card-body h2 {
  font-size: 20px;
  margin: 0;
}
.card-body p {
  font-size: 16px;
  color: #666;
  margin-top: 5px;
}
</style>
