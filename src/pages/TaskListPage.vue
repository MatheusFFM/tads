<template>
  <div><TaskListTemplate /></div>
</template>

<script lang="ts">
import TaskListTemplate from '@/components/templates/TaskListTemplate.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    TaskListTemplate,
  },
})
export default class TaskListPage extends Vue {}
</script>
