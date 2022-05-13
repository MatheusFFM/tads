<template>
  <h3 class="text-grey"><slot /></h3>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class H3Atom extends Vue {}
</script>

<style scoped>
.text-grey {
  color: #5e5e5e;
}
</style>
