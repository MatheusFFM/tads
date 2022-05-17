<template>
  <div v-if="props">
    <div class="mt-8" v-for="group in taskGroups" :key="group.name">
      <v-row class="ma-0 mb-3 d-flex align-center">
        <H2Atom class="mr-5">{{ group.name }}</H2Atom>
        <v-divider
          class="divider"
          style="
             {
              'border': '3px solid #000000';
            }
          "
        />
      </v-row>
      <TaskCardOrganism
        class="mb-6"
        v-for="task in group.tasks"
        :key="task.code"
        :props="getCard(task)"
        @change="updateTask(task)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Task from '@/models/class/Task';
import HelperTask from '@/models/class/HelperTask';
import ITaskCardListOrganismProps from '@/models/components/ITaskCardListOrganismProps';
import ITaskCardOrganismProps from '@/models/components/ITaskCardOrganismProps';
import ITaskGroup from '@/models/interface/ITaskGroup';
import { TaskService } from '@/services/TaskService';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import TaskCardOrganism from './TaskCardOrganism.vue';
import H2Atom from '@/components/atoms/H2Atom.vue';

@Component({
  components: {
    TaskCardOrganism,
    H2Atom,
  },
})
export default class TaskCardListOrganism extends Vue {
  private taskService = new TaskService();
  @Prop()
  public props!: ITaskCardListOrganismProps;
  public taskGroups: ITaskGroup[] = [];

  public mounted(): void {
    this.generateGroups();
  }

  public getCard(task: Task): ITaskCardOrganismProps {
    return {
      id: `${this.props.id}-${task.code}`,
      task,
    };
  }

  public generateGroups(): void {
    const helperTask = new HelperTask();
    this.taskGroups = helperTask.groupTasksByDate(this.props.tasks);
  }

  public updateTask(task: Task): void {
    this.taskService.updateTask(task);
    this.generateGroups();
  }
}
</script>
