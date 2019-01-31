<template>
  <div class="edit-new-note">
    <h3>Take a note</h3>
    <form class="new-note">
      <p v-show='!isValid' class='error'>Please fill title and/or description</p>
      <div class="form-group">
        <label for='title'>Title</label>
        <input type='text' id='title' class='form-control' v-model='title' name='title'> 
      </div>
      <div class="form-group">
        <label for='description'>Description</label>
        <textarea class='form-control' rows='3' id='description' v-model='description' name='description'></textarea>
      </div>
      <button type="submit" v-on:click.prevent="addNote" class="btn btn-primary" >Save</button>
    </form>
    <h2>Notes</h2>
     <ul class="collection col s6 offset-s3">
      <li class="collection-item" v-for="note in this.notes" :key="note.id">
        <div>{{note.title}}</div>
        <div>{{note.description}}</div>  
      </li>
    </ul>
  </div>
</template>

<script  lang="ts">
import { Note } from "../types"

export default {
  name: 'NewNote',
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
.new-note {
  border: 1px solid rgba(121, 121, 121, 1);
}

.error {
  color: red;
}
</style>
