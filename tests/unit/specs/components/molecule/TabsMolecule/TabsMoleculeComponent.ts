import { createLocalVue, mount } from '@vue/test-utils';
import TabsMolecule from '@/components/molecules/TabsMolecule.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class TabsMoleculeComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TabsMolecule, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
