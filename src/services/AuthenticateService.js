import Api from "@/services/api.js"

export default {
    async register(credentials) {
        const response = await Api().post("/authenticate", credentials)
        return response.data
    }
}