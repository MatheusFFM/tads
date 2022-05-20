import { createLocalVue, mount } from '@vue/test-utils';
import TabsMolecule from '@/components/molecules/TabsMolecule.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class TabsMoleculeComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TabsMolecule, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
