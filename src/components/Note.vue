<template>
  <div class="card border-info">
    <div class="card-header">
      <span v-show="!note.done && !note.archived" v-on:click="markAsDone(note.id)" class="fa fa-check-circle-o fa-2x" aria-hidden="true" data-toggle="tooltip" title="Mark as done" />
      <i v-show="note.done" class="fa fa-check-circle fa-2x" aria-hidden="true"></i>
      <i class="fa fa-times-circle fa-2x" v-on:click="remove(note.id)" aria-hidden="true" data-toggle="tooltip" title="Remove"></i>
      <span class="note-archive">
        <i v-show="!note.archived" v-on:click="setArchived(note.id, true)" class="fa fa-file-archive-o fa-2x" aria-hidden="true" data-toggle="tooltip" title="Archive"></i>
        <i v-show="note.archived" v-on:click="setArchived(note.id, false)" class="fa fa-undo fa-2x" aria-hidden="true" data-toggle="tooltip" title="Rearchive"></i>
      </span>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{note.title}}</h5>
      <p class="card-text">{{note.description}}</p>
    </div>
    <div v-show="!note.archived" class="card-footer">
      <div class="btn-toolbar" role="toolbar">
        <router-link v-bind:to="'note/' + note.id" class="btn btn-info">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Note } from '../types';

export default {
  name: 'NoteComponent',
  props: {
    note: Note
  },
  methods: {
    markAsDone : function(id: number) :void {
      this.$store.commit('markAsDone', id);   
    },
    remove : function(id: number) :void {
      this.$store.commit('remove', id);
    },
    setArchived : function(id: number, archived: boolean) :void {
      this.$store.commit('setArchived', { id: id, archived: archived });
    }
  }
};

</script>

<style lang="less">

.note {
  border-bottom: 1px solid rgba(121, 121, 121, 1);
  padding: 10px;
}

.card {
  min-width: 15rem !important; 
  max-width: 15rem;
  margin: 15px;
}

.fa-check-circle-o {
  color: darkolivegreen;
  cursor: pointer;
}

.fa-check-circle {
  color: green;
}

.fa-times-circle {
  color:darkred;
  cursor: pointer; 
}

.fa-undo {
  color: #16af22;
  cursor: pointer;
}

.fa-file-archive-o {
  color: #4280b3;
  cursor: pointer; 
}

.fa {
  margin-right: 5px;
}

.note-archive {
  float: right;
}

</style>
