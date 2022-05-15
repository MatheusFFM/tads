<template>
  <div>
    <TaskCreateTemplate />
  </div>
</template>

<script lang="ts">
import TaskCreateTemplate from '@/components/templates/TaskCreateTemplate.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    TaskCreateTemplate,
  },
})
export default class CreatePage extends Vue {}
</script>
