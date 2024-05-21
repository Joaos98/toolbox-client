<script setup>
import NotesList from "@/components/NotesList.vue";
import NoteViewer from "@/components/NoteViewer.vue";
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
  <Header />
  <main>
    <div class="notesListAndViewer">
      <NotesList />
      <NoteViewer />
    </div>
    <div class="saveButton">
      <BButton @click="notesStore.updateNotes()">Save all notes</BButton>
    </div>
  </main>
</template>

<style scoped>
.notesListAndViewer {
  display: flex;
  width: 100%;
  min-height: 50vh;
}
.saveButton {
  display: flex;
  justify-content: flex-end;
}
</style>