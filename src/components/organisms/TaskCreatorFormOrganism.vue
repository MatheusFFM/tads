<template>
  <v-form ref="form">
    <v-text-field
      class="mt-4"
      v-model="title"
      :counter="maxTitleSize"
      :rules="titleRules"
      label="Title"
    />
    <v-textarea
      class="mt-4"
      v-model="description"
      :counter="maxDescriptionSize"
      :rules="descriptionRules"
      label="Description"
    />
    <DatePickerMolecule class="mt-10 mb-2" @input="changeDate" />
    <v-btn :color="submitColor" dark class="mr-4" @click="submit">submit</v-btn>
    <v-btn :color="clearColor" @click="clear" dark>clear</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Colors } from '@/models/constants/Colors';
import { TaskService } from '@/services/TaskService';
import Vue from 'vue';
import Component from 'vue-class-component';
import DatePickerMolecule from '../molecules/DatePickerMolecule.vue';

@Component({
  components: {
    DatePickerMolecule,
  },
})
export default class TaskCreatorFormOrganism extends Vue {
  private taskService = new TaskService();
  public clearColor = Colors.LightBlue;
  public submitColor = Colors.LightPurple;
  public title = '';
  public maxTitleSize = 30;
  public maxDescriptionSize = 5000;
  public description = '';
  public date = new Date();

  public titleRules = [
    (v: any) =>
      (v || '').length <= this.maxTitleSize ||
      `The maximum possible characters for the title are ${this.maxTitleSize} characters.`,
    (v: string) => (v || '').length !== 0 || 'The title field is required.',
  ];

  public descriptionRules = [
    (v: string) =>
      (v || '').length <= this.maxDescriptionSize ||
      `The maximum possible characters for the description are ${this.maxTitleSize} characters.`,
  ];

  public clear(): void {
    (this.$refs.form as any).reset();
  }

  public validateField() {
    return (this.$refs.form as any).validate();
  }

  public changeDate(dateString: string): void {
    const date = new Date(dateString);
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    this.date = new Date(date.getTime() + userTimezoneOffset);
  }

  public submit(): void {
    if (this.validateField()) {
      this.taskService.addTask(
        this.title,
        this.description,
        this.date ?? new Date(),
      );
      this.clear();
    }
  }
}
</script>
