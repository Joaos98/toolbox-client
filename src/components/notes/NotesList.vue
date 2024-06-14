<script setup>
  import NoteListItem from "@/components/notes/NoteListItem.vue";
  import {useNotesStore} from "@/stores/notes.js";

  const notesStore = useNotesStore()

</script>

<template>
  <div class="notes-list-wrapper">
    <ul class="notes-list">
      <NoteListItem v-for="note in notesStore.notes" :key="note.id" :note="note"/>
    </ul>
    <button type="button" class="new-note-button" @click="notesStore.createNote()">
      +
    </button>
  </div>
</template>

<style scoped>
.notes-list-wrapper {
  padding: 0 10px 0 0;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40vh;

  .notes-list {
    padding: 0;
    list-style: none;
  }

  .new-note-button {
    border-radius: 50%;
    border: 0;
    width: 50px;
    height: 50px;
    background-color: var(--bg-lighter1);
    transition: 0.3s;
    color: white;
    align-self: end;

    &:hover {
      cursor: pointer;
      background-color: var(--secondary-color);
      color: black;
    }
  }
}

</style>