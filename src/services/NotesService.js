import Api from "@/services/api.js"
import {useAuthStore} from "@/stores/authentication.js";

export default {
    async getNotes() {
        const authStore = useAuthStore()
        const notes = await Api().get("/notes", {
            params: {
                userId: authStore.user.id
            }
        })
        return notes.data
    },

    async createNote(note) {
        return await Api().post("/notes", note)
    },

    async deleteNote(noteId) {
        return await Api().delete("/notes", {params: {id: noteId}})
    },

    async updateNotes(notes) {
        await Api().put("/notes", {notes: notes})
    }
}