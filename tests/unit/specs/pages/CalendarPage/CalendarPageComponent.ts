import { createLocalVue, mount } from '@vue/test-utils';
import CalendarPage from '@/pages/CalendarPage.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class CalendarPageComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(CalendarPage, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
