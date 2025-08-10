<script setup>
import { ref, watch } from "vue";
import srcQuiz from "./data/quizes.json";

import quizCard from "./components/QuizCard.vue";

const quizes = ref(srcQuiz);
const search = ref("");

watch(search, () => {
  quizes.value = srcQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <main>
    <header>
      <div id="header">
        <h1 id="tittle">Quiz App</h1>
        <form action="search">
          <input
            v-model.trim="search"
            id="search-form"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </header>
    <section id="card-container">
      <quizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  color: black;
  font-size: 24px;
}
#search-form {
  border: none;
  margin-left: 20px;
  border-radius: 5%;
  padding: 10px;
  background-color: #c9c9c9;
}

#card-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
