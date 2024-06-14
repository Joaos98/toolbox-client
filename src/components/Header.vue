<script setup>
import {RouterLink} from "vue-router";
defineProps(['pageTitle'])
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="linkWrapper">
          <RouterLink class="routerLink" to="/">
            <h1 class="title">
              Joao's Toolbox
            </h1>
          </RouterLink>
        </div>
        <div class="linkWrapper centerLinkWrapper" v-if="pageTitle">
            <h1 class="title">
              {{ pageTitle }}
            </h1>
        </div>
        <div class="linkWrapper">

        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.wrapper {
  background-color: var(--bg-darker3);
  height: 10vh;
  display: flex;
  align-items: center;
  margin-bottom: 5vh;
  padding: 0 20px;

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .centerLinkWrapper {
      display: flex;
      justify-content: center;
    }

    .linkWrapper {
      flex: 1;

      .routerLink {
        display: inline-block;
        width: fit-content;
        text-decoration: none;
        transition: 0.3s;
        border-radius: 10px;

        &:hover {
          text-shadow: 0 0 20px #adadad;
        }
      }

      .title {
        color: var(--secondary-color);
        width: fit-content;
        padding: 10px;
      }
    }
  }
}

</style>