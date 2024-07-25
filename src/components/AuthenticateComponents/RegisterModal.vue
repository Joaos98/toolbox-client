<script setup>
import {ref} from "vue";
import AuthenticateService from "@/services/AuthenticateService.js";
import router from "@/router/index.js";
import {useAuthStore} from "@/stores/authentication.js";
import {BAlert} from "bootstrap-vue-next";

const email = ref("")
const password = ref("")
const response = ref("")
const error = ref(null)
const authStore = useAuthStore();

async function register() {
  try {
    const credentials = {
      email: email.value,
      password: password.value
    }
    response.value = await AuthenticateService.register(credentials)
    if (response.value.token) {
      authStore.setToken(response.value.token)
      authStore.setUser(response.value.user)
      await router.push({path: '/'});
    }
    error.value = ""
  } catch (err) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <form class="registerForm">
    <input id="emailRegister" type="email" v-model="email" placeholder="email">
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
    <BButton type="button" class="registerButton" @click="register()">Register</BButton>
    <BAlert class="errorAlert" v-model="error" variant="danger" dismissible fade>
      {{ error }}
    </BAlert>
  </form>
</template>

<style scoped>
.registerForm {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    border: none;
    border-radius: 5px;
    background-color: #c5c5c5;
    padding: 3px 5px;
    margin-bottom: 10px;
    line-height: 3em;
    width: 100%;

    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      box-shadow: 0 0 5px var(--secondary-color);
    }
  }

  .registerButton {
    margin-top: 5px;
    background-color: var(--bg-lighter1);
    border: 1px solid var(--bg-darker2);
    transition: 0.3s;

    &:hover {
      background-color: var(--secondary-color);
      color: black;
    }
  }

  .passwordRequirements {
    margin-top: 10px;
    color: #777777;

    p {
      margin-bottom: 2px;
    }
  }

  .errorAlert {
    margin-top: 10px;
  }
}

</style>