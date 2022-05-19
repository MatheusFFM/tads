import { createLocalVue, mount } from '@vue/test-utils';
import CalendarTemplate from '@/components/Templates/CalendarTemplate.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class CalendarTemplateComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(CalendarTemplate, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
