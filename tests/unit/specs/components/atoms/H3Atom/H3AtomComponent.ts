import { createLocalVue, mount } from '@vue/test-utils';
import H3Atom from '@/components/atoms/H3Atom.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class H3AtomComponent extends BaseComponent {
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
