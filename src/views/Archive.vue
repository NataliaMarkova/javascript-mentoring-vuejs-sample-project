<template>
  <div class="archive container">
    <ArchivedNotes/>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArchivedNotes from '@/components/ArchivedNotes.vue';

@Component({
  components: {
    ArchivedNotes
  }
})

export default class Archive extends Vue {};

</script>
