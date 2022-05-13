<template>
  <div><H3Atom>TaskListPage</H3Atom></div>
</template>

<script lang="ts">
import H3Atom from '@/components/atoms/H3Atom.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    H3Atom,
  },
})
export default class TaskListPage extends Vue {}
</script>
