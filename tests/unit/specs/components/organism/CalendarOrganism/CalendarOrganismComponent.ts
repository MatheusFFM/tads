import { createLocalVue, mount } from '@vue/test-utils';
import CalendarOrganism from '@/components/organisms/CalendarOrganism.vue';
import BaseComponent from '../../BaseComponent';
import { propsWithTasks } from './CalendarOrganismData.spec';

const localVue = createLocalVue();

export default class CalendarOrganismComponent extends BaseComponent {
  public mount(props = propsWithTasks): void {
    this.component = mount(CalendarOrganism, {
      localVue,
      propsData: {
        props,
      },
      vuetify: this.vuetify,
    });
  }
}
