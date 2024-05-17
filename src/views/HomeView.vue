<script setup>
import NotesList from "@/components/NotesList.vue";
import NoteViewer from "@/components/NoteViewer.vue";
import {useNotesStore} from "@/stores/notes.js";
import {onMounted} from "vue";

onMounted(() => {
  const notesStore = useNotesStore();
  notesStore.getNotes()
});
</script>

<template>
  <main>
    <div class="content">
      <NotesList />
      <NoteViewer />
    </div>
  </main>
</template>

<style scoped>
.content {
  display: flex;
  width: 100%;
  min-height: 50vh;
}
</style>