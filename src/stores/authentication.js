import { ref } from 'vue'
import { defineStore } from 'pinia'
import AuthenticateService from "@/services/AuthenticateService.js";

export const useAuthStore = defineStore('authentication', () => {

    const token = ref(localStorage.getItem('toolbox-token'))
    const user = ref()
    try {
        user.value = JSON.parse(localStorage.getItem('toolbox-user'))
    } catch (error) {
        user.value = null
    }
    const isUserLoggedIn = ref()

    function setToken(jwtToken) {
        token.value = jwtToken
        localStorage.setItem('toolbox-token', jwtToken)
    }

    function setUser(userValue) {
        user.value = userValue
        localStorage.setItem('toolbox-user', JSON.stringify(userValue))
    }

    function checkToken() {
        return AuthenticateService.checkToken(token.value)
    }

    function logout() {
        localStorage.removeItem('toolbox-user')
        localStorage.removeItem('toolbox-token')
        token.value = null
        user.value = null
    }

    return {token, user, isUserLoggedIn, setToken, setUser, checkToken, logout}
})
