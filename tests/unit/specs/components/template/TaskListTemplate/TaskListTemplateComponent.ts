import { createLocalVue, mount } from '@vue/test-utils';
import TaskListTemplate from '@/components/templates/TaskListTemplate.vue';
import BaseComponent from '../../../BaseComponent';
import { propsWithTasks } from './TaskListTemplateData';

const localVue = createLocalVue();

export default class TaskListTemplateComponent extends BaseComponent {
  public mount(props = propsWithTasks): void {
    this.component = mount(TaskListTemplate, {
      localVue,
      vuetify: this.vuetify,
      propsData: {
        props,
      },
    });
  }
}
