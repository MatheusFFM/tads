<template>
  <div><TaskListTemplate :props="getTemplate()" /></div>
</template>

<script lang="ts">
import TaskListTemplate from '@/components/templates/TaskListTemplate.vue';
import Task from '@/models/class/Task';
import ITaskListTemplateProps from '@/models/components/ITaskListTemplateProps';
import { TaskService } from '@/services/TaskService';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    TaskListTemplate,
  },
})
export default class TaskListPage extends Vue {
  private taskService = new TaskService();

  public get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  public getTemplate(): ITaskListTemplateProps {
    return {
      id: 'task-list',
      tasks: this.tasks,
    };
  }
}
</script>
