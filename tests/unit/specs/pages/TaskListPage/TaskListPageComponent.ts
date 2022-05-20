import { createLocalVue, mount } from '@vue/test-utils';
import TaskListPage from '@/pages/TaskListPage.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class TaskListPageComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskListPage, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
