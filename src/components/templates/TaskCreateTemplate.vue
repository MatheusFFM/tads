<template>
  <div>
    <v-row class="mt-3">
      <v-col cols="2" />
      <v-col cols="8">
        <H2Atom>Create a new ToDo task</H2Atom>
        <TaskCreatorFormOrganism class="mt-8" />
      </v-col>
      <v-col cols="2" />
    </v-row>
  </div>
</template>

<script lang="ts">
import H2Atom from '@/components/atoms/H2Atom.vue';
import TaskCreatorFormOrganism from '@/components/organisms/TaskCreatorFormOrganism.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    H2Atom,
    TaskCreatorFormOrganism,
  },
})
export default class TaskCreateTemplate extends Vue {}
</script>
