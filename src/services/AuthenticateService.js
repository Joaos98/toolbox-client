import Api from "@/services/api.js"

export default {
    BASE_URL: "/auth",
    async register(credentials) {
        const response = await Api().post(`${this.BASE_URL}/register`, credentials)
        return response.data
    },
    async login(credentials) {
        const response = await Api().post(`${this.BASE_URL}/login`, credentials)
        return response.data
    }
}