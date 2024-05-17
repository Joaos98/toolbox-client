import { ref } from 'vue'
import { defineStore } from 'pinia'
import NotesService from "@/services/NotesService.js";

export const useNotesStore = defineStore('notes', () => {

  const notes = ref([])
  const currentNote = ref(null)

  async function getNotes() {
    notes.value = await NotesService.notes()
  }
  function createNote() {
    const id = Math.max(...notes.value.map(note => note.id))+1;
    notes.value.push({id: id, title: "New note", content: ""})
  }

  function selectNote(note) {
    currentNote.value = note
  }

  function deleteNote(note) {
    if (currentNote.value === note) {
      currentNote.value = null;
    }
    notes.value = notes.value.filter(a => a !== note)
  }

  return {notes, currentNote, createNote, selectNote, deleteNote, getNotes}
})
