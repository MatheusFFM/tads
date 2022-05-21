import { createLocalVue, mount } from '@vue/test-utils';
import TaskListPage from '@/pages/TaskListPage.vue';
import BaseComponent from '../../BaseComponent';
import Task from '@/models/class/Task';

const localVue = createLocalVue();

export default class TaskListPageComponent extends BaseComponent {
  public setLocalStorage(tasks: Task[]): void {
    window.localStorage.__proto__.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify(tasks));
  }

  public mount(): void {
    this.component = mount(TaskListPage, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
