<template>
  <div>
    <v-row class="mt-3 mb-14">
      <v-col cols="2" />
      <v-col cols="8">
        <TaskCardListOrganism
          v-if="hasTask"
          :props="getList()"
          class="content"
        />
        <H2Atom class="title" v-else>I couldn't find any task. :(</H2Atom>
      </v-col>
      <v-col cols="2" />
    </v-row>
  </div>
</template>

<script lang="ts">
import ITaskListTemplateProps from '@/models/components/ITaskListTemplateProps';
import { Component, Vue, Prop } from 'vue-property-decorator';
import TaskCardListOrganism from '../organisms/TaskCardListOrganism.vue';
import H2Atom from '@/components/atoms/H2Atom.vue';
import ITaskCardListOrganismProps from '@/models/components/ITaskCardListOrganismProps';

@Component({
  components: {
    TaskCardListOrganism,
    H2Atom,
  },
})
export default class TaskListTemplate extends Vue {
  @Prop()
  public props!: ITaskListTemplateProps;

  public get hasTask(): boolean {
    return this.props.tasks.length > 0;
  }

  public getList(): ITaskCardListOrganismProps {
    return {
      id: `${this.props.id}-list`,
      tasks: this.props.tasks,
    };
  }
}
</script>
