import Api from "@/services/api.js"

export default {
    async getNotes() {
        //TODO: Replace the userId with the userId from the authenticated user once authentication is finished
        const notes = await Api().get("/notes", {
            params: {
                userId: 1
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