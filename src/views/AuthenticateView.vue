<script setup>
import {ref} from "vue";
import AuthenticateService from "@/services/AuthenticateService.js";

const email = ref("")
const password = ref("")
const response = ref("")

async function register() {
  try {
    response.value = await AuthenticateService.register({email: email, password: password})
  } catch (err) {
    response.value = err.response.data.error
  }
}
</script>

<template>
  <form>
    <input type="email" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="password">
    <button type="button" @click="register()">Register</button>
    <p>{{response}}</p>
  </form>
</template>

<style scoped>

</style>