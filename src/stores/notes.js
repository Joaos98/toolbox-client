import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  let id = 0;
  const notes = ref([])
  notes.value.push({id: id++, title: "test note 1", content: "how dumb can a person with a bachelor be?"})
  notes.value.push({id: id++, title: "test note 2", content: "super dumb!"})
  const currentNote = ref(null)

  function createNote() {
    notes.value.push({id: id++, title: "New note", content: ""})
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

  return { notes, currentNote, createNote, selectNote, deleteNote }
})
