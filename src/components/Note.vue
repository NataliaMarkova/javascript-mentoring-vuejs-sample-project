<template>
  <div class="card border-info">
    <div class="card-header">
      <span v-show="!note.done" v-on:click="markAsDone(index)" class="fa fa-check-circle-o fa-2x" aria-hidden="true" data-toggle="tooltip" title="Mark as done" />
      <i v-show="note.done" class="fa fa-check-circle fa-2x" aria-hidden="true"></i>
      <i class="fa fa-times-circle fa-2x" v-on:click="remove(index)" aria-hidden="true" data-toggle="tooltip" title="Remove"></i>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{note.title}}</h5>
      <p class="card-text">{{note.description}}</p>
    </div>
    <div class="card-footer">
      <div class="btn-toolbar" role="toolbar">
        <router-link v-bind:to="'note/' + index" class="btn btn-info">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Note } from "../types"

export default {
  name: 'NoteComponent',
  props: {
    index: Number,
    note: Note
  },
  methods: {
    markAsDone : function(index: number) :void {
      this.$store.commit('markAsDone', index);
     
    },
    remove : function(index: number) :void {
      this.$store.commit('remove', index);
    }
  }
}
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

.fa {
  margin-right: 5px;
}

</style>