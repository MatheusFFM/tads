<template>
  <v-app>
    <HeaderOrganism />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HeaderOrganism from './components/organisms/HeaderOrganism.vue';

@Component({
  components: {
    HeaderOrganism,
  },
})
export default class App extends Vue {}
</script>
