<script setup>
import {ref} from "vue";
import RegisterModal from "@/components/AuthenticateComponents/RegisterModal.vue";
import AuthenticateService from "@/services/AuthenticateService.js";
import Header from "@/components/Header.vue";

const email = ref("")
const password = ref("")
const response = ref("")
const error = ref("")
const modal = ref(false)

async function login() {
  try {
    const credentials = {
      email: email.value,
      password: password.value
    }
    response.value = await AuthenticateService.login(credentials)
    error.value = ""
  } catch (err) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <Header page-title="Authenticate"/>
  <div>
    <h1>
      Login
    </h1>
  </div>
  <div class="authenticatePanel">
    <form>
      <input type="email" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <BButton type="button" @click="login()">Login</BButton>
      </form>
      <BButton @click="modal = !modal">Create an account</BButton>
      <BModal :hide-footer="true" v-model="modal" title="Create an account">
        <RegisterModal/>
      </BModal>
    <p v-if="error">{{error}}</p>
    <p v-if="response">{{response}}</p>
  </div>
</template>

<style scoped>
  p {
    color: white;
  }
  .authenticatePanel {
    max-width: 400px;
    min-width: 150px;
  }
  form {
    display: flex;
    flex-direction: column;

    .linkSpan {
      cursor: pointer;
      text-decoration: underline;
      color: blue;
    }
  }
</style>