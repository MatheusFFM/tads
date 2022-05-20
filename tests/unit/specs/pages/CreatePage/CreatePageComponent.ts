import { createLocalVue, mount } from '@vue/test-utils';
import CreatePage from '@/pages/CreatePage.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class CreatePageComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(CreatePage, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
