import { createLocalVue, Wrapper, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import H2Atom from '@/components/atoms/H2Atom.vue';

const localVue = createLocalVue();

export default class H2AtomComponent {
  public vuetify: Vuetify;
  public component!: Wrapper<H2Atom>;

  constructor() {
    this.vuetify = new Vuetify();
  }

  public mount(text = ''): void {
    this.component = mount(H2Atom, {
      localVue,
      slots: {
        default: text,
      },
      vuetify: this.vuetify,
    });
  }
}
