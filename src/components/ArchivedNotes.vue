<template>
  <div class="notes container">    
    <div class="card-deck container">
      <template  v-for="(note, index) in notes">
        <NoteComponent v-bind:note="note" v-bind:index="index" v-bind:key="index"></NoteComponent>
      </template>
    </div>
  </div>
</template>

<script  lang="ts">
import { Note } from '../types';
import NoteComponent from '@/components/Note.vue';

export default {
  name: 'Notes',
  components: {
    NoteComponent
  },
  computed: {
    notes() : Array<Note> {
      return this.$store.getters.archivedNotes;
    }
  }
};
</script>

<style lang="less">

</style>
