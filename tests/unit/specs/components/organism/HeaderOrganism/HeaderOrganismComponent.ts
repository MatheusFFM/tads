import { createLocalVue, mount } from '@vue/test-utils';
import HeaderOrganism from '@/components/organisms/HeaderOrganism.vue';
import BaseComponent from '../../../BaseComponent';

const localVue = createLocalVue();

export default class HeaderOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(HeaderOrganism, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
