<template>
  <div v-if="props">
    <TaskCardOrganism v-for="task in props.tasks" :key="task.code" />
  </div>
</template>

<script lang="ts">
import ITaskCardListOrganismProps from '@/models/components/ITaskCardListOrganismProps';
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
}
</script>
