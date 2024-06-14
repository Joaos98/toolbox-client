<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <main>
    <div class="appDrawer">
      <router-link class="app" to="/notes">Notes</router-link>
    </div>
  </main>
</template>

<style scoped>
.appDrawer {
  padding: 20px;

  .app {
    width: 100px;
    height: 100px;
    background-color: white;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid #ccc;
    border-radius: 15px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0 0 11px rgba(255, 255, 255, 0.5);
    }
  }
}

</style>