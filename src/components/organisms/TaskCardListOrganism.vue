<template>
  <div v-if="props">
    <TaskCardOrganism
      class="mt-8"
      v-for="task in props.tasks"
      :key="task.code"
      :props="getCard(task)"
      @change="updateTask(task)"
    />
  </div>
</template>

<script lang="ts">
import Task from '@/models/class/Task';
import ITaskCardListOrganismProps from '@/models/components/ITaskCardListOrganismProps';
import ITaskCardOrganismProps from '@/models/components/ITaskCardOrganismProps';
import { TaskService } from '@/services/TaskService';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import TaskCardOrganism from './TaskCardOrganism.vue';

@Component({
  components: {
    TaskCardOrganism,
  },
})
export default class TaskCardListOrganism extends Vue {
  private taskService = new TaskService();
  @Prop()
  public props!: ITaskCardListOrganismProps;

  public getCard(task: Task): ITaskCardOrganismProps {
    return {
      id: `${this.props.id}-${task.code}`,
      task,
    };
  }

  public updateTask(task: Task): void {
    this.taskService.updateTask(task);
  }
}
</script>
