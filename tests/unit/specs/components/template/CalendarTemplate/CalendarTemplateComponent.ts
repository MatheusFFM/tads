import { createLocalVue, mount } from '@vue/test-utils';
import CalendarTemplate from '@/components/templates/CalendarTemplate.vue';
import BaseComponent from '../../../BaseComponent';

const localVue = createLocalVue();

export default class CalendarTemplateComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(CalendarTemplate, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
