<script setup>
  import {useNotesStore} from "@/stores/notes.js";

  const notesStore = useNotesStore()
</script>

<template>
  <div class="note-viewer-wrapper">
    <input  v-if="notesStore.currentNote != null" placeholder="Note Title" type="text" class="noteTitle" v-model="notesStore.currentNote.title">
    <textarea v-if="notesStore.currentNote != null" class="noteContent" v-model="notesStore.currentNote.content"/>
    <span v-if="notesStore.currentNote == null">
      Select a note to view and edit it's content
    </span>
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
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .noteTitle {
    border: none;
    border-radius: 5px;
    background-color: var(--bg-lighter2);
    padding: 3px 5px;
    margin-bottom: 10px;
    line-height: 3em;
    color: white;
    width: 100%;

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
    width: 100%;

    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      box-shadow: 0 0 5px var(--secondary-color);
    }
  }
}
</style>