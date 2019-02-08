<template>
  <div class="notes container">
    <div class="search-bar container">
        <input type="text" v-model="search" class="form-control" placeholder="Fina a note...">
        <span class="search-icon">
          <i class="fa fa-search"></i>
        </span>
    </div>
    <EditNote header="Take a note" actionName="Add"></EditNote>
    <div class="card-deck container">
      <template  v-for="note in notes">
        <NoteComponent v-bind:note="note" v-bind:key="note.id"></NoteComponent>
      </template>
    </div>
  </div>
</template>

<script  lang="ts">
import { Note } from '../types';
import NoteComponent from '@/components/Note.vue';
import EditNote from '@/components/EditNote.vue';

export default {
  name: 'Notes',
  components: {
    NoteComponent,
    EditNote
  },
  data: function() {
    return {
      search: ''
    };
  },
  computed: {
    notes() : Array<Note> {
      if (this.activeNotes) {
        return this.activeNotes.filter(note => {
          return note.title.toLowerCase().includes(this.search.toLowerCase()) ||
            note.description.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.activeNotes;
      }
    },
    activeNotes() : Array<Note> {
      return this.$store.getters.activeNotes;
    }
  }
};
</script>

<style lang="less">

  .search-bar {
    position: relative;
    margin: 20px 0 20px 0;
  }

  .search-icon {
    position: absolute;
    top: 3%;
    right: 16px;
    padding: 0;
    color: #0277bd;
    font-size: 1.5rem;
  }

</style>
