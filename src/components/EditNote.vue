<template>
  <div class="container">
    <h4>{{header}}</h4>
    <form class="new-note">
      <p v-show='!isValid' class='error'>Please fill title and/or description</p>
      <div class="form-group">
        <input type='text' id='title' class='form-control' v-model='note.title' name='title' placeholder="Title">
      </div>
      <div class="form-group">
        <textarea class='form-control' rows='2' id='description' v-model='note.description' name='description' placeholder="Description"></textarea>
      </div>
      <button type="submit" v-on:click.prevent="saveNote" class="btn btn-info btn-lg" >{{actionName}}</button>
    </form>
  </div>
</template>

<script  lang="ts">
import { Note } from '../types';

export default {
  name: 'EditNote',
  props: {
    id: Number,
    header: String,
    actionName: String
  },
  created() {
    if (this.id) {
      this.note = this.$store.getters.noteById(this.id);
    } else {
      this.note = new Note('', '');
    }
  },
  data: function() {
    return {
      note: Note,
      isValid: true
    };
  },
  methods: {
    saveNote: function () {
      this.isValid = this.validateForm();
      if (this.isValid) {
        if (this.id) {
          this.$store.commit('editNote', { id: this.id, note: this.note });
          this.$router.push('/');
        } else {
          this.$store.commit('addNote', this.note);
          this.note = new Note('', '');
        }
      }
    },
    validateForm: function(): boolean {
      return this.note.title.trim().length + this.note.description.trim().length > 0;
    }
  }
};

</script>

<style lang="less">

.error {
  color: darkred;
}

</style>
