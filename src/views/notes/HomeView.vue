<script setup>
import NotesList from "@/components/notes/NotesList.vue";
import NoteViewer from "@/components/notes/NoteViewer.vue";
import {useNotesStore} from "@/stores/notes.js";
import {onMounted} from "vue";
import Header from "@/components/Header.vue";

let notesStore
onMounted(() => {
  notesStore = useNotesStore();
  notesStore.getNotes()
});
</script>

<template>
  <Header page-title="Notes"/>
  <main class="wrapper">
    <div class="notesListAndViewer">
      <NotesList />
      <NoteViewer />
    </div>
    <div class="saveDiv">
      <BButton class="saveButton" @click="notesStore.updateNotes()">Save Notes</BButton>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  padding: 0 3%;
  display: flex;
  flex-direction: column;

  .notesListAndViewer {
    display: flex;
    width: 100%;
    min-height: 50vh;
  }
  .saveDiv {
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;

    .saveButton {
      background-color: var(--bg-lighter1);
      border: 1px solid var(--bg-darker2);
      transition: 0.3s;

      &:hover {
        background-color: var(--secondary-color);
        color: black;
      }
    }
  }
}
</style>