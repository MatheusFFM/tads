<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :gradient="`to top right, ${startGradient}, ${endGradient}`"
        />
      </template>

      <v-app-bar-title>Tads</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Colors } from '@/models/constants/Colors';

@Component
export default class HeaderOrganism extends Vue {
  public startGradient = Colors.TransparentPurple;
  public endGradient = Colors.TransparentBlue;
}
</script>
