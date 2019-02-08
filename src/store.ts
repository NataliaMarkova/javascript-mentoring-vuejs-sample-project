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
    }
  },
  mutations: {
    addNote(state, note: Note): void {
      state.notes.push(note);
    },
    markAsDone(state, index: number): void {
      state.notes[index].done = true;
    },
    remove(state, index: number): void {
      state.notes.splice(index, 1);
    },
    editNote(state, data = { index: Number, note: Note }):void {
      state.notes[data.index] = data.note;
    },
    setNotes(state, notes: Array<Note>): void {
      state.notes = notes;
    }
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
