<template>
  <div class="notes">
    <h3>Take a note</h3>
    <form class="new-note">
      <p v-show='!isValid' class='error'>Please fill title and/or description</p>
      <div class="form-group">
        <input type='text' id='title' class='form-control' v-model='title' name='title' placeholder="Title"> 
      </div>
      <div class="form-group">
        <textarea class='form-control' rows='2' id='description' v-model='description' name='description' placeholder="Description"></textarea>
      </div>
      <button type="submit" v-on:click.prevent="addNote" class="btn btn-info btn-lg" >Add</button>
    </form>
    <div class="card-deck">
      <template  v-for="(note, index) in notes">
        <NoteComponent v-bind:note="note" v-bind:index="index" v-bind:key="index"></NoteComponent>
      </template>
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
      isValid: true
    }
  },
  computed: {
    notes() : Array<Note> {
      return this.$store.state.notes;
    }
  },
  methods : {
    addNote: function () {
      this.isValid = this.validateForm();
      if (this.isValid) {
        this.$store.commit('addNote', new Note(this.title, this.description));
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
