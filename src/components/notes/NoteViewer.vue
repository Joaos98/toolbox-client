<script setup>
  import {useNotesStore} from "@/stores/notes.js";

  const notesStore = useNotesStore()
</script>

<template>
  <div class="note-viewer-wrapper" v-if="notesStore.currentNote != null">
    <input type="text" v-model="notesStore.currentNote.title">
    <textarea v-model="notesStore.currentNote.content"/>
  </div>
</template>

<style scoped>
.note-viewer-wrapper {
  width: 70%;
  padding: 20px;
  color: white;
  border-radius: 10px;
  background-color: var(--bg-lighter1);
}
</style>