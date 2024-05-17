import Api from "@/services/api.js"

export default {
    async notes() {
        const notes = await Api().get("/notes")
        return notes.data
    }
}