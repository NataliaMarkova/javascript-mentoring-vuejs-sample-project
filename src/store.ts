import Vue from 'vue';
import Vuex from 'vuex';
import { Note } from './types';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: Array<Note>()
  },
  getters: {
    activeNotes: state => {
      return state.notes.filter(note => !note.archived);
    },
    archivedNotes: state => {
      return state.notes.filter(note => note.archived);
    },
    noteById: (state) => (id: Number) => {
      return state.notes.find(note => note.id === id);
    },
    lastId: (state) => {
      const ids = state.notes.map(note => note.id);
      return Math.max.apply(null, ids);
    }
  },
  mutations: {
    addNote(state, note: Note): void {
      note.id = this.getters.lastId + 1;
      state.notes.push(note);
    },
    markAsDone(state, id: number): void {
      const note = this.getters.noteById(id);
      note.done = true;
    },
    remove(state, id: number): void {
      const note = this.getters.noteById(id);
      const index = state.notes.indexOf(note);
      state.notes.splice(index, 1);
    },
    editNote(state, data = { id: Number, note: Note }):void {
      var note = this.getters.noteById(data.id);
      note = data.note;
    },
    setNotes(state, notes: Array<Note>): void {
      state.notes = notes;
    },
    setArchived(state, data = { id: Number, archived: Boolean }): void {
      var note = this.getters.noteById(data.id);
      note.archived = data.archived;
    },
  },
  actions: {
    setInitialState ({ commit }) {
      axios({ method: 'GET', 'url': 'http://localhost:3000/notes' }).then(result => {
        commit('setNotes', result.data);
      }, error => {
        console.error(error);
      });
    }
  }
});

store.dispatch('setInitialState');

export default store;
