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
      <span>
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
    background-color: var(--purple2);
    border-radius: 10px 0 0 10px;
    transition: 0.3s;
    padding: 20px 10px;
    flex: 1;

    &:hover {
      cursor: pointer;
      background-color: var(--purple3)
    }
  }

  .delete-note {
    border-radius: 0 10px 10px 0;
    width: 30px;
    background-color: #36214b;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: #792024ab;
    }
  }
}
</style>