import Api from "@/services/api.js"

export default {
    async getNotes() {
        const notes = await Api().get("/notes", {
            params: {
                userId: 20
            }
        })
        return notes.data
    }
}