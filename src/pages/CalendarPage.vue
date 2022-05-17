<template>
  <div><CalendarTemplate :props="getTemplate()" /></div>
</template>

<script lang="ts">
import CalendarTemplate from '@/components/templates/CalendarTemplate.vue';
import Task from '@/models/class/Task';
import ICalendarProps from '@/models/components/ICalendarProps';
import { TaskService } from '@/services/TaskService';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    CalendarTemplate,
  },
})
export default class CalendarPage extends Vue {
  private taskService = new TaskService();

  public get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  public getTemplate(): ICalendarProps {
    return {
      id: 'task-list',
      tasks: this.tasks,
    };
  }
}
</script>
