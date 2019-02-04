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
      <div class="card border-info" v-for="note in notes" :key=note.id>
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
  color: red;
}
</style>
