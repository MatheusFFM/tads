import { createLocalVue, mount } from '@vue/test-utils';
import CalendarPage from '@/pages/CalendarPage.vue';
import BaseComponent from '../../BaseComponent';
import Task from '@/models/class/Task';

const localVue = createLocalVue();

export default class CalendarPageComponent extends BaseComponent {
  public setLocalStorage(tasks: Task[]): void {
    window.localStorage.__proto__.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify(tasks));
  }

  public mount(): void {
    this.component = mount(CalendarPage, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
