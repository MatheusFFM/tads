import { createLocalVue, mount } from '@vue/test-utils';
import CalendarTemplate from '@/components/templates/CalendarTemplate.vue';
import BaseComponent from '../../../BaseComponent';
import { propsWithTasks } from './CalendarTemplateData';

const localVue = createLocalVue();

export default class CalendarTemplateComponent extends BaseComponent {
  public mount(props = propsWithTasks): void {
    this.component = mount(CalendarTemplate, {
      localVue,
      vuetify: this.vuetify,
      propsData: {
        props,
      },
    });
  }
}
