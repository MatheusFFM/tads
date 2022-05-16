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

    <!-- <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>


    <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text>Explore</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
</template>

<script lang="ts">
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
</style>
