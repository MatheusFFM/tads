<template>
  <div v-if="props">
    <TaskCardOrganism
      v-for="task in props.tasks"
      :key="task.code"
      :props="getCard(task)"
    />
  </div>
</template>

<script lang="ts">
import Task from '@/models/class/Task';
import ITaskCardListOrganismProps from '@/models/components/ITaskCardListOrganismProps';
import ITaskCardOrganismProps from '@/models/components/ITaskCardOrganismProps';
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
  @Prop()
  public props!: ITaskCardListOrganismProps;

  public getCard(task: Task): ITaskCardOrganismProps {
    return {
      id: `${this.props.id}-${task.code}`,
      task,
    };
  }
}
</script>
