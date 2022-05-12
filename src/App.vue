<template>
  <v-app>
    <HeaderOrganism />
    <TabsMolecule class="mt-custom-32" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TabsMolecule from './components/molecules/TabsMolecule.vue';
import HeaderOrganism from './components/organisms/HeaderOrganism.vue';

@Component({
  components: {
    HeaderOrganism,
    TabsMolecule,
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.mt-custom-32 {
  margin-top: 128px;
}
</style>
