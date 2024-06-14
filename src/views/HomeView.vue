<script setup>
import Header from "@/components/Header.vue";

const apps = [{
    name: 'Notes',
    route: '/notes'
  }, {
    name: 'Expense Tracker',
    route: '/expenses'
  }, {
    name: 'Fitness Tracker',
    route: '/fitness'
}]
</script>

<template>
  <Header/>
  <main>
    <div class="appDrawer">
      <router-link v-for="app in apps" class="app" :to="app.route" :key="app.name">{{app.name}}</router-link>
    </div>
  </main>
</template>

<style scoped>
.appDrawer {
  padding: 20px;
  display: flex;

  .app {
    width: 200px;
    height: 200px;
    background-color: #bbbbbb;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid #ccc;
    border-radius: 15px;
    text-decoration: none;
    color: black;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover {
      box-shadow: 0 0 11px rgba(255, 255, 255, 0.5);
    }
  }
}

</style>