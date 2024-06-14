<script setup>
  import {useNotesStore} from "@/stores/notes.js";

  defineProps({
    note: {}
  })

  const notesStore = useNotesStore()
</script>

<template>
  <li class="note-item">
    <div class="note-item-select" @click="notesStore.selectNote(note)">
      <span class="noteTitleSpan">
        {{note.title}}
      </span>
    </div>
    <div class="delete-note" @click="notesStore.deleteNote(note)">
      X
    </div>
  </li>
</template>

<style scoped lang="scss">
.note-item {
  overflow: hidden;
  margin-bottom: 10px;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .note-item-select {
    background-color: var(--bg-lighter1);
    border-radius: 10px 0 0 10px;
    transition: 0.3s;
    padding: 20px 10px;
    flex: 1;
    display: flex;

    &:hover {
      cursor: pointer;
      background-color: var(--bg-lighter2)
    }

    .noteTitleSpan {
      flex-grow: 1;
      width: 0;
      word-break: break-word;
    }
  }

  .delete-note {
    border-radius: 0 10px 10px 0;
    width: 30px;
    background-color: var(--bg-darker2);
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: rgba(121, 28, 32, 0.67);
    }
  }
}
</style>