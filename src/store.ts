import Vue from 'vue'
import Vuex from 'vuex'
import { Note } from "./types"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: Array<Note>()
  },
  mutations: {
    addNote(state, note: Note): void  {
      state.notes.push(note);  
    },
    markAsDone(state, index : number): void {
      state.notes[index].done = true;
    },
    remove(state, index : number): void {
      state.notes.splice(index, 1);
    }
  },
  actions: {

  }
})
