import { createLocalVue, mount } from '@vue/test-utils';
import CalendarOrganism from '@/components/organisms/CalendarOrganism.vue';
import BaseComponent from '../../BaseComponent';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

export default class CalendarOrganismComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(CalendarOrganism, {
      localVue,
      router: new VueRouter(),
      vuetify: this.vuetify,
    });
  }
}
