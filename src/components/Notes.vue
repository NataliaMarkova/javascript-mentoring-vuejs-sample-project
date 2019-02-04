<template>
  <div class="edit-new-note">
    <h3>Take a note</h3>
    <form class="new-note">
      <p v-show='!isValid' class='error'>Please fill title and/or description</p>
      <div class="form-group">
        <input type='text' id='title' class='form-control' v-model='title' name='title' placeholder="Title"> 
      </div>
      <div class="form-group">
        <textarea class='form-control' rows='2' id='description' v-model='description' name='description' placeholder="Description"></textarea>
      </div>
      <button type="submit" v-on:click.prevent="addNote" class="btn btn-info btn-lg" >Save</button>
    </form>
    <div class="card-deck">
      <div class="card border-info" v-for="(note, index) in notes" :key=note.index>
        <div class="card-header">
          <span v-show="!note.done" v-on:click="markAsDone(index)" class="fa fa-check-circle-o fa-2x" aria-hidden="true" data-toggle="tooltip" title="Mark as done" />
          <i v-show="note.done" class="fa fa-check-circle fa-2x" aria-hidden="true"></i>
          <i class="fa fa-times-circle fa-2x" v-on:click="remove(index)" aria-hidden="true" data-toggle="tooltip" title="Remove"></i>
        </div>
        <NoteComponent v-bind:note="note"></NoteComponent>
        <div class="card-footer">
          <div class="btn-toolbar" role="toolbar">
            <button type="button" class="btn btn-info">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Note } from "../types"
import NoteComponent from '@/components/Note.vue'

export default {
  name: 'Notes',
  components: {
    NoteComponent
  },
  data: function() {
    return  {
      title: '',
      description: '',
      isValid: true,
      notes: Array<Note>()
    }
  },
  watch: {
    notes: {
      handler() {
        localStorage.notes = JSON.stringify(this.notes);
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.notes) {
      this.notes = JSON.parse(localStorage.notes);
    }
  },
  methods : {
    addNote: function () {
      this.isValid = this.validateForm();
      if (this.isValid) {
        this.notes.push(new Note(this.title, this.description));
        this.title = '';
        this.description = '';
      }  
    },
    validateForm: function(): boolean {
      return this.title.trim().length + this.description.trim().length > 0;
    },
    markAsDone : function(index: number) :void {
      const notes: Array<Note> = this.notes;
      notes[index].done = true;
      this.notes = notes;
     
    },
    remove : function(index: number) :void {
      const notes: Array<Note> = this.notes;
      notes.splice(index, 1);
      this.notes = notes;
    }
  }
}
</script>

<style lang="less">
.card {
  min-width: 15rem !important; 
  max-width: 15rem;
  margin: 15px;
}
.btn {
  margin-right: 10px;
}
.error {
  color: darkred;
}

.fa-check-circle-o {
  color: darkolivegreen;
}

.fa-check-circle {
  color: green;
}

.fa-times-circle {
  color:darkred;
  
}

.fa {
  margin-right: 5px;
}

</style>
