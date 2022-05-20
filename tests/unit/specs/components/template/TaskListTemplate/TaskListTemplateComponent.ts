import { createLocalVue, mount } from '@vue/test-utils';
import TaskListTemplate from '@/components/templates/TaskListTemplate.vue';
import BaseComponent from '../../BaseComponent';

const localVue = createLocalVue();

export default class TaskListTemplateComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskListTemplate, {
      localVue,
      vuetify: this.vuetify,
    });
  }
}
