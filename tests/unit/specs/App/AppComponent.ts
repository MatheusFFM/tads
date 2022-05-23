import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';
import App from '@/App.vue';
import BaseComponent from '../BaseComponent';

const localVue = createLocalVue();

export default class AppComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(App, {
      localVue,
      vuetify: this.vuetify,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  }
}
