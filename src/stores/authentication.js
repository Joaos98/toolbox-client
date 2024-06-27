import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authentication', () => {

    const token = ref(null)
    const user = ref(null)
    const isUserLoggedIn = ref(false)




    return {token, user, isUserLoggedIn}
})
