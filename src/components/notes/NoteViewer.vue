<script setup>
  import {useNotesStore} from "@/stores/notes.js";

  const notesStore = useNotesStore()
</script>

<template>
  <div class="note-viewer-wrapper" v-if="notesStore.currentNote != null">
    <input placeholder="Note Title" type="text" class="noteTitle" v-model="notesStore.currentNote.title">
    <textarea class="noteContent" v-model="notesStore.currentNote.content"/>
  </div>
</template>

<style scoped>
.note-viewer-wrapper {
  width: 70%;
  padding: 20px;
  color: white;
  border-radius: 10px;
  background-color: var(--bg-lighter1);
  display: flex;
  flex-direction: column;

  .noteTitle {
    border: none;
    border-radius: 5px;
    background-color: var(--bg-lighter2);
    padding: 3px 5px;
    margin-bottom: 10px;
    line-height: 3em;
    color: white;

    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      box-shadow: 0 0 5px var(--secondary-color);
    }
  }

  .noteContent {
    border: none;
    border-radius: 5px;
    background-color: var(--bg-lighter2);
    padding: 3px 5px;
    height: 100%;
    resize: none;
    color: white;

    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      box-shadow: 0 0 5px var(--secondary-color);
    }
  }
}
</style>