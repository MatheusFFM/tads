import { createLocalVue, mount } from '@vue/test-utils';
import CalendarOrganism from '@/components/organisms/CalendarOrganism.vue';
import BaseComponent from '../../BaseComponent';
import VueRouter from 'vue-router';
import { propsWithTasks } from './CalendarOrganismData.spec';

const localVue = createLocalVue();

export default class CalendarOrganismComponent extends BaseComponent {
  public mount(props = propsWithTasks): void {
    this.component = mount(CalendarOrganism, {
      localVue,
      propsData: {
        props,
      },
      router: new VueRouter(),
      vuetify: this.vuetify,
    });
  }
}
