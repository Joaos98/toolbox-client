import { ref, watch } from 'vue'
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
  async function createNote() {
    //TODO: Replace the userId with the userId from the authenticated user once authentication is finished
    let newNote = {title: "Blank note", content: "", userId: 20}
    const response = await NotesService.createNote(newNote)
    newNote = response.data
    notes.value.push(newNote)
    selectNote(newNote)
  }

  function selectNote(note) {
    currentNote.value = note
  }

  async function deleteNote(note) {
    const response = await NotesService.deleteNote(note.id)
    if (response.status === 200) {
      location.reload()
    }
  }

  async function updateNotes() {
    await NotesService.updateNotes(notes.value)
    location.reload()
  }


  return {notes, currentNote, createNote, selectNote, deleteNote, getNotes, updateNotes}
})
