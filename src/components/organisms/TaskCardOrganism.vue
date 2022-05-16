<template>
  <v-card
    class="mx-auto"
    :style="{ 'border-left': `6px ${color} solid` }"
    v-if="props.task"
  >
    <v-card-title class="title">
      <v-checkbox
        v-model="done"
        class="mr-2"
        :color="color"
        @change="changeCheckbox"
      />
      <H3Atom :class="{ 'task-done': props.task.done }">
        {{ props.task.title }}
      </H3Atom>
    </v-card-title>
    <v-card-subtitle :class="{ 'pb-0': props.task.description }">
      {{ date }}
    </v-card-subtitle>
    <v-card-actions
      v-if="props.task.description"
      class="py-0 description-open"
      @click="show = !show"
    >
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition v-if="props.task.description">
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ props.task.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import HelperDate from '@/models/class/HelperDate';
import ITaskCardOrganismProps from '@/models/components/ITaskCardOrganismProps';
import { Colors } from '@/models/constants/Colors';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import H3Atom from '../atoms/H3Atom.vue';

@Component({
  components: {
    H3Atom,
  },
})
export default class TaskCardOrganism extends Vue {
  private helperDate = new HelperDate();
  @Prop()
  public props!: ITaskCardOrganismProps;
  public show = false;
  public done = false;
  public color = Colors.active;

  public mounted(): void {
    if (this.props?.task) {
      this.generateColor();
      this.done = this.props.task.done;
    }
  }

  public get date(): string {
    return this.helperDate.getDateFormat(this.props.task.date);
  }

  public generateColor(): void {
    this.color = this.props.task.done ? Colors.done : Colors.active;
  }

  public changeCheckbox(): void {
    this.props.task.done = this.done;
    this.generateColor();
    this.$emit('change', this.props.task);
  }
}
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
}

.description-open {
  cursor: pointer;
}
</style>
