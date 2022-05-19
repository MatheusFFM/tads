import { createLocalVue, mount } from '@vue/test-utils';
import TaskListTemplate from '@/components/Templates/TaskListTemplate.vue';
import BaseComponent from '../../BaseComponent';
import router from '@/router';

const localVue = createLocalVue();

export default class TaskListTemplateComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskListTemplate, {
      localVue,
      router,
      vuetify: this.vuetify,
    });
  }
}
