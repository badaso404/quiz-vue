<template>
  <main>
    <header>
      <div id="header">
        <h1 id="tittle">Quiz App</h1>
        <form action="search">
          <input id="search-form" type="text" placeholder="Search" />
        </form>
      </div>
    </header>
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
</style>
