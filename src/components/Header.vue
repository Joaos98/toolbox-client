<script setup>
import {RouterLink} from "vue-router";
import {useAuthStore} from "@/stores/authentication.js";
import router from "@/router/index.js";

const authStore = useAuthStore()

function logOut() {
  authStore.logout();
  router.push({name: 'authenticate'})
}
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
        <div class="linkWrapper centerLinkWrapper">
            <h1 class="title" v-if="pageTitle">
              {{ pageTitle }}
            </h1>
        </div>
        <div class="linkWrapper logOutLinkWrapper">
          <button v-if="authStore.user" class="logOutButton routerLink"  @click="logOut">
            Log Out
          </button>
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
    .logOutLinkWrapper {
      display: flex;
      justify-content: flex-end;

      .logOutButton {
        background-color: transparent;
        border: none;
        color: var(--secondary-color);
      }
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