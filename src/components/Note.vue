<template>
  <div class="card-body">
    <h5 class="card-title">{{note.title}}</h5>
    <p class="card-text">{{note.description}}</p>
  </div>
</template>

<script  lang="ts">
import { Note } from "../types"

export default {
  name: 'NoteComponent',
  props: {
    note: Note
  }
}
</script>

<style lang="less">
.note {
  border-bottom: 1px solid rgba(121, 121, 121, 1);
  padding: 10px;
}
</style>