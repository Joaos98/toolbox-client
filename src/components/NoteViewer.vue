<script setup>
  import {useNotesStore} from "@/stores/notes.js";

  const notesStore = useNotesStore()
</script>

<template>
  <div class="note-viewer-wrapper" v-if="notesStore.currentNote !== null">
    <h2>{{notesStore.currentNote.title}}</h2>
    <p>{{notesStore.currentNote.content}}</p>
  </div>
</template>

<style scoped>
.note-viewer-wrapper {
  width: 70%;
  padding: 20px;
}
</style>