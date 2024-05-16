<script setup>
import NotesList from "@/components/NotesList.vue";
import NoteViewer from "@/components/NoteViewer.vue";

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