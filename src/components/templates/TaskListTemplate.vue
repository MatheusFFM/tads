<template>
  <div>
    <v-row class="mt-3">
      <v-col cols="2" />
      <v-col cols="8"><TaskCardListOrganism /></v-col>
      <v-col cols="2" />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TaskCardListOrganism from '../organisms/TaskCardListOrganism.vue';

@Component({
  components: {
    TaskCardListOrganism,
  },
})
export default class TaskListTemplate extends Vue {}
</script>
