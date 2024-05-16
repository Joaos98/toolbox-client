<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
          <RouterLink class="notes-link" to="/">
            <h1 class="notes-title">
              Notes
            </h1>
          </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.wrapper {
  height: 20vh;
  display: flex;
  align-items: center;

  .notes-link {
    color: #54F7A8;
    text-decoration: none;

    .notes-title {
      width: fit-content;
      padding: 10px;
      transition: 0.3s;
      border-radius: 10px;

      &:hover {
        background-color: #53307963;
      }
    }
  }
}

</style>