import { createLocalVue, mount } from '@vue/test-utils';
import TaskListTemplate from '@/components/templates/TaskListTemplate.vue';
import BaseComponent from '../../BaseComponent';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

export default class TaskListTemplateComponent extends BaseComponent {
  public mount(): void {
    this.component = mount(TaskListTemplate, {
      localVue,
      router: new VueRouter(),
      vuetify: this.vuetify,
    });
  }
}
