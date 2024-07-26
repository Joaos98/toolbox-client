<script setup>
  import NoteListItem from "@/components/notes/NoteListItem.vue";
  import {useNotesStore} from "@/stores/notes.js";

  const notesStore = useNotesStore()

</script>

<template>
  <div class="notes-list-wrapper">
    <ul class="notes-list">
      <span class="noNotesSpan" v-if="notesStore.notes.length === 0">
        You don't have any notes!
      </span>
      <NoteListItem v-for="note in notesStore.notes" :key="note.id" :note="note"/>
    </ul>
    <button type="button" class="toolbox-button" @click="notesStore.createNote()">
      New Note
    </button>
  </div>
</template>

<style scoped>
.notes-list-wrapper {
  padding: 10px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40vh;
  border-radius: 10px;
  background-color: var(--bg-darker1);
  margin-right: 20px;

  .notes-list {
    padding: 0;
    list-style: none;
    height: 60vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .noNotesSpan {
    color: white;
    text-align: center;
    align-items: center;
    display: flex;
    height: 100%;
  }
}

</style>