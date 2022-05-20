import { createLocalVue, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';
import AppAtom from '@/App.vue';

const localVue = createLocalVue();

export default abstract class BaseComponent {
  public vuetify: Vuetify;
  public component!: Wrapper<AppAtom>;

  constructor() {
    this.vuetify = new Vuetify();
    this.addDataApp();
  }

  public addDataApp(): void {
    const app = document.createElement('div');
    app.setAttribute('data-app', 'true');
    document.body.appendChild(app);
  }
}
