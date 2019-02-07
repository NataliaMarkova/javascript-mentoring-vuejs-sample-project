<template>
  <div class="notes container">
    <EditNote header="Take a note" actionName="Add"></EditNote>
    <div class="card-deck container">
      <template  v-for="(note, index) in notes">
        <NoteComponent v-bind:note="note" v-bind:index="index" v-bind:key="index"></NoteComponent>
      </template>
    </div>
  </div>
</template>

<script  lang="ts">
import { Note } from "../types"
import NoteComponent from '@/components/Note.vue'
import EditNote from '@/components/EditNote.vue'

export default {
  name: 'Notes',
  components: {
    NoteComponent,
    EditNote
  },
  computed: {
    notes() : Array<Note> {
      return this.$store.state.notes;
    }
  }
}
</script>
