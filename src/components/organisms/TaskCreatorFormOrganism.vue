<template>
  <form>
    <v-text-field
      v-model="title"
      :error-messages="nameErrors"
      :counter="30"
      label="Title"
      required
      @input="$v.title.$touch()"
      @blur="$v.title.$touch()"
    />
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TaskCreatorFormOrganism extends Vue {
  private title = '';
  private description = '';
}
</script>
