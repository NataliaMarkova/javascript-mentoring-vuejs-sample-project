<template>
  <div class="notes container">
    <NewNote/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewNote from '@/components/NewNote.vue'

@Component({
  components: {
    NewNote
  }
})
export default class Notes extends Vue {}
</script>
