import { ref } from 'vue'
import { defineStore } from 'pinia'
import NotesService from "@/services/NotesService.js";

export const useNotesStore = defineStore('notes', () => {

  const notes = ref([])
  const currentNote = ref(null)

  async function getNotes() {
    notes.value = await NotesService.getNotes()
    if (notes.value.length > 0) {
      selectNote(notes.value[0])
    }
  }
  function createNote() {
    const newNote = {title: "New note", content: ""}
    notes.value.push(newNote)
    selectNote(newNote)
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
