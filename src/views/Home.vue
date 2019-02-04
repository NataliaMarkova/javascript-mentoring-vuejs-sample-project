<template>
  <div class="notes container">
    <Notes/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Notes from '@/components/Notes.vue'

@Component({
  components: {
    Notes
  }
})
export default class Home extends Vue {}
</script>
