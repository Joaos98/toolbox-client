<script setup>
import {ref} from "vue";
import AuthenticateService from "@/services/AuthenticateService.js";

const email = ref("")
const password = ref("")
const response = ref("")
const error = ref("")

async function register() {
  try {
    const credentials = {
      email: email.value,
      password: password.value
    }
    response.value = await AuthenticateService.register(credentials)
    error.value = ""
  } catch (err) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <form class="registerForm">
    <label for="emailRegister">E-mail</label>
    <input id="emailRegister" type="email" v-model="email" placeholder="email">
    <label for="passwordRegister">Password</label>
    <input id="passwordRegister" type="password" v-model="password" placeholder="password">
    <div class="passwordRequirements">
      <p>Your password needs to:</p>
      <ul>
        <li>Have between 8 and 32 characters;</li>
        <li>Have at least 1 uppercase letter;</li>
        <li>Have at least one of the following symbols: !, @, #, $, %, &, *;</li>
        <li>Contain only alphanumeric characters and the symbols mentioned above</li>
      </ul>
    </div>
    <BButton type="button" @click="register()">Register</BButton>
    <p v-if="error">{{error}}</p>
    <p v-if="response">Your account has been created, you may now log in!</p>
  </form>
</template>

<style scoped>
.registerForm {
  label {
    font-weight: bold;
  }

  .passwordRequirements {
    margin-top: 10px;
    color: #777777;

    p {
      margin-bottom: 2px;
    }
  }
}

</style>