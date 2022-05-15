<template>
  <div>
    <v-row class="mt-3">
      <v-col cols="2" />
      <v-col cols="8">
        <H2Atom>Tasks List</H2Atom>
        <TaskCardListOrganism :props="props" />
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

@Component({
  components: {
    TaskCardListOrganism,
    H2Atom,
  },
})
export default class TaskListTemplate extends Vue {
  @Prop()
  public props!: ITaskListTemplateProps;
}
</script>
