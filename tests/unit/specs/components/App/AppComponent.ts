import { createLocalVue, mount } from '@vue/test-utils';
import AppAtom from '@/App.vue';
import router from '@/router';
import BaseComponent from '../BaseComponent';

const localVue = createLocalVue();

export default class AppComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(AppAtom, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
