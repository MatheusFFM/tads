<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
      class="menu"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12" sm="10" md="11">
            <v-text-field
              v-model="color"
              clear-icon="input"
              label="Color"
              append-icon="mdi-palette"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </v-col>
          <v-col
            cols="12"
            sm="2"
            md="1"
            class="pr-0 d-flex align-center justify-center"
          >
            <div
              class="color-block mb-2"
              :style="{ 'background-color': color }"
            />
          </v-col>
        </v-row>
      </template>
      <v-color-picker
        v-model="color"
        @input="changeColor"
        class="ma-2 color-picker"
        show-swatches
        mode="hexa"
      />
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class ColorPickerMolecule extends Vue {
  public menu = false;
  public color = '#000000';

  public changeColor(): void {
    if (typeof this.color !== 'string') {
      this.color = '#000000';
    }
    this.$emit('input', this.color);
    console.log('FOI');
  }
}
</script>

<style scoped>
.color-block {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>
