<template>
  <v-form ref="form">
    <v-text-field
      v-model="title"
      :counter="maxTitleSize"
      :rules="titleRules"
      label="Title"
      required
    />
    <v-textarea
      v-model="description"
      :counter="maxDescriptionSize"
      :rules="descriptionRules"
      label="Description"
      required
    />
    <v-btn :color="submitColor" dark class="mr-4" @click="submit">submit</v-btn>
    <v-btn :color="clearColor" @click="clear" dark>clear</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Colors } from '@/models/constants/Colors';
import { TaskService } from '@/services/TaskService';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TaskCreatorFormOrganism extends Vue {
  private taskService = new TaskService();
  public clearColor = Colors.LightBlue;
  public submitColor = Colors.LightPurple;
  public title = '';
  public maxTitleSize = 30;
  public maxDescriptionSize = 1500;
  public description = '';

  public titleRules = [
    (v: any) =>
      (v || '').length <= this.maxTitleSize ||
      `O máximo de caracteres possível para o título são ${this.maxTitleSize} caracteres.`,
  ];

  public descriptionRules = [
    (v: any) =>
      (v || '').length <= this.maxDescriptionSize ||
      `O máximo de caracteres possível para a descrição são ${this.maxTitleSize} caracteres.`,
  ];

  public clear(): void {
    this.title = '';
    this.description = '';
  }

  public validateField() {
    return (this.$refs.form as any).validate();
  }

  public submit(): void {
    if (this.validateField()) {
      this.taskService.addTask(this.title, this.description, new Date());
      this.clear();
    }
  }
}
</script>
