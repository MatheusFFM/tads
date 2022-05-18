import { createLocalVue, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';
import AppAtom from '@/App.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

export default abstract class BaseComponent {
  public vuetify: Vuetify;
  public component!: Wrapper<AppAtom>;

  constructor() {
    this.vuetify = new Vuetify();
    localVue.use(VueRouter);
  }
}
