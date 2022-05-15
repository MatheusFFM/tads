<template>
  <h2 class="text-grey"><slot /></h2>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class H4Atom extends Vue {}
</script>

<style scoped>
.text-grey {
  color: #4f4f4f;
}
</style>
