import { createLocalVue, mount } from '@vue/test-utils';
import AppAtom from '@/App.vue';
import BaseComponent from '../BaseComponent';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

export default class AppComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(AppAtom, {
      localVue,
      router: new VueRouter(),
      vuetify: this.vuetify,
    });
  }
}
