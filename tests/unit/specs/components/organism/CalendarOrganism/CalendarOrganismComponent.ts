import { createLocalVue, mount } from '@vue/test-utils';
import CalendarOrganism from '@/components/Organisms/CalendarOrganism.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class CalendarOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(CalendarOrganism, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
