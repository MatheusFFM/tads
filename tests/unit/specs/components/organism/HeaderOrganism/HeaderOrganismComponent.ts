import { createLocalVue, mount } from '@vue/test-utils';
import HeaderOrganism from '@/components/Organisms/HeaderOrganism.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class HeaderOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(HeaderOrganism, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
