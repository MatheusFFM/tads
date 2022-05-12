<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    flat
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        :gradient="`to top right, ${startGradient}, ${endGradient}`"
      />
    </template>

    <v-app-bar-title>Tads</v-app-bar-title>
  </v-app-bar>
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
