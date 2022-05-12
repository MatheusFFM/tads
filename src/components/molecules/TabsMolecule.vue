<template>
  <v-card tile flat>
    <v-tabs background-color="#ffffff" centered center-active>
      <v-tab>Tarefas</v-tab>
      <v-tab>Criador</v-tab>
      <v-tab>Calendário</v-tab>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Colors } from '@/models/constants/Colors';

@Component
export default class TabsMolecule extends Vue {
  public startGradient = Colors.TransparentPurple;
  public endGradient = Colors.TransparentBlue;
}
</script>
