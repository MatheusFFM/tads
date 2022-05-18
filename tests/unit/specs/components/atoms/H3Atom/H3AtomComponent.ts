import { createLocalVue, Wrapper, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import H3Atom from '@/components/atoms/H3Atom.vue';

const localVue = createLocalVue();

export default class H3AtomComponent {
  public vuetify: Vuetify;
  public component!: Wrapper<H3Atom>;

  constructor() {
    this.vuetify = new Vuetify();
  }

  public mount(text = ''): void {
    this.component = mount(H3Atom, {
      localVue,
      slots: {
        default: text,
      },
      vuetify: this.vuetify,
    });
  }
}
