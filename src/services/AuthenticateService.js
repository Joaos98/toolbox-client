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
    },
    async checkToken(tokenValue) {
        try {
            const token = 'Bearer ' + tokenValue;
            const response = await Api().get(`${this.BASE_URL}/verify`, {
                headers: {
                    Authorization: token
                }
            })
            if (response.status === 200) {
                return true
            }
        } catch (error) {
            return false
        }
    }
}