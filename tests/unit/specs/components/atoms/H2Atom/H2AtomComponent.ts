import { createLocalVue, mount } from '@vue/test-utils';
import H2Atom from '@/components/atoms/H2Atom.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class H2AtomComponent extends BaseComponent {
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
