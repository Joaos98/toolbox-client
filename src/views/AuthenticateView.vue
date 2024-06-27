<script setup>
import {ref} from "vue";
import RegisterModal from "@/components/AuthenticateComponents/RegisterModal.vue";
import AuthenticateService from "@/services/AuthenticateService.js";
import Header from "@/components/Header.vue";
import {useAuthStore} from "@/stores/authentication.js";
import router from "@/router/index.js";
import {BAlert} from "bootstrap-vue-next";

const email = ref("")
const password = ref("")
const response = ref("")
const error = ref(null)
const modal = ref(false)
const authStore = useAuthStore();

async function login() {
  try {
    const credentials = {
      email: email.value,
      password: password.value
    }
    response.value = await AuthenticateService.login(credentials)
    if (response.value.token) {
      authStore.token = response.value.token;
      authStore.user = response.value.user;
      authStore.isUserLoggedIn = true;
      await router.push({path: '/'})
    }
    error.value = ""
  } catch (err) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <Header page-title="Authenticate"/>
  <div class="authenticatePanel">
    <h1>
      Login
    </h1>
    <form>
      <input type="email" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <BButton type="button" class="loginButton" @click="login()">Login</BButton>
      </form>
    <BButton class="registerButton" @click="modal = !modal">Create an account</BButton>
    <BAlert class="errorAlert" v-model="error" variant="danger" dismissible fade>
      {{ error }}
    </BAlert>
  </div>
  <BModal :hide-footer="true"
          v-model="modal"
          title="Create an account">
    <RegisterModal/>
  </BModal>
</template>

<style scoped>
.errorAlert {
  margin-top: 10px;
}
  p {
    color: white;
  }
  .authenticatePanel {
    background-color: var(--bg-darker2);
    padding: 10px;
    border-radius: 10px;
    margin: auto;
    max-width: 400px;
    min-width: 150px;
    display: flex;
    flex-direction: column;

    h1 {
      text-align: center;
      color: var(--secondary-color);
      margin-bottom: 30px;
    }

    button {
      background-color: var(--bg-lighter1);
      border: 1px solid var(--bg-darker2);
      transition: 0.3s;

      &:hover {
        background-color: var(--secondary-color);
        color: black;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      input {
        border: none;
        border-radius: 5px;
        background-color: var(--bg-lighter2);
        padding: 3px 5px;
        margin-bottom: 10px;
        line-height: 3em;
        color: white;
        width: 100%;

        &:focus {
          outline: none;
          border-color: var(--secondary-color);
          box-shadow: 0 0 5px var(--secondary-color);
        }
      }

      .loginButton {
        margin-top: 5px;
        background-color: var(--bg-lighter1);
        border: 1px solid var(--bg-darker2);
        transition: 0.3s;

        &:hover {
          background-color: var(--secondary-color);
          color: black;
        }
      }
    }
  }

</style>